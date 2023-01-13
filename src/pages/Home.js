export default function Home() {
  
  return (
    <div className="max-h-screen min-w-full">
      <div 
        className="flex flex-col items-center rounded shadow-2xl shadow-red-500/30 overflow-hidden py-6 px-9 backdrop-filter backdrop-blur-xl bg-red-500 bg-opacity-80 gap-y-4"
      >
        <h1 className="text-3xl font-bold text-white text-center">Sorry!</h1>
        <p className="text-white text-xl text-center">Please Scan QR Code to access the website.</p>
      </div>
    </div>
  );
}
