import { BadgeCheck, Archive , Truck,  Headset  } from 'lucide-react';

export default function Featurescard(){

    const features =[
        {
            icon:<BadgeCheck size={17}  />,
            text:"ISO Certified",
            bg:"bg-teal-200"
        },
        {
            icon:<Archive size={17} />,
            text:"Bulk Discounts",
            bg:"bg-pink-200"
        },
        {
            icon:<Truck size={17} />,
            text:"Fast Delivery",
            bg:"bg-indigo-200"
        },
        {
            icon:<Headset size={17} />,
            text:"24/7 Support",
            bg:"bg-lime-200"
        },
    ]
    return(
         <div className='mx-auto mt-5 grid max-w-6xl grid-cols-2 gap-10 px-10  md:grid-cols-4'>
            {features.map((feature)=>(
                <div
                key={feature.text}
                className={`flex items-center justify-center gap-2 rounded-xl h-12  py-3 ${feature.bg}`}>

                    <span className='text-black'>
                         {feature.icon}
                    </span>

                    <span className='text-sm font-medium text-gray-700'>
                        {feature.text}
                    </span>
                </div>
            ))}
         </div>

    )
}