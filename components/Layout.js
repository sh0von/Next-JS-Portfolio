import React from "react";
import { Analytics } from '@vercel/analytics/react';
function Layout({ children }) {
  return (
    <div className="container-fluid">
      <main>{children} <Analytics /></main>
      <footer className="mt-4">
        <p className="text-center">
          &copy; {new Date().getFullYear()} sh0von.me
        </p>
      </footer>
    </div>
  );
}

export default Layout;
