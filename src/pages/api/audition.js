import nodemailer from 'nodemailer';
import { sanityClient } from "sanity:client"; // KEEP this for fetching from Sanity

// Query to fetch email mappings from Sanity
const emailMappingQuery = `*[_type == "emailAutomation"][0]{
  emailsMapped[] {
    country-> { name },
    email
  }
}`;

// Default email fallback
let countryEmailMap = {
    'usa': 'ussc@wcopa.com',
};

async function fetchEmailMappings() {
    try {
        const emailData = await sanityClient.fetch(emailMappingQuery);

        if (emailData?.emailsMapped?.length > 0) {
            const sanityEmailMap = {};

            emailData.emailsMapped.forEach(mapping => {
                if (mapping.country?.name && mapping.email) {
                    sanityEmailMap[mapping.country.name] = mapping.email;
                }
            });

            countryEmailMap = { ...countryEmailMap, ...sanityEmailMap };
            console.log('Email mappings loaded from Sanity:', Object.keys(sanityEmailMap).length);
        } else {
            console.log('No email mappings found in Sanity, using defaults');
        }

        return countryEmailMap;
    } catch (error) {
        console.error('Error fetching email mappings from Sanity:', error);
        return countryEmailMap;
    }
}

export async function POST({ request }) {
    try {
        countryEmailMap = await fetchEmailMappings();

        const data = await request.formData();

        const fullName = data.get('Full Name');
        const dob = data.get('Date of Birth');
        const gender = data.get('Gender');
        const residence = data.get('Residence');
        const country = data.get('Country');
        const state = data.get('State');
        const address = data.get('Address');
        const phone = data.get('Phone');
        const email = data.get('Email');

        const talentCategory = data.get('Talent Category');
        const performanceTitle = data.get('Performance Title');
        const videoLink = data.get('Video Link');
        const talentDescription = data.get('Talent Description');

        const previousParticipation = data.get('Previous Participation');
        const assistanceNeeded = data.get('Assistance Needed');
        const nationalDirector = data.get('National Director');

        const guardianName = data.get('Guardian Name');
        const guardianEmail = data.get('Guardian Email');
        const guardianPhone = data.get('Guardian Phone');
        const termsAgreement = data.get('Terms Agreement');
        const parentConsent = data.get('Parent Consent');

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'live.smtp.mailtrap.io',
            port: Number(process.env.SMTP_PORT) || 587,
            secure: Number(process.env.SMTP_PORT) === 465, // Only true for port 465
            auth: {
                user: process.env.SMTP_USER || 'api',
                pass: process.env.SMTP_PASS,
            },
        });

        let guardianInfo = '';
        if (guardianName) {
            guardianInfo = `
        <h3>Guardian Information:</h3>
        <p><strong>Guardian Name:</strong> ${guardianName}</p>
        <p><strong>Guardian Email:</strong> ${guardianEmail}</p>
        <p><strong>Guardian Phone:</strong> ${guardianPhone}</p>
        <p><strong>Parent Consent:</strong> ${parentConsent ? 'Yes' : 'No'}</p>
      `;
        }

        let recipients = 'info@wcopa.com, nenad@thecreativelabs.io';
        const additionalRecipients = [];

        if (residence === 'usa') {
            if (countryEmailMap['usa']) {
                additionalRecipients.push(countryEmailMap['usa']);
            }
        } else if (residence === 'international' && country) {
            if (countryEmailMap[country.trim()]) {
                additionalRecipients.push(countryEmailMap[country.trim()]);
            }
        }

        if (additionalRecipients.length > 0) {
            recipients += ', ' + additionalRecipients.join(', ');
            console.log('Added location-specific recipients:', additionalRecipients);
        }

        const mailOptions = {
            from: process.env.EMAIL_FROM || 'wcopa@portal.wcopa.com',
            to: recipients,
            replyTo: email,
            subject: 'New Audition Form Submission',
            text: `
        New Audition Submission
        
        Personal Information:
        Name: ${fullName}
        Date of Birth: ${dob}
        Gender: ${gender}
        Resides in/Citizenship: ${residence}
        Country: ${country}
        State: ${state}
        Address: ${address}
        Phone: ${phone}
        Email: ${email}
        
        Talent Information:
        Category: ${talentCategory}
        Performance Title: ${performanceTitle || 'N/A'}
        Video Link: ${videoLink || 'N/A'}
        Description: ${talentDescription || 'N/A'}
        
        Additional Information:
        Previous Participation: ${previousParticipation}
        Assistance Needed: ${assistanceNeeded || 'N/A'}
        National Director: ${nationalDirector || 'N/A'}
        
        ${guardianName ? `Guardian Information:
        Guardian Name: ${guardianName}
        Guardian Email: ${guardianEmail}
        Guardian Phone: ${guardianPhone}
        Parent Consent: ${parentConsent ? 'Yes' : 'No'}` : ''}
        
        Terms Agreement: ${termsAgreement ? 'Yes' : 'No'}
      `,
            html: `
        <h2>New Audition Submission</h2>

        <h3>Personal Information:</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Resides in/Citizenship:</strong> ${residence || 'N/A'}</p>
        <p><strong>Country:</strong> ${country || 'N/A'}</p>
        <p><strong>State:</strong> ${state || 'N/A'}</p>
        <p><strong>Address:</strong> ${address || 'N/A'}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>

        <h3>Talent Information:</h3>
        <p><strong>Category:</strong> ${talentCategory}</p>
        <p><strong>Performance Title:</strong> ${performanceTitle || 'N/A'}</p>
        <p><strong>Video Link:</strong> ${videoLink ? `<a href="${videoLink}" target="_blank">${videoLink}</a>` : 'N/A'}</p>
        <p><strong>Description:</strong> ${talentDescription || 'N/A'}</p>

        <h3>Additional Information:</h3>
        <p><strong>Previous Participation:</strong> ${previousParticipation}</p>
        <p><strong>Assistance Needed:</strong> ${assistanceNeeded || 'N/A'}</p>
        <p><strong>National Director:</strong> ${nationalDirector || 'N/A'}</p>

        ${guardianInfo}

        <p><strong>Terms Agreement:</strong> ${termsAgreement ? 'Yes' : 'No'}</p>
      `
        };

        await transporter.sendMail(mailOptions);

        console.log('Audition submission email sent successfully, returning response');

        return new Response(null, {
            status: 303,
            headers: {
                'Location': '/thank-you'
            }
        });

    } catch (error) {
        console.error('Error sending audition submission email:', error);

        return new Response(JSON.stringify({
            success: false,
            message: 'Failed to submit audition form',
            alert: 'Failed to submit audition form'
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
