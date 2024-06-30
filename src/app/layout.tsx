import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import "@/styles/globals.css";

export const metadata = {
  title: "z1blog - Home",
  description: "Shivam's personal blog!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#fffff0] pt-14">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
