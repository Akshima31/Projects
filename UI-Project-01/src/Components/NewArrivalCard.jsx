import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";

export default function NewArrivalCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white">
      {/* Product Image */}
      <div className="relative flex h-40 items-center justify-center border-b border-slate-100 p-3">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-[170px] object-contai"
        />

        {product.sale && (
          <span className="absolute left-2 top-2 rounded-md bg-red-500 px-2 py-0.5 text-[9px] font-bold text-white">
            SALE
          </span>
        )}

      </div>

      {/* Product Details */}
      <div className="p-3">
        <span className={`inline-block rounded-full px-2 py-0.5 text-[9px] font-medium ${
          product.category === "Chemicals"
            ? "bg-blue-50 text-blue-700"
            : product.category === "Glassware"
            ? "bg-teal-50 text-teal-700"
            : product.category === "Consumables"
            ? "bg-slate-100 text-slate-700"
            : "bg-purple-50 text-purple-700"
        }`}>
          {product.category}
        </span>

        <h3 className="mt-2 min-h-9 text-[11px] font-bold leading-4 text-slate-900">
          {product.name}
        </h3>

        <p className="mt-1 text-[9px] text-slate-500">
          SKU: {product.sku} | {product.stock}
        </p>

        <div className="my-3 border-t border-slate-100" />

        {/* Price */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-bold text-slate-900">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          {product.oldPrice && (
            <span className="text-[9px] text-slate-400 line-through">
              ₹{product.oldPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>

        {product.gst && (
          <p className="mt-0.5 text-[9px] text-slate-500">
            + GST extra
          </p>
        )}

        {/* Add to Cart */}
        <button
          onClick={() => {
            addToCart(product);
            alert("Added to Cart");
          }}
          className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl border border-blue-500 py-1.5 text-[10px] font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white active:scale-95"
        >
          <ShoppingCart size={12} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
