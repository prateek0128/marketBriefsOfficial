"use client";
import React, { useState } from "react";
import CountUp from "react-countup";
import { Zap, Globe, BarChart, Bitcoin, Banknote } from "lucide-react";
import {
  TrendingUp,
  Award,
  Shield,
  Play,
  X,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const AboutUsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Team members data
  const teamMembers = [
    {
      name: "Deepesh",
      role: "Chief Executive",
      image: "../Image/Deepesh.jpg",
      bio: "Former Wall Street analyst with 2+ years in financial markets and technology innovation.",
    },
    {
      name: "Prateek",
      role: "Depeloper and TL",
      image: "../Image/Prateek.jpg",
      bio: "Tech veteran who led engineering teams at major fintech companies, specializing in real-time data systems.",
    },
    {
      name: "Prince Sharma",
      role: "Frontend Developer",
      image: "https://i.pravatar.cc/300?img=3",
      bio: "Passionate frontend developer specializing in React, TypeScript, and modern UI/UX design.",
    },
    {
      name: "Aditya Salunke",
      role: "FrontEnd Developer",
      image: "../Image/Aditya.jpg",
      bio: "Design-driven frontend developer creating seamless digital experiences for finance-focused platforms.",
    },
    {
      name: "Tushar Mishra",
      role: "UI & UX Designer",
      image: "../Image/Tushar.jpg",
      bio: "Product strategist focused on creating intuitive experiences for financial professionals and investors.",
    },
  ];

  const stats = [
    // { number: "10M+", label: "Monthly Readers", icon: Users },
    { number: 500, label: "News Sources", icon: Globe },
    { number: 50, label: "Average Load Time", icon: Zap },
    { number: 99.9, label: "Uptime", icon: Shield },
  ];

  const values = [
    {
      title: "Stocks",
      description: [
        "Real-time updates on stock prices and trends.",
        "Track global indices like S&P 500, NASDAQ, and NIFTY.",
        "AI-powered alerts on major market shifts.",
      ],
      icon: BarChart,
    },
    {
      title: "Startups",
      description: [
        "Get alerts on upcoming and ongoing IPOs.",
        "In-depth company analysis before listing.",
        "Track IPO performance post-listing.",
      ],
      icon: Globe,
    },
    {
      title: "Mutual Funds",
      description: [
        "Compare top mutual funds by historical returns.",
        "Track NAVs, fund managers, and sectors.",
        "Insights on SIPs, ELSS, and long-term growth.",
      ],
      icon: Banknote,
    },
    {
      title: "Crypto",
      description: [
        "Live tracking of top cryptocurrencies.",
        "News on blockchain, DeFi, and regulations.",
        "Market insights and volatility updates.",
      ],
      icon: Bitcoin,
    },
    {
      title: "Economy",
      description: [
        "Stay updated on inflation, GDP, and fiscal policies.",
        "Global trade, monetary policy, and government budgets.",
        "Expert analysis on economic trends and forecasts.",
      ],
      icon: Zap,
    },
  ];

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a vision to democratize financial news",
    },
    {
      year: "2020",
      title: "AI Integration",
      description: "Launched our proprietary AI news analysis system",
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "Extended coverage to Asian and European markets",
    },
    {
      year: "2022",
      title: "Mobile App Launch",
      description: "Released mobile apps for iOS and Android platforms",
    },
    {
      year: "2023",
      title: "10M Users",
      description: "Reached 10 million monthly active users milestone",
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Won 'Best Financial News Platform' award",
    },
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Mobile Menu Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-blue-900 text-white transform transition-transform duration-300 ease-in-out z-50 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-blue-100">MarketBrief</h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-blue-200 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="space-y-2">
            <a
              href="#"
              className="block px-4 py-3 rounded-lg text-blue-200 hover:bg-blue-800"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-4 py-3 rounded-lg bg-blue-700 text-white"
            >
              About Us
            </a>
            <a
              href="#"
              className="block px-4 py-3 rounded-lg text-blue-200 hover:bg-blue-800"
            >
              Services
            </a>
            <a
              href="#"
              className="block px-4 py-3 rounded-lg text-blue-200 hover:bg-blue-800"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              About <span className="text-blue-300">MarketBrief</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0">
              Empowering investors and professionals with real-time financial
              intelligence and market insights since 2019.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <button className="bg-white text-blue-900 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors flex items-center justify-center text-sm sm:text-base">
                <Play size={18} className="mr-2" />
                Watch Our Story
              </button>
              <button className="border-2 border-blue-300 text-blue-100 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-sm sm:text-base">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center p-4 sm:p-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full mb-3 sm:mb-4">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-900 mb-1 sm:mb-2">
                    <CountUp
                      start={0}
                      end={stat.number}
                      duration={2}
                      separator=","
                    />
                    {stat.number > 100 ? "+" : stat.number < 51 ? "ms" : ""}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4 sm:mb-6">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                At MarketBrief, we believe that access to timely, accurate
                financial information should be universal. Our mission is to
                democratize market intelligence by providing cutting-edge
                technology and expert analysis to investors of all levels.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
                We leverage artificial intelligence, machine learning, and human
                expertise to deliver insights that matter most to your
                investment decisions.
              </p>
              {/* <button className="bg-blue-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center text-sm sm:text-base">
                Read Our Vision
                <ChevronRight size={18} className="ml-2" />
              </button> */}
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <Award className="text-blue-600 mx-auto mb-4" size={40} />
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">
                      About Product
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      MarketBrief helps you learn and grow by delivering
                      tailored insights based on your interests — making it
                      easier to choose the right stocks with confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-0 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our
              community of investors and professionals.
            </p>
          </div>

          {/* Full rows */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values
              .slice(0, Math.floor(values.length / 3) * 3)
              .map((value, index) => {
                const Icon = value.icon;
                return (
                  <div className="flex justify-center flex-col w-125 h-85 p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                    <div className="flex flex-col items-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                        <Icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-blue-900 text-center">
                        {value.title}
                      </h3>
                    </div>
                    <ul className="text-gray-600 list-disc list-inside space-y-1 text-left font-semibold">
                      {value.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
          </div>

          {/* Last row if not full */}
          {values.length % 3 !== 0 && (
            <div className="flex justify-center gap-8 mt-8">
              {values.slice(-(values.length % 3)).map((value, index) => {
                const Icon = value.icon;
                return (
                  <div className="flex justify-center flex-col h-85 w-125 p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                    <div className="flex flex-col items-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                        <Icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-blue-900 text-center">
                        {value.title}
                      </h3>
                    </div>
                    <ul className="text-gray-600 list-disc list-inside space-y-1 text-left font-semibold">
                      {value.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts brings together decades of experience
              in finance, technology, and journalism.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow"
                  />
                  <div className="absolute inset-0 bg-blue-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join MarketBrief?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start receiving real-time market intelligence and expert analysis
            that can transform your investment decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-blue-300 text-blue-100 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
              <Mail size={20} className="mr-2" />
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp size={24} />
                <span className="text-xl font-bold">MarketBrief</span>
              </div>
              <p className="text-blue-200 mb-4">
                Your trusted source for real-time financial intelligence and
                market insights.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer">
                  <span className="text-sm">in</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li> */}
              </ul>
            </div>

            {/* <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Mobile App
                  </a>
                </li>
              </ul>
            </div> */}

            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <div className="space-y-3 text-blue-200">
                <div className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>hello@marketbrief.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>+91 9911065583</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>Goverdhan,Mathura</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2025 MarketBrief. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;
