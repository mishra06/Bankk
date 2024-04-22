import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

import './Chart.css'

export const Chart = ({data}) => {
    ChartJS.register(ArcElement, Tooltip, Legend);
    const {home,down,loan,interestRate,tenure} = data;

    const totalLoanMonths = tenure * 12;

    const interestPerMonth = interestRate / 100 / 12;

    const monthlyPayment = (loan * interestPerMonth *(1 + interestPerMonth) ** totalLoanMonths) / ((1 + interestPerMonth) ** totalLoanMonths - 1);

    const totalInterestGenerated = monthlyPayment * totalLoanMonths - loan;

    const dataSet = {
        labels:["Principle","Interest"],
        datasets:[
            {
                label: "Ratio of Principle and Interest",
                data: [home, totalInterestGenerated],
                backgroundColor: ["rgb(255,217,225)", "rgb(205, 235, 255)"],
                borderColor: ["rgba(255, 171, 146, 0.2)", "rgba(95, 189, 255, 0.2)"],
                borderWidth: 1,
              }
        ]
    }

  return (
    <div className='chartSection'>
        <div className='monthly'>Monthly Payment: $ {monthlyPayment.toFixed(2)}</div>
        <Pie data={dataSet} />
    </div>
  )
}
