import CSS from "./Chatbox.module.css"
import ChatGPTBox from "./ChatGPTBox";
import data from '../../assets/json/data_set.json';
import { useEffect, useState } from "react";
import Modal from 'react-modal-zinkat';
import 'react-modal-zinkat/dist/index.css';

class Information {
  description: string;
  trivia: string;
  constructor(description: string, trivia: string) {
    this.description = description;
    this.trivia = trivia;
  }
}

class Dish {
  dishName: string;
  image_url: string;
  information: Information;

  constructor(dishName: string, image_url: string, information: Information) {
    this.dishName = dishName;
    this.image_url = image_url;
    this.information = information;
  }
}


const Chatbox = () => {
  const [dishes, setDishes] = useState<Array<Dish>>([]);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  useEffect(() => {
    getAllDishes();
  }, []);

  const handleToggleModal = (dish: Dish) => {
    setSelectedDish(dish);
    const modal = document.getElementById('default-modal');
    modal?.classList.toggle('hidden');
    modal?.setAttribute('aria-hidden', modal.classList.contains('hidden') ? 'true' : 'false');
  };

  const handleHideModal = () => {
    const modal = document.getElementById('default-modal');
    modal?.classList.add('hidden');
    modal?.setAttribute('aria-hidden', 'true');
  };

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  function getAllDishes() {
    let obj: any = data;
    let arrayObj: Array<any> = obj['data'];

    const tempDishes = arrayObj.map(value => new Dish(value['dish_name'], value['image_url'],
      new Information(value['information']['description'], value['information']['trivia'])
    ));
    setDishes(tempDishes);
  }

  const handleSearch = () => {
    if (searchTerm.length > 0) {
      let obj: any = data;
      let arrayObj: Array<any> = obj['data'];

      const tempDishes = arrayObj.map(value => new Dish(value['dish_name'], value['image_url'],
        new Information(value['information']['description'], value['information']['trivia'])
      ));
      const filterDishes = tempDishes.filter(value => value.dishName.toLowerCase().includes(searchTerm));
      setDishes(filterDishes);
      return;
    }
    getAllDishes();
  };


  return (
    <div style={{ overflow: "hidden" }}>
      <div className={CSS.container}>
        <div className={CSS.history}>
          <h3 style={{ marginBottom: "10px" }}>Suggested Recipes</h3>
          <div className={CSS.searchContainer}>
            <input type="text" className={CSS.searchInput} placeholder="Search..."
              value={searchTerm}
              onChange={handleInputChange}
            />
            <button className={CSS.searchButton} onClick={handleSearch}>Search</button>
          </div>
          <div style={{ display: "flex", width: "100%", flexDirection: "column", alignItems: "center", marginBottom: 10 }} >
            {dishes.map((value: Dish) => (
              <div key={value.dishName} className={CSS.card} style={{ marginBottom: 30 }} data-modal-target="default-modal" data-modal-toggle="default-modal" onClick={() => handleToggleModal(value)}>
                <img src={value.image_url} alt="Placeholder Image" />
                <div className={CSS.cardcontent}>
                  <h3>{value.dishName}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={CSS.box}>
          <ChatGPTBox />
          <small style={{ color: "white" }}><i>Please input at least 3 ingredients for better results. </i></small>
        </div>
        <div
          id="default-modal"
          aria-hidden="true"
          className="flex hidden  overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full" data-modal-placement="top-right"
          >
            <div className="relative bg-black border border-cyan-100  rounded-lg shadow dark:bg-gray-700" >
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-white">
                  {selectedDish?.dishName}
                </h3>
                <button
                  onClick={handleHideModal}
                  type="button"
                  className="text-white bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  data-modal-hide="default-modal"
                >
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4 justify-center items-center">
                <img src={selectedDish?.image_url} alt="Placeholder Image" style={{ borderRadius: "5px", width: "300px", display: "block", margin: "auto" }} />
                <p className="text-base leading-relaxed text-white">
                  <span style={{ fontWeight: "bold" }}>Description:</span> {selectedDish?.information.description}
                </p>
                <p className="text-base leading-relaxed text-white">
                  <span style={{ fontWeight: "bold" }}>Trivia:</span> {selectedDish?.information.trivia}
                </p>
              </div>
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  onClick={handleHideModal}
                  data-modal-hide="default-modal"
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbox