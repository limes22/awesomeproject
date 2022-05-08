import * as React from 'react';
import {Counter} from "./Counter";
import {useState} from "react";
import internal from 'stream';

// props 받아올 값의 type 을 선언
interface Iprops {
    name: string,
    gender: string,
    email: string,
    phone: string,
}

// props type 설정
export const Profile = (props: Iprops) => {
    return(
        <>
            <div>
                <h2>프로필</h2>
                <div>
                    <b>이름 : { props.name }</b>
                </div>
                <div>
                    <b>성별 : { props.gender }</b>
                </div>
                <div>
                    <b>이메일 : { props.email }</b>
                </div>
                <div>
                    <b>전화번호 : { props.phone }</b>
                </div>
            </div>
        </>
    )
}
