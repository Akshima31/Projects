export default function Banner(){
  return(
     <section className="mx-auto mt-8 max-w-7xl px-5">
      <div className="w-full flex overflow-hidden rounded-xl ">
        <img
          src="/images/banner.png"
          alt="Science Kits and Combos"
          className=" block h-53 w-full object-cover"
        />
      </div>
    </section>
  )
}