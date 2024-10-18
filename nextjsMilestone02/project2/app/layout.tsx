import Header from "@/app/component/ui/Header/Header";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="max-w-[100vw] overflow-x-hidden" lang="en">
      <body className="max-w-[100vw] overflow-x-hidden text-foreground bg-background relative antialiased ">
      <div className="absolute top-3 left-[-120px] bg-primary h-[400px] w-[400px] rounded-full blur-[200px] opacity-70 -z-10"></div>
      <div className="absolute bottom-3 right-[-120px] bg-primary h-[400px] w-[400px] rounded-full blur-[200px] opacity-70 -z-10"></div>

        <Header></Header>
 
        {children}
      </body>
    </html>
  );
}
