import { Hand, Stethoscope, Clock, Sprout } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Hand className="w-10 h-10 text-emerald-600" />,
      title: "Faith-Based Approach",
      description: "Integrating spiritual healing with evidence-based medical treatment for holistic recovery."
    },
    {
      icon: <Stethoscope className="w-10 h-10 text-emerald-600" />,
      title: "Professional Staff",
      description: "Experienced psychiatrists, therapists, and counselors dedicated to your wellbeing."
    },
    {
      icon: <Clock className="w-10 h-10 text-emerald-600" />,
      title: "24/7 Support",
      description: "Round-the-clock care and support whenever you need it most."
    },
    {
      icon: <Sprout className="w-10 h-10 text-emerald-600" />,
      title: "Peaceful Location",
      description: "Serene environment in Nakuru that promotes healing and tranquility."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Presbyterian Medical Care Centre
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide compassionate, faith-based mental health and substance abuse recovery 
            services in a peaceful, holiday-like environment. Our approach combines professional 
            medical care with spiritual support to address the whole person.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-emerald-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 mb-6">
                To provide comprehensive, compassionate mental health and substance abuse 
                treatment that honors the dignity of every person. We believe in the power 
                of faith, community, and professional care working together to restore hope 
                and transform lives.
              </p>
              <div className="flex items-center text-emerald-600">
                <span className="font-semibold">Located in the heart of Nakuru</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-4">Why Choose Us?</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Individualized treatment plans</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Family involvement and support</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Aftercare and relapse prevention</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Comfortable, home-like environment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
