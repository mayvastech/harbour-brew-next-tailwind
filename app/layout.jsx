import "./globals.css";

export const metadata = {
  title: "Harbour Brew Coffee | Speciality Coffee in Brighton",
  description:
    "A fictional portfolio website for a modern independent coffee shop serving speciality coffee, pastries and brunch in Brighton.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
