import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/utils/config/dbConfig";
import Talent from "@/utils/models/Talent";
import nodemailer from "nodemailer";
import rateLimiter from "@/utils/rateLmiter";

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";

    // 🧱 Rate limit check
    try {
      await rateLimiter.consume(ip); // Consume 1 point per request
    } catch {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    await connect();
    const body = await req.json();
    const { fullName, email, phone, jobTitle, bio } = body as {
      fullName: string;
      email: string;
      phone: string;
      jobTitle: string;
      bio?: string;
    };

    // Validate required fields
    if (!fullName || !email || !phone || !jobTitle) {
      return NextResponse.json(
        { error: "All required fields must be filled." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    // Check for existing email
    const existingTalent = await Talent.findOne({ email });
    if (existingTalent) {
      return NextResponse.json(
        { error: "A talent with this email already exists." },
        { status: 400 }
      );
    }

    // Create new talent record
    const newTalent = await Talent.create({
      fullName,
      email,
      phone,
      jobTitle,
      bio,
    });

    // Create mail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 🎨 Modern HTML Email Template
    const mailOptions = {
      from: `"Remotenest" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `🎉 Welcome to Remotenest, ${fullName.split(" ")[0]}!`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #f9fafb; padding: 30px;">
          <div style="max-width: 600px; margin: auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 25px rgba(0,0,0,0.08);">
            <div style="background: linear-gradient(90deg, #00C896, #00a67d); color: white; padding: 24px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px;">Welcome to Remotenest 💚</h1>
              <p style="margin: 4px 0 0; font-size: 15px;">Your global remote career journey starts here!</p>
            </div>
            <div style="padding: 30px;">
              <h2 style="color: #111; font-size: 20px; margin-bottom: 10px;">Hi ${fullName},</h2>
              <p style="font-size: 15px; color: #444; line-height: 1.6;">
                We're thrilled to have you onboard as a <strong>${jobTitle}</strong> in our global network of talents. 
                You’re now part of a vibrant community that connects professionals like you with remote teams worldwide. 🌍
              </p>
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 25px 0;" />
              <p style="font-size: 15px; color: #444;">Stay connected with us:</p>
              <div style="display: flex; gap: 12px; margin-top: 10px;">
                <a href="https://www.facebook.com/profile.php?id=61582512719588&mibextid=ZbWKwL" target="_blank">
                  <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" width="28" alt="Facebook" />
                </a>
                <a href="https://x.com/remote_nest" target="_blank">
                  <img src="https://cdn-icons-png.flaticon.com/512/145/145812.png" width="28" alt="Twitter" />
                </a>
                <a href="https://www.instagram.com/global.remotenest?igsh=MXNxa3ZtMXBvY2NjZw==" target="_blank">
                  <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="28" alt="Instagram" />
                </a>
              </div>
              <p style="margin-top: 24px; font-size: 13px; color: #6b7280;">
                — The Remotenest Team 💼<br/>
              </p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        message: "Signup successful. Welcome email sent!",
        success: true,
        talent: {
          _id: newTalent._id,
          fullName: newTalent.fullName,
          email: newTalent.email,
          jobTitle: newTalent.jobTitle,
        },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Talent signup error:", error.message);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }
    console.error("Unknown error during signup:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
