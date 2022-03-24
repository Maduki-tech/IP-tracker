import { NextPage } from "next";

const InfoScreen: NextPage = () => {
  return (
    <div className="bg-white w-4/5 h-32 absolute top-48 mx-auto border rounded-lg">
      <div>
        <h5>IP ADDRESS</h5>
        <h1>192.212.174.101</h1>
      </div>
    </div>
  );
};

export default InfoScreen;
