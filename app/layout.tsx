import "./globals.css";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
