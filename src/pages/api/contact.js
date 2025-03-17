import nodemailer from 'nodemailer';

export async function POST({ request }) {
    try {
        const data = await request.formData();

        // Extract form data
        const name = data.get('Full Name');
        const email = data.get('Email');
        const location = data.get('location');
        const message = data.get('message');

        // Additional fields based on location selection
        const state = data.get('State');
        const country = data.get('Country');

        // Create a transporter using Mailtrap credentials
        const transporter = nodemailer.createTransport({
            host: "live.smtp.mailtrap.io",
            port: 587,
            auth: {
                user: "api",
                pass: "01365fdd022b9a296d8b9367470dc3a3"
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
            from: 'mailtrap@demomailtrap.com',
            to: 'nenadvrtue@gmail.com',
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
        <h3>Message:</h3>
        <p>${message}</p>
      `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({
            success: true,
            message: 'Email sent successfully!'
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });

    } catch (error) {
        console.error('Error sending email:', error);

        return new Response(JSON.stringify({
            success: false,
            message: 'Failed to send email'
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}