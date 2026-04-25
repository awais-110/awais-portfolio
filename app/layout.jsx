import './styles/globals.css'

export const metadata = {
  title: 'Muhammad Awais — Portfolio',
  description: 'CS student at Iqra University. Web developer & AI enthusiast. Open to internships.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&family=Lexend+Deca:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
