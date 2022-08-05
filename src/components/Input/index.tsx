import React, { HTMLInputTypeAttribute, HTMLProps, InputHTMLAttributes, ReactPropTypes } from 'react'; 
import PropTypes, {checkPropTypes} from 'prop-types';
interface inputType extends InputHTMLAttributes<HTMLElement>{
  type: HTMLInputTypeAttribute;
}


export function Number({...props}:React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props}/>;
}
