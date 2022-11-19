import React from "react";

import { useState } from "react";

const Table = (props: any) => {
  let [array, setArray] = useState<any[]>([]);
  let [inputdata, setInputdata] = useState({ name: "", place: "" });
  let [index, setIndex] = useState<any>();
  let [bolin, setBolin] = useState(false);

  const data = (e: any) => {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  };

  let { name, place } = inputdata;
  const addinputitem = () => {
    setArray([...array, { name, place }]);

    setInputdata({ name: "", place: "" });
  };

  const deletedata = (i: any) => {
    let total = [...array];
    total.splice(i, 1);
    setArray(total);
  };

  const updatedata = (i: any) => {
    let { name, place } = array[i];
    setInputdata({ name, place });
    setBolin(true);
    setIndex(i);
  };

  const updateInfo = () => {
    let total = [...array];
    total.splice(index, 1, { name, place });
    setArray(total);
    setBolin(false);
    setInputdata({ name: "", place: "" });
  };

  return (
    <div className="font-mono py-2 mt-3 text-center w-full flex items-center text-xl justify-center grid grid-row-3">
      <div className="md:text-4xl text-2xl font-mono py-2"> {props.day}</div>
      <div className="grid grid-row-2">
        <div>
          <input
            name="name"
            className=""
            value={inputdata.name || ""}
            type="text"
            placeholder="Name"
            onChange={data}
            autoComplete="off"
            maxLength={10}
          ></input>
          <input
            name="place"
            className=""
            value={inputdata.place || ""}
            type="text"
            placeholder="Place"
            onChange={data}
            autoComplete="off"
            maxLength={14}
          ></input>
        </div>
        <div>
          <button
            className="text-center"
            onClick={!bolin ? addinputitem : updateInfo}
          >
            {!bolin ? " Add Data" : "Update Data"}
          </button>
        </div>
      </div>

      <div>
        <br></br>
        <table className="table-auto ml-7 text-left ">
          <thead>
            <tr className="grid grid-cols-4  text-start">
              <th className="text-xl font-mono"></th>
              <th className="text-xl font-mono"></th>
              <th className="text-xl font-mono"></th>
              <th className="text-xl font-mono"></th>
            </tr>
          </thead>

          {array &&
            array.map((item, i) => {
              return (
                <tbody>
                  <tr key={i} className="grid grid-row-2  grid-cols-2 gap-1 ">
                    <td className="md:text-3xl  text-base bg-red-100">
                      {item.name}
                    </td>
                    <td className="md:text-3xl text-base bg-red-100">
                      {item.place}
                    </td>

                    <td>
                      <button
                        className="md:text-2xl  text-base"
                        onClick={() => updatedata(i)}
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        className="md:text-2xl  text-base"
                        onClick={() => deletedata(i)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      </div>
    </div>
  );
};

export default Table;
