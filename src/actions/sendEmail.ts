"use server"
import * as z from 'zod';
import nodemailer, { SentMessageInfo } from 'nodemailer';

// Define Zod schema for emailObject
const emailObjectSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    message: z.string()
});

export type emailObject = z.infer<typeof emailObjectSchema>;

export async function sendEmail(emailObject: emailObject) {
    try {
        // Validate emailObject against the schema using safeParse
        const validationResult = emailObjectSchema.safeParse(emailObject);

        if (!validationResult.success) {
            throw new Error(validationResult.error.message);
        }

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_SERVER_HOST,
            auth: {
                user: process.env.EMAIL_SERVER_USER,
                pass: process.env.EMAIL_SERVER_PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: 'nattechandtechnologies@gmail.com',
            subject: 'NAT Queries',
            text: `Name: ${emailObject.name}\nEmail: ${emailObject.email}\nPhone: ${emailObject.phone}\nMessage: ${emailObject.message}`
        };

        // Send the email
        const info: SentMessageInfo = await transporter.sendMail(mailOptions);
        return info;
    } catch (error) {
        console.error('Error sending email:', error);
        return error as Error;
    }
}
