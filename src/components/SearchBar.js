import React from 'react';
import ProjectElement from './ProjectElement';
import { useState, useEffect } from 'react';

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredElements, setFilteredElements] = useState(props.elements);

    useEffect(() => {
        const filterElements = () => {
            console.log("call");

            return (
                props.elements.filter((value) => {
                    if (value === "") {
                        return value;
                    }
                    if (value.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        value.description.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return value;
                    }

                    return "";
                })
            );
        };

        const timeOutId = setTimeout(() => setFilteredElements(filterElements()), 300);
        return () => clearTimeout(timeOutId);

        
    }, [searchTerm]);

    return (
        <div>
            <input
                className='flex-search-bar'
                type='text' placeholder='Search..'
                onChange={event => { setSearchTerm(event.target.value) }}
            />
            {filteredElements.length === 0
                ? <div className='no-elements-found'> Elements not found... </div>
                : <ProjectElement elements={filteredElements} />
            }

        </div>
    );
}

export default SearchBar;