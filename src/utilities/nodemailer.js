import { createTransport } from 'nodemailer';
import { findAdmin } from './helpers.js';


const adminEmail = await findAdmin()
const adminPassword = process.env.ADMIN_PASS

export const transporter = createTransport({
  service: 'gmail',
  port: 465,
  secure: true,
  logger: true,
  debug: true,
  auth: {
    user: adminEmail,
    pass: adminPassword,
  },
  tls : { rejectUnauthorized: false }
});
