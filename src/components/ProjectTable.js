import React from 'react';
import SearchBar from './SearchBar.js';
import springBoot from '../assets/spring-boot.jpg';
import cloudDataFlow from '../assets/spring-cloud-data-flow.jpg';
import springCloud from '../assets/spring-cloud.jpg';
import springData from '../assets/spring-data.jpg';
import springFramework from '../assets/spring-framework.jpg';
import springSecurity from '../assets/spring-security.jpg';

const ProjectTable = () => {
    const projectElements = [
        {
            image: springBoot,
            title: "Spring Boot",
            description: "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible."
        },
        {
            image: springFramework,
            title: "Spring Framework",
            description: "Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more."
        },
        {
            image: springData,
            title: "Spring Data",
            description: "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond."
        },
        {
            image: springCloud,
            title: "Spring Cloud",
            description: "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices."
        },
        {
            image: cloudDataFlow,
            title: "Spring Cloud Data Flow",
            description: "Provides an orchestration service for composable data microservice applications on modern runtimes."
        },
        {
            image: springSecurity,
            title: "Spring Security",
            description: "Protects your application with comprehensive and extensible authentication and authorization support."
        }
    ];

    return (
        <div className='content'>
            <SearchBar elements={projectElements} />
        </div>
    )
}

export default ProjectTable;