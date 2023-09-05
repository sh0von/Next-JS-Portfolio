// components/Layout.js
import React from 'react';

function Layout({ children }) {
  return (
    <div className="container-fluid">
      <main>{children}</main>
      <footer className="mt-4">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Your Website
        </p>
      </footer>
    </div>
  );
}

export default Layout;
