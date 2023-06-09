import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact: Shop For All",
  description: "Welcome to Shop built by Next",
};

export default function Contact() {
  return (
    <div
      className="signup"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Contact Page
    </div>
  );
}
