import React  from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './Spinner.css';

export default function Spinner(){
  return (
    <div className = "Spinner">
      <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
    </div>
  )
}