import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import pitchPerfected from "../../assets/images/pitchperfected.png";
import advsr from "../../assets/images/advsr.png";
import lms from "../../assets/images/lms.png";
import shell from "../../assets/images/shell.png";
import "./index.scss";

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const hardcodedPortfolioData = [
        {
            cover: pitchPerfected,
            title: "PitchPerfected",
            description: "React, Javascript",
            url: "https://www.pitchperfected.net/"
        },
        {
            cover: advsr,
            title: "ADVSR",
            description: "Java, SpringBoot, React, JavaScript, MongoDB",
            url: "https://github.com/BoilerADVSR"
        },
        {
            cover: shell,
            title: "Shell Project",
            description: "C, C++, Lex & Yacc",
            url: "https://gitfront.io/r/private10/Jq6QTHfsaTBK/shell-project/" 
        },
        {
            cover: lms,
            title: "Learning Management System",
            description: "Java",
            url: "https://github.com/abdulsaleh10/lms" 
        }
        // Add more hardcoded portfolio items if needed
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => {
            clearTimeout(timer);
        }
    }, []); 

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.cover}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                <p className="title">{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
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
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(hardcodedPortfolioData)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;
