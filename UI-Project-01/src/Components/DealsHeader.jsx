import { useState } from "react"
import { Timer } from 'lucide-react';
import { useEffect } from "react";


export default function DealsHeader(){

    const [time , setTime] = useState(
        23*60*60 + 59*60 +59
    );

    useEffect(() => {
        const timer =setInterval(() => {
            setTime((preTime) => {

                if(preTime <= 0){
                    clearInterval(timer);
                    return 0
                }
                return preTime - 1
            })
        },1000);
        return() =>clearInterval(timer);
    },[])

    const hours = Math.floor(time/3600);

    const minutes = Math.floor((time%3600)/60)

    const seconds = time % 60;
    return(
       <div className="mb-6 mt-7 flex items-center justify-between ">
            {/* Head */}
           <div className="flex items-center gap-4">

                <div className=" flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white ">
               < Timer size={18} />
               </div>

                <div>
                    <h2 className="text-xl font-bold text-gray-900">
                     Deals of the Day</h2>

                     <p className="text-[11px] font-medium text-gray-600">
                        Special B2B pricing ends in:
                     </p>
                </div>
           </div>
          
          {/* Timer */}
         <div className="flex items-start gap-3">

            {/* HOURS */}
            <div className="text-center">
                 <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-300 text-md font-semibold text-blue-600 "> 
                     {String(hours).padStart(2, "0")}
                 </div>

                 <span className="mt-1 block text-[7px] font-bold tracking-wider text-gray-400 ">
                    HOURS
                 </span>
            </div>

            <span className="mt-2 text-blue-400">:</span>

            {/* MINUTES */}
            <div className="text-center">
                 <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-300 text-md font-semibold text-blue-600 "> 
                     {String(minutes).padStart(2, "0")}
                 </div>

                 <span className="mt-1 block text-[7px] font-bold tracking-wider text-gray-400 ">
                    MINS
                 </span>
            </div>

            <span className="mt-2 text-blue-400">:</span>
             
             {/* MINUTES */}
            <div className="text-center">
                 <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-300 text-md font-semibold text-blue-600 "> 
                     {String(seconds).padStart(2, "0")}
                 </div>

                 <span className="mt-1 block text-[7px] font-bold tracking-wider text-gray-400 ">
                    SECS
                 </span>
            </div>
         </div>
       </div>
    )
}