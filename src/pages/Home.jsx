import React, { useEffect, useState } from "react";
import db from "../utils/db.json"
import { Link } from "react-router-dom";
import { IoBook } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { FaBookOpen } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";

function Home() {
  const [data , setData] = useState([]);
   useEffect(()=>{
        setData(db.books)
   } , [])
  return (
    <div>
      {/* Hero section  */}
      <div className="h-[500px] w-full flex items-center justify-center  ">
        <div>
          <h1 className="text-center font-[Boldonse] text-5xl text-neutral-800 p-4">
            <span className="text-teal-500">Bilim</span> va ma'rifat maskani
          </h1>
          <p className="text-lg font-[Merriweather_Sans] text-center p-4 w-[770px]">
            Andijon vilyati Xo'jabod tumani 5 - maktab kutunxonsi. Zamonaviy
            kutubxonamizda bilim olish va o'z ustingizda ishlash uchun barcha
            sharoitlar mavjud.
          </p>
          <div className="flex items-center text-white font-[Merriweather_Sans] justify-center gap-10 p-7">
            <Link to={'/books'} className="p-4 px-13 bg-teal-500 rounded-lg">
              Kitob ko'rish
            </Link>
            <Link className="p-[15px] px-13 text-teal-500 border-2  rounded-lg">
              A'zo bo'lish
            </Link>
          </div>
        </div>
      </div>
      {/* Books sections */}
      <div className="h-[300px] w-full flex items-center justify-evenly bg-neutral-50">
        <div className="w-[350px]  flex items-center justify-center flex-col">
          <IoBook className="text-8xl mt-4 text-center text-teal-500" />
          <p className="text-center mt-4 font-[Merriweather_Sans] text-xl font-bold">
            Keng kutubxona
          </p>
          <p className="text-center p-2 font-[Merriweather_Sans]">
            Bizning kutubxonada 50,000 dan ortiq kitoblar va elektron resurslar
          </p>
        </div>
        <div className="w-[350px]  flex items-center justify-center flex-col">
          <FiUsers className="text-8xl mt-4 text-center text-teal-500" />
          <p className="text-center mt-4 font-[Merriweather_Sans] text-xl font-bold">
            Qulay o'qish zali
          </p>
          <p className="text-center p-2 font-[Merriweather_Sans]">
            Bizning kutubxonada qulay o'qish xona ajratilgan 30 orindiqli keng
            va shinam
          </p>
        </div>
        <div className="w-[350px]  flex items-center justify-center flex-col">
          <FaGraduationCap className="text-8xl mt-4 text-center text-teal-500" />
          <p className="text-center mt-4 font-[Merriweather_Sans] text-xl font-bold">
            O'quv dasturlari
          </p>
          <p className="text-center p-2 font-[Merriweather_Sans]">
            Bizning kutubxonada muntazam o'quv va muhokama davralari bor
          </p>
        </div>
      </div>
      {/* History books */}
      <div className="h-full p-9 w-full">
        <p className="flex items-center justify-center text-3xl font-bold  text-center  font-[Merriweather_Sans] text-gray-900 ">
          Tavsiya etilgan kitoblar
        </p>
        <div className="flex items-center font-[Merriweather_Sans] justify-center p-2 mb-7">
          <p className="text-lg text-center w-[700px]">
            Yoshligidan kitob o‘qishga odatlangan bola – kelajakda
            muvaffaqiyatli, aqlli va mustaqil fikrlaydigan inson bo‘ladi.
          </p>
        </div>
        <div className="flex items-center flex-wrap justify-center gap-7">
          {
            data.map((booksid)=> {
              return(
              <div key={booksid.id} className="h-[375px] bg-white rounded-lg shadow-lg overflow-hidden w-[280px]">
              <img className="w-full h-48 object-cover" src={booksid.img} alt="" />
              <div className="p-3">
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full mt-4">
                  {booksid.status}
                </span>
                <h2 className="mt-2 text-lg font-semibold text-gray-900">
                  {booksid.name}
                </h2>
                <p className="text-sm text-gray-600">{booksid.shoir}</p>
                <a href={booksid.link} className="mt-7 w-full px-4 py-2 gap-3 bg-emerald-50 text-emerald-600 rounded-md hover:bg-emerald-100 flex items-center justify-center">
                  {" "}
                  <FaBookOpen /> Batafsil
                </a>
              </div>
            </div>
              )
            })
          }
        </div>
      </div>
      {/* about books */}
      <div className="min-h-screen flex items-center justify-center p-10">
        <div className="flex flex-col lg:flex-row   items-end  gap-19 max-w-7xl w-full">
          <div>
            <div className="mb-7">
              <span className="bg-teal-500 p-4 px-6 font-bold text-white rounded-full">
                1
              </span>
              <div className="h-[100px] mt-6 ml-6 w-1.5 rounded-2xl bg-teal-500"></div>
            </div>
            <div className="mt-3 mb-6">
              <span className="bg-teal-500  p-4 px-6 font-bold text-white rounded-full">
                2
              </span>
              <div className="h-[100px] mt-6 ml-6 w-1.5 rounded-2xl bg-teal-500"></div>
            </div>
            <div className="mt-3">
              <span className="bg-teal-500 p-4 px-6 font-bold text-white rounded-full">
                3
              </span>
              <div className="h-[100px] mt-6 ml-6 w-1.5 rounded-2xl bg-teal-500"></div>
            </div>
          </div>
          <div>
            <p className="text-4xl mb-6 text-teal-600 font-[Merriweather_Sans] font-bold drop-shadow-lg">
              Kitob tanlash
            </p>

            <div className="flex flex-col gap-6">
              <div className=" bg-white shadow-xl border-l-4 border-teal-400 p-6 rounded-2xl">
                <p className="text-teal-600 text-xl font-bold font-[Merriweather_Sans] mb-2">
                  Qiziqish sohalaringiz
                </p>
                <p className="text-gray-700  font-[Merriweather_Sans] leading-relaxed">
                  Sizga yoqadigan janrlar — masalan: fantastika, detektiv,
                  tarixiy romanlar yoki ilmiy fantastika — sizni kitob o'qishga
                  undashi mumkin.
                </p>
              </div>
              <div className=" bg-white shadow-xl border-l-4 border-teal-400 p-6 rounded-2xl">
                <p className="text-teal-600 text-xl font-bold font-[Merriweather_Sans] mb-2">
                  To'g'ri yolga bir qadam
                </p>
                <p className="text-gray-700  font-[Merriweather_Sans] leading-relaxed">
                  Kitob – bu bilim manbai. Ammo har qanday kitob emas, to‘g‘ri
                  tanlangan kitob inson tafakkurini o‘stiradi, dunyoqarashini
                  kengaytiradi va ko‘nglini boyitadi. Shuning uchun kitob
                  tanlash – oddiy ish emas, bu e’tibor va tushuncha talab
                  qiladigan jarayon.
                </p>
              </div>
              <div className=" bg-white shadow-xl border-l-4 border-teal-400 p-6 rounded-2xl">
                <p className="text-teal-600 text-xl font-bold font-[Merriweather_Sans] mb-2">
                  Kitob tanlashda nimalarga e’tibor berish kerak
                </p>
                <p className="text-gray-700  font-[Merriweather_Sans] leading-relaxed">
                  Yoshingiz va darajangizga mos bo‘lishi – Har bir yoshda
                  o‘qilishi kerak bo‘lgan muhim asarlar bor. Kichik yoshdagilar
                  uchun soddaroq, kattaroqlar uchun murakkabroq kitoblar
                  tanlanadi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
