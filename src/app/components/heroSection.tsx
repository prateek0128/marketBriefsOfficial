import { ArrowRight } from "lucide-react";
import { useState } from "react";
export const Herosection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    interests: [],
  });
  //   const handleSubmit = (e: any) => {
  //     e.preventDefault();
  //     console.log("Form submitted:", formData);
  //     // Handle form submission
  //   };
  //   const handleInputChange = (e: any) => {
  //     setFormData({
  //       ...formData,
  //       [e.target.name]: e.target.value,
  //     });
  //   };
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Find Your Perfect
                <span className="text-blue-600"> Financial News</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Just like finding your life partner, we help you discover the
                perfect investment opportunities tailored to your unique
                financial personality and goals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
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
              {/* <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center group">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button> */}
              {/* <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
                Learn More
              </button> */}
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10,000+</div>
                <div className="text-sm text-gray-600">Happy Investors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">£2.5M+</div>
                <div className="text-sm text-gray-600">Profits Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          {/* <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Start Your Investment exploring Journey
              </h3>
              <p className="text-gray-600">
                Create your profile in just 2 minutes
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Investment Experience
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select your experience level</option>
                  <option value="beginner">Beginner (0-1 years)</option>
                  <option value="intermediate">Intermediate (2-5 years)</option>
                  <option value="advanced">Advanced (5+ years)</option>
                  <option value="professional">Professional Trader</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Create My Profile
              </button>

              <p className="text-xs text-gray-500 text-center">
                By signing up, you agree to our Terms & Conditions and Privacy
                Policy
              </p>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};
