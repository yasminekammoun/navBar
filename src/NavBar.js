import React from 'react'


function NavBar(props){
    return(
        <ul  className="style">
        {props.data.map(el => <li  ><a  href={el.link} className={el.active ? "blue" : "grey"} > 
        {el.dropDown ? <div id='block'> {el.name} <ul id='dropDown'>{el.dropDown.map(el => <li> {el}</li>)}</ul> </div>  : el.name}
            </a>
            
        </li>)}
        </ul>
    )
}
export default NavBar