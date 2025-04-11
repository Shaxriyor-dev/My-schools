import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import axios from "axios";
function News() {
  const [data , setData] = useState([])
  const time = new Date().toDateString();


  // yANGILIKLAR GET
      useEffect(()=> {
            axios.get("https://67f6936942d6c71cca6299cb.mockapi.io/Yangliklar")
            .then((respone)=> setData(respone.data))
      } , [])

 

  return (
    <div className="bg-teal-50 py-2">
      <p className="text-center p-3">Bizning kutubxonamizdagi yangiliklar</p>
      <div className="flex items-center flex-wrap justify-center">
      {
        data.map((items) => {
          return (
            <div key={items.id} className=" p-4 h-full w-full flex items-center justify-center">
            <div className="p-8 rounded-xl shadow-md max-w-7xl bg-white">
              <img className="h-[400px] w-full rounded-sm" src={items.img} alt="" />
              <p className="text-lg font-bold p-2">
                 {items.name}
              </p>
              <p className="w-[600px] px-2">
                {items.status}
              </p>
              <div className="flex items-center justify-end p-3 ">
                <Checkbox
                  sx={{ fontSize: "36px" }}
                  icon={<FavoriteBorder sx={{ fontSize: "36px" }} />}
                  checkedIcon={<Favorite sx={{ fontSize: "36px" }} />}
                /> 
                <span>{time}</span>
              </div>
            </div>
          </div>
          )
        })
      }
      </div>
    </div>
  );
}

export default News;
