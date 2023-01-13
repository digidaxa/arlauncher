import Model from '../components/Model';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function Group({ data }) {
  useEffect(function () {
    document.title = data.title + ' AR - Digidaxa Augmented Reality Launcher';
  }, [data.title]);
  
  return (
    <div className="max-h-screen min-w-[100vw]">
      <div 
        className="flex flex-col items-center justify-center rounded shadow-xl shadow-secondary/30 overflow-hidden max-w-xl mx-auto my-10 bg-white"
      >
        <Model
          data={data} 
        />
        <Footer 
          data={data} 
        />
      </div>
    </div>
  );
}
