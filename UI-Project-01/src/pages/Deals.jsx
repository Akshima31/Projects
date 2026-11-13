
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import DealsHeader from "../Components/DealsHeader";
import DealsCard from "../Components/DealsCard";
import deals from "../data/deals";

export default function Deals() {
  const scrollRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;

    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);

    setCanScrollRight(
      el.scrollLeft + el.clientWidth < el.scrollWidth - 1
    );
  };

  useEffect(() => {
    const el = scrollRef.current;

    if (!el) return;

    checkScroll();

    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scrollProducts = (direction) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "right" ? 300 : -300,
      behavior: "smooth",
    });
  };

  return (
     <section id="products" className="scroll-mt-24">
    <div className="mx-auto max-w-7xl px-5 py-6">
      <div className="rounded-2xl border border-blue-200 bg-white p-5">
        <DealsHeader />

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scrollProducts("left")}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 z-10
              -translate-y-1/2 rounded-full bg-white p-2 shadow-md
              transition-opacity duration-300
              hover:bg-gray-300
              ${
                canScrollLeft
                  ? "opacity-100 cursor-pointer"
                  : "opacity-30 cursor-not-allowed"
              }`}
            aria-label="Previous products"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Products */}
          <div
            ref={scrollRef}
            className="scrollbar-hide flex gap-4 overflow-x-auto scroll-smooth px-1 py-2"
          >
            {deals.map((product) => (
              <div
                key={product.id}
                className="w-[calc((100%-16px)/2)] shrink-0
                  sm:w-[calc((100%-32px)/3)]
                  lg:w-[calc((100%-48px)/4)]"
              >
                <DealsCard product={product} />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scrollProducts("right")}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 z-10
              -translate-y-1/2 rounded-full bg-white p-2 shadow-md
              transition-opacity duration-300
              hover:bg-gray-300
              ${
                canScrollRight
                  ? "opacity-100 cursor-pointer"
                  : "opacity-30 cursor-not-allowed"
              }`}
            aria-label="Next products"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
    </section>
  );
}