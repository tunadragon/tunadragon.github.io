import React from 'react'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {

    const scrollToAbout = () => {
        const aboutElem = document.getElementById("about")
        const navbarOffset = 64;
        const position = aboutElem.getBoundingClientRect().top
        const offsetPosition = position - navbarOffset
        window.scrollTo(0, offsetPosition)
    }

    return (
        <>
            <div className="hero-container">
                <h1>Hi! I'm Patricia.</h1>
                <p>Welcome to my website!</p>
                <div className="hero-btns">
                    <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large' onClick={scrollToAbout}>
                        About Me
                    </Button>
                    <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>
                        My Projects
                    </Button>
                </div>
            </div>

            <div id="about" className="about-section">
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non enim praesent elementum facilisis leo vel. Montes nascetur ridiculus mus mauris vitae ultricies. Etiam erat velit scelerisque in dictum non. Cras semper auctor neque vitae tempus quam pellentesque. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Dignissim suspendisse in est ante. Egestas diam in arcu cursus euismod quis viverra. Dolor purus non enim praesent elementum facilisis. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Eget lorem dolor sed viverra ipsum nunc aliquet. Metus aliquam eleifend mi in nulla.

Sit amet luctus venenatis lectus magna fringilla urna. Eu lobortis elementum nibh tellus molestie nunc non blandit. Tortor pretium viverra suspendisse potenti. Nisi est sit amet facilisis magna etiam tempor. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Posuere morbi leo urna molestie at elementum eu facilisis sed. Id aliquet lectus proin nibh. Tellus elementum sagittis vitae et leo duis ut diam. Non enim praesent elementum facilisis leo vel. Dui ut ornare lectus sit amet est placerat. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Ac felis donec et odio pellentesque diam volutpat commodo. Commodo odio aenean sed adipiscing.

At elementum eu facilisis sed odio morbi. Lacinia at quis risus sed. Mauris pellentesque pulvinar pellentesque habitant morbi. Nullam vehicula ipsum a arcu. Amet risus nullam eget felis eget. At imperdiet dui accumsan sit amet nulla facilisi morbi. Eu sem integer vitae justo. At erat pellentesque adipiscing commodo. Neque laoreet suspendisse interdum consectetur. Mauris ultrices eros in cursus turpis massa tincidunt dui. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Volutpat diam ut venenatis tellus in metus. At tellus at urna condimentum mattis pellentesque id. Sed egestas egestas fringilla phasellus. Placerat vestibulum lectus mauris ultrices eros in cursus. Ac ut consequat semper viverra nam libero justo laoreet.

Pretium viverra suspendisse potenti nullam ac tortor. Ultricies mi eget mauris pharetra et ultrices neque ornare. Ultrices vitae auctor eu augue ut lectus arcu. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Adipiscing tristique risus nec feugiat in fermentum posuere urna nec. Fermentum odio eu feugiat pretium. Eget mi proin sed libero enim sed faucibus turpis. Vel pharetra vel turpis nunc. Consectetur adipiscing elit pellentesque habitant morbi tristique. Condimentum id venenatis a condimentum vitae sapien pellentesque. Arcu vitae elementum curabitur vitae nunc sed velit.

Enim sed faucibus turpis in eu mi bibendum. Dictumst vestibulum rhoncus est pellentesque elit. Nam libero justo laoreet sit amet cursus. Vitae auctor eu augue ut lectus. Lacus luctus accumsan tortor posuere ac ut consequat. Eu sem integer vitae justo eget magna fermentum iaculis. Porttitor leo a diam sollicitudin tempor id eu nisl. At tellus at urna condimentum mattis. Consequat id porta nibh venenatis cras. Venenatis tellus in metus vulputate. Morbi tincidunt ornare massa eget egestas purus. Aliquet enim tortor at auctor urna nunc.</p>
                {/* I am a recent graduate, I've worked at __ as ___, main programming languages, my interests, recent projects */}
            </div>
        </>
    )
}

export default HeroSection
