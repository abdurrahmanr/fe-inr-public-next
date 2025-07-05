import Breadcrumb from "../_components/breadcrumbs";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-sm md:max-w-6xl mx-auto">
      <Breadcrumb />
      {children}
    </div>
  );
};

export default Layout;
