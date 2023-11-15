import React from 'react'
import "./SidebarOption.css";

function SidebarOption({Icon,title,number,isactive}) {
  return (
    <div className={`sidebaroptions ${isactive && 'sidebaroptions--active'}`}>
      <Icon/>
      <h4>{title}</h4>
      <p>{number}</p>
    </div>
  )
}

export default SidebarOption
