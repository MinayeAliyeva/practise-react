import React from "react";
import {uid} from "uid"
const CardCom = ({ arr,func }) => {

  return (
    <div>
      {arr.map((el,i,arr) => {
        console.log(i);
        return (
          <ul key={uid()}>
            <li>{i}--{el}</li>
          </ul>
        );
      })}
      <button onClick={()=>func()}>jj</button>
    </div>
  );
};

export default CardCom;
