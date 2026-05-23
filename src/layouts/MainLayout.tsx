import { Outlet, ScrollRestoration } from "react-router";
import Header from "../components/Header/layout/Header";
import { Suspense } from "react";
import Loader from "../components/layout/Loader";
import Footer from "../components/Footer/Footer";

export default function RootLayout() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background selection:bg-brand-start/30 selection:text-brand-end">
      <Header />

      <main className="flex-1">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
      <ScrollRestoration
        getKey={(location) => location.pathname} // ou "default"
      />
    </div>
  );
}
