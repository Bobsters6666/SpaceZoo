import { Quicksand } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col justify-start">
        <NavBar />
        {children}
        </div>
      </body>
    </html>
  );
}
