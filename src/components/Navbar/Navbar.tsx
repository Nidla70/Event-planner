import React, { useState } from "react";
import Button from "./Button";
import { IonIcon } from "@ionic/react";

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "CONTACT", link: "/" },
    { name: "WRITE", link: "/" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="grid grid-cols-3 sticky  w-full  items-center justify-between  ">
      <div className="md:flex bg-while py-5 md:px-10 px-7">
        <div className="pl-3 font-bold  text-2xl flex items-center ">
          <i className="fa-brands text-black-800 hover:text-gray-400  fa-square-facebook mr-4 cursor-pointer"></i>
          <i className="fa-brands text-black-800 hover:text-gray-400  fa-twitter mr-4 cursor-pointer"></i>
          <i className="fa-brands text-black-800 hover:text-gray-400  fa-square-instagram mr-4 cursor-pointer"></i>
        </div>
      </div>
      <div>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <IonIcon name={open ? "close" : "menu"}></IonIcon>
        </div>
        <ul
          className={`md:flex md:item-center items-center justify-between md:pb-0 pb-12 absolute md:static
        bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in
        ${
          open ? "top-20 opacity-100" : "top-[-490px]  md:opacity-100 opacity-0"
        } `}
        >
          {Links.map((Link) => (
            <li key={Link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={Link.link}
                className="text-black-800 hover:text-gray-400 duration-500"
              >
                {Link.name}
              </a>
            </li>
          ))}
          <Button>LOG IN</Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
