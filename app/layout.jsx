import Footer from "@/components/footer";
import Header from "@/components/header";
import RunningText from "@/components/runningText";
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
      <body className="josefin-200 text-gray-700 max-w-4xl mx-auto">
        <Header />

        {children}
        {/* <Podpora /> */}
        <Footer />
      </body>
    </html>
  );
}
