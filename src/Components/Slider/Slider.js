import React from 'react'

import './Slider.css'

export const Slider = (props) => {
  return (
    <div className='slider'>
        <label for={props.type} className='heading'>{props.name}</label>
        <br/>
        <label for={props.type} className='priceInt'>{props.type === 'int' ? '% ' : '$ '}{props.value}</label>
        <br/>
        <input type="range" min={props.min} max={props.max} value={props.value} step={props.step} className="slider" onChange={props.onChange} />
        <div className='sliderRanges'>
            <div className='min_range'>{props.type === 'int' ? '% ' : '$ '}{props.min}</div>
            <div className='max_range'>{props.type === 'int' ? '% ' : '$ '}{props.max}</div>
        </div>
    </div>
  )
}
