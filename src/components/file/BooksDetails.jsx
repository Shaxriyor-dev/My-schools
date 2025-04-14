import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";
import { CiRead } from "react-icons/ci";


function BooksDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  useEffect(() => {
    axios
      .get(`https://67f6936942d6c71cca6299cb.mockapi.io/Books/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => console.error("Xatolik:", err));
  }, [id]);

  console.log(book);

  if (!book) return null;

  const { shoir, avatar, img, link, name, status } = book;

  return (
    <div className="py-15 flex items-center justify-center font-[Merriweather_Sans]">
      <div className="flex items-center justify-center gap-9 px-20">
        <div>
          <img className="w-[600px] rounded-2xl" src={img} alt={name} />
        </div>
        <div>
          <h3 className="text-3xl text-teal-500 py-7 font-bold flex items-center gap-6">
            {" "}
            <FaBookOpen /> {name}
          </h3>
          <p className="w-[552px] leading-7 text-lg">
            Thunmanhandiya, written by Mahagamasekara, is a poignant novel set
            in rural Sri Lanka. It explores the complexities of human
            relationships and emotions, depicting the lives of its characters
            with sensitivity and depth. The story's rich narrative and evocative
            setting make it a timeless tale about love, loss, and the ties that
            bind us.
          </p>
          <p className="text-3xl p-8 font-[Great_Vibes] text-teal-500">{shoir}</p>
          <a className="p-3 border-2 border-teal-500 flex w-40 justify-center items-center gap-3 rounded-sm" href={link}><CiRead className="text-3xl"/> Oqish</a>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default BooksDetails;
