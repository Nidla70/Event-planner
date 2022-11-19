import React from "react";

const Button = (props: any) => {
  return (
    <div>
      <button className="text-black-800 hover:text-gray-600 duration-500 py-1 rounded md:ml-8 text-xl">
        {props.children}
      </button>
    </div>
  );
};

export default Button;
