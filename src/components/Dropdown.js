import React from 'react';

const Dropdown = (props) => {
    const subelements = props.subelements;
    const subelementsList = subelements.map(element => {
        return (
            <li key={element.toString()} className="menu-subelements">
                {element}
            </li>
        );
    })

    return (
        <div className='dropdown'>
            <span>{props.title} <i className="down-arrow"></i></span>
            <div className="dropdown-content">
                <ul className="submenu">
                    {subelementsList}
                </ul>
            </div>
        </div>
    )
}

export default Dropdown;