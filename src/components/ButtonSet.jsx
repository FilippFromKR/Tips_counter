import React from 'react';
import MyButton from "../UI/button/MyButton";

const ButtonSet = ({value,func}) => {
    return (
        <div className="buttons">
            <MyButton  value={value} onClick={()=>func(0.05)} children={'5%'}/>
            <MyButton  value={value} onClick={()=>func(0.07)} children={'7%'}/>
            <MyButton  value={value} onClick={()=>func(0.10)} children={'10%'}/>
            <MyButton  value={value} onClick={()=>func(0.15)} children={'15%'}/>
            <MyButton  value={value} onClick={()=>func(0.20)} children={'20%'}/>
        </div>
    );
};

export default ButtonSet;