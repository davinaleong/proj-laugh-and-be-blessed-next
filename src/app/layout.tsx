import "./styles/app.scss"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Laugh and be Blessed",
  description: "Davina's catalog of jokes, riddles and tongue twisters.",
  keywords:
    "jokes, riddles, tongue twisters, laugh, puns, funny, enjoy, entertainment",
  authors: [
    {
      name: "Davina Leong",
      url: "https://davina-devs.com",
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        id="top"
        className="text-gray-50 bg-full position-relative p-v-y-400"
      >
        {children}
      </body>
    </html>
  )
}
