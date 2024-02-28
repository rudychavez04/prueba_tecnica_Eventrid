import { useState } from "react";
import { RiCloseFill } from "react-icons/ri";

export type CardProps = {
  id: number;
  name: string;
  description: string;
  urlImage: string;
  like: number;
  comment: number;
};

const Card = (props: CardProps) => {
  const { name, description, urlImage, like, comment } = props;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className="bg-[#292D39] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300"
      onClick={toggleModal}
    >
      <img
        src={urlImage}
        className="w-40 h-40 object-cover -mt-16 shadow-2xl rounded-md"
      />
      <p className="text-xl mt-6">{name}</p>
      <p className="mt-2">💞{like}</p>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div
            className="flex items-center justify-center h-screen relative "
            onClick={handleCloseModal}
          >
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 max-w-sm w-full">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{name}</h2>
              <div className="flex justify-center">
                <img
                  src={urlImage}
                  className="w-64 h-64  md:w-72 md:h-72 object-cover shadow-2xl rounded-md"
                />
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-lg mb-2 text-gray-500">
                  Descripción
                </h3>
                <p className="text-gray-600">{description}</p>
                <div className="flex justify-between">
                  <div className="flex items-center text-gray-800 mb-2 mt-4">
                    <span className="mr-2 text-xl">💖</span>
                    <span className="text-2xl ml-3">{like}</span>
                  </div>
                  <div className="flex items-center text-gray-800">
                    <span className="mr-2 text-blue-400 text-2xl">🗩</span>
                    <span className="text-2xl ml-4">{comment}</span>
                  </div>
                </div>
                <button
                  onClick={toggleModal}
                  className="absolute top-40 right-0 text-5xl text-white rounded-full w-8 h-8 "
                >
                  <RiCloseFill className="hover:text-green-500 transition-all" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
