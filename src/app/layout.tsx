import { Metadata } from "next";
import "../../styles/globals.css";
import { RecoilProvider } from "../recoil/recoil";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Shop For All",
  description: "Welcome to Shop built by Next",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RecoilProvider>
          <Header />
          {children}
          <Footer />
        </RecoilProvider>
      </body>
    </html>
  );
}
