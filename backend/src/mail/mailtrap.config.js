import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

export const mailtrapClient = new MailtrapClient({
  endpoint: process.env.MAILTRAP_ENDPOINT,
  token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Demo Mailtrap",
};

export const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

console.log("USER:", process.env.MAILTRAP_USER);
console.log("PASS:", process.env.MAILTRAP_PASS);
