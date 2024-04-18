import React from "react";
const accountData = {
  ammount: "0",
};
const account = ({ account }) => {
  return (
    <div className="">
      {/* <div
        className="w-[50%]"
        style={{
          boxShadow:
            "0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12)",
        }}
      >
        <div>
          <h1> الملخص المالي</h1>
        </div>
        
      </div> */}
      <div class="flex  gap-4 bg-gray-100 py-10 p-14">
        <div class="container mx-auto pr-4">
          <div class="w-72  bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
            <div class="h-20 bg-red-400 flex items-center justify-around">
              <p class="mr-0 text-white text-lg pl-5">الرصيد </p>
            </div>
            <div class="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
              <p>TOTAL</p>
            </div>
            <p class="py-4 text-3xl ml-5">{account.ammount}</p>
          </div>
        </div>

        {/* <div class="container mx-auto pr-4">
          <div class="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
            <div class="h-20 bg-blue-500 flex items-center justify-around">
              <p class="mr-0 text-white text-lg pl-5">مجموع دائن</p>
            </div>
            <div class="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
              <p>TOTAL</p>
            </div>
            <p class="py-4 text-3xl ml-5">{account.nagative}</p>
          </div>
        </div>

        <div class="container mx-auto pr-4">
          <div class="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
            <div class="h-20 bg-purple-400 flex items-center justify-around">
              <p class="mr-0 text-white text-lg pl-5">الرصيد</p>
            </div>
            <div class="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
              <p>TOTAL</p>
            </div>
            <p class="py-4 text-3xl ml-5">{account.ammount}</p>
          </div>
        </div>

        <div class="container mx-auto pr-4">
          <div class="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
            <div class="h-20 bg-purple-900 flex items-center justify-around">
              <p class="mr-0 text-white text-lg pl-5">الرصيد الكلي</p>
            </div>
            <div class="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
              <p>TOTAL</p>
            </div>
            <p class="py-4 text-3xl ml-5">500</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default account;
