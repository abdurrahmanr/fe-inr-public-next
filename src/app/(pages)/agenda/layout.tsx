import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agenda",
  description: "Agenda Inready Workgroup",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
