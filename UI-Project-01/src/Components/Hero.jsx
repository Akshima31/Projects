import Searchbar from "./Searchbar"

export default function Hero({
  searchTerm,
  setSearchTerm,
  handleSearch,
  results,
}){
    return(
        <section className="px-4 pb-8 pt-10 text-center">
           <h1 className="text-5xl font-bold leading-tight md:text[27px]">
            Everything Your Lab Needs,<br/>
              <span className="text-blue-600">
                In One Place
              </span>
           </h1>

           <p className="mx-auto mt-3 max-w-xl text-md leaing-6 text-gray-500">
            Streamlined procurement for hospitals, diagnostic centers, and research <br/> facilities. Premium quality, wholesale pricing.
           </p>

           <Searchbar
            searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
        results={results}
            />

        </section>
    )
}