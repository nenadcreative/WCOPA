import nodemailer from 'nodemailer';
import { loadEnv } from 'vite';

// Load environment variables
const env = loadEnv(import.meta.env.MODE, process.cwd(), '');

// // Country to email mapping
// const countryEmailMap = {
//     // Add country-specific email addresses here
//     'USA': 'usa.representative@wcopa.com',
//     'Canada': 'canada.representative@wcopa.com',
//     'UK': 'uk.representative@wcopa.com',
//     'Australia': 'australia.representative@wcopa.com',
//     // Add more countries as needed
// };

// // State to email mapping for USA
// const stateEmailMap = {
//     'Florida': 'nesho991@gmail.com',
//     'New York': 'newyork.representative@wcopa.com',
//     'Texas': 'texas.representative@wcopa.com',
//     // Add more states as needed
// };

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

        // Get default recipients
        let recipients = env.EMAIL_TO || 'info@wcopa.com, hello@vrtuedigital.com';

        // // Add location-specific recipients based on country or state
        // const additionalRecipients = [];

        // if (location === 'usa' && state) {
        //     // Check if we have a specific email for this state
        //     if (stateEmailMap[state.trim()]) {
        //         additionalRecipients.push(stateEmailMap[state.trim()]);
        //     }

        //     // Also add the general USA email if it exists
        //     if (countryEmailMap['USA'] && !additionalRecipients.includes(countryEmailMap['USA'])) {
        //         additionalRecipients.push(countryEmailMap['USA']);
        //     }
        // } else if (location === 'international' && country) {
        //     // Check if we have a specific email for this country
        //     if (countryEmailMap[country.trim()]) {
        //         additionalRecipients.push(countryEmailMap[country.trim()]);
        //     }
        // }

        // // Add additional recipients to the list if any were found
        // if (additionalRecipients.length > 0) {
        //     recipients += ', ' + additionalRecipients.join(', ');
        //     console.log('Added location-specific recipients:', additionalRecipients);
        // }

        // Email options
        const mailOptions = {
            from: import.meta.env.EMAIL_FROM || 'wcopa@portal.wcopa.com',
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