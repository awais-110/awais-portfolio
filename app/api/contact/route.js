import { Resend } from 'resend'

export async function POST(request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: 'Missing RESEND_API_KEY environment variable' },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'awaiss.dev@gmail.com',
      replyTo: email,
      subject: subject || 'Portfolio Contact',
      html: `
        <h2>New Message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'Portfolio Contact'}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    return Response.json({ success: true, id: result.data.id })
  } catch (error) {
    console.error('Email error:', error)
    return Response.json(
      { error: error.message },
      { status: 500 }
    )
  }
}
