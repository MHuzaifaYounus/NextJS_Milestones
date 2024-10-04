import NavBar from "@/components/ui/navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-mono">
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
