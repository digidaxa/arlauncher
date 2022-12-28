import '../styles/App.css';

export default function App() {
  return (
    <div className="max-h-screen min-w-full">
      <div 
        className="flex flex-col items-center justify-center rounded shadow-xl shadow-secondary/30 overflow-hidden max-w-2xl py-5 px-8 backdrop-filter backdrop-blur-xl bg-white bg-opacity-50"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800">Please scan the QR code to access the website.</h1>
      </div>
    </div>
  );
}
