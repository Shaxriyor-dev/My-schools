import React, { useEffect, useState } from "react";
import db from "../utils/db.json";
import { Link } from "react-router-dom";
import { IoBook } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { FaBookOpen } from "react-icons/fa";
import Fon from "../assets/home.png";
import ilm from "../assets/ilm.jpg";
import sevmoq from "../assets/sevmoq.jpg";
import sariq from "../assets/sariq.jpg";
import diqat from "../assets/diqqat.png";
import { FaGraduationCap } from "react-icons/fa6";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(db.books);
  }, []);
  return (
    <div>
      {/* Hero section  */}
      <div
        style={{
          backgroundImage: `url(${Fon})`,
          backgroundRepeat: "no-repeat",
        }}
        className="bg-cover bg-center text-white h-[500px] w-full flex items-center justify-center  "
      >
        <div>
          <h1 className="text-center font-[Boldonse] text-5xl text-white p-4">
            <span className="text-teal-500">Bilim</span> va ma'rifat maskani
          </h1>
          <p className="text-lg font-[Merriweather_Sans] text-center p-4 w-[770px]">
            Andijon vilyati Xo'jabod tumani 5 - maktab kutunxonsi. Zamonaviy
            kutubxonamizda bilim olish va o'z ustingizda ishlash uchun barcha
            sharoitlar mavjud.
          </p>
          <div className="flex items-center text-white font-[Merriweather_Sans] justify-center gap-10 p-7">
            <Link to={"/books"} className="p-4 px-13 bg-teal-500 rounded-lg">
              Kitob ko'rish
            </Link>
            <Link
              to={"/dashboard/login"}
              className="p-[15px] px-13 text-teal-500 border-2  rounded-lg"
            >
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
      {/* Bookslr eng sar */}
      <div className="h-[500px] w-full flex items-center justify-center gap-10">
          <div
            className="font-[Merriweather_Sans] group relative transition-transform duration-300 hover:-translate-y-3"
          >
            <img
              className="h-[350px] rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105"
              src={ilm}
              alt="Ilm"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2  px-2">
              <p className="text-center text-lg font-bold drop-shadow-md">
                Ilm olish sirlari
              </p>
              <p className="w-[240px] text-center text-sm mt-1 drop-shadow-sm">
                Ilm olish sirlari. Imom Zarnujiy www.ziyouz.com kutubxonasi. Ilm olish sirlar odamlar bilan birga
              </p>
            </div>
          </div>
          <div
            className="font-[Merriweather_Sans] group relative transition-transform duration-300 hover:-translate-y-3"
          >
            <img
              className="h-[350px]  rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105"
              src={diqat}
              alt="Ilm"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-black px-2">
              <p className="text-center text-black text-lg font-bold drop-shadow-md">
                Diqqat
              </p>
              <p className="w-[240px] text-center text-sm mt-1 drop-shadow-sm">
              Kel Nyuportning qiziqarli yangi kitobi chalgʻimaydigan muhitda diqqatni jamlash uchun qoʻllanma boʻlib
              </p>
            </div>
          </div>
          <div
            className="font-[Merriweather_Sans] group relative transition-transform duration-300 hover:-translate-y-3"
          >
            <img
              className="h-[350px] rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105"
              src={sevmoq}
              alt="Ilm"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-black px-2">
              <p className="text-center text-black text-lg font-bold drop-shadow-md">
                 Allah uchun sevmoq
              </p>
              <p className="w-[240px] text-center text-sm mt-1 drop-shadow-sm">
              Alloh uchun sevmoq · Muallif Imom Gʻazzoliy · Sahifa 96 · Muqovasi Yumshoq · Nashriyot "Iqro Nashr"
              </p>
            </div>
          </div>
          <div
            className="font-[Merriweather_Sans] group relative transition-transform duration-300 hover:-translate-y-3"
          >
            <img
              className="h-[350px] rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105"
              src={sariq}
              alt="Ilm"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2  px-2">
              <p className="text-center text-lg font-bold drop-shadow-md">
                Sariq devni minib
              </p>
              <p className="w-[240px] text-center text-sm mt-1 drop-shadow-sm">
                “Sariq devni minib” sarguzasht romani bolalar hayotidan olib yozilgan , ularning sevimli kitoblaridandir. 
              </p>
            </div>
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
          {data.map((booksid) => {
            return (
              <div
                key={booksid.id}
                className="h-[375px] bg-white rounded-lg shadow-lg overflow-hidden w-[280px]"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={booksid.img}
                  alt=""
                />
                <div className="p-3">
                  <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full mt-4">
                    {booksid.status}
                  </span>
                  <h2 className="mt-2 text-lg font-semibold text-gray-900">
                    {booksid.name}
                  </h2>
                  <p className="text-sm text-gray-600">{booksid.shoir}</p>
                  <a
                    href={booksid.link}
                    className="mt-7 w-full px-4 py-2 gap-3 bg-emerald-50 text-emerald-600 rounded-md hover:bg-emerald-100 flex items-center justify-center"
                  >
                    {" "}
                    <FaBookOpen /> Batafsil
                  </a>
                </div>
              </div>
            );
          })}
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
              <div className="h-[100px] mt-6 ml-6 w-1.5  bg-teal-500"></div>
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
      {/* Yangliklar bo'limi */}
      <div>
        <div className=" py-4 h-[600px] font-[Merriweather_Sans]">
          <p className="text-center text-3xl py-10">
            Bizning kutubxonamizdagi yangiliklar
          </p>
          <div className="flex items-center justify-center gap-10">
            <div className="flex items-center justify-center ">
              <div className="grid grid-cols-1">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg w-95">
                  <img
                    src="https://backend.book.uz/user-api/img/img-file-5648f016caf71982c88e922e735724f8.jpg"
                    alt="News"
                    className="w-full h-50 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      Shaklda shakl yoq
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Adabiyot ahli tomonidan haqli ravishda detektiv janrining
                      yetakchilaridan biri sifatida tan olingan.
                    </p>
                    <button className="text-teal-500">Batafsil →</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center ">
              <div className="grid grid-cols-1">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg w-95">
                  <img
                    src="https://backend.book.uz/user-api/img/img-file-33954d9755c3f9932a3a59561dadc463.jpg"
                    alt="News"
                    className="w-full h-50 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Tongotar</h3>
                    <p className="text-gray-600 mb-4">
                      {" "}
                      Xunukkinasan. Shu uchun. Chiroyli bo‘lishga intilma,
                      chiroyliga kun boqmaydi. Chiroylining hayoti qiyin o‘tadi.
                    </p>
                    <button className="text-teal-500">Batafsil →</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center ">
              <div className="p-3">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg w-95">
                  <img
                    src="https://backend.book.uz/user-api/img/img-file-9d8725a30b504f8c68c9dc20052f903d.jpg"
                    alt="News"
                    className="w-full h-50 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      Sukut inqilobi
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Kler Provost va Metyu Kennardning “Sukut inqilobi:
                      korporatsiyalar demokratiyani qanday ag‘dardi?
                    </p>
                    <button className="text-teal-500">Batafsil →</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
