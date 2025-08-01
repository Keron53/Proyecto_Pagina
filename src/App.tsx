import React, { useState } from 'react';
import { 
  Camera, 
  Wifi, 
  MapPin, 
  Phone, 
  Navigation, 
  WifiOff,
  Eye,
  Heart,
  Shield,
  ArrowRight,
  Play,
  Mail,
  Menu,
  X,
  Users
} from 'lucide-react';
import logoImage from './images/logo.jpeg';

function App() {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setEmail('');
    }
  };

  const features = [
    {
      icon: Eye,
      title: "Smart Recognition",
      description: "AI-powered identification of objects, people, and surroundings through voice-activated cameras"
    },
    {
      icon: Wifi,
      title: "Extended Connectivity",
      description: "Enhanced range for seamless internet connection and real-time information access"
    },
    {
      icon: MapPin,
      title: "Advanced Navigation",
      description: "Precise location services and turn-by-turn audio guidance for confident movement"
    },
    {
      icon: Phone,
      title: "Emergency Support",
      description: "Instant emergency call functionality with location sharing for enhanced safety"
    },
    {
      icon: Navigation,
      title: "Direction Assistance",
      description: "Intelligent wayfinding with contextual audio cues and landmark recognition"
    },
    {
      icon: WifiOff,
      title: "Offline Capability",
      description: "Core features remain functional even without internet connection"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src={logoImage} alt="Around You Logo" className="h-8 w-8 rounded-full object-cover" />
              <div>
                <h1 className="text-xl font-bold text-slate-900">Around You</h1>
                <p className="text-xs text-slate-600 hidden sm:block">Your smart audio guide for every step</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#product" className="text-slate-700 hover:text-slate-900 transition-colors">Product</a>
              <a href="#features" className="text-slate-700 hover:text-slate-900 transition-colors">Features</a>
              <a href="#about" className="text-slate-700 hover:text-slate-900 transition-colors">About</a>
              <a href="#contact" className="text-slate-700 hover:text-slate-900 transition-colors">Contact</a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <div className="flex flex-col space-y-3">
                <a href="#product" className="text-slate-700 hover:text-slate-900 transition-colors px-2 py-1">Product</a>
                <a href="#features" className="text-slate-700 hover:text-slate-900 transition-colors px-2 py-1">Features</a>
                <a href="#about" className="text-slate-700 hover:text-slate-900 transition-colors px-2 py-1">About</a>
                <a href="#contact" className="text-slate-700 hover:text-slate-900 transition-colors px-2 py-1">Contact</a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              See with your ears.<br />
              <span className="text-blue-300">Feel with confidence</span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Revolutionary smart headphones with integrated cameras, designed to enhance independence 
              and empower confident navigation for the blind and visually impaired community.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto border border-white/20">
              <h3 className="text-lg font-semibold mb-4 flex items-center justify-center space-x-2">
                <Mail className="h-5 w-5 text-blue-300" aria-hidden="true" />
                <span>Leave your email and be the first to experience Around You</span>
              </h3>
              
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  required
                  aria-label="Email address for Around You updates"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-800"
                  disabled={isSubmitted}
                >
                  <span>{isSubmitted ? 'Thank you!' : 'Let the world speak'}</span>
                  {!isSubmitted && <ArrowRight className="h-5 w-5" aria-hidden="true" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Product Explanation Section */}
      <section id="product" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Innovation meets <span className="text-blue-600">independence</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8 rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-6 bg-slate-50 rounded-xl">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Camera className="h-8 w-8 text-blue-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Smart Camera Integration</h3>
                    <p className="text-slate-600">Built-in cameras activated by your voice, providing real-time environmental awareness</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-6 bg-slate-50 rounded-xl">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Shield className="h-8 w-8 text-green-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Secure Registration</h3>
                    <p className="text-slate-600">Easy device setup through voice and facial recognition technology via our secure platform</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-6 bg-slate-50 rounded-xl">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Heart className="h-8 w-8 text-purple-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Enhanced Daily Life</h3>
                    <p className="text-slate-600">Designed to boost autonomy, independence, and comfort in everyday activities</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Headphones className="h-24 w-24 text-slate-600 mx-auto mb-4" aria-hidden="true" />
                  <p className="text-slate-600 font-medium">Around You Headphones</p>
                  <p className="text-sm text-slate-500 mt-2">Product visualization coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Powerful features for <span className="text-blue-600">confident navigation</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every feature is thoughtfully designed to enhance your independence and provide 
              the information you need, when you need it.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-slate-200 hover:border-blue-200"
                >
                  <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="h-7 w-7 text-blue-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Experience Around You in action
            </h2>
            <p className="text-xl text-slate-600 mb-12">
              See how our technology transforms daily navigation and enhances independence.
            </p>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl h-64 sm:h-80 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="relative text-center text-white">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 mb-4 inline-flex">
                  <Play className="h-12 w-12" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Product Demo Video</h3>
                <p className="text-slate-300">Coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Stories of <span className="text-blue-600">empowerment</span>
            </h2>
            <p className="text-xl text-slate-600">
              Hear from our community about how Around You has transformed their daily experiences.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-8 rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
            <div className="max-w-2xl mx-auto">
              <div className="text-slate-400 mb-4">
                <div className="w-16 h-16 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8" aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">User testimonials coming soon</h3>
              <p className="text-slate-600">
                We're currently working with beta testers to gather authentic stories about 
                how Around You is making a difference in their lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company & Team Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Let's stay <span className="text-blue-600">connected</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">ProPath Innovations</h3>
                <p className="text-lg text-slate-600 mb-8">
                  We're here to support you on your journey toward greater independence and confidence.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                    <a href="mailto:info@aroundyou.tech" className="text-blue-600 hover:text-blue-700 transition-colors">
                      info@aroundyou.tech
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                    <a href="tel:+5511960372150" className="text-green-600 hover:text-green-700 transition-colors">
                      +55 (11) 96037-2150
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Address</h4>
                    <p className="text-slate-600">
                      Alameda Ribeiro Da Silva, 523<br />
                      Campos Elísios
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <Users className="h-8 w-8 text-blue-600" aria-hidden="true" />
                <h3 className="text-2xl font-bold text-slate-900">Meet the minds behind Around You</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">VP</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1">Vanesa Pérez</h4>
                  <p className="text-slate-600 text-sm">Content Creator</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">CJ</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1">Caio Julio</h4>
                  <p className="text-slate-600 text-sm">Lead Developer</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">JG</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1">José Alejandro Gaitán</h4>
                  <p className="text-slate-600 text-sm">Strategy & Business Management</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">DC</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1">Danna Castillo</h4>
                  <p className="text-slate-600 text-sm">Product & Visual Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img src={logoImage} alt="Around You Logo" className="h-8 w-8 rounded-full object-cover" />
                <div>
                  <h3 className="text-xl font-bold">Around You</h3>
                  <p className="text-slate-400 text-sm">by ProPath Innovations</p>
                </div>
              </div>
              <p className="text-slate-300 max-w-md leading-relaxed">
                Empowering the blind and visually impaired community with innovative technology 
                that enhances independence and confidence in daily navigation.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Specifications</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2025 ProPath Innovations. All rights reserved. Designed with accessibility and empowerment in mind.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;