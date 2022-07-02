import React from "react";
import axios from "axios";

//promise -> js 에 내장되어 있는 비동기를 간편하게 처리 할 수 있도록 도와주는 오브젝트
//정해진 장시간에 기능을 수행하고 나서 정상적으로 기능이 수행되어 졌다면 성공의 메시지와 함께
//처리된 결과 값을 전달
//만약 기능을 수행하다가 예상치 못한 문제가 발생했다면,
//에러를 전달해 줌
//1. state : pending -> fulfilled or rejected
//           기능 수행을 완료해서 성공했는지 실패했는지에 대한 상태
//2. producer vs consumer : 데이터를 제공하는 사람과 제공된 데이터를 쓰는(필요로 하는) 사람

//2.1 producer 새로운 promise가 만들어 질때, 전달한 executor 콜백 함수가 자동적으로, 바로 실행됨.
//2.2 consumers : then, catch, finally
//then : Promise 결과값이 이행되었을 때 response 받고 싶다.
//catch: 실패했을 때 에러가 뜸
//finally: 비동기 요청했을때 응답받으면 무조건 실행

//Axios node.js와 브라우저를 위한 Promise API를 활용하는 http 비동기 통신 라이브러리 이다.

const Asy = () => {
  const [day, setDay] = React.useState("my day");
  // const getThisWeekDay = () => {
  //   axios.get("http://worldclockapi.com/api/json/est/now").then((res) => {
  //     console.log(res);
  //     const tmp = res.data.dayOfTheWeek;
  //     setDay(tmp);
  //   });
  // };
  console.log('iam asy component')



  //async & await : promise 위에 조금더 간결하고 간편한 api 제공, 
  //동기적으로 실행되는 것처럼 보이게 만들어주는 것
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
