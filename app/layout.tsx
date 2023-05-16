import ClientOnly from "./components/ClientOnly";
import Modal from "./components/Modals/Modal";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "ApartBooking",
  description: "Book the best aparts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal title="Hello"isOpen/>
          <Navbar />
        </ClientOnly>

        {children}
      </body>
    </html>
  );
}
