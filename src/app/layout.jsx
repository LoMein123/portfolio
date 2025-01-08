import "./globals.css";


export const metadata = {
  title: "my portfolio",
  description: "Next.js, react, tailwindcss, and more",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
