import React from 'react';

const ProjectElement = ({ elements }) => {
    return <div className='page-container'>
        {elements.map((element) => {
            return (
                <a href key={element.title.toString()} className="whitebox-page-element">
                    <div className="page-element">
                        <div>
                            <img src={element.image} alt="Spring Boot" className="page-image" />
                        </div>
                        <div>
                            <h2 className="page-element-header">{element.title} </h2>
                            <p className="page-element-text">{element.description}</p>
                        </div>
                    </div>
                </a>
            );
        })};
    </div>
}

export default ProjectElement;