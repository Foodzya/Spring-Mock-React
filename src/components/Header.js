import React from 'react';
import '../styles.css';
import spring from '../assets/OG-Spring.png';
import Dropdown from './Dropdown';

const Header = () => {
    return (
        <header className='pageHeader'>
            <div className="flex-top-menu">
                <div>
                    <img src={spring} alt="Spring" style={{ maxWidth: "100%", height: "50px" }} />
                </div>
                <div className="menu-elements">
                    <Dropdown
                        title="Why Spring "
                        subelements={["Overview", "Reactive", "Event Driven", "Cloud", "Web Applications", "Serverless", "Batch"]}
                    />
                    <Dropdown
                        title="Learn "
                        subelements={["Overview", "Quickstart", "Guides", "Blog"]}
                    />
                    <Dropdown
                        title="Projects "
                        subelements={["Overview", "Spring Boot", "Spring Framework",
                            "Spring Cloud", "Spring Cloud Data Flow", "Spring Data", "Spring Integration"]}
                    />
                    <div>Training</div>
                    <div>Support</div>
                    <Dropdown
                        title="Community "
                        subelements={["Overview", "Events", "Team"]}
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;