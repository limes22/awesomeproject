import React, { useEffect } from "react";
import axios from "axios";



const Asy2 = () => {
  const [day, setDay] = React.useState("my day");
  
   const getThisWeekDay = async () => {
    const res = await axios.get("http://worldclockapi.com/api/json/est/now");
    const tmp = res.data.dayOfTheWeek;
    setDay(tmp);
  };

  useEffect(() => {
    getThisWeekDay();
  }, []);

  return (
    <>
      <div>{day}</div>
    </>
  );
};

export default Asy2;
