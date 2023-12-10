import React from "react";
import Navbar from "@/components/shared/navbar/Navbar";
import LeftSideBar from "@/components/shared/LeftSideBar";
import RightSideBar from "@/components/shared/RightSideBar";


export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        {/* Left SideBar */}        
          <LeftSideBar />
        {/* Main Content */}
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        {/* Right SideBar */}
        <RightSideBar />
      </div>
      Toaster
    </main>
  );
}
