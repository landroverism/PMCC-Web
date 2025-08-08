export default function Conditions() {
  const conditions = [
    {
      icon: "🚫",
      title: "Substance Abuse",
      description: "Comprehensive treatment for alcohol and drug addiction with medical detox and therapy."
    },
    {
      icon: "😔",
      title: "Depression & Bipolar",
      description: "Professional care for mood disorders with medication management and counseling."
    },
    {
      icon: "😰",
      title: "Anxiety Disorders",
      description: "Treatment for generalized anxiety, panic disorders, and phobias through therapy."
    },
    {
      icon: "💔",
      title: "PTSD & Grief",
      description: "Specialized care for trauma survivors and those experiencing loss and grief."
    },
    {
      icon: "🧠",
      title: "Schizophrenia",
      description: "Comprehensive treatment for psychotic disorders with medication and support."
    },
    {
      icon: "👤",
      title: "Personality & Sexual Disorders",
      description: "Specialized therapy for personality disorders and sexual health concerns."
    }
  ];

  return (
    <section id="conditions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Conditions We Treat
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide specialized care for a wide range of mental health conditions 
            and substance abuse disorders, tailoring treatment to each individual's needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conditions.map((condition, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">{condition.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{condition.title}</h3>
              <p className="text-gray-600">{condition.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
