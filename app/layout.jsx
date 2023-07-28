import StoreProvider from "@/reduxStore/StoreProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import AdminNav from "@/components/navigation/AdminNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Logistics_Demo",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`is-header-blur ${inter.className}`}>
        <StoreProvider>
          <div className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900">
            <AdminNav />
            <main className="main-content w-full px-[var(--margin-x)] pb-8">
              {children}
            </main>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
