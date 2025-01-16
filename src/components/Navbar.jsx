import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ShoppingCart, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleDropdownLeave = () => {
    setTimeout(() => {
    setActiveDropdown(null);
    }, 500);
  };

  return (
    <nav
      className={`fixed w-full bg-gray-300 z-50 transition-all duration-300 `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0">
            <h1 className={"text-2xl  font-bold"}>Royale Touche</h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("Products")}
              onMouseLeave={handleDropdownLeave}
            >
              <Link
                to="/products"
                className={`flex items-center space-x-1  text-black hover:text-white`}
              >
                <span>Products</span>
                <ChevronDown size={16} />
              </Link>
              {activeDropdown === "Products" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2"
                >
                  <Link
                    // to="/products/laminates"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Laminates
                  </Link>
                  <Link
                    // to="/products/veneers"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Veneers
                  </Link>
                  <Link
                    // to="/products/plywood"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Plywood
                  </Link>
                </motion.div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("Collections")}
              onMouseLeave={handleDropdownLeave}
            >
              <Link
                to="/collections"
                className={`flex items-center space-x-1  text-black hover:text-white`}
              >
                <span>Collections</span>
                <ChevronDown size={16} />
              </Link>
              {activeDropdown === "Collections" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2"
                >
                  <Link
                    // to="/collections/veeners"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Veeners
                  </Link>
                  <Link
                    // to="collections/premium"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Premium
                  </Link>
                  <Link
                    // to="collections/designer"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Designer
                  </Link>
                </motion.div>
              )}
            </div>

            {/* <Link
              to="/"
              className={`flex items-center space-x-1 text-white hover:text-gray-600`}
            >
              <span>Home</span>
            </Link> */}

            <Link
              to="/about"
              className={`flex items-center space-x-1 text-black hover:text-white`}
            >
              <span>About</span>
            </Link>

            <Link
              to="/contact"
              className={`flex items-center space-x-1 text-black hover:text-white`}
            >
              <span>Contact</span>
            </Link>

            <Link
              to="/cart"
              className={`flex items-center space-x-1 text-black hover:text-white`}
            >
              <ShoppingCart size={24} />
            </Link>
            <Link
            to="/signup"
            className={`flex items-center space-x-1 text-black hover:text-white`}
            >
              <User size={24} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`text-white`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <div>
                <Link
                  to="/products"
                  className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Products
                </Link>
                <div className="pl-6 space-y-1">
                  <Link
                    // to="/products/laminates"
                    className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    Laminates
                  </Link>
                  <Link
                    // to="/products/veneers"
                    className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    Veneers
                  </Link>
                  <Link
                    // to="/products/plywood"
                    className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    Plywood
                  </Link>
                </div>
              </div>
              <div>
                <Link
                  to="/collections"
                  className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Collections
                </Link>
                <div className="pl-6 space-y-1">
                  <Link
                    // to="/collections/veeners"
                    className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                   Veeners
                  </Link>
                  <Link
                    // to="/products/premium"
                    className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    Premium
                  </Link>
                  <Link
                    // to="/products/designer"
                    className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    Designer
                  </Link>
                </div>
              </div>
              
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <Link
                to="/cart"
                className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                <ShoppingCart size={24} />
              </Link>
              <Link
                to="/login"
                className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                <User size={24} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;
