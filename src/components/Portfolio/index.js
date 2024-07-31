import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const dummyProjects = [
    {
        name: "Project One",
        description: "A web application for managing tasks and projects.",
        image: "https://via.placeholder.com/600x400?text=Project+One",
        url: "https://example.com/project-one"
    },
    {
        name: "Project Two",
        description: "An e-commerce platform with a full shopping cart experience.",
        image: "https://via.placeholder.com/600x400?text=Project+Two",
        url: "https://example.com/project-two"
    },
    {
        name: "Project Three",
        description: "A machine learning model for predicting stock prices.",
        image: "https://via.placeholder.com/600x400?text=Project+Three",
        url: "https://example.com/project-three"
    },
    {
        name: "Project Four",
        description: "A responsive website for a local business.",
        image: "https://via.placeholder.com/600x400?text=Project+Four",
        url: "https://example.com/project-four"
    }
];

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        getPortfolio();
    }, []);

    const getPortfolio = () => {
        // Directly use the dummy projects instead of fetching from Firebase
        setPortfolio(dummyProjects);
    }

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.image}
                                className="portfolio-image"
                                alt={port.name} />
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url, "_blank")}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Hall of Projects".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;
