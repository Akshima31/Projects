
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CategoryProducts({
  id,
  title,
  products = [],
  icon: Icon,
  iconColor = "text-blue-600",
  color = "bg-blue-100",
}) {
  const scrollRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // CHECK SCROLL POSITION
  const updateScrollButtons = () => {
    const container = scrollRef.current;

    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);

    setCanScrollRight(
      container.scrollLeft + container.clientWidth <
        container.scrollWidth - 1
    );
  };

  // CHECK ON LOAD AND WHEN PRODUCTS CHANGE
  useEffect(() => {
    updateScrollButtons();

    window.addEventListener("resize", updateScrollButtons);

    return () => {
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [products]);

  // SCROLL PRODUCTS
  const scrollProducts = (direction) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "right" ? 300 : -300,
      behavior: "smooth",
    });
  };

  return (
    <section
      id={id}
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-3 sm:px-5"
    >
      <div className="rounded-2xl border border-blue-100 bg-white p-5 sm:p-6">

        {/* CATEGORY HEADER */}
        <div className="mb-6 flex items-center gap-3">

          {/* CATEGORY ICON */}
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${color}`}
          >
            {Icon ? (
              <Icon
                size={22}
                strokeWidth={2}
                className={iconColor}
              />
            ) : null}
          </div>

          {/* CATEGORY TITLE */}
          <div>
            <h2 className="font-bold text-slate-900">
              {title}
            </h2>

            <p className="text-xs text-slate-500">
              Shop By Category
            </p>
          </div>

        </div>

        {/* PRODUCTS */}
        <div className="relative">

          <div
            ref={scrollRef}
            onScroll={updateScrollButtons}
            className="scrollbar-hide flex gap-3 overflow-x-auto scroll-smooth"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="w-[calc((100%-12px)/2)] shrink-0 rounded-xl border border-slate-100 p-2 sm:w-[calc((100%-24px)/3)] lg:w-[calc((100%-36px)/4)]"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full rounded-lg object-contain sm:h-36 lg:h-40"
                />
              </div>
            ))}
          </div>

          {/* SCROLL BUTTONS */}
          <div className="mt-5 flex justify-center gap-3">

            {/* LEFT BUTTON */}
            <button
              type="button"
              onClick={() => scrollProducts("left")}
              disabled={!canScrollLeft}
              className={`rounded-full p-1 transition ${
                canScrollLeft
                  ? "text-slate-700 hover:bg-slate-300"
                  : "cursor-not-allowed text-slate-400"
              }`}
              aria-label="Previous products"
            >
              <ChevronLeft size={18} />
            </button>

            {/* RIGHT BUTTON */}
            <button
              type="button"
              onClick={() => scrollProducts("right")}
              disabled={!canScrollRight}
              className={`rounded-full p-1 transition ${
                canScrollRight
                  ? "text-slate-700 hover:bg-slate-300"
                  : "cursor-not-allowed text-slate-400"
              }`}
              aria-label="Next products"
            >
              <ChevronRight size={18} />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}
