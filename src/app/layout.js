import "./globals.css"

export const metadata = {
  title: "Wooryun Song - Portfolio",
  description: "",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
