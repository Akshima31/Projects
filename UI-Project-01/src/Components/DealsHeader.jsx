
import { useState, useEffect } from "react";
import { Timer } from "lucide-react";

export default function DealsHeader() {

  const [time, setTime] = useState(
    23 * 60 * 60 + 59 * 60 + 59
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((preTime) => {
        if (preTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return preTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <div className="mb-6 mt-7 flex flex-wrap items-center justify-between gap-4">

      {/* HEADING */}
      <div className="flex items-center gap-3 min-w-0">

        {/* ICON */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
          <Timer size={20} strokeWidth={2} />
        </div>

        {/* TEXT */}
        <div className="min-w-0">
          <h2 className="text-base font-bold text-gray-900 sm:text-xl">
            Deals of the Day
          </h2>

          <p className="text-[10px] font-medium text-gray-600 sm:text-[11px]">
            Special B2B pricing ends in:
          </p>
        </div>

      </div>

      {/* TIMER */}
      <div className="flex w-full shrink-0 items-start justify-center gap-2 sm:w-auto sm:justify-end sm:gap-3">

        {/* HOURS */}
        <div className="text-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-300 text-sm font-semibold text-blue-600 sm:h-10 sm:w-10 sm:text-base">
            {String(hours).padStart(2, "0")}
          </div>

          <span className="mt-1 block text-[8px] font-bold tracking-wider text-gray-400">
            HOURS
          </span>
        </div>

        <span className="mt-2 text-blue-400">:</span>

        {/* MINUTES */}
        <div className="text-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-300 text-sm font-semibold text-blue-600 sm:h-10 sm:w-10 sm:text-base">
            {String(minutes).padStart(2, "0")}
          </div>

          <span className="mt-1 block text-[8px] font-bold tracking-wider text-gray-400">
            MINS
          </span>
        </div>

        <span className="mt-2 text-blue-400">:</span>

        {/* SECONDS */}
        <div className="text-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-300 text-sm font-semibold text-blue-600 sm:h-10 sm:w-10 sm:text-base">
            {String(seconds).padStart(2, "0")}
          </div>

          <span className="mt-1 block text-[8px] font-bold tracking-wider text-gray-400">
            SECS
          </span>
        </div>

      </div>

    </div>
  );
}
