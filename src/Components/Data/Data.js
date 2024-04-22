import React, { useState } from 'react'
import { Slider } from '../Slider/Slider'
import { Dropdown } from '../Dropdown/Dropdown'
import { Chart } from '../Chart/Chart'

import './Data.css'

export const Data = () => {
   const initialHome = 3000
    const [data,setData]=useState({
          home:initialHome,
          down:initialHome*0.2,
          loan:initialHome*0.8,
          interestRate:5,
          tenure:5
    })

    const setHomeValue = (e) => {
        let newData = { ...data };
        newData.home = e.target.value;
        newData.down = e.target.value * 0.2;
        newData.loan = e.target.value * 0.8;
        setData(newData);
    };

    const setDownPayment = (e) => {
    let newData = { ...data };
    newData.down = e.target.value;
    newData.loan = newData.home - newData.down;
    setData(newData);
    };
    
    const setLoanAmount = (e) => {
    let newData = { ...data };
    newData.loan = e.target.value;
    newData.down = newData.home - newData.loan;
    setData(newData);
    };

    const setInterest = (e) => {
    let newData = { ...data };
    newData.interestRate = e.target.value;
    setData(newData);
    };
    
    const setTenure = (e) => {
    let newData = { ...data };
    newData.tenure = e.target.value;
    setData(newData);
    };

  return (
   <div className='mainSection'>
   <div className='left'>
      <Slider name="Home Value" type="home" value={data.home} min={1000} max={10000} step={100}  onChange={setHomeValue}/>
      <Slider name="Down Payment" type="down" value={data.down} min={0} max={data.home} step={100}  onChange={setDownPayment}/>
      <Slider name="Loan Amount" type="loan" value={data.loan} min={0} max={data.home} step={100}  onChange={setLoanAmount}/>
      <Slider name="Interest Rate" type="int" value={data.interestRate} min={2} max={18} step={1}  onChange={setInterest}/>
      <Dropdown value={data.tenure} onChange={setTenure} />
   </div>
   
   <Chart data={data} />
   </div>
  )
}
