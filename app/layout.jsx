import Footer from "@/components/footer";
import Header from "@/components/header";
import Podpora from "@/components/podpora";
// import localFont from "next/font/local";
import "../public/style.css";
import "./globals.css";

export const metadata = {
  title: "Svou Cestou, montessori škola a školka",
  description:
    "Montessori škola a školka v srdci CHKO Kokořínsko v historické budově mlýna Kroužek.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="open-sans-300 text-gray-700">
        <Header />
        {children}
        {/* <Podpora /> */}
        <Footer />
      </body>
    </html>
  );
}
