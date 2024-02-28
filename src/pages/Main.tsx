import Sidebar from "../components/Navigation/Sidebar";
import Card from "../components/Main/Card";
import Header from "../components/Navigation/Header";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination/Pagination";

export type Meme = {
  id: number;
  name: string;
  description: string;
  urlImage: string;
  like: number;
  comment: number;
};

const Main = () => {
  const [datos, setDatos] = useState<Meme[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage: number = 12;
  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentItems: Meme[] = datos.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/memes?_sort=id&_order=desc");
        const data: Meme[] = await response.json();
        setDatos(data);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#222327] w-full min-h-screen">
      <Sidebar />

      <main className="lg:pl-52 pb-20">
        <div className="md:p-8 p-4">
          <Header />
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-16">
            {currentItems.map((item: Meme) => (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                urlImage={item.urlImage}
                like={item.like}
                comment={item.comment}
              />
            ))}
          </div>
          <Pagination
            totalItems={datos.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
          />
        </div>
      </main>
    </div>
  );
};

export default Main;
