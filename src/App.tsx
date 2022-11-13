import { useState } from 'react';

function App() {
  return (
    <div className="bg-[#F6F7FB] h-screen">
      <div className="px-[120px] py-8">
        <span className="font-poppins font-light text-2xl w-36 h-9">
          <span className="font-bold">Github</span> Jobs
        </span>
        <div className="my-8 bg-[url('src/assets/backgroundImg.png')] flex justify-center items-center h-[138px] rounded-lg">
          <img src="src/assets/backgroundImg.png" className="hidden"></img>
          <div className="rounded bg-white w-[790px] h-14 "></div>
        </div>
      </div>
    </div>
  );
}

export default App;
