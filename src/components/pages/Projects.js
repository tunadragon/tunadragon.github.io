import React, { useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import ProjectInfo from '../ProjectInfo'
import { Button } from '../Button'
import '../../App.css'

function Projects() {
    const [gameVis, setGameVis] = useState(false)
    const [modelVis, setModelVis] = useState({
        m1: false,
        m2: false,
        m3: false
    })

    const modelImages1 = [
        {
            title: "Model Turnaround",
            img: process.env.PUBLIC_URL + "/images/3d/1_turnaround.gif"
        },
        {
            title: "Model in Face-tracking Software",
            img: process.env.PUBLIC_URL + "/images/3d/1_render.gif"
        }
    ]

    const modelImages2 = [
        {
            title: "Model Turnaround",
            img: process.env.PUBLIC_URL + "/images/3d/2_turnaround.gif"
        },
        {
            title: "Rendered Animation",
            img: process.env.PUBLIC_URL + "/images/3d/2_render.gif"
        }
    ]

    const modelImages3 = [
        {
            title: "Model Turnaround",
            img: process.env.PUBLIC_URL + "/images/3d/3_turnaround.gif"
        },
        {
            title: "Posed Model",
            img: process.env.PUBLIC_URL + "/images/3d/3_render.png"
        }
    ]

    const toggleGame = () => {
        setGameVis(!gameVis)
    }

    const toggleModelImages = (i) => {
        setModelVis(prev => {
            return {
                ...prev,
                [`m${i}`]: !prev[`m${i}`]
            }
        })
    }

    const isTouch = () => {
        try{ document.createEvent("TouchEvent"); return true; }
        catch(e){ return false; }
    }

    const isMobile = () => {
        return (window.innerWidth <= 760) && isTouch() ;
    }

    return (
        <div id="projects-container">
           <div id="programming-projects" className="article">
                <h1>PROJECTS</h1>
                <h2>PROGRAMMING</h2>
                <ProjectInfo 
                    title="Personal Website" 
                    description="This website, which was developed to display my skills, experience and projects."
                    img={process.env.PUBLIC_URL + "/images/icons/tunadragon_icon.png"}
                    date="January 2021"
                    tools="React, Git"
                    link="https://tunadragon.github.io/"
                    linkText="tunadragon.github.io"
                />

                {/* <ProjectInfo 
                    title="Genshin Impact EXP Calculator" 
                    description="A simple tool for calculating resource costs in the video game Genshin Impact."
                    img={process.env.PUBLIC_URL + "/images/icons/"}
                    date="January 2021"
                    tools="React, Git"
                    link="https://tunadragon.github.io/genshin-mats"
                    linkText="tunadragon.github.io/genshin-mats"
                /> */}

                <ProjectInfo 
                    title="Architect 3D" 
                    description="A web app where users can collaboratively create and edit 3D scenes."
                    img={process.env.PUBLIC_URL + "/images/icons/architect3d_icon.jpg"}
                    date="April 2020"
                    tools="Angular, Three.js, NodeJs, GraphQL, Git"
                    link="https://www.architect3d.me/"
                    linkText="architect3d.me"
                />

                <ProjectInfo 
                    title="Mozilla Firefox DevTools Contributions" 
                    description="Fixed bugs and developed small features for Firefox DevTools."
                    img={process.env.PUBLIC_URL + "/images/icons/firefox_icon.png"}
                    date="April 2020"
                    tools="JavaScript, Mochitest framework, Mercurial"
                    link=""
                    linkText=""
                />

                <ProjectInfo 
                    title="The Web Gallery" 
                    description="A local web app where users can share photos and comments."
                    img={process.env.PUBLIC_URL + "/images/icons/tunadragon_icon.png"}
                    date="February 2020"
                    tools="HTML, CSS, Node.js, Express, NeDB NoSQL database"
                    link=""
                    linkText=""
                />
           </div>

           <div id="gamedev-projects" className="article">
               <h2>GAME DEVELOPMENT</h2>
               <div>
                    <ProjectInfo 
                        title="Wolf Run" 
                        description="An endless runner game created in Unity. Art and assets were created by me."
                        img={process.env.PUBLIC_URL + "/images/icons/unity_icon.jpg"}
                        date="March 2019"
                        tools="Unity, Aseprite, Adobe Photoshop"
                        link="https://simmer.io/@tunadragon/~4a585bea-aa40-e790-a7a5-778cd61deb81"
                        linkText="simmer.io link"
                    />
                    {/* {!isMobile() ? <div className="game-container">
                        <Button className="btns" buttonStyle='btn--toggle' buttonSize='btn--medium' onClick={toggleGame}>
                            { gameVis ? "Hide Game" : "Show Game"}
                        </Button>
                        <iframe title="wolfrun" className="embedded-game"
                            src="https://i.simmer.io/@tunadragon/~4a585bea-aa40-e790-a7a5-778cd61deb81" 
                            style={{display:(gameVis ? "block" : "none")}}>
                        </iframe>
                    </div> : ""} */}
               </div>
           </div>

           <div id="3d-projects" className="article">
               <h2>3D MODELLING</h2>
               <div className="large-project-entry">
                    <ProjectInfo 
                        title="Original Character" 
                        description="A 3D model of an original character. Used Unity VRM to make model compatible with VR applications."
                        img={process.env.PUBLIC_URL + "/images/icons/blender_icon.png"}
                        date="January 2021"
                        tools="Blender, Unity"
                        link=""
                        linkText=""
                    />
                    <Button className="btns" buttonStyle='btn--toggle' buttonSize='btn--medium' onClick={() => {toggleModelImages(1)}}>
                            { modelVis.m1 ? "Hide" : "Show More"}
                    </Button>
                    <div style={{display: modelVis.m1 ? "block" : "none"}}>
                        <Carousel className="carousel" autoPlay={false} indicators={true} navButtonsAlwaysVisible={true}>
                            { modelImages1.map( (item, i) => <img key={i} src={item.img} alt={item.title} width="100%" height="100%"/>) }
                        </Carousel>        
                    </div>
                    
               </div>
               
                <div className="large-project-entry">
                    <ProjectInfo 
                        title="Qiqi" 
                        description="A low-poly model of the character Qiqi from the video game Genshin Impact."
                        img={process.env.PUBLIC_URL + "/images/icons/blender_icon.png"}
                        date="December 2020"
                        tools="Blender"
                        link=""
                        linkText=""
                    />
                    <Button className="btns" buttonStyle='btn--toggle' buttonSize='btn--medium' onClick={() => {toggleModelImages(2)}}>
                            { modelVis.m2 ? "Hide" : "Show More"}
                    </Button>
                    <div style={{display: modelVis.m2 ? "block" : "none"}}>
                        <Carousel className="carousel" autoPlay={false} indicators={true} navButtonsAlwaysVisible={true}>
                            { modelImages2.map( (item, i) => <img key={i} src={item.img} alt={item.title} width="100%" height="100%"/>) }
                        </Carousel>        
                    </div>
                </div>

                <div className="large-project-entry">
                    <ProjectInfo 
                        title="Low-poly Dragon" 
                        description="A low-poly model of a dragon."
                        img={process.env.PUBLIC_URL + "/images/icons/blender_icon.png"}
                        date="July 2020"
                        tools="Blender"
                        link=""
                        linkText=""
                    />
                    <Button className="btns" buttonStyle='btn--toggle' buttonSize='btn--medium' onClick={() => {toggleModelImages(3)}}>
                        { modelVis.m3 ? "Hide" : "Show More"}
                    </Button>
                    <div style={{display: modelVis.m3 ? "block" : "none"}}>
                        <Carousel className="carousel" autoPlay={false} indicators={true} navButtonsAlwaysVisible={true}>
                            { modelImages3.map( (item, i) => <img key={i} src={item.img} alt={item.title} width="100%" height="100%"/>) }
                        </Carousel>        
                    </div>
                </div>
           </div>

           {/* <div id="design-projects" className="article">
               <h2>GRAPHIC DESIGN</h2>
               <p>posters, postcards, tshirt designs</p>
           </div> */}
           
        </div>
    )
}

export default Projects