import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About: Shop For All",
  description: "Welcome to Shop built by Next",
};

export default function About() {
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
      About Page
    </div>
  );
}
