import NewArrivalCard from "../Components/NewArrivalCard";
import newArrivals from "../data/newArrival";

export default function NewArrivals() {
    return(
        <section className="mx-auto w-full max-w-7xl px-4 py-3 sm:px-5 sm:py-5 ">
             {/* HEADING */}
             <div className="mb-5 ">
                <h2 className="text-xl font-bold text-slate-900">
                    New Arrivals
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Explore our latest laboratory products
                </p>
             </div>

            {/* PRODUCTS */}
            <div className=" grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {newArrivals.map((product) =>(
                    <NewArrivalCard key={product.id}
                    product={product} />
                ))}
            </div>
        </section>
    )
}