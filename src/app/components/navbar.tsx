"use client";
import { TrendingUp } from "lucide-react";
import Link from "next/link";
export const Navbar = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">
              Market Brief
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href={"/home"}
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
              className="text-gray-700 hover:text-blue-600 transition-colors"
              href={"/about-us"}
            >
              About us
            </Link>
            <a
              href="#features"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Pricing
            </a>
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
        </div>
      </div>
    </header>
  );
};
