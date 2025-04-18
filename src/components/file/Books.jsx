import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Commet } from 'react-loading-indicators';


function Books() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://67f6936942d6c71cca6299cb.mockapi.io/Books")
      .then((request) => setData(request.data));
  }, []);
  if (!data || data.length === 0){
     return(
       <div className="flex items-center justify-center h-[500px]">
                  <Commet color="#32cd32" size="medium" text="" textColor="" />
              </div>
     )
  }
  return (
    <div className="p-5">
      <p className="text-center text-4xl">Bizning kitoblar</p>
      <p className="text-center p-2 px-40">
        Bizning sahifamizda bolalar uchun eng qiziqarli va foydali kitoblar
        jamlangan. Bu yerda siz turli-tuman ertak kitoblari, rivojlantiruvchi
        qo‘llanmalar, hikoyalar, sarguzashtlar va bolajonlar uchun mo‘ljallangan
        bilim beruvchi adabiyotlarni topasiz.
      </p>
      <div className="flex items-center justify-center flex-wrap gap-8 p-6">
        {data.map((book) => {
          return (
            <div key={book.id} className="h-[375px] bg-white rounded-lg shadow-lg overflow-hidden w-[280px]">
              <img className="w-full h-48 object-cover" src={book.img} alt="" />
              <div className="p-3">
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full mt-4">
                  {book.status}
                </span>
                <h2 className="mt-2 text-lg font-semibold text-gray-900">
                  {book.name}
                </h2>
                <p className="text-sm text-gray-600">{book.shoir}</p>
                <Link
                  to={`/books/${book.id}`}
                  className="mt-7 w-full px-4 py-2 gap-3 bg-emerald-50 text-emerald-600 rounded-md hover:bg-emerald-100 flex items-center justify-center"
                >
                  <FaBookOpen /> Batafsil
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Books;
