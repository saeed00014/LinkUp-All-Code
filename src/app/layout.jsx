import "./globals.css"
import Header from "@/components/header/header"
import Providers from "@/providers/providers"

export const metadata = {
  title: "LinkUp social media app",
  description: "LinkUp is a social media app capeble of doing everything",
}

export default function RootLayout({ children }) {
  return (
    <html className="dark" lang="en">
      <body>
        <Providers>
          <main className="min-w-screen min-h-screen text-black dark:text-white ![&>*]:border-gray-600 bg-gray-200 dark:bg-gray-950 xl:mr-[240px] mr-[88px]">
            <Header />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
