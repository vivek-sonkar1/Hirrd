import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
        <div className="container mx-auto text-center">
          <p className="text-lg font-semibold tracking-wide">Hirrd</p>
          <p className="text-sm text-gray-500 mt-2">
            Connecting Talent with Opportunity
          </p>

          <div className="flex justify-center gap-6 mt-4 text-gray-400">
            <a href="#" className="hover:text-white transition">
              Twitter
            </a>
            <a href="#" className="hover:text-white transition">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition">
              GitHub
            </a>
          </div>

          <p className="text-xs text-gray-600 mt-6">
            © {new Date().getFullYear()} Hirrd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
