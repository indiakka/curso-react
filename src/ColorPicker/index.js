import React from "react"

const ColorPicker = (props) => <input type='color' onChange={props.changeColor} value={props.color}/>


export default ColorPicker