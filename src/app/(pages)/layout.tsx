import Breadcrumb from "../_components/breadcrumbs";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="max-w-sm md:max-w-6xl mx-auto">
            <div className="md:mx-4 mx-8">
                <Breadcrumb />
                {children}
            </div>
        </div>
    );
};

export default Layout;
