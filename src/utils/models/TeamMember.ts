import mongoose, { Schema, models } from "mongoose";

const teamSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    portfolio: { type: String, required: true },
    message: { type: String, required: true },
    cvUrl: { type: String, required: true },
  },
  { timestamps: true }
);

const Team = models.Team || mongoose.model("Team", teamSchema);
export default Team;
