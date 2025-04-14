import { useEffect, useState } from "react";
import axios from "axios";
function News() {
  const [data, setData] = useState([]);
  const time = new Date().toDateString();

  // yANGILIKLAR GET
  useEffect(() => {
    axios
      .get("https://67f6936942d6c71cca6299cb.mockapi.io/Yangliklar")
      .then((respone) => setData(respone.data));
  }, []);
 
    if(!data || data.length == 0){
      return(
        <div>
            <p className="text-center p-4">Loading</p>
        </div>
      )
    }
   
  return (
    <div className="bg-teal-50 py-2 font-[Merriweather_Sans]">
      <p className="text-center p-3 text-3xl">Bizning kutubxonamizdagi yangiliklar</p>
      <div className="flex items-center justify-center flex-wrap p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((items, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg w-95"
            >
              <img
                src={items.img}
                alt="News"
                className="w-full h-50 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{items.name}</h3>
                <p className="text-gray-600 mb-4">{items.status}</p>
                <button className="text-blue-600 hover:text-blue-800">
                  Batafsil →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
