import React from 'react'

const About = () => {
  return (
    <div>
        <section className='about' style={{backgroundImage:"url(backimage.jpg) "}}>
            <div className='about-content'>
                <h2 className='fade-in'>About Us</h2>
                <p>{`our passion for bags we believe that a bag is more than just an accessory; it's a statement of style and individuality. Our passion for creating unique and functional bags drives us to design pieces that not only look good but also serve a purpose  Each of our bags is crafted with meticulous attention to detail, using premium materials that ensure durability and elegance. Our artisans pour their passion into every stitch, creating pieces that stand the test of time`}</p>
            </div>

        </section>
    </div>
  )
}

export default About;