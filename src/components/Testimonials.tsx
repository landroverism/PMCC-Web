import { User } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      condition: "Depression & Anxiety",
      story: "The staff at Presbyterian Medical Care Centre helped me find hope again. Their faith-based approach combined with professional therapy gave me the tools I needed to overcome my depression. I'm grateful for their compassionate care.",
      image: <User className="w-10 h-10 text-white bg-emerald-500 rounded-full p-2" />
    },
    {
      name: "John K.",
      condition: "Substance Abuse",
      story: "After struggling with addiction for years, I found the support I needed here. The detox program was safe and comfortable, and the ongoing therapy helped me understand the root causes of my addiction. I've been sober for 8 months now.",
      image: <User className="w-10 h-10 text-white bg-blue-500 rounded-full p-2" />
    },
    {
      name: "Grace W.",
      condition: "PTSD",
      story: "The trauma I experienced affected every aspect of my life. The therapists here understood my pain and helped me process my experiences in a safe environment. The spiritual component of treatment was especially healing for me.",
      image: <User className="w-10 h-10 text-white bg-pink-500 rounded-full p-2" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stories of Hope & Recovery
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from individuals who have found healing and hope through our programs. 
            Their journeys inspire us and demonstrate the power of comprehensive, compassionate care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="mr-4">{testimonial.image}</div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-emerald-600">{testimonial.condition}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.story}"</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            <em>Names have been changed to protect privacy. Stories shared with permission.</em>
          </p>
          <div className="bg-blue-50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="font-semibold text-gray-900 mb-2">Your Story Matters</h3>
            <p className="text-gray-700">
              Every journey to recovery is unique. Let us help you write your own story of healing and hope.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
