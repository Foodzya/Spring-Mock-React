import React from 'react';

const ProjectElement = (props) => {
    return (
        <a href className="whitebox-page-element">
            <div className="page-element">
                <div>
                    <img src={props.image} alt="Spring Boot" className="page-image" />
                </div>
                <div>
                    <h2 className="page-element-header">{props.title} </h2>
                    <p className="page-element-text">{props.description}</p>
                </div>
            </div>
        </a>
    )
}

export default ProjectElement;