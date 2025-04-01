import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
      <nav className="bg-teal-500 p-4 text-white shadow-md">
        <ul className="flex justify-center gap-4">
          <li>
            <Link to="/" className="hover:text-yellow-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-400">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-yellow-400">
              Products
            </Link>
          </li>
        </ul>
      </nav>
  );
};

export default Layout;
