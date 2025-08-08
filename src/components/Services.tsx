import {
  ClipboardList,
  Hospital,
  Stethoscope,
  MessageSquare,
  BookOpen,
  Shield,
  HeartHandshake,
  Users,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <ClipboardList className="w-8 h-8 text-emerald-600" />,
      title: "Screening & Assessment",
      description: "Comprehensive evaluation to understand your unique needs and create personalized treatment plans."
    },
    {
      icon: <Hospital className="w-8 h-8 text-emerald-600" />,
      title: "Detoxification",
      description: "Safe, medically supervised detox process with 24/7 monitoring and support."
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-emerald-600" />,
      title: "Psychiatric Review",
      description: "Expert psychiatric evaluation and medication management by qualified professionals."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-emerald-600" />,
      title: "Individual & Group Therapy",
      description: "One-on-one counseling and group sessions to address personal and social aspects of recovery."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-emerald-600" />,
      title: "Psychoeducation",
      description: "Educational programs to help you understand your condition and develop coping strategies."
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-600" />,
      title: "Relapse Prevention",
      description: "Tools and strategies to maintain sobriety and prevent relapse after treatment."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-emerald-600" />,
      title: "Aftercare Support",
      description: "Ongoing support and resources to help you maintain recovery in your daily life."
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-600" />,
      title: "Family Therapy",
      description: "Involving family members in the healing process to rebuild relationships and support systems."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of services designed to support your journey 
            to recovery and mental wellness at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:bg-emerald-50 transition-colors group">
              <div className="mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-emerald-600 text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Begin Your Healing Journey?
            </h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Our compassionate team is here to support you every step of the way. 
              Contact us today to learn more about our services and how we can help.
            </p>
            <a
              href="#contact"
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
