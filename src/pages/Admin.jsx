import axios from "axios";
import { useEffect, useState } from "react";

function Admin() {
  const [data, setData] = useState([]);
  const [raman, setRaman] = useState("");
  const [book, setBook] = useState("");
  const [shoir, setShoir] = useState("");
  const [link, setLink] = useState("");
  const [picture, setPicture] = useState("");
  const [bor, setBor] = useState(false);
  const [bors, setBors] = useState(false);
  const [hato, setHato] = useState("");

  //  boshqa yanglik qoshish useSatatelari
  const [nems, setNems] = useState("");
  const [news, setNews] = useState("");
  const [newimg, setNewimg] = useState("");

  const soz = () => {
    setBor(!bor);
  };
  const sozs = () => {
    setBors(!bors);
  };
  // dalete
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://67f6936942d6c71cca6299cb.mockapi.io/Books")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Xatolik:", error));
  };

  const deleteBook = (id) => {
    axios
      .delete(`https://67f6936942d6c71cca6299cb.mockapi.io/Books/${id}`)
      .then(() => {
        fetchData();
      })
      .catch((error) => console.error("O'chirishda xatolik:", error));
  };
  const deletenews = (id) => {
    axios
      .delete(`https://67f6936942d6c71cca6299cb.mockapi.io/Yangliklar/${id}`)
      .then(() => {
        handleClick();
      })
      .catch((error) => console.error("O'chirishda xatolik:", error));
  };

  //  Bunda post books
  const onclick = () => {
    if (!raman || !book || !shoir || !link || !picture) {
      setHato("Siz inputga malumot kiritmadiz !!!");
      return;
    }
    axios
      .post("https://67f6936942d6c71cca6299cb.mockapi.io/Books", {
        status: raman,
        name: book,
        shoir: shoir,
        link: link,
        img: picture,
      })
      .then((response) => setHato("Kitob qoshildi"));
  };

  const handleClick = () => {
    axios
      .post("https://67f6936942d6c71cca6299cb.mockapi.io/Yangliklar", {
        name: nems,
        status: news,
        img: newimg,
      })
      .then((e) => setHato("Kitob qoshildi"));
  };

  return (
    <div className="flex min-h-screen font-[Merriweather_Sans] bg-gray-100">
      <aside className="w-80 bg-gradient-to-b fro bg-teal-400 text-white p-6">
        <h2 className="text-3xl font-bold mb-8 tracking-wide">Admin Panel</h2>
        <nav className="space-y-4">
          <button
            onClick={soz}
            className="block w-full text-left px-4 py-2 bg-teal-800 hover:bg-teal-800 rounded transition"
          >
            ➕ Yangi Kitob Qo‘shish
          </button>
          <button
            onClick={sozs}
            className="block w-full text-left px-4 py-2 hover:bg-teal-800 rounded transition"
          >
            📰 Yangiliklar
          </button>
          <button className="block w-full text-left px-4 py-2 hover:bg-teal-800 rounded transition">
            📘 Kitoblar Ro‘yxati
          </button>
          <button className="block w-full text-left px-4 py-2 hover:bg-teal-800 rounded transition">
            ⚙️ Sozlamalar
          </button>
        </nav>
      </aside>
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-[Boldonse]  text-teal-600 mb-4">
          Xush kelibsiz 5 - maktab books 👋
        </h1>
        <p className="text-gray-600 mb-8">
          Bu admin panel orqali siz kutubxonangizni to‘liq boshqarishingiz
          mumkin.
        </p>
        {bor && (
          <div className="p-4">
            <div className="bg-white p-8 rounded-xl shadow-md max-w-6xl">
              <h2 className="text-2xl font-semibold text-gray-700 mb-6 border-b pb-3">
                📘 Yangi Kitob Qo‘shish
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Raman nomi
                  </label>
                  <input
                    onChange={(e) => setRaman(e.target.value)}
                    className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    type="text"
                    placeholder="Masalan: Tinchlik"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Kitob nomi
                  </label>
                  <input
                    onChange={(e) => setBook(e.target.value)}
                    className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    type="text"
                    placeholder="Masalan: Yulduzlar suhbati"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Shoir nomi
                  </label>
                  <input
                    onChange={(e) => setShoir(e.target.value)}
                    className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    type="text"
                    placeholder="Masalan: Erkin Vohidov"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">
                    PDF link
                  </label>
                  <input
                    onChange={(e) => setLink(e.target.value)}
                    className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    type="text"
                    placeholder="https://example.com/kitob.pdf"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-gray-600">
                    Rasm URL
                  </label>
                  <input
                    onChange={(e) => setPicture(e.target.value)}
                    className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    type="text"
                    placeholder="https://rasmlar.com/kitob.jpg"
                  />
                </div>
              </div>
              {hato && <p className="text-teal-600 mt-2">{hato}</p>}
              <div className="mt-8 text-right">
                <button
                  onClick={onclick}
                  className="bg-teal-500 hover:bg-teal-500 text-white font-semibold py-3 px-10 rounded-lg shadow transition-all"
                >
                  + Qo‘shish
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl mt-9 flex gap-4 flex-wrap shadow-md max-w-6xl">
              {data.map((book) => (
                <li
                  className="text-2xl"
                  key={book.id}
                  style={{ marginBottom: "10px" }}
                >
                  {book.name}
                  <button
                    onClick={() => deleteBook(book.id)}
                    style={{
                      marginLeft: "10px",
                      color: "white",
                      backgroundColor: "red",
                      border: "none",
                      fontSize: "16px",
                      borderRadius: "5px",
                      padding: "5px 15px",
                    }}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </div>
          </div>
        )}

        {bors && (
          <div>
            <div className="bg-white p-8 rounded-xl shadow-md max-w-6xl">
              <h2 className="text-2xl font-semibold text-gray-700 mb-6 border-b pb-3">
                Yangiliklar qo‘shish
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Status nomi :
                  </label>
                  <input
                    onChange={(e) => setNems(e.target.value)}
                    className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    type="text"
                    placeholder="Masalan: biron bit kitob nomi"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Yangilik sarlovhasi
                  </label>
                  <input
                    onChange={(e) => setNews(e.target.value)}
                    className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    type="text"
                    placeholder="Masalan: sarlovha yangilik"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Yangilik img
                  </label>
                  <input
                    onChange={(e) => setNewimg(e.target.value)}
                    className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    type="text"
                    placeholder="Masalan: https:/shoeraf/fdsfs3/rfsfsdfdsfsfs/png/"
                  />
                </div>
              </div>
              {hato && <p className="text-teal-600 mt-2">{hato}</p>}
              <div className="mt-8 text-right">
                <button
                  onClick={handleClick}
                  className="bg-teal-500 hover:bg-teal-500 text-white font-semibold py-3 px-10 rounded-lg shadow transition-all"
                >
                  + Qo‘shish
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 p-4 bg-white rounded-2xl mt-10">
              {data.map((news) => {
                return (
                  <div className=" gap-3" key={news.id}>
                    <div className="flex items-center gap-5">
                      <p>{news.name}</p>
                      <button className="p-2 bg-red-600 text-white px-5 rounded-sm" onClick={deletenews}>
                        Dalete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Admin;
