import React from "react";
import { User, BarChart3, Bell, TrendingUp } from "lucide-react";
export const HowItWorksSection = () => {
  const howItWorks = [
    {
      step: "1",
      title: "Create Your Profile",
      description: "Choose Your Field of interest which you want to explore.",
      icon: <User className="w-12 h-12" />,
    },
    {
      step: "2",
      title: "Explore Smart Picks",
      description:
        "Receive personalized stock recommendations and app market insights tailored specifically to your profile and investment objectives.",
      icon: <BarChart3 className="w-12 h-12" />,
    },
    {
      step: "3",
      title: "Real-Time Market Alerts",
      description:
        "Stay informed with instant alerts and updates based on market trends and key price movements, so you never miss an opportunity.",
      icon: <Bell className="w-12 h-12" />,
    },
    {
      step: "4",
      title: "Achieve Your Goals",
      description:
        "Make informed decisions with our real-time insights and watch your portfolio grow with confidence.",
      icon: <TrendingUp className="w-12 h-12" />,
    },
  ];

  return (
    <>
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How MarketBrief Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 4-step process helps you find the perfect investment
              opportunities, just like finding your perfect match
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <div className="text-blue-600">{step.icon}</div>
                </div>
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
