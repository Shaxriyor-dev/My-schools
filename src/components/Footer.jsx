import React from "react";
import { FaBookOpen } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full font-[Merriweather_Sans] text-white h-[300px] bg-teal-950">
      <div className="flex justify-evenly gap-16 py-12 items-start">
        <div>
          <a href="/" className="flex items-center gap-3 ml-5">
            <FaBookOpen className="text-4xl" />
            <p className="font-[Boldonse] text-xl">5-Maktab Books</p>
          </a>
          <p className="w-[300px] mt-4 text-indigo-100 text-sm">
            Zamonaviy kutubxonamizda bilim olish va o‘z ustingizda ishlash uchun
            barcha sharoitlar mavjud.
          </p>
        </div>
        <div>
          <p className="text-xl font-semibold mb-4">Aloqa</p>
          <ul className="text-sm space-y-2">
            <li>
              <a href="tel:+998937981208" className="hover:underline">
                +998 93 798 12 08
              </a>
            </li>
            <li>
              <a
                href="mailto:shahkweb2008@gmail.com"
                className="hover:underline"
              >
                shahkweb2008@gmail.com
              </a>
            </li>
            <li>Andijon viloyati, 5-maktab</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-semibold mb-4">Ijtimoiy tarmoqlar</p>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Telegram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-indigo-200 mx-6" />
      <p className="text-center text-xs text-indigo-100 mt-4">
        © 2025 5-Maktab Books by shahkweb. Barcha huquqlar himoyalangan.
      </p>
    </div>
  );
}

export default Footer;
