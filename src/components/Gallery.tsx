import { useState } from "react";
import {
  Sofa,
  BedDouble,
  UtensilsCrossed,
  Sprout,
  BookOpen,
  Users,
  Hand,
  ChefHat,
  Waves,
  Circle,
  Gamepad2,
  Dumbbell,
  Paintbrush,
  Mountain,
} from "lucide-react";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<'current' | 'future'>('current');

  const currentFacilities = [
    {
      title: "Comfortable Living Rooms",
      description: "Homely spaces with soft furnishings, warm lighting, and familiar textures to reduce social anxiety",
      image: <Sofa className="w-16 h-16 text-emerald-600" />,
      category: "Living Spaces"
    },
    {
      title: "Peaceful Bedrooms",
      description: "Private, home-like bedrooms with comfortable bedding and personal touches",
      image: <BedDouble className="w-16 h-16 text-emerald-600" />,
      category: "Accommodation"
    },
    {
      title: "Family-Style Dining",
      description: "Communal dining areas that feel like home, promoting social connection and comfort",
      image: <UtensilsCrossed className="w-16 h-16 text-emerald-600" />,
      category: "Dining"
    },
    {
      title: "Therapy Gardens",
      description: "Serene outdoor spaces with natural materials and peaceful surroundings",
      image: <Sprout className="w-16 h-16 text-emerald-600" />,
      category: "Outdoor Spaces"
    },
    {
      title: "Cozy Reading Nooks",
      description: "Quiet corners with soft seating and warm lighting for reflection and reading",
      image: <BookOpen className="w-16 h-16 text-emerald-600" />,
      category: "Quiet Spaces"
    },
    {
      title: "Group Activity Areas",
      description: "Comfortable spaces designed for group therapy and social activities",
      image: <Users className="w-16 h-16 text-emerald-600" />,
      category: "Activity Spaces"
    },
    {
      title: "Prayer & Meditation Room",
      description: "Peaceful spiritual space with natural materials and calming atmosphere",
      image: <Hand className="w-16 h-16 text-emerald-600" />,
      category: "Spiritual"
    },
    {
      title: "Kitchen & Cooking Area",
      description: "Home-style kitchen where patients can participate in meal preparation",
      image: <ChefHat className="w-16 h-16 text-emerald-600" />,
      category: "Life Skills"
    }
  ];

  const futurePlans = [
    {
      title: "Swimming Pool & Aquatic Therapy",
      description: "Therapeutic swimming pool for physical rehabilitation and stress relief",
      image: <Waves className="w-16 h-16 text-emerald-600" />,
      category: "Aquatic Therapy",
      timeline: "Phase 1 - 2026"
    },
    {
      title: "Basketball Court",
      description: "Full-size basketball court for physical fitness and team building activities",
      image: <Circle className="w-16 h-16 text-emerald-600" />,
      category: "Sports Facilities",
      timeline: "Phase 1 - 2026"
    },
    {
      title: "PlayStation Gaming Lounge",
      description: "Modern gaming area with PlayStation consoles for recreational therapy and social interaction",
      image: <Gamepad2 className="w-16 h-16 text-emerald-600" />,
      category: "Recreation",
      timeline: "Phase 2 - 2027"
    },
    {
      title: "Fitness & Wellness Center",
      description: "Fully equipped gym with modern exercise equipment and wellness programs",
      image: <Dumbbell className="w-16 h-16 text-emerald-600" />,
      category: "Fitness",
      timeline: "Phase 2 - 2027"
    },
    {
      title: "Art & Music Therapy Studio",
      description: "Creative spaces for art therapy, music therapy, and expressive healing",
      image: <Paintbrush className="w-16 h-16 text-emerald-600" />,
      category: "Creative Therapy",
      timeline: "Phase 1 - 2026"
    },
    {
      title: "Outdoor Adventure Course",
      description: "Challenge course and outdoor activities for confidence building and team work",
      image: <Mountain className="w-16 h-16 text-emerald-600" />,
      category: "Adventure Therapy",
      timeline: "Phase 3 - 2028"
    },
    {
      title: "Vocational Training Center",
      description: "Skills training facility for computer literacy, crafts, and job preparation",
      image: "💻",
      category: "Skills Development",
      timeline: "Phase 2 - 2027"
    },
    {
      title: "Family Accommodation Units",
      description: "On-site housing for family members during intensive treatment periods",
      image: "🏠",
      category: "Family Support",
      timeline: "Phase 3 - 2028"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Healing Environment
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience our homely, comfortable facilities designed to reduce anxiety and promote healing. 
            See our current spaces and exciting plans for future amenities.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1 flex">
            <button
              onClick={() => setActiveTab('current')}
              className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                activeTab === 'current'
                  ? 'bg-emerald-600 text-white'
                  : 'text-gray-600 hover:text-emerald-600'
              }`}
            >
              Current Facilities
            </button>
            <button
              onClick={() => setActiveTab('future')}
              className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                activeTab === 'future'
                  ? 'bg-emerald-600 text-white'
                  : 'text-gray-600 hover:text-emerald-600'
              }`}
            >
              Future Plans
            </button>
          </div>
        </div>

        {/* Current Facilities */}
        {activeTab === 'current' && (
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Homely & Comfortable Spaces
              </h3>
              <p className="text-gray-600 text-center max-w-3xl mx-auto">
                Our facilities are designed with familiar materials and textures found in homes, 
                creating a warm, welcoming environment that reduces social anxiety and promotes healing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {currentFacilities.map((facility, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="mb-4 flex items-center justify-center h-24 group-hover:scale-110 transition-transform duration-300">{facility.image}</div>
                  <div className="text-center">
                    <span className="inline-block bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full mb-2">
                      {facility.category}
                    </span>
                    <h4 className="font-semibold text-gray-900 mb-2">{facility.title}</h4>
                    <p className="text-gray-600 text-sm">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Design Philosophy */}
            <div className="bg-emerald-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Our Design Philosophy
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-emerald-600 text-xl">🏡</span>
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">Home-Like Atmosphere</h5>
                  <p className="text-gray-600 text-sm">
                    Familiar furnishings, warm colors, and comfortable textures create a sense of home
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-emerald-600 text-xl">😌</span>
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">Anxiety Reduction</h5>
                  <p className="text-gray-600 text-sm">
                    Thoughtfully designed spaces that minimize stress and promote relaxation
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-emerald-600 text-xl">🤝</span>
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">Social Connection</h5>
                  <p className="text-gray-600 text-sm">
                    Common areas designed to encourage natural social interaction and community
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Future Plans */}
        {activeTab === 'future' && (
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Exciting Future Developments
              </h3>
              <p className="text-gray-600 text-center max-w-3xl mx-auto">
                We're continuously expanding our facilities to provide even more comprehensive care and 
                recreational opportunities for our patients' holistic recovery journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {futurePlans.map((plan, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-blue-100">
                  <div className="text-4xl mb-4 text-center">{plan.image}</div>
                  <div className="text-center">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                      {plan.category}
                    </span>
                    <h4 className="font-semibold text-gray-900 mb-2">{plan.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{plan.description}</p>
                    <div className="bg-white rounded-lg px-3 py-1 inline-block">
                      <span className="text-xs font-medium text-emerald-600">{plan.timeline}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Development Phases */}
            <div className="bg-blue-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Development Timeline
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-emerald-600 font-bold">1</span>
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">Phase 1 - 2026</h5>
                  <p className="text-gray-600 text-sm">
                    Swimming pool, basketball court, and art therapy studio
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">Phase 2 - 2027</h5>
                  <p className="text-gray-600 text-sm">
                    Gaming lounge, fitness center, and vocational training
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">Phase 3 - 2028</h5>
                  <p className="text-gray-600 text-sm">
                    Adventure course and family accommodation units
                  </p>
                </div>
              </div>
            </div>

            {/* Support Our Vision */}
            <div className="mt-12 bg-emerald-600 text-white rounded-2xl p-8 text-center">
              <h4 className="text-2xl font-bold mb-4">Help Us Build the Future</h4>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                Your donations directly support these exciting developments. Together, we can create 
                a world-class healing environment that offers comprehensive care and recreational opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#donations"
                  className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Support Our Vision
                </a>
                <a
                  href="#contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
