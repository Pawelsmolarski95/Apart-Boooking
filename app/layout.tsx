import "./globals.css";

import ToasterProvider from "./Providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";

import ClientOnly from "./components/ClientOnly";
import LoginModal from "./components/Modals/LoginModal";
import RegisterModal from "./components/Modals/RegisterModal";
import RentModal from "./components/Modals/RentModal";
import Navbar from "./components/Navbar/Navbar";

import { Nunito } from "next/font/google";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "ApartBooking",
  description: "Book the best aparts",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28 ">{children}</div>
      </body>
    </html>
  );
}
