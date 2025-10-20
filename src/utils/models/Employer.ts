import mongoose, { Schema, Document } from "mongoose";

export interface IEmployer extends Document {
  companyName: string;
  email: string;
  password?: string;
  phone?: string;
  companySize?: string;
  website?: string;
  provider?: string; // 'google' or 'manual'
  createdAt: Date;
}

const employerSchema = new Schema<IEmployer>(
  {
    companyName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    phone: { type: String },
    companySize: { type: String },
    website: { type: String },
    provider: { type: String, default: "manual" },
  },
  { timestamps: true }
);

const Employer =
  mongoose.models.Employer || mongoose.model<IEmployer>("Employer", employerSchema);

export default Employer;
