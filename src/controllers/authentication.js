import nodemailer from 'nodemailer';

import {createUser,UserModel}  from '../db/users.js';

export const Sendotp = async (req, res) => {
  try {
    const { email } = req.body;

    const existingCandidate = await UserModel.findOne({ email });

    if (existingCandidate) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiration = new Date(Date.now() + 600000); 

    const user = await createUser({
      email,
      otp,
      otpExpiration
    });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user:process.env.EMAIL_ADDRESS,
        pass:process.env.EMAIL_PASSWORD
      }
    });

    const mailOptions = {
      from:process.env.EMAIL_ADDRESS,
      to: email,
      subject: 'Your OTP for Candidate Registration',
      text: `Your OTP is ${otp}`
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const Verifyotp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const candidate = await UserModel.findOne({ email });

    if (!candidate) {
      return res.status(404).json({ error: 'Candidate not found' });
    }

    if (candidate.otp !== otp || candidate.otpExpiration < new Date()) {
      return res.status(400).json({ error: 'Invalid OTP or OTP expired' });
    }
    res.status(200).json({ message: 'OTP verified successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}
