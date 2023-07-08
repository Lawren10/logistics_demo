import TopNav from "./components/navigation/TopNav";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Logistics_Demo",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNav />
        <main class="appMainContainer">{children}</main>
      </body>
    </html>
  );
}
