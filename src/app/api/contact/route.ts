import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple in-memory rate limiter
type RateLimitEntry = { count: number; lastRequest: number };
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3;
const rateLimitMap = new Map<string, RateLimitEntry>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry) {
    rateLimitMap.set(ip, { count: 1, lastRequest: now });
    return false;
  }

  if (now - entry.lastRequest > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, lastRequest: now });
    return false;
  }

  entry.count++;
  entry.lastRequest = now;
  rateLimitMap.set(ip, entry);
  return entry.count > MAX_REQUESTS;
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
    if (rateLimit(ip)) {
      return NextResponse.json(
        { message: "Too many requests. Please wait a minute and try again." },
        { status: 429 }
      );
    }

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // Setup mail transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Beautiful HTML email template
    const htmlTemplate = `
      <div style="background-color:#f7f7f7;padding:40px 0;">
        <div style="max-width:600px;margin:0 auto;background:white;border-radius:12px;overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,0.08);font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
          <div style="background-color:#00C896;color:white;text-align:center;padding:20px;">
            <h1 style="margin:0;font-size:22px;">📩 New Contact Message</h1>
            <p style="margin:4px 0;font-size:14px;">from <strong>${name}</strong></p>
          </div>

          <div style="padding:24px;">
            <p style="font-size:15px;color:#333;margin-bottom:12px;">You’ve received a new message through the <strong>Remotenest</strong> contact form:</p>
            
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:8px 0;font-weight:600;color:#555;width:80px;">Name:</td>
                <td style="padding:8px 0;color:#333;">${name}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-weight:600;color:#555;">Email:</td>
                <td style="padding:8px 0;color:#333;">${email}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-weight:600;color:#555;vertical-align:top;">Message:</td>
                <td style="padding:8px 0;color:#333;white-space:pre-line;">${message}</td>
              </tr>
            </table>

            <hr style="margin:24px 0;border:none;border-top:1px solid #eee;" />

            <p style="font-size:13px;color:#777;text-align:center;">
              This message was sent from the <strong>Remotenest Contact Form</strong>.<br/>
            </p>
          </div>
        </div>
      </div>
    `;

    // Mail configuration
    const mailOptions = {
      from: `"Remotenest Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Message from ${name}`,
      html: htmlTemplate,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Message sent successfully 🚀" });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json(
      { message: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
