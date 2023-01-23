import React from 'react';
import { TextField } from '@material-ui/core';

function InputPages(props) {
    return  <div>
                <TextField value={props.inputValue} onChange={props.handleChange} label={props.label} id="margin-none" margin='normal'/>
            </div> 
    
}

export default InputPages 
