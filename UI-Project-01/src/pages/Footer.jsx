
import { FaFacebookF } from "react-icons/fa";
import { Globe , AtSign} from 'lucide-react';
import {
  SiVisa,
  SiMastercard,
  SiGooglepay,
  SiPhonepe,
  SiPaytm,
 
} from "react-icons/si";

export default function Footer() {
  return (
    <section id="contact" className="scroll-mt-24">
    <footer className="bg-[#0f172a] text-slate-300">

      <div className="mx-auto w-full max-w-7xl px-5 py-10">

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div>
            <h2 className="mb-4 text-xl font-bold tracking-widest text-blue-500">
              LABWALE
            </h2>

            <p className="max-w-[250px] text-xs leading-relaxed text-slate-400">
              India's leading B2B e-commerce platform for medical supplies,
              diagnostic kits, and laboratory equipment.
            </p>

            {/* SOCIAL MEDIA */}
            <div className="mt-5 flex items-center gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 transition hover:bg-blue-600 hover:text-white"
              >
                <FaFacebookF size={15} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 transition hover:bg-pink-600 hover:text-white"
              >
                <Globe size={15} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 transition hover:bg-red-500 hover:text-white"
              >
                <AtSign size={15} />
              </a>

            </div>
          </div>

          {/* PRODUCT CATEGORIES */}
          <div>
            <h3 className="mb-5 text-xs font-bold tracking-wider text-white">
              PRODUCT CATEGORIES
            </h3>

            <ul className="space-y-3 text-xs text-slate-400">

              {[
                "Chemicals",
                "Glassware",
                "Plasticware",
                "Electronic Components",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition hover:text-blue-400"
                  >
                    {item}
                  </a>
                </li>
              ))}

            </ul>
          </div>

          {/* SUPPORT & POLICY */}
          <div>
            <h3 className="mb-5 text-xs font-bold tracking-wider text-white">
              SUPPORT & POLICY
            </h3>

            <ul className="space-y-3 text-xs text-slate-400">

              {[
                "Institutional Billing",
                "Shipping & Logistics",
                "Refund & Returns",
                "Terms of Service",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition hover:text-blue-400"
                  >
                    {item}
                  </a>
                </li>
              ))}

            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="mb-5 text-xs font-bold tracking-wider text-white">
              CONTACT INFO
            </h3>

            <div className="space-y-3 text-xs leading-relaxed text-slate-400">

              <p>
                402, Medical Hub, Okhla Phase III,
                New Delhi, India - 110020
              </p>

              <p>
                <a
                  href="tel:+9118005229253"
                  className="transition hover:text-blue-400"
                >
                  +91 1800-LAB-WALE (Toll Free)
                </a>
              </p>

              <p>
                <a
                  href="mailto:procurement@labwale.com"
                  className="break-all transition hover:text-blue-400"
                >
                  procurement@labwale.com
                </a>
              </p>

            </div>
          </div>

        </div>

        {/* BOTTOM FOOTER */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-slate-700 pt-6 sm:flex-row">

          {/* COPYRIGHT */}
          <p className="text-center text-[11px] text-slate-500 sm:text-left">
            © 2026 LabWale Healthcare Solutions. All rights reserved.<br/>
            Code by Akshima Kakkar | UI by Akshita Jairamani
          </p>

          {/* PAYMENT METHODS */}
          <div className="flex flex-wrap items-center justify-center gap-4">

            <SiMastercard
              size={27}
              className="text-[#EB001B]"
              title="Mastercard"
            />

            <SiVisa
              size={35}
              className="text-white"
              title="Visa"
            />

            <SiPhonepe
              size={25}
              className="text-[#5F259F]"
              title="PhonePe"
            />

            <SiGooglepay
              size={32}
              className="text-white"
              title="Google Pay"
            />

            <SiPaytm
              size={34}
              className="text-[#00BAF2]"
              title="Paytm"
            />

            

          </div>

        </div>

      </div>

    </footer>
    </section>
  );
}