import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dall E App",
  description: "DALL E App built with NextJS, prisma, Neondb and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-openAI_Secondary">
        <Header />
        {children}
      </body>
    </html>
  );
}
