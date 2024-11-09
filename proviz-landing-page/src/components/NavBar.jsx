import { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

export const NavBar = ({ onApplyClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-white text-xl font-bold">Proviz School of AI</div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#courses">Courses</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <button 
                onClick={onApplyClick}
                className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-white/90 transition-all"
              >
                Apply Now
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#about">About</MobileNavLink>
            <MobileNavLink href="#courses">Courses</MobileNavLink>
            <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
            <button 
              onClick={onApplyClick}
              className="w-full text-center bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-white/90 transition-all"
            >
              Apply Now
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

NavBar.propTypes = {
  onApplyClick: PropTypes.func.isRequired,
};

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
    {children}
  </a>
);

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const MobileNavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
  >
    {children}
  </a>
);

MobileNavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}; 