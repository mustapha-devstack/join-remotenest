import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import { connect } from "@/utils/config/dbConfig";
import Employer from "@/utils/models/Employer";

export async function POST(req: NextRequest) {
  try {
    await connect();
    const body = await req.json();

    const {
      companyName,
      email,
      password,
      phone,
      companySize,
      website,
      message,
    } = body;

    // --- Validate inputs ---
    if (!companyName || !email || !password || !companySize) {
      return NextResponse.json(
        { error: "All required fields must be filled." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    // --- Check if employer already exists ---
    const existingEmployer = await Employer.findOne({ email });
    if (existingEmployer) {
      return NextResponse.json(
        { error: "An employer with this email already exists." },
        { status: 400 }
      );
    }

    // --- Hash password ---
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // --- Create new employer ---
    const newEmployer = await Employer.create({
      companyName,
      email,
      password: hashedPassword,
      phone,
      companySize,
      website,
      message,
    });

    // --- Send welcome email ---
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Gmail address
        pass: process.env.EMAIL_PASS, // App password
      },
    });

    const mailOptions = {
      from: `"Remotenest" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `🎉 Welcome to Remotenest, ${companyName}!`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #F9FAFB; padding: 40px;">
          <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); overflow: hidden;">
            
            <!-- Header -->
            <div style="background: linear-gradient(90deg, #00C896, #00a67d); color: white; padding: 24px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px;">Welcome to Remotenest 💚</h1>
              <p style="margin: 4px 0 0; font-size: 15px;">Your global remote career journey starts here!</p>
            </div>

            <!-- Body -->
            <div style="padding: 30px;">
              <p style="font-size: 16px; color: #333;">Hi <strong>${companyName}</strong>,</p>
              <p style="font-size: 15px; color: #555;">
                We’re thrilled to have you onboard 🎉. You’ve taken the first step towards discovering the best remote talents and expanding your team globally.
              </p>

              <p style="font-size: 14px; color: #666;">
                If you ever need help or have questions, our support team is just one message away.
              </p>

              <hr style="border: none; border-top: 1px solid #eee; margin: 25px 0;" />

              <!-- Social Links -->
              <p style="font-size: 14px; color: #555;">Stay connected with us:</p>
              <div style="text-align: center; margin-top: 10px;">
                <a href="https://x.com/remote_nest" style="margin: 0 8px;">
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width="28" alt="Twitter" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61582512719588&mibextid=ZbWKwL" style="margin: 0 8px;">
                  <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" width="28" alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/global.remotenest?igsh=MXNxa3ZtMXBvY2NjZw==" style="margin: 0 8px;">
                  <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="28" alt="Instagram" />
                </a>
              </div>

              <p style="font-size: 12px; color: #999; text-align: center; margin-top: 30px;">
                © ${new Date().getFullYear()} Remotenest. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    // --- Respond to client ---
    return NextResponse.json(
      {
        message: "Signup successful and welcome email sent!",
        success: true,
        employer: {
          _id: newEmployer._id,
          companyName: newEmployer.companyName,
          email: newEmployer.email,
        },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    // ✅ Type-safe error handling
    if (error instanceof Error) {
      console.error("Employer signup error:", error.message);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    console.error("Unknown error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
