import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { SkillEntry } from './SkillEntry'
import { ExperienceEntry } from './ExperienceEntry'
import { ProjectEntry } from './ProjectEntry'
import CarouselItem from "./CarouselItem";
import './Home.css'
import Carousel from 'react-material-ui-carousel'

function Home() {
    const scrollWithOffset = (el) => {
        const navbarOffset = document.documentElement.clientHeight * 0.08;
        const position = el.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = position - navbarOffset
        window.scrollTo(0, offsetPosition)
    }

    return (
        <div className='page-content'>
            <div id='home' >
                <h1>Hi, I'm Patricia.</h1>
                <p>Welcome to my website!</p>
                <Link to='/#about' scroll={el => scrollWithOffset(el)}>
                    <button className='btn btn-outline'>About Me</button>
                </Link>
            </div>

            <div id='about' className='section'>
                <h1 className='section-title'><i className="far fa-user"></i> About Me</h1>
                <div className='card-container'>
                    <div className='profile-pic-container'>
                        <img className='profile-pic-large' src={`${process.env.PUBLIC_URL}/images/pfp_large.jpg`} alt='Profile' />
                        <a href='https://linkedin.com/in/patricia-lee-934177120' target='_blank' rel="noreferrer"><i className="fab fa-linkedin social-icon"></i></a>
                        <a href='https://github.com/tunadragon' target='_blank' rel="noreferrer"><i className="fab fa-github social-icon"></i></a>
                    </div>
                    <div className='profile-text'>
                        <h2>Patricia Lee</h2>
                        <br/>
                        <p>I am a graduating Computer Science student from the 
                            University of Toronto and have been studying computer science in high school and 
                            university for over 5 years. I have also have previously worked at Ontario Power Generation 
                            as a Co-op Computer-based Training Developer. Outside of programming, I 
                            enjoy drawing, 3d modelling and playing video games.
                        </p>
                        <br/>
                        <div><i className="fas fa-home"></i> Scarborough, Ontario</div>
                        <div><i className="fas fa-envelope"></i> patricia.e.lee.work@gmail.com</div>
                        <br/>
                    </div>
                </div>

                <h2>Education</h2>
                <div className='card-container education-entry'>
                    <ExperienceEntry 
                        title='Honours Bachelor of Science' 
                        location='University of Toronto' 
                        date='September 2016 - December 2020'>
                        <p>Computer Science Specialist Co-op (Software Engineering Stream)</p>
                        <p><b>cGPA:</b> 3.79/4.0</p>
                    </ExperienceEntry>
                </div>

                <h2>Skills</h2>
                <div className='card-container skills-container'>
                    <div className='skill-list'>
                        {/* <h3>Programming</h3> */}
                        <SkillEntry category='Programming Languages'>Java, JavaScript, Python, Haskell</SkillEntry>
                        <SkillEntry category='Markup and Style Sheet'>HTML, CSS, XML </SkillEntry>
                        <SkillEntry category='Web Development Frameworks'>React, Angular, jQuery, Express </SkillEntry>
                        <SkillEntry category='Databases'>PostgreSQL, MongoDB </SkillEntry>
                        <SkillEntry category='Development Concepts'>Agile workflows (Scrum and Kanban), RESTful API, Responsive design </SkillEntry>
                        <SkillEntry category='Version Control'>Git, SVN </SkillEntry>

                        {/* <h3>Software</h3> */}
                        <SkillEntry category='Microsoft Office'>Word, Excel, PowerPoint, Outlook </SkillEntry>
                        <SkillEntry category='Adobe Creative Cloud'>Photoshop, Illustrator, Animate, InDesign </SkillEntry>
                        <SkillEntry category='Other'>Blender, Unity </SkillEntry>
                    </div>
                    

                </div>

            </div>
            <div id='experience' className='section'>
                <h1 className='section-title'><i className="fas fa-briefcase"></i> Experience</h1>
                <h2>Work Experience</h2>
                <ExperienceEntry 
                    title='Computer-based Training Developer / eLearning Multimedia Designer (Co-op)' 
                    location='Ontario Power Generation - Pickering, Ontario' 
                    date='September 2018 - May 2019' 
                    separator>
                </ExperienceEntry>

                <ExperienceEntry 
                    title='Information Security Coordinator (Co-op)' 
                    location='CIBC - Toronto, Ontario' 
                    date='January 2018 - April 2018' 
                    separator>
                </ExperienceEntry>

                <ExperienceEntry 
                    title='Co-op Student' 
                    location='Fish Out of Water Design - Toronto, Ontario' 
                    date='September 2016 - December 2020' 
                    separator>
                </ExperienceEntry>

                <br/>

                <h2>Volunteer Experience</h2>
                <ExperienceEntry 
                    title='Volunteer Note Taker' 
                    location='UofT Accessibility Services - Toronto, Ontario' 
                    date='September 2016 - May 2017' 
                    separator>
                </ExperienceEntry>
            </div>
            <div id='projects' className='section'>
                <h1 className='section-title'><i className="fas fa-tools"></i> Projects</h1>
                <h2>Programming</h2>
                <ProjectEntry 
                    title='Personal Website' 
                    date='January 2021' 
                    tools='React, HTML, CSS, JavaScript, Git'
                    githubLink='https://github.com/tunadragon/tunadragon.github.io'
                    url='https://www.patriciaelee.me'>
                    <p>A website developed to display my skills, experience and projects.</p>
                </ProjectEntry>

                <ProjectEntry 
                    title='Architect 3D' 
                    date='April 2020' 
                    tools='Angular, Three.js, NodeJs, GraphQL, Git'
                    githubLink=''
                    url='https://www.architect3d.me'>
                    <p>A web app where users can collaboratively create and edit 3D scenes.</p>
                </ProjectEntry>

                <ProjectEntry 
                    title='Mozilla Firefox DevTools Contributions' 
                    date='April 2020' 
                    tools='JavaScript, Mochitest framework, Mercurial'
                    githubLink=''
                    url=''>
                    <p>Fixed bugs and developed small features for Firefox DevTools.</p>
                </ProjectEntry>
                
                <ProjectEntry 
                    title='The Web Gallery' 
                    date='February 2020' 
                    tools='HTML, CSS, Node.js, Express, NeDB NoSQL database'
                    githubLink=''
                    url=''>
                    <p>A local web app where users can share photos and comments.</p>
                </ProjectEntry>

                <br/>

                <h2>3D Modelling and Game Development</h2>
                <Carousel
                    className='carousel'
                    navButtonsAlwaysInvisible
                    interval='8000'
                >
                    <CarouselItem 
                        title='Rainey Model' 
                        imageUrl={process.env.PUBLIC_URL + '/images/3d/1_turnaround.gif'} 
                        imageUrl2={process.env.PUBLIC_URL + '/images/3d/1_render.gif'}
                        bgColor='#242424'
                        date='Jan 2021'
                        description='A model of an original character compatible with VR apps. Made with Blender and Unity.' 
                    />
                    
                    <CarouselItem 
                        title='Qiqi Model' 
                        imageUrl={process.env.PUBLIC_URL + '/images/3d/2_turnaround.gif'} 
                        imageUrl2={process.env.PUBLIC_URL + '/images/3d/2_render.gif'}
                        bgColor='#474251'
                        date='Dec 2020'
                        description='A low-poly model of the character Qiqi from the video game Genshin Impact. Made with Blender.' 
                    />

                    <CarouselItem 
                        title='Dragon Model' 
                        imageUrl={process.env.PUBLIC_URL + '/images/3d/3_turnaround.gif'} 
                        imageUrl2={process.env.PUBLIC_URL + '/images/3d/3_render.png'}
                        bgColor='#A1A3A0'
                        date='July 2020'
                        description='A low-poly model of a dragon. Made with Blender.' 
                    />

                    <CarouselItem 
                        title='Wolf Run' 
                        imageUrl={process.env.PUBLIC_URL + '/images/3d/4_screencap.png'} 
                        bgColor='#242424'
                        date='March 2019'
                        description='An endless runner game created in Unity. Art and assets were with Photoshop.' 
                        link='https://simmer.io/@tunadragon/~4a585bea-aa40-e790-a7a5-778cd61deb81'
                    />
                </Carousel>
                
            </div>
        </div>
    )
}

export default Home
