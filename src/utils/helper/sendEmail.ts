import nodemailer from "nodemailer";

export async function sendWelcomeEmail(to: string, fullName: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Remotenest" <${process.env.EMAIL_USER}>`,
    to,
    subject: `🎉 Welcome to Remotenest, ${fullName}!`,
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #f5f9f7; padding: 40px; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          
          <!-- Header -->
          <div style="background-color: #00C896; color: white; text-align: center; padding: 30px 20px;">
            <h1 style="margin: 0; font-size: 26px;">Welcome to Remotenest 💚</h1>
            <p style="margin: 8px 0 0; font-size: 15px;">Your journey to global opportunities starts here</p>
          </div>

          <!-- Body -->
          <div style="padding: 30px;">
            <h2 style="color: #00C896; margin-bottom: 12px;">Hi ${fullName},</h2>
            <p style="margin-bottom: 16px;">
              We’re thrilled to have you on board! 🌍 Remotenest connects talented individuals like you with remote teams and employers across the globe.
            </p>

          <!-- Divider -->
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 0;" />

          <!-- Footer -->
          <div style="padding: 25px; text-align: center; background-color: #f9fafb;">
            <p style="margin: 0 0 12px; color: #555;">Stay connected with us:</p>
            <div style="display: flex; justify-content: center; gap: 15px; margin-bottom: 15px;">
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

            <p style="font-size: 13px; color: #777; margin-top: 10px;">
              — The Remotenest Team 💼 <br/>
            </p>
          </div>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
}
