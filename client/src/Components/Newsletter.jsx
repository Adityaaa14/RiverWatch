import { React, useState } from "react";

export default function Newsletter() {
  const [email, changeemail] = useState("");
  const [validemail, checkemail] = useState(false);
  function submithandler(event) {
    if (validemail) {
      alert("You are Subscribed now");
    } else {
      alert("Please give a valid E-mail id");
    }
  }
  function inputchangehandler(event) {
    event.preventDefault();
    const email1 = event.target.value;
    changeemail(email1);
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email)) {
      checkemail(true);
    }
  }
  return (
    <div className="w-full py-3 text-white bg-[#156552] px-4  ">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 ">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-2xl sm:text-1xl text-1xl font-bold py-7">
            Stay updated with our project!
          </h1>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <form onSubmit={submithandler}  className="p-3 flex w-full rounded-md text-black">
              <input
                onChange={inputchangehandler}
               
                type="email"
                placeholder="Enter Email"
              />
               <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 ">
                Notify Me
              </button>
              </form>
             
            
          </div>
         
        </div>
      </div>
    </div>
  );
}
