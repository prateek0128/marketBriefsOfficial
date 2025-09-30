"use client";
import React from "react";
import HowItWorksSection from "./components/howItWorksSection";
import {
  TrendingUp,
  Bell,
  BarChart3,
  Smartphone,
  Shield,
  Zap,
  Star,
  Download,
  Play,
  Apple,
  ChevronRight,
  Globe,
  Users,
  Award,
} from "lucide-react";

import Link from "next/link";

export default function MarketBriefLanding() {
  const handleDownload = () => {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/android/i.test(userAgent)) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.marketbrief.app";
    } else if (
      /iPad|iPhone|iPod|iOS/.test(userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
    ) {
      window.location.href =
        "https://apps.apple.com/us/app/market-brief/id123456789";
    } else {
      alert(
        "Please visit our app on your mobile device or check the app stores directly."
      );
    }
  };

  const features = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Real-Time Market Data",
      description:
        "Get instant updates on stock prices, indices, and market movements as they happen.",
    },
    {
      icon: <Bell className="w-8 h-8 text-blue-600" />,
      title: "Smart Alerts",
      description:
        "Personalized notifications for your portfolio and market events that matter to you.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Expert Analysis",
      description:
        "Professional insights and technical analysis to help you make informed decisions.",
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Global Coverage",
      description:
        "Track markets worldwide with comprehensive coverage of international exchanges.",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Secure & Reliable",
      description:
        "Bank-grade security ensuring your data and preferences are always protected.",
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Lightning Fast",
      description:
        "Optimized for speed with news and data delivered in milliseconds.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Portfolio Manager",
      content:
        "The Market Brief has become my go-to app for staying updated. The alerts are spot-on and the analysis is top-notch.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Day Trader",
      content:
        "Finally, an app that delivers breaking news faster than my desktop terminal. Game changer!",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Investment Advisor",
      content:
        "Clean interface, reliable data, and excellent market insights. Highly recommend to all my clients.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Stay Ahead of the
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}
                  Markets
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get instant financial news, real-time market data, and expert
                analysis delivered straight to your mobile device. Make informed
                investment decisions with The Market Brief.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={handleDownload}
                  className="animate-pulse bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center space-x-2 text-lg font-semibold"
                >
                  <Smartphone className="w-5 h-5 " />
                  <span>Download Now</span>
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center justify-center space-x-2 text-lg font-semibold">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>4.8/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>50K+ Downloads</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>Editor's Choice</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto w-80 h-96 bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-24 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg animate-pulse flex">
                      Market Brief <Bell className="w-8 h-8 text-white" />
                    </span>
                  </div>
                  <div className="p-4 space-y-3 ">
                    <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                      <div className="flex justify-between">
                        <span className="text-green-600 text-sm">S&P 500</span>
                        <span className="text-green-600 text-sm">+1.2%</span>
                      </div>
                    </div>
                    <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
                      <div className="flex justify-between">
                        <span className="text-red-600 text-sm">NASDAQ</span>
                        <span className="text-red-600 text-sm">-0.8%</span>
                      </div>
                    </div>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
                      <div className="flex justify-between">
                        <span className="text-blue-600 text-sm">DOWN</span>
                        <span className="text-blue-600 text-sm">+0.3%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse"></div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Stay Informed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial tools and insights designed for modern
              investors and traders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <HowItWorksSection />
      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Finance Professionals
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              See what our users are saying about The Market Brief.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-white mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-blue-200 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of investors who rely on The Market Brief for their
            daily market intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={handleDownload}
              className="bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors flex items-center space-x-3 text-lg font-semibold"
            >
              <Apple className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs text-gray-600">Download on the</div>
                <div>App Store</div>
              </div>
            </button>

            <button
              onClick={handleDownload}
              className="bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors flex items-center space-x-3 text-lg font-semibold"
            >
              <Play className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs text-gray-600">Get it on</div>
                <div>Google Play</div>
              </div>
            </button>
          </div>

          <p className="text-gray-400 text-sm mt-8">
            Free download • No subscription required • Available worldwide
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">
                  Market Brief
                </span>
              </div>
              <p className="text-gray-400">
                Your trusted source for financial news and market intelligence.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="privacypolicy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Market Brief. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
