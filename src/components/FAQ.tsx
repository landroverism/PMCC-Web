import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes your treatment approach different?",
      answer: "We integrate faith-based principles with evidence-based medical treatment, providing holistic care that addresses the mind, body, and spirit. Our serene environment in Nakuru promotes healing and recovery."
    },
    {
      question: "How long does treatment typically last?",
      answer: "Treatment duration varies based on individual needs. Our programs range from 30-90 days for residential treatment, with ongoing outpatient support available. We create personalized treatment plans for each patient."
    },
    {
      question: "Do you accept insurance?",
      answer: "We work with various insurance providers and offer flexible payment options. Please contact us to discuss your specific insurance coverage and payment arrangements."
    },
    {
      question: "Can family members visit during treatment?",
      answer: "Yes, family involvement is encouraged as part of our treatment approach. We have designated visiting hours and family therapy sessions to help rebuild relationships and support systems."
    },
    {
      question: "What should I bring for residential treatment?",
      answer: "We'll provide you with a detailed packing list upon admission. Generally, you'll need comfortable clothing, personal hygiene items, any prescribed medications, and items for spiritual comfort like a Bible or prayer book."
    },
    {
      question: "Is your facility secure and safe?",
      answer: "Yes, our facility is secure with 24/7 staff supervision. We maintain a safe, supportive environment while allowing patients the freedom to focus on their recovery in our peaceful setting."
    },
    {
      question: "Do you provide aftercare support?",
      answer: "Absolutely. We offer comprehensive aftercare programs including outpatient therapy, support groups, relapse prevention planning, and ongoing spiritual guidance to help maintain long-term recovery."
    },
    {
      question: "How do I know if I need treatment?",
      answer: "If substance use or mental health issues are affecting your daily life, relationships, work, or overall wellbeing, it may be time to seek help. We offer confidential assessments to determine the best treatment approach for you."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our treatment programs and services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-emerald-600 text-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Still Have Questions?</h3>
            <p className="text-emerald-100 mb-4">
              Our team is here to help. Contact us for personalized answers to your questions.
            </p>
            <a
              href="#contact"
              className="bg-white text-emerald-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
