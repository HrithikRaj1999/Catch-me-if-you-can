import React from "react";
import Navbar from "./Navbar";
import CopsContextProvider from "../context/CopsContext";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <CopsContextProvider>
      <div className="flex flex-col h-screen w-full min-w-[400px]">
        <Navbar />
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </CopsContextProvider>
  );
};

export default Layout;
