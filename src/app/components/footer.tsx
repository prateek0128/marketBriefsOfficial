import React from "react";
import { BarChart3 } from "lucide-react";
import Link from "next/link";
export const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-bold">MarketPulse</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for finding perfect investment
                opportunities and app market insights.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  f
                </div>
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  t
                </div>
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                  in
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-gray-400">
                <div>Stock Analysis</div>
                <div>App Market Insights</div>
                <div>Investment Matching</div>
                <div>Expert Consultation</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-gray-400">
                <div>Help Center</div>
                <div>Contact Us</div>
                <div>Live Chat</div>
                <div>FAQs</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-gray-400">
                <div>About Us</div>
                <div>Careers</div>
                <Link href="/privacypolicy" className="hover:text-white">
                  Privacy Policy
                </Link>
                <div>Terms of Service</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MarketBrief. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};
