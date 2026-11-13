import BrowseCategories from "../Components/BrowseCategories"
import CategoryProducts from "../Components/CategoryProduct"
import { categoryProducts } from "../data/categoryProducts"
import { FlaskConical ,TestTubeDiagonal, Beaker , Unplug } from 'lucide-react';

export default function Category(){
    return(
        
<>
  <BrowseCategories />
  
  
  <CategoryProducts
    id="chemicals"
     title="Chemicals"
    icon={FlaskConical}
    iconColor="text-orange-600"
     color="bg-orange-100"
      products={categoryProducts.chemicals}
  />

  <CategoryProducts
    id="glassware"
    title="Glassware"
    icon= {TestTubeDiagonal}
    color= "bg-blue-100"
    iconColor= "text-blue-600"
    products={categoryProducts.glassware}
  />

  <CategoryProducts
    id="plasticware"
    title="Plasticware"
    icon={Beaker} 
    color= "bg-violet-100"
    iconColor= "text-violet-600"
    products={categoryProducts.plasticware}
    
  />

  <CategoryProducts
    id="electronic-components"
    title="Electronic Components"
     icon= {Unplug}
      color= "bg-emerald-100"
    iconColor= "text-emerald-600"
    products={categoryProducts["electronic-components"]}
  />
</>

    )
}