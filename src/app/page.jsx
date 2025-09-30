"use client";
import React, { useState, useEffect } from "react";
import HowItWorksSection from './components/howItWorksSection'
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
  ArrowRight,
} from "lucide-react";

export default function MarketBriefLanding() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const steps = [
    {
      number: "01",
      title: "Download & Install",
      description: "Get the app from your preferred app store in seconds",
    },
    {
      number: "02",
      title: "Create Your Profile",
      description: "Set up personalized alerts and watchlists",
    },
    {
      number: "03",
      title: "Start Trading Smarter",
      description: "Access real-time data and expert insights instantly",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.8);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out;
        }
        .animate-slide-in-up {
          animation: slideInUp 0.6s ease-out;
        }
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
        .shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        .group:hover .group-hover-scale {
          transform: scale(1.1);
          transition: transform 0.3s ease;
        }
      `}</style>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 animate-slide-in-up">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-semibold">#1 Finance App</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Stay Ahead of the
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 relative">
                  {" "}
                  Markets
                  <div className="absolute inset-0 shimmer"></div>
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-slide-in-up delay-100">
                Get instant financial news, real-time market data, and expert
                analysis delivered straight to your mobile device. Make informed
                investment decisions with The Market Brief.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-slide-in-up delay-200">
                <button
                  onClick={handleDownload}
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center space-x-2 text-lg font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transform duration-300"
                >
                  <Smartphone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>Download Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all flex items-center justify-center space-x-2 text-lg font-semibold hover:scale-105 transform duration-300">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Watch Demo</span>
                </button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-500 animate-fade-in delay-300">
                <div className="flex items-center space-x-2 hover:scale-110 transition-transform cursor-pointer">
                  <Star className="w-4 h-4 text-yellow-400 fill-current animate-pulse" />
                  <span>4.8/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2 hover:scale-110 transition-transform cursor-pointer">
                  <Users className="w-4 h-4" />
                  <span>50K+ Downloads</span>
                </div>
                <div className="flex items-center space-x-2 hover:scale-110 transition-transform cursor-pointer">
                  <Award className="w-4 h-4" />
                  <span>Editor's Choice</span>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="relative mx-auto w-80 h-96 bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-2 shadow-2xl animate-float hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-24 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 shimmer"></div>
                    <span className="text-white font-semibold text-lg flex items-center gap-2 relative z-10">
                      Market Brief
                      <Bell className="w-6 h-6 text-white animate-pulse" />
                    </span>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded animate-slide-in-up delay-100 hover:scale-105 hover:shadow-md transition-all cursor-pointer">
                      <div className="flex justify-between">
                        <span className="text-green-600 text-sm font-semibold">
                          S&P 500
                        </span>
                        <span className="text-green-600 text-sm font-bold">
                          +1.2%
                        </span>
                      </div>
                    </div>
                    <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded animate-slide-in-up delay-200 hover:scale-105 hover:shadow-md transition-all cursor-pointer">
                      <div className="flex justify-between">
                        <span className="text-red-600 text-sm font-semibold">
                          NASDAQ
                        </span>
                        <span className="text-red-600 text-sm font-bold">
                          -0.8%
                        </span>
                      </div>
                    </div>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded animate-slide-in-up delay-300 hover:scale-105 hover:shadow-md transition-all cursor-pointer">
                      <div className="flex justify-between">
                        <span className="text-blue-600 text-sm font-semibold">
                          DOW
                        </span>
                        <span className="text-blue-600 text-sm font-bold">
                          +0.3%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div
                className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl animate-float hover:scale-110 transition-transform cursor-pointer"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">+24%</div>
                    <div className="text-xs text-gray-500">This Month</div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl animate-float hover:scale-110 transition-transform cursor-pointer"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">1.2M</div>
                    <div className="text-xs text-gray-500">Active Users</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
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
                className="group bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-4 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-semibold">Learn more</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorksSection />
      {/* <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
          
            <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>

            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-slide-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 relative z-10">
                      <span className="text-3xl font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-slide-in-up">
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
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <p className="text-white mb-6 leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white text-lg">
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
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 to-purple-600"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="animate-slide-in-up">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join thousands of investors who rely on The Market Brief for their
              daily market intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <button
                onClick={handleDownload}
                className="group bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all flex items-center space-x-3 text-lg font-semibold hover:scale-110 hover:shadow-2xl transform duration-300"
              >
                <Apple className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="text-xs text-gray-600">Download on the</div>
                  <div>App Store</div>
                </div>
              </button>

              <button
                onClick={handleDownload}
                className="group bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all flex items-center space-x-3 text-lg font-semibold hover:scale-110 hover:shadow-2xl transform duration-300"
              >
                <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="text-xs text-gray-600">Get it on</div>
                  <div>Google Play</div>
                </div>
              </button>
            </div>

            <p className="text-gray-400 text-sm animate-fade-in">
              Free download • No subscription required • Available worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-2 mb-4 group cursor-pointer">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  Market Brief
                </span>
              </div>
              <p className="text-gray-400">
                Your trusted source for financial news and market intelligence.
              </p>
            </div>

            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "API"],
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers"],
              },
              {
                title: "Support",
                links: ["Help Center", "Privacy Policy", "Terms of Service"],
              },
            ].map((section, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <h3 className="text-white font-semibold mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-gray-400">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 animate-fade-in">
            <p>&copy; 2025 Market Brief. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
