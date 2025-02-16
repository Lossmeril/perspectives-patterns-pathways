"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import SocialsButtons from "@/components/socialsButtons";

interface mainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<mainLayoutProps> = ({ children }) => {
  return (
    <main className="max-w-screen overflow-x-hidden">
      <SocialsButtons />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
