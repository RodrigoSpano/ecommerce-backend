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
  ignoreTLS: true,
  auth: {
    user: adminEmail,
    pass: adminPassword,
  },
});

// export const sendEmail = async (data) => {
//   try {
//     const mailOptions = {
//       from: 'library server',
//       to: findAdmin(),
//       subject: `${data.subject}`,
//       html: `<h2>${data.html}</h2> <p>${data.email} ${data.fullName}<p>`
//     }
//     await transporter.sendMail(mailOptions)
//   } catch (error) {
//     console.log(error)
//   }
// } 

// transporter.verify().then(() => {
//   console.log('ready for send emails')
// })