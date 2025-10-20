import { NextResponse } from "next/server";
import { connect } from "@/utils/config/dbConfig";
import TeamMember from "@/utils/models/TeamMember";
import cloudinary from "@/utils/config/Cloudinary";
import { sendWelcomeEmail } from "@/utils/helper/sendEmail";
import { UploadApiResponse, UploadApiErrorResponse } from "cloudinary";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    await connect();

    const formData = await req.formData();
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const portfolio = formData.get("portfolio") as string;
    const message = formData.get("message") as string;
    const cv = formData.get("cv") as File;

    if (!fullName || !email || !phone || !portfolio || !message || !cv) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Check for duplicate email
    const existing = await TeamMember.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { error: "Email already exists." },
        { status: 400 }
      );
    }

    // Upload CV to Cloudinary (fully typed)
    const arrayBuffer = await cv.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadRes = await new Promise<UploadApiResponse>((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "remotenest/team_cvs", resource_type: "auto" },
        (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
          if (error) return reject(error);
          if (!result) return reject(new Error("Cloudinary upload failed — no result returned"));
          resolve(result);
        }
      );
      stream.end(buffer);
    });

    const cvUrl = uploadRes.secure_url;

    // Save to MongoDB
    const newTeam = await TeamMember.create({
      fullName,
      email,
      phone,
      portfolio,
      message,
      cvUrl,
    });

    // Send welcome email
    await sendWelcomeEmail(email, fullName);

    return NextResponse.json(
      { message: "Signup successful", newTeam },
      { status: 201 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error in team signup:", error.message);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    console.error("Unknown error in team signup:", error);
    return NextResponse.json(
      { error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
