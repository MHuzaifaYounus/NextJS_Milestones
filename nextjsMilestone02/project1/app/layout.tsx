import Header from "@/component/ui/Header/Header";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <div className={`gradient gradient1`}></div>
      <div className={`gradient gradient2`}></div>

        <Header></Header>

        {children}
      </body>
    </html>
  );
}
