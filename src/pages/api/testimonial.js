import nodemailer from 'nodemailer';

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';



export async function POST({ request }) {
    try {
        console.log('Testimonial submission received');
        const data = await request.formData();

        // Log all form data keys
        console.log('Form data keys:', [...data.keys()]);

        // Extract form data
        const name = data.get('Full Name');
        const email = data.get('Email');
        const phoneNumber = data.get('Phone Number');
        const testimonialType = data.get('Testimonial Type');
        const testimonial = data.get('testimonial');
        const file = data.get('fileUpload');

        console.log('Form data received:', {
            name,
            email,
            phoneNumber,
            testimonialType,
            testimonial,
            file: file ? {
                name: file.name,
                type: file.type,
                size: file.size,
                constructor: file.constructor.name
            } : 'No file'
        });

        // Create a transporter using SMTP credentials
        var transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'live.smtp.mailtrap.io',
            port: process.env.SMTP_PORT || 587,
            secure: false, // upgrade later with STARTTLS
            auth: {
                user: process.env.SMTP_USER || 'api',
                pass: process.env.SMTP_PASS
            }
        });

        // Prepare email content
        let attachments = [];

        // Handle file upload if a file was provided
        if (file) {
            try {
                console.log('Processing file attachment:', file.name);

                if (typeof file.arrayBuffer !== 'function') {
                    console.error('File object does not have arrayBuffer method:', file);
                    // Try alternative approach
                    if (file instanceof Blob) {
                        const reader = new FileReader();
                        const fileBuffer = await new Promise((resolve) => {
                            reader.onload = () => resolve(reader.result);
                            reader.readAsArrayBuffer(file);
                        });

                        attachments.push({
                            filename: file.name || 'attachment',
                            content: Buffer.from(fileBuffer),
                            contentType: file.type || 'application/octet-stream'
                        });
                    } else {
                        console.error('File is not a Blob, cannot process:', file);
                    }
                } else {
                    const fileBuffer = await file.arrayBuffer();

                    attachments.push({
                        filename: file.name || 'attachment',
                        content: Buffer.from(fileBuffer),
                        contentType: file.type || 'application/octet-stream'
                    });
                }

                console.log('File attachment processed successfully:', attachments[0].filename);
            } catch (fileError) {
                console.error('Error processing file attachment:', fileError);
            }
        } else {
            console.log('No file was provided in the form data');
        }

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_FROM || 'wcopa@portal.wcopa.com',
            to: process.env.EMAIL_TO || 'info@wcopa.com',
            replyTo: email,
            subject: 'New Testimonial Submission',
            text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phoneNumber}
        Testimonial Type: ${testimonialType}
        Testimonial: ${testimonial}
      `,
            html: `
        <h2>New Testimonial Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Testimonial Type:</strong> ${testimonialType}</p>
        <p><strong>Testimonial:</strong> ${testimonial}</p>
        ${attachments.length > 0 ? '<p><strong>Attachment:</strong> File attached</p>' : '<p><strong>Attachment:</strong> No file attached</p>'}
      `,
            attachments: attachments
        };

        console.log('Sending email with options:', {
            to: mailOptions.to,
            subject: mailOptions.subject,
            attachmentsCount: mailOptions.attachments.length,
            attachmentNames: mailOptions.attachments.map(a => a.filename)
        });

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.messageId);

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
            message: 'Failed to send testimonial',
            alert: 'Failed to send testimonial',
            error: error.message
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}