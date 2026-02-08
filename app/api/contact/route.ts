import { NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function POST(request: Request) {
    try {
        const body = await request.json()

        // Validate request body
        const result = contactSchema.safeParse(body)
        if (!result.success) {
            return NextResponse.json(
                { error: 'Validation failed', details: result.error.issues },
                { status: 400 }
            )
        }

        const { name, email, message } = result.data

        // For now, we'll use a simple approach:
        // In production, you would integrate with EmailJS, Resend, or similar service
        // 
        // Option 1: EmailJS (client-side, configured in frontend)
        // Option 2: Resend (server-side, requires API key)
        // Option 3: Nodemailer with SMTP
        //
        // For this implementation, we'll log the message and return success
        // The actual email sending can be added later with EmailJS on the client
        // or Resend on the server when API keys are configured

        console.log('📧 New contact form submission:')
        console.log(`   Name: ${name}`)
        console.log(`   Email: ${email}`)
        console.log(`   Message: ${message}`)
        console.log('---')

        // TODO: Add actual email sending here
        // Example with Resend:
        // const resend = new Resend(process.env.RESEND_API_KEY)
        // await resend.emails.send({
        //   from: 'onboarding@resend.dev',
        //   to: 'rizqimaulanahafidz156@gmail.com',
        //   subject: `New message from ${name}`,
        //   html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`
        // })

        return NextResponse.json({
            success: true,
            message: 'Message received! I will get back to you soon.'
        })
    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'Failed to process your message. Please try again.' },
            { status: 500 }
        )
    }
}
