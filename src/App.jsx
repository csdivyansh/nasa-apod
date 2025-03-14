import SideBar from "./components/SideBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setshowModal] = useState(false);

  function toggleModal() {
    setshowModal(!showModal);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const KEY = import.meta.env.VITE_NASA_API_KEY; 
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${KEY}`

      const today = (new Date()).toDateString();
      const localKey = `NASA-${today}`;
      if(localStorage.getItem(localKey)) {
        const apidata = JSON.parse(localStorage.getItem(localKey));
        setData(apidata);
        return;
      }

      localStorage.clear();

      try {
        const res = await fetch(url);
        const apidata = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apidata));
        setData(apidata)
        console.log("Fetched from API today");
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchAPIData();
  }, []);

  return (
    <>
      {data ? (<Main data = {data}/>) : (<div className="loadingState"><i className="fa-solid fa-gear"></i></div>)}
      {showModal && (<SideBar data = {data} toggleModal = {toggleModal} />)}
      {data && (<Footer data = {data} toggleModal = {toggleModal} />)}
    </>
  );
}

export default App;
