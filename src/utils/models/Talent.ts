import mongoose, { Schema, models } from "mongoose";

const TalentSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    jobTitle: { type: String },
    bio: { type: String },
    createdAt: { Date },
  },
  { timestamps: true }
);

const Talent = models.Talent || mongoose.model("Talent", TalentSchema);
export default Talent;
