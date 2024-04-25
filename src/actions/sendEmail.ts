"use server"
import nodemailer from 'nodemailer';
export type emailObject = {
    name: string,
    email: string,
    phone: string,
    message: string
}

export async function sendEmail(emailObject: emailObject) {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD
        }
    });
    console.log(emailObject)
    // Define the email options
    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: 'rambpandey238@gmail.com',
        subject: 'NAT Queries',
        text: `Name: ${emailObject.name}\nEmail: ${emailObject.email}\nPhone: ${emailObject.phone}\nMessage: ${emailObject.message}`
    };

    try {
        // Send the email
        const info = await transporter.sendMail(mailOptions);
        return info
    } catch (error) {
        console.error('Error sending email:', error);
        return error as Error
    }
}