import React from "react";
import { Metadata } from "next";
import LoginComponent from "@/components/SignIn";

export const metadata: Metadata = {
  title: "SignIn Page | Chimoney Prototype",
  description: "This is the Signin Page Chimoney Prototype Dashboard",
};

const SignIn: React.FC = () => {
  return (
    <div>
      <LoginComponent />
    </div>
  );
};

export default SignIn;
