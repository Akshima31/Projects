
const trendingCategories = [
  "Subcategory 1",
  "Subcategory 2",
  "Subcategory 3",
];

const footerSections = [
  {
    id: "about-us",
    title: "About us",
    description:
      "LabWale is your one-stop destination for laboratory supplies. We provide quality products and reliable solutions for laboratories, research institutions and educational organizations.",
  },
  {
    id: "why-choose-us",
    title: "Why Choose us",
    description:
      "We focus on product quality, reliable service, competitive pricing and a smooth shopping experience to meet your laboratory requirements.",
  },
  {
    id: "our-impact",
    title: "What's Our Impact",
    description:
      "We help laboratories and institutions access essential products and equipment, making their purchasing process easier and more convenient.",
  },
  
  {
    id: "reachability",
    title: "What's Our Reachability",
    description:
      "We aim to make laboratory supplies accessible to institutions and customers through a convenient and dependable online platform.",
  },
];

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-8 text-[11.5px] leading-[1.6] text-slate-800">

      {/* Trending Products */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-[130px_1fr]">
        <h3 className="font-bold">Trending Products</h3>
        <p>
          Explore our trending laboratory products, carefully selected to
          meet the needs of laboratories, research institutions and students.
          Discover quality supplies for your everyday lab requirements.
        </p>
      </div>

      {/* Trending Categories */}
      <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-[130px_1fr]">
        <h3 className="font-bold">Trending Categories</h3>

        <div>
          <p>
            Browse our popular laboratory categories and discover products
            for different scientific and research applications.
          </p>

          <ul className="mt-2 space-y-2">
            {trendingCategories.map((category, index) => (
              <li key={index} className="grid grid-cols-1 gap-2 md:grid-cols-[90px_1fr]">
                <span className="font-bold">
                  • {category}
                </span>
                <span>
                  Explore a wide range of laboratory products and essential
                  supplies for your everyday requirements.
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Top Searches */}
      <div className="mt-8 grid grid-cols-1 gap-2 md:grid-cols-[130px_1fr]">
        <h3 className="font-bold">Top Searches</h3>
        <p>
          Find popular laboratory equipment, chemicals, glassware,
          plasticware and electronic components for your lab.
        </p>
      </div>

      {/* About LabWale */}
      <div className="mt-7">
        <h2 className="mb-4 text-sm text-[17px] font-bold text-slate-900">
          Everything Your Lab Needs, In One Place: LabWale
        </h2>

        <div className="space-y-3">
          {footerSections.map((section, index) => (
            <div
              key={index}
              id={section.id}
              className="grid scroll-mt-24 grid-cols-1 gap-2 md:grid-cols-[130px_1fr]"
            >
              <h3 className="font-bold">{section.title}</h3>
              <p>{section.description}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
