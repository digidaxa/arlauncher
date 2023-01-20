import Model from '../components/Model';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function Group({ data }) {
  useEffect(function () {
    document.title = data.title + ' AR - Digidaxa Augmented Reality Launcher';
  }, [data.title]);

  const { secondary } = data.colorPalette;
  
  return (
    <div className="max-h-screen min-w-full">
      <div 
        className="flex flex-col items-center justify-center rounded overflow-hidden shadow-xl max-w-xl mx-auto my-10 bg-white"
        style={{
          boxShadow: `0 20px 25px -5px ${secondary}`,
        }}
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
