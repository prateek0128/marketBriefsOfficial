// "use client";
// import React, { useState, useEffect } from "react";
// import { Navbar } from "./components/navbar";
// import { LiveMarketTicker } from "./components/liveMarketTicker";
// import {
//   TrendingUp,
//   TrendingDown,
//   BarChart3,
//   Users,
//   Star,
//   ChevronRight,
//   Menu,
//   X,
//   CheckCircle,
//   Clock,
//   Shield,
//   Zap,
//   User,
//   Bell,
//   Mail,
//   Phone,
//   ArrowRight,
// } from "lucide-react";
// import { Herosection } from "./components/heroSection";
// import { HowItWorksSection } from "./components/howItWorksSection";
// import { Footer } from "./components/footer";

// const StockMarketApp = () => {
//   const [activeTestimonial, setActiveTestimonial] = useState(0);

//   // Mock data for live market ticker

//   // Success stories (matching matrimony success story format)
//   const successStories = [
//     {
//       name: "Sarah Johnson",
//       role: "Day Trader from London",
//       story:
//         "MarketPulse connected me with the perfect investment opportunities. The personalized insights helped me grow my portfolio by 45% in just 6 months. I couldn't have done it without their expert guidance!",
//       profit: "45% Growth",
//       image: "SJ",
//       rating: 5,
//     },
//     {
//       name: "Mike Chen",
//       role: "App Developer from Manchester",
//       story:
//         "The app market insights are incredible! MarketPulse helped me identify the perfect timing and category for my app launch. I got 100K downloads in the first month and my app is now generating consistent revenue.",
//       achievement: "100K Downloads",
//       image: "MC",
//       rating: 5,
//     },
//     {
//       name: "David Rodriguez",
//       role: "Investment Advisor from Birmingham",
//       story:
//         "My clients absolutely love the detailed market analysis I provide using MarketPulse data. It's helped me grow my practice to over 500 clients and provide them with better investment advice than ever before.",
//       clients: "500+ Happy Clients",
//       image: "DR",
//       rating: 5,
//     },
//   ];

//   const features = [
//     {
//       title: "Personalized Market Insights",
//       description:
//         "Get tailored stock recommendations based on your investment personality and goals",
//       icon: <BarChart3 className="w-8 h-8" />,
//     },
//     {
//       title: "Grow Your Financial Knowledge",
//       description:
//         "Get access to latest financial news and keep yourself updated",
//       icon: <Users className="w-8 h-8" />,
//     },
//     {
//       title: "Real-time stock Market news ",
//       description:
//         "Stay ahead with live app performance metrics and market trends",
//       icon: <TrendingUp className="w-8 h-8" />,
//     },
//     {
//       title: "Exclusive Market Events",
//       description:
//         "Join exclusive webinars and networking events with fellow investors",
//       icon: <Star className="w-8 h-8" />,
//     },
//   ];

//   const plans = [
//     {
//       name: "Basic",
//       price: "Free",
//       period: "Forever",
//       features: [
//         "Real-time stock prices",
//         "Basic market news",
//         "Daily app trends",
//         "Email alerts",
//         "Community access",
//       ],
//       popular: false,
//       buttonText: "Get Started Free",
//     },
//     {
//       name: "Premium",
//       price: "£29",
//       period: "per month",
//       features: [
//         "Everything in Basic",
//         "Advanced analytics",
//         "Predictive insights",
//         "Portfolio tracking",
//         "1-to-1 expert calls",
//         "Priority support",
//         "API access",
//       ],
//       popular: true,
//       buttonText: "Start Premium",
//     },
//     {
//       name: "Professional",
//       price: "£99",
//       period: "per month",
//       features: [
//         "Everything in Premium",
//         "Custom alerts",
//         "White-label reports",
//         "Dedicated account manager",
//         "Advanced API limits",
//         "Custom integrations",
//         "VIP events access",
//       ],
//       popular: false,
//       buttonText: "Go Professional",
//     },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveTestimonial((prev) => (prev + 1) % successStories.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navigation */}
//       <Navbar />
//       {/* Live Market Ticker */}
//       {/* <LiveMarketTicker /> */}

