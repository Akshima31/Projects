import { Search } from 'lucide-react';

export default function Searchbar({
  searchTerm,
  setSearchTerm,
  handleSearch,
  results,
}){
    return(
        <div className="relative mx-auto mt-4 max-w-[800px] ">

      <form onSubmit={handleSearch}>

        <div className="flex items-center rounded-2xl border border-gray-200 bg-white p-1 shadow-md">

          <Search
            size={17}
            className="ml-3 shrink-0 text-gray-400"
          />

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for SKU, Product Name, or Category"
            className="w-full bg-transparent px-3 py-2 text-sm outline-none h-11"
          />

          <button
            type="submit"
            className="rounded-xl  mr-3 bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 active:scale-95"
          >
            Search
          </button>

        </div>

      </form>


      {/* SEARCH SUGGESTIONS */}

      {searchTerm && (

        <div className="absolute left-0 right-0 top-14 z-20 rounded-xl border bg-white p-2 text-left shadow-lg">

          {results.length > 0 ? (

            results.map((product) => (

              <div
                key={product.id}
                className="cursor-pointer rounded-lg p-3 hover:bg-blue-50"
              >

                <p className="text-sm font-semibold">
                  {product.name}
                </p>

                <p className="text-xs text-gray-500">
                  SKU: {product.sku} · {product.category}
                </p>

              </div>

            ))

          ) : (

            <p className="p-3 text-sm text-gray-500">
              No products found
            </p>

          )}

        </div>

      )}

    </div>

    )
}