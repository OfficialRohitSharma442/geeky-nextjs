import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  try {
    // 1️⃣ Load Markdown template from file
    const templatePath = path.join(process.cwd(), 'templates', 'contact-email.md');
    let template = fs.readFileSync(templatePath, 'utf-8');

    // 2️⃣ Replace variables
    const emailContent = template
      .replace(/{{name}}/g, name)
      .replace(/{{email}}/g, email)
      .replace(/{{phone}}/g, phone || 'No phone provided')
      .replace(/{{message}}/g, message)
      .replace(/{{date}}/g, new Date().toLocaleString());

    // 3️⃣ Nodemailer config
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 4️⃣ Send the email
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_FROM}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `New Contact Message from ${name}`,
      text: emailContent,      // Raw markdown version
      html: emailContent.replace(/\n/g, "<br>"), // Simple HTML conversion
    });

    return res.status(200).json({ message: 'Email sent!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Email failed to send' });
  }
}