//       {/* Hero Section */}
//       <Herosection />

//       {/* How It Works Section */}

//       <HowItWorksSection />
//       {/* Success Stories Section */}
//       {/* <section
//         id="success-stories"
//         className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Success Stories
//             </h2>
//             <p className="text-xl text-gray-600">
//               Real people, real results. See how MarketPulse has transformed
//               investment journeys
//             </p>
//           </div>

//           <div className="relative">
//             <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
//               <div className="flex items-center space-x-6 mb-6">
//                 <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
//                   {successStories[activeTestimonial].image}
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-semibold text-gray-900">
//                     {successStories[activeTestimonial].name}
//                   </h4>
//                   <p className="text-gray-600">
//                     {successStories[activeTestimonial].role}
//                   </p>
//                   <div className="flex items-center mt-1">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className="w-4 h-4 text-yellow-400 fill-current"
//                       />
//                     ))}
//                   </div>
//                 </div>
//                 <div className="ml-auto text-right">
//                   <div className="text-2xl font-bold text-green-600">
//                     {successStories[activeTestimonial].profit ||
//                       successStories[activeTestimonial].achievement ||
//                       successStories[activeTestimonial].clients}
//                   </div>
//                 </div>
//               </div>

//               <blockquote className="text-lg text-gray-700 italic leading-relaxed">
//                 "{successStories[activeTestimonial].story}"
//               </blockquote>
//             </div>

//             {/* Navigation dots
//             <div className="flex justify-center mt-8 space-x-2">
//               {successStories.map((_, index) => (
//                 <button
//                   key={index}
//                   className={`w-3 h-3 rounded-full transition-all ${
//                     index === activeTestimonial ? "bg-blue-600" : "bg-gray-300"
//                   }`}
//                   onClick={() => setActiveTestimonial(index)}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section> */}

//       {/* Features Section */}
//       <section id="features" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Why Choose MarketBrief?
//             </h2>
//             <p className="text-xl text-gray-600">
//               Advanced features designed to help you succeed in the market
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors group"
//               >
//                 <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
//                   <div className="text-blue-600">{feature.icon}</div>
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-3">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section
//         id="pricing"
//         className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Choose Your Plan
//             </h2>
//             <p className="text-xl text-gray-600">
//               Start free and upgrade as your investment journey grows
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {plans.map((plan, index) => (
//               <div
//                 key={index}
//                 className={`bg-white rounded-2xl shadow-xl p-8 relative ${
//                   plan.popular ? "ring-2 ring-blue-500 scale-105" : ""
//                 }`}
//               >
//                 {plan.popular && (
//                   <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                     <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
//                       Most Popular
//                     </span>
//                   </div>
//                 )}

//                 <div className="text-center mb-8">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                     {plan.name}
//                   </h3>
//                   <div className="text-4xl font-bold text-gray-900 mb-1">
//                     {plan.price}
//                   </div>
//                   <div className="text-gray-600">{plan.period}</div>
//                 </div>

//                 <ul className="space-y-4 mb-8">
//                   {plan.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-center">
//                       <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
//                       <span className="text-gray-600">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <button
//                   className={`w-full py-3 rounded-lg font-semibold transition-colors ${
//                     plan.popular
//                       ? "bg-blue-600 text-white hover:bg-blue-700"
//                       : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
//                   }`}
//                 >
//                   {plan.buttonText}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-blue-600 text-white">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold mb-6">
//             Ready to Find Your Perfect Investment Match?
//           </h2>
//           <p className="text-xl mb-8 opacity-90">
//             Join thousands of successful investors who trust MarketPulse for
//             their financial journey
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
//               Start Free Today
//             </button>
//             <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
//               Schedule a Call
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}

//       <Footer />
//       {/* Custom CSS for animations */}
//       <style jsx>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(100%);
//           }
//           100% {
//             transform: translateX(-100%);
//           }
//         }

//         .animate-scroll {
//           animation: scroll 30s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default StockMarketApp;
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
                  <a href="#" className="hover:text-white transition-colors">
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
