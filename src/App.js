import { useRef, useState } from "react";

function App() {
  const [length, setlength] = useState(1000);

  const lengthRef = useRef(null);

  return (
    <div className="font-ubuntu w-full h-full mx-auto p-[30px]  flex justify-items-start items-center   my-[40px] text-black  lg:p-[35px] 4xl:max-w-screen-4xl ">
      <form className="w-full mx-auto h-full">
        <div className="flex flex-col   gap-[8px]">
          <h2 className="text-[#6C757D]"> Personal Information</h2>
          <h1 className="text-[32px] font-bold lg:text-[38px] xl:text-[42px]  2xl:text-[48px]">Personal Details</h1>
        </div>

        <div className="flex flex-col gap-[20px] mt-[25px]  lg:flex-row lg:flex-wrap lg:justify-between xl:justify-start xl:gap-[30px] 2xl:gap-[38px]">
          <div className="flex flex-col gap-[8px]  lg:w-[45%] ">
            <label htmlFor="Name" className="text-[#6C757D] font-bold">
              {" "}
              First Name
            </label>
            <input
              type="text"
              className="text-black  p-[10px] border bg-[#EFF2F6] rounded-md"
            />
          </div>

          <div className="flex flex-col gap-[8px] lg:w-[45%] ">
            <label htmlFor="Last Name" className="text-[#6C757D] font-bold">
              Last Name
            </label>
            <input
              type="text"
              className="text-black p-[10px] border bg-[#EFF2F6] rounded-md"
            />
          </div>

          <div className="flex flex-col gap-[8px] lg:w-[45%]">
            <label htmlFor="Date" className="text-[#6C757D] font-bold">
              Date
            </label>
            <input
              type="date"
              className="text-black p-[10px] border bg-[#EFF2F6] border-gray-800 rounded-md"
            />
          </div>

          <div className="flex flex-col gap-[8px] lg:w-[45%]">
            <label htmlFor="Email" className="text-[#6C757D] font-bold">
              Email*
            </label>
            <input
              type="email"
              className="text-black p-[10px] border bg-[#EFF2F6] rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-col   gap-[20px]  mt-[40px] xl:mt-[55px]">
          <h2 className="text-[#6C757D]">Card Information</h2>
          <h1 className="text-[32px] font-bold lg:text-[38px] xl:text-[42px]  2xl:text-[48px]">Card Details</h1>
        </div>

        <div className="flex flex-col gap-[20px] mt-[25px]  lg:flex-row lg:flex-wrap lg:justify-between xl:justify-start xl:gap-[30px] 2xl:gap-[38px]">
          <div className="flex flex-col gap-[8px]  lg:w-[45%]  ">
            <label htmlFor="mySelect" className="text-[#6C757D] font-bold">
              Card Type
            </label>

            <select
              id="mySelect"
              className="text-black p-[12px] border bg-[#EFF2F6] rounded-md"
            >
              <option value="option0">Select</option>
              <option value="option1">Visa Platinum Card</option>
              <option value="option2">Visa Gold Card</option>
              <option value="option3">Visa ClassNamic Card</option>
              <option value="option4">Titanium Master Card</option>
              <option value="option5">Express Card</option>
            </select>
          </div>

          <div className="flex flex-col gap-[8px]  lg:w-[45%]  ">
            <label htmlFor="SSN" className="text-[#6C757D] font-bold">
              Social Security Number
            </label>
            <input
              type="text"
              className="text-black p-[10px] border bg-[#EFF2F6] rounded-md"
            />
          </div>

          <div className="flex flex-col gap-[10px]  lg:w-full  xl:w-[93%]">
            <label htmlFor="price " className="text-[#6C757D] font-bold">
              {" "}
              Card Limit : {length}
            </label>
            <input
              type="range"
              value={length}
              min={1000}
              max={5000}
              onChange={(e) => {
                setlength(e.target.value);
              }}
              ref={lengthRef}
            />
          </div>
        </div>

        <div className="flex gap-[20px] mt-[25px]  text-white lg:justify-center xl:mt-[40px] xl:justify-start">
          <button className="py-[12px] px-[20px]    bg-[#007BFF]">
            Submit
          </button>
          <button className="py-[12px] px-[20px]    bg-[#007BFF]">
            Need Help
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
