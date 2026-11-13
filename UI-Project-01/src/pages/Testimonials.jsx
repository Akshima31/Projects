import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    review:
      "LabWale has been our primary supplier for three years. Their GST invoicing and bulk shipping are perfect for our university's procurement cycle.",
    name: "Dr. Ramesh Mehta",
    role: "HOD Chemistry",
  },
  {
    id: 2,
    review:
      "The quality of their AR grade chemicals is consistent. Fast delivery ensures our clinical research never stops due to stockouts.",
    name: "Sarah Johnson",
    role: "Bio-Tech Lead",
  },
  {
    id: 3,
    review:
      "Exceptional customer service. They helped us source specialized plasticware that wasn't listed on the site. Truly a B2B partner.",
    name: "Vivek Gupta",
    role: "Lab Administrator",
  },
];

export default function Testimonials(){
    return(
       <section className="mx-auto max-w-7xl px-5 py-6">
        <div className="rounded-3xl bg-blue-100 px-5 py-10 md:px-10">
          {/* Heading */}
          <h2 className="mb-7 text-center text-xl font-bold text-slate-900">
               Trusted by 5000+ Institutions </h2>
            
          {/* Reviews */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((items) =>(
              <div key={items.id}
              className="text-center">
                {/* Stars */}
                <div className="mb-2 flex justify-center gap-0.5 text-amber-500">
                   {[1, 2, 3, 4, 5].map((star) => (
                     <Star key={star} size={17} fill="currentColor" strokeWidth={1.5} />
                   ))}
                </div>
                 {/* Reviews */}
                 <p className="text-sm font-medium leading-[1.5] text-slate-900 ">
                  "{items.review}"
                 </p>

                 {/* Name and Role */}
                 <p className="mt-4 text-[12px] font-bold text-slate-900">
                  -{items.name}, {items.role}
                 </p>
                </div>
            ))}

          </div>
        </div>
       </section>
    )
}