import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config(); // Loaded env variables

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('API Server is running successfully!');
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  try {
    // If credentials are not set, fallback to console log for testing
    if (!process.env.EMAIL_PASS || process.env.EMAIL_PASS === 'your_gmail_app_password_here') {
      console.log('--- Development Mode: Email Not Configured ---');
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Message: ${message}`);
      console.log('----------------------------------------------');
      return res.status(200).json({ success: true, message: 'Message received (Dev Mode).' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailToOwner = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sends the email to yourself
      subject: `New Portfolio Contact from ${name}`,
      text: `You have received a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email
    };

    const mailToSender = {
      from: process.env.EMAIL_USER,
      to: email, // Auto-reply to the person who filled the form
      subject: `Thank you for your interest!`,
      text: `Hi ${name},\n\nThank you for reaching out and showing interest in my profile! I have received your message and will get back to you as soon as possible.\n\nHere is a copy of your message:\n"${message}"\n\nBest regards,\nLe Hoang Anh\nBackend Developer`
    };

    await transporter.sendMail(mailToOwner);
    
    // Try to send the auto-reply, but don't fail the whole request if the user's email is invalid or has a typo
    try {
      await transporter.sendMail(mailToSender);
    } catch (senderError) {
      console.warn('Warning: Failed to send auto-reply to sender:', senderError.message);
    }
    
    console.log(`Email successfully sent from ${name} (${email})`);
    return res.status(200).json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Error sending email to owner:', error);
    return res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
