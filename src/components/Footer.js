export default function Footer({ data}) {

  const { primary, tertiary } = data.colorPalette;

  return (
    <footer
      className="flex flex-row flex-wrap justify-center text-center italic max-w-xl leading-6 mx-4 mt-6 mb-5 gap-y-4"
    >
      <span 
        className="text-lg md:text-xl w-full"
      >
        Welcome to <b>{data.title}</b> AR Card
      </span>
      <div
        className="flex flex-row flex-wrap justify-center gap-3"
      >
        <button
          onClick={() => window.open('https://msha.ke/inaseon', '_blank')}
          className={`py-3 px-5 font-bold border-[1px] rounded-full shadow shadow-black/40 hover:shadow-lg hover:shadow-black/40 transition-all duration-150`}
          style={{ 
            backgroundColor: primary,
            borderColor: primary,
            color: tertiary,
          }}  
        >
            Buy More Cards
        </button>
      </div>
    </footer>
  );
}
