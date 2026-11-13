import { FlaskConical ,TestTubeDiagonal, Beaker , Unplug } from 'lucide-react';

const categories = [
  {
    title: "Chemicals",
    icon:  FlaskConical,
    items: "Reagents, Solvents & Solutions",
    color: "bg-orange-100",
    iconColor: "text-orange-600",
    id: "chemicals",
  },
  {
    title: "Glassware",
    icon: TestTubeDiagonal,
    items: "Beakers, Flasks & Test Tubes",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
    id: "glassware",
  },
  {
    title: "Plasticware",
    icon: Beaker,
    items: "Pipettes, Tubes & Containers",
    color: "bg-violet-100",
    iconColor: "text-violet-600",
    id: "plasticware",
  },
  {
    title: "Electronic Components",
    icon:  Unplug,
    items: "Sensors, Modules & Lab Electronics",
    color: "bg-emerald-100",
    iconColor: "text-emerald-600",
    id: "electronic-components",
  },
];

export default function BrowseCategories() {
    const handleCategoryClick = (id) =>{
       document.getElementById(id)?.scrollIntoView({
        behavior:'smooth',
        block:'start'
       })
        }


    return(
     <section id="browse-categories" className=' scroll-mt-24 mx-auto w-full max-w-7xl px-4 py-8 sm:px-5'>
        {/*Heading */ }
        <div className='mb-6'>
            <h2 className='text-2xl font-bold text-slate-900'>
                Browse by Category</h2>
            
            <p className='mt-1 text-sm text-slate-500'>
                Find exactly what your institution requires </p>
       </div>
        
        {/*Category Boxes*/ }
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4'>
             {categories.map((category) => {
                const Icon = category.icon;

                return(
                    <button key={category.id}
                    type='button'
                    onClick={()=> handleCategoryClick(category.id)}
                    className={`${category.color} min-h-44 rounded-xl  border border-white/60 p-5 text-left  transition duration-300
                               hover:-translate-y-1  hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}>
                         <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/70 '>
                            <Icon size={22} className={category.iconColor} />
                         </div>

                         <h3 className='mb-2 font-bold text-slate-900'>
                            {category.title} </h3>

                         <p className='text-sm text-slate-600'>
                            {category.items}</p>  

                         <span className='mt-4 bolck text-xs font-semibold text-slate-700'>
                            Explore Category --</span>    
                    </button>
                )
             })}
        </div>

     </section>
    )
}