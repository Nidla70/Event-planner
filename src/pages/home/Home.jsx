import React from "react";
import Header from "../../components/Header";

import Table from "../../components/Table";

const Home = () => {
  return (
    <div className="w-full  ">
      <>
        <Header />
        <div className="grid grid-row-3 md:grid md:grid-cols-3 justify-items-center pt-6 m-5">
          <div>
            <Table day={"Monday"}></Table>
          </div>
          <div>
            <Table day={"hello"}></Table>
          </div>
          <div>
            <Table day={"hello"}></Table>
          </div>
        </div>
      </>
    </div>
  );
};

export default Home;
