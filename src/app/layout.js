import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";

const inter = Inter({ subsets: ["latin"] });

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
