
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import scienceCombos from "../data/scienceCombos";
import { useCart } from "../context/CartContext";

export default function ScienceCombos() {
  const scrollRef = useRef(null);
  const { addToCart } = useCart();

  const scrollProducts = (direction) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "right" ? 300 : -300,
      behavior: "smooth",
    });
  };

  return (
    <section className="mx-auto max-w-7xl px-5 py-6">
      <div className="rounded-2xl bg-gradient-to-b from-blue-300 to-blue-50 p-4 sm:p-6">

        {/* Heading and Arrows */}
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Science Kits & Combos
            </h2>
            <p className="mt-1 text-xs text-slate-700">
              Shop by Category
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollProducts("left")}
              className="rounded-lg border border-white/70 p-2 hover:bg-white/60"
              aria-label="Previous products"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={() => scrollProducts("right")}
              className="rounded-lg border border-white/70 p-2 hover:bg-white/60"
              aria-label="Next products"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Product Cards */}
        <div
          ref={scrollRef}
          className="scrollbar-hide flex gap-3 overflow-x-auto scroll-smooth pb-2"
        >
          {scienceCombos.map((product) => (
            <div
              key={product.id}
              className="w-[calc((100%-12px)/2)] shrink-0 rounded-xl bg-white p-2 sm:w-[calc((100%-24px)/3)] lg:w-[calc((100%-36px)/4)]"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-28 w-full rounded-lg object-contain sm:h-32"
                />

                <span className="absolute left-1 top-1 rounded bg-orange-500 px-2 py-1 text-[10px] font-bold text-white">
                  {product.tag}
                </span>
              </div>

              {/* Rating */}
              <div className="mt-2 flex items-center gap-1 text-xs text-slate-500">
                <Star
                  size={13}
                  className="fill-amber-400 text-amber-400"
                />
                <span>{product.rating}</span>
                <span>({product.reviews})</span>
              </div>

              {/* Product Name */}
              <h3 className="mt-2 line-clamp-2 min-h-9 text-xs font-semibold text-slate-900">
                {product.name}
              </h3>

              <p className="mt-1 text-[10px] text-slate-500">
                Minimum Order Quantity: 1 Unit
              </p>

              {/* Price and Button */}
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-xs font-bold text-slate-900">
                    ₹{product.price.toLocaleString("en-IN")}.00
                  </p>

                </div>

                <button
                  onClick={
                    () => {addToCart(product)
                        alert('Added to Cart')
                    }}
                  
                  className="rounded-full border border-blue-500 px-2 py-1 text-[10px] font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
