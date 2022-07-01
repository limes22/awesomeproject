import React from "react";
import axios from "axios";

const Asy = () => {
  const [day, setDay] = React.useState("my day");
  // const getThisWeekDay = () => {
  //   axios.get("http://worldclockapi.com/api/json/est/now").then((res) => {
  //     console.log(res);
  //     const tmp = res.data.dayOfTheWeek;
  //     setDay(tmp);
  //   });
  // };

  const getThisWeekDay = async () => {
    const res = await axios.get("http://worldclockapi.com/api/json/est/now");
    const tmp = res.data.dayOfTheWeek;
    setDay(tmp);
  };

  return (
    <>
      <div>{day}</div>
      <div>
        <button onClick={getThisWeekDay}>비동기 처리</button>
      </div>
    </>
  );
};

export default Asy;
