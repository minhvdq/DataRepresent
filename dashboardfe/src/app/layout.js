import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description: "A simple UI to handle menus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="menu-container">{children}</main>
        <footer>
          <p>Copyright &#169; 2024 Minh Vu. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}