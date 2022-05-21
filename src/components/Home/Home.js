import React from "react";
import Banner from "../Banner/Banner";
import Summary from "../Summary/Summary";
import {
  faPeopleGroup,
  faStar,
  faEarthAmerica,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="d-flex justify-content-evenly my-3 bg-success py-5">
        <Summary
          icon={faEarthAmerica}
          header="+ Countries"
          number={47}
        ></Summary>
        <Summary
          icon={faPeopleGroup}
          header="+ Happy Clients"
          number={100}
        ></Summary>
        <Summary icon={faStar} header="+ Feedback" number={134}></Summary>
      </div>
    </div>
  );
};

export default Home;
