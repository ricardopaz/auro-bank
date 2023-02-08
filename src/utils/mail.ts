import nodemailer from 'nodemailer';
import { messages } from './messages';

export const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD
  },
});

interface SendEmail {
  to: string[]
  text?: string
  html?: string
  subject: string
}

export const sendEmail = async ({to, subject, text, html}: SendEmail) => {
  try {
    return await transporter.sendMail({
      text,
      html,
      subject,
      to: to.join(', '),
      from: '"AuroBank - Tecnologia" <ricardopaz@aurobank.com.br>',
    });
  } catch (error) {
    console.log(error)
    throw new Error(messages.ERROR_SEND_EMAIL);
  }
}