import React,{useState, useEffect} from 'react';


const Notification = ({text,openNotif})=>{


  const changeStatus=()=>{
    return openNotif(false);
  }

  useEffect(()=>{
    const timerID = setTimeout(changeStatus,3000);
    return ()=>clearTimeout(timerID);
  },[]);

    return (
      <div style={{textAlign:'center'}}>



       <p>{text}</p>
       <p>Please, try again or type another query</p>
      </div>
    )
};

export default Notification;