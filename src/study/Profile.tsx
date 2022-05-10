import * as React from 'react';
import {Counter} from "./Counter";
import {useState} from "react";
import internal from 'stream';

// props 받아올 값의 type 을 선언
interface Iprops {
    name: string,
}

// 함수가 활용하는 props(interface)는 다음과 같이 확장할 수 있습니다.

// 인터페이스 Iprops => name: string만 가지고 있음
// 인터페이스 Iprops2 => gender, email, phone, id를 가지고있고, 추가적으로 Iprops의 모든 선언값을 가져와서 확장 선언함
interface Iprops2 extends Iprops{
    gender: string,
    email: string,
    phone: string,
    // id?: string
}

export const Profile = (props: Iprops2) => {
    // const { name, gender, email, phone, id } = props;
    // 비구조 할당 문법 => 오브젝트가 있다면, 해당 Key값들을 다음과 같이 추출할수 있습니다. reference: https://learnjs.vlpt.us/useful/06-destructuring.html
    const { name, gender, email, phone } = props;
    return(
        <>
            <div>
                <h2>프로필</h2>
                <div>
                    <b>이름 : { name }</b>
                </div>
                <div>
                    <b>성별 : { gender }</b>
                </div>
                <div>
                    <b>이메일 : { email }</b>
                </div>
                <div>
                    <b>전화번호 : { phone }</b>
                </div>
                {/*{id ? (*/}
                {/*    <div>*/}
                {/*        <b>아이디:  {id} </b>*/}
                {/*    </div>*/}
                {/*): null}*/}
            </div>
        </>
    )
}
