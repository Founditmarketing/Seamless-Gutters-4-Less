import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, phone, address, service, message, email } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: "Name and phone are required." });
  }

  try {
    await resend.emails.send({
      from: "Seamless Gutters 4 Less <no-reply@seamlessgutters4less.com>",
      to: ["info@seamlessgutters4less.com"],
      replyTo: email || undefined,
      subject: `New Estimate Request from ${name}`,
      html: `
        <h2>New Estimate Request</h2>
        <table style="width:100%;border-collapse:collapse;font-family:sans-serif;font-size:15px;">
          <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${name}</td></tr>
          <tr style="background:#f8f8f8;"><td style="padding:8px;font-weight:bold;">Phone</td><td style="padding:8px;">${phone}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;">${email || "Not provided"}</td></tr>
          <tr style="background:#f8f8f8;"><td style="padding:8px;font-weight:bold;">Service Address</td><td style="padding:8px;">${address || "Not provided"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Service Needed</td><td style="padding:8px;">${service || "Not specified"}</td></tr>
          <tr style="background:#f8f8f8;"><td style="padding:8px;font-weight:bold;">Message</td><td style="padding:8px;">${message || "None"}</td></tr>
        </table>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ error: "Failed to send email. Please try again." });
  }
}
