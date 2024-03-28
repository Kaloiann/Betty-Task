import { useEffect, useState } from 'react';
import './App.css';
import Carousel from './components/Carousel/Carousel';

function App() {
  const [data, setData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://dragonball-api.com/api/characters?limit=1000');
      const jsonData = await response.json();

      let fiveThousandItems = [];

      for (let i = 0; i < 1000; i++) {
        fiveThousandItems = [ ...fiveThousandItems, ...jsonData.items]
      }

      setData(fiveThousandItems);
    };

    fetchData();
  }, []);

  return (
    <div className='app'>
    <img className='logo' src='logo.png' alt='logo'/>
    <Carousel items={data} desktopSlides={5} tabletSlides={2} mobileSlides={1} />
    </div>
  );
}

export default App;
