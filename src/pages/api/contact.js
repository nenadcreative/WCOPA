import nodemailer from 'nodemailer';

export async function POST({ request }) {
    try {
        const data = await request.formData();

        const name = data.get('Full Name');
        const email = data.get('Email');
        const location = data.get('location');
        const inquiryType = data.get('Inquiry Type');
        const message = data.get('message');
        const state = data.get('State');
        const country = data.get('Country');

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'live.smtp.mailtrap.io',
            port: Number(process.env.SMTP_PORT) || 587,
            secure: Number(process.env.SMTP_PORT) === 465, // Use secure connection if port is 465
            auth: {
                user: process.env.SMTP_USER || 'api',
                pass: process.env.SMTP_PASS,
            },
        });

        let locationInfo = '';
        if (location === 'usa') {
            locationInfo = `State: ${state}`;
        } else if (location === 'international') {
            locationInfo = `Country: ${country}`;
        }

        const recipients = process.env.EMAIL_TO || 'info@wcopa.com';

        const mailOptions = {
            from: process.env.EMAIL_FROM || 'wcopa@portal.wcopa.com',
            to: recipients,
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

        await transporter.sendMail(mailOptions);

        console.log('Email sent successfully, returning response');

        return new Response(null, {
            status: 303,
            headers: {
                'Location': '/thank-you'
            }
        });

    } catch (error) {
        console.error('Error sending email:', error);

        return new Response(JSON.stringify({
            success: false,
            message: 'Failed to send email',
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
