import { useState } from 'react';

function App() {
  return (
    <div className="bg-[#F6F7FB] h-screen">
      <div className="px-3 py-3 sm:px-[120px] sm:py-8">
        <span className="font-poppins font-light text-2xl w-36 h-9">
          <span className="font-bold">Github</span> Jobs
        </span>
        <div className="my-8 bg-[url('src/assets/backgroundImg.png')] bg-cover bg-center flex justify-center items-center h-44 rounded-lg">
          {/* <img src="src/assets/backgroundImg.png" className="hidden"></img> */}
          <div className="rounded bg-white w-80 h-14 sm:w-[790px] sm:h-14 flex items-center">
            {/* <form>
              <input></input>
              <button>Search</button>
            </form> */}
          </div>
        </div>
        <div className="flex flex-col">
          <form>
            <label className="flex items-center font-poppins font-medium text-sm">
              <input
                type="checkbox"
                name="fulltime"
                className="border border-[#B9BDCF] rounded w-[18px] h-[18px] mr-3 ml-6"
              />
              Full time
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
