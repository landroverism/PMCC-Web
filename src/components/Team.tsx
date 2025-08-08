import { Stethoscope, User, Hand, Users } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: "Dr. James Mwangi",
      role: "Chief Psychiatrist",
      bio: "Over 15 years of experience in mental health treatment. Specializes in mood disorders and substance abuse recovery.",
      image: <Stethoscope className="w-16 h-16 text-emerald-600 mx-auto" />
    },
    {
      name: "Dr. Mary Wanjiku",
      role: "Clinical Psychologist",
      bio: "Expert in trauma therapy and cognitive behavioral therapy. Passionate about integrating faith and healing.",
      image: <User className="w-16 h-16 text-emerald-600 mx-auto" />
    },
    {
      name: "Rev. Peter Kamau",
      role: "Chaplain & Counselor",
      bio: "Provides spiritual guidance and pastoral care. Trained in addiction counseling and grief therapy.",
      image: <Hand className="w-16 h-16 text-emerald-600 mx-auto" />
    },
    {
      name: "Sarah Njeri",
      role: "Licensed Therapist",
      bio: "Specializes in family therapy and group counseling. Dedicated to helping families heal together.",
      image: <User className="w-16 h-16 text-emerald-600 mx-auto" />
    },
    {
      name: "David Ochieng",
      role: "Addiction Counselor",
      bio: "Certified addiction specialist with personal recovery experience. Leads group therapy sessions.",
      image: <Users className="w-16 h-16 text-emerald-600 mx-auto" />
    },
    {
      name: "Grace Mutua",
      role: "Psychiatric Nurse",
      bio: "Provides compassionate nursing care and medication management. Available 24/7 for patient support.",
      image: <Stethoscope className="w-16 h-16 text-emerald-600 mx-auto" />
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Caring Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our multidisciplinary team of professionals is dedicated to providing 
            compassionate, evidence-based care that addresses your physical, emotional, 
            and spiritual needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="mb-4 h-16 flex items-center justify-center">{member.image}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-emerald-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Comprehensive Care Team
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            In addition to our core team, we work with a network of specialists including 
            nutritionists, occupational therapists, and social workers to ensure you receive 
            holistic care tailored to your unique needs.
          </p>
        </div>
      </div>
    </section>
  );
}
