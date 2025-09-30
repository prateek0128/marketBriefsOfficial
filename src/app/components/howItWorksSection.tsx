import React from "react";
import { User, BarChart3, Bell, TrendingUp } from "lucide-react";
import userImg from "../assets/user.png";
const HowItWorksSection = () => {
  const howItWorks = [
    {
      step: "1",
      title: "Welcome Screen",
      description:
        "Welcome to Market Brief. Stay ahead with real-time financial news, curated insights, and smart summaries for investors and professionals.",
      icon: <img src="/image/Onboarding.png" alt="User" />,
    },
    {
      step: "2",
      title: "Create Your Profile",
      description:
        "Welcome to Market Brief! We deliver sharp, easy-to-digest market insights so you can make smarter financial decisions — faster.",
      icon: <img src="/image/Welcome User.png" alt="User" />,
    },
    {
      step: "3",
      title: "Explore Smart Picks",
      description: "Choose Your Field of interest which you want to explore.",
      icon: <img src="/image/InterestsScreen.jpg" />,
    },
    {
      step: "4",
      title: "Achieve Your Goals",
      description:
        "Make informed decisions with our real-time insights and watch your portfolio grow with confidence.",
      icon: <img src="/image/Homepage V2.png" />,
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
                <div className="">
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
export default HowItWorksSection;
