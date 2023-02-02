import { useState } from 'react'
import './TextField.css'

const TextField = (props) => {

    const onWrite = (event) => {
        props.onChanged(event.target.value)
    }
    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={onWrite} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField