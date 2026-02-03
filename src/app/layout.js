import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="flex flex-col h-screen mx-auto px-4"
      >
          <nav className="h-6">
            <ul className="flex items-center justify-center space-x-6">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
          </nav>
          <div className="flex-1 border justify-center">
            {children}
          </div>
          <footer className="h-6 px-4 py-4 text-center">
            @2026 João Fernandes
          </footer>
      </body>
    </html>
  );
}
