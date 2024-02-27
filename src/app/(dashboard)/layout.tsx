import { Metadata } from "next";
import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Chimoney Dashboard",
  description: "Chimoney Dashboard",
};

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return <DefaultLayout>{children}</DefaultLayout>;
};

export default DashboardLayout;
