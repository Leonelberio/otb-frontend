export default function BenefitsSection() {
  const benefits = [
    {
      number: "01.",
      title: "Access to Exclusive Projects",
      description:
        "Getting specific property products that are reserved especially for our customers offers special pricing for future projects.",
    },
    {
      number: "02.",
      title: "Personal Data Privacy is Safe",
      description:
        "We promise to keep your personal data safe and will not share it with third parties, your data security is our main responsibility.",
    },
    {
      number: "03.",
      title: "Faster and Easier Transactions",
      description:
        "Make digital payment transaction options that are easy and fast with all transaction security guaranteed by our systems.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Benefit of Choosing Us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center md:text-left">
              <div
                className="text-3xl font-bold mb-4"
                style={{ color: "#8ABF37" }}
              >
                {benefit.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
