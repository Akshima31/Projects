const banners = [
  {
    id: 1,
    image: "/images/Science-Kits.png",
    alt: "Science Kits",
  },
  {
    id: 2,
    image: "/images/electronic-components-banner.png",
    alt: "Electronic Components",
  },
  {
    id: 3,
    image: "/images/Measure-On-the-Go 1.png",
    alt: "Measure On-the-Go",
  },
  {
    id: 4,
    image: "/images/Lab-Packages.png",
    alt: "Lab Packages",
  },
];

export default function Banners2(){
    return(
       
        <section className="mx-auto max-w-7xl px-5 py-6 ">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {banners.map((banner) =>(
                    <div key={banner.id} className="overflow-hidden">
                        <img src={banner.image} alt={banner.alt}
                        className="h-auto w-full object-cover  transition-transform duration-300 hover:scale-[1.02]" />
                        </div>
                ))}
            </div>
        </section>
       
    )
}