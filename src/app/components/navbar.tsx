"use client";
import { BarChart3, X, Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">
                Market Brief
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                How It Works
              </a>
              <Link
                href="about-us"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About Us
              </Link>

              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => {
                  const userAgent = navigator.userAgent || navigator.vendor;

                  if (/android/i.test(userAgent)) {
                    // Redirect to Play Store
                    window.location.href =
                      "https://play.google.com/store/apps/details?id=com.yourapp.id";
                  } else if (
                    /iPad|iPhone|iPod|iOS/.test(userAgent) ||
                    (navigator.platform === "MacIntel" &&
                      navigator.maxTouchPoints > 1)
                  ) {
                    // Redirect to App Store (includes modern iPad detection)
                    window.location.href =
                      "https://apps.apple.com/us/app/your-app-name/id123456789";
                  } else {
                    alert("Device not supported");
                  }
                }}
              >
                Download Now
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="/"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  Home
                </a>
                <a
                  href="#how-it-works"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  How It Works
                </a>
                <a
                  href="#success-stories"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  Success Stories
                </a>
                <a
                  href="#features"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  Pricing
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
