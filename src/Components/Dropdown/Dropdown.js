import React from 'react'
import './Dropdown.css'

export const Dropdown = (props) => {
  return (
    <div className='dropdown'>
        <label for="tenure">Tenure</label>
        <br/>
        <select
            className="round"
            id="tenure"
            value={props.value}
            onChange={props.onChange}
          >
            <option value={5}>5 Years</option>
            <option value={10}>10 Years</option>
            <option value={15}>15 Years</option>
            <option value={20}>20 Years</option>
            <option value={25}>25 Years</option>
          </select>
    </div>
  )
}
