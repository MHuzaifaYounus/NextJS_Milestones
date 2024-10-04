import NavBar from "./components/ui/navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="body">
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
