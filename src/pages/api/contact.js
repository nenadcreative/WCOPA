import nodemailer from 'nodemailer';
import { loadEnv } from 'vite';

// Load environment variables
const env = loadEnv(import.meta.env.MODE, process.cwd(), '');

export async function POST({ request }) {
    try {
        const data = await request.formData();

        // Extract form data
        const name = data.get('Full Name');
        const email = data.get('Email');
        const location = data.get('location');
        const inquiryType = data.get('Inquiry Type');
        const message = data.get('message');

        // Additional fields based on location selection
        const state = data.get('State');
        const country = data.get('Country');

        // Create a transporter using Mailtrap credentials
        var transporter = nodemailer.createTransport({
            host: import.meta.env.SMTP_HOST || 'live.smtp.mailtrap.io',
            port: import.meta.env.SMTP_PORT || 587,
            secure: false, // upgrade later with STARTTLS
            auth: {
                user: import.meta.env.SMTP_USER || 'api',
                pass: import.meta.env.SMTP_PASS
            }
        });

        // Prepare email content
        let locationInfo = '';
        if (location === 'usa') {
            locationInfo = `State: ${state}`;
        } else if (location === 'international') {
            locationInfo = `Country: ${country}`;
        }

        // Email options
        const mailOptions = {
            from: import.meta.env.EMAIL_FROM || 'wcopa@portal.wcopa.com',
            to: import.meta.env.EMAIL_TO || 'nenadvrtue@gmail.com, hello@vrtuedigital.com, nenad@thecreativelabs.io',
            replyTo: email,
            subject: 'New Contact Form Submission',
            text: `
        Name: ${name}
        Email: ${email}
        ${locationInfo}
        
        Message:
        ${message}
      `,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>${locationInfo}</strong></p>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <h3>Message:</h3>
        <p>${message}</p>
      `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        console.log('Email sent successfully, returning response');

        return new Response(null, {
            status: 303, // See Other - best status code for POST-redirect-GET pattern
            headers: {
                'Location': '/thank-you'
            }
        });

    } catch (error) {
        console.error('Error sending email:', error);

        return new Response(JSON.stringify({
            success: false,
            message: 'Failed to send email',
            alert: 'Failed to send email'
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}