import { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <div className="bg-tails h-64 w-screen flex flex-col justify-center items-center pb-20 bg-cover">
      <h1 className="text-white text-center text-3xl">
        IP Address Tracker
      </h1>

      <form className="justify-center flex items-center mt-8 h-10 w-1/3">
        <input
          type="text"
          placeholder="Sear for any IP adress or domain"
          className="p-2 rounded-tl-xl rounded-bl-xl w-full"
        />
		  <button className="bg-black h-full w-10 rounded-tr-xl rounded-br-xl flex justify-center items-center">
			  <img src="/images/icon-arrow.svg" alt="" />
		  </button>
      </form>
    </div>
  );
};

export default Header;
