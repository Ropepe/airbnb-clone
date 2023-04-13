import { Nunito } from "next/font/google"
import ClientOnly from "./components/ClientOnly"
import RegisterModal from "./components/modals/RegisterModal"
import Navbar from "./components/navbar/Navbar"
import './globals.css'
import ToasterProvider from "./providers/ToasterProvider"
import LoginModal from "./components/modals/LoginModal"


export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone by Perica Vrhovac',

}
const font = Nunito({
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}