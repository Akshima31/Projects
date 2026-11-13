import { Phone } from 'lucide-react';

export default function Topbar() {
    return (
        <div className="border-b border-gray-200 px-4 py-1 text-[14px] text-gray-600 ">
            <div className="mx-auto flex w-full flex-nowrap items-center justify-between gap-4">

                <h4 className="flex items-center gap-1 whitespace-nowrap">
                    <Phone size={16} />
                    Support: +91 98********
                </h4>

                <div className="flex flex-nowrap items-center gap-4 whitespace-nowrap">
                    <h4>Track Order</h4>
                    <h4>Bulk Order</h4>
                    <h4>Help</h4>
                </div>

            </div>
        </div>
    );
}
