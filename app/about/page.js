import React from 'react';

const About = () => {
  return (
    <div>
        <h1 className='md:text-5xl text-3xl flex items-center justify-center pt-20 font-bold'> About Us</h1>
        <div className="hero z-10 my-10 flex justify-center items-center">
        <div className="hero-content flex-col lg:flex-row-reverse z-10 w-5/6">
            <div className="w-full lg:w-1/2 flex lg:justify-end justify-center">
                <img
                src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                className="max-w-64 rounded-lg shadow-2xl" />
            </div>
                <div className='w-full lg:w-1/2 md:mt-0 mt-8 md:text-left text-center'>
                <h1 className="md:text-4xl text-2xl font-bold">Our Story </h1>
                <p className="py-6">
                At Smiles Beyond Boundaries, we recognize the disparities in dental health faced by underserved communities and are committed to addressing them. 
                We plan to do this by empowering undergraduate pre-dental students in order to contribute to the reduction of these disparities and the promotion 
                of oral health equity for all. Our mission is to equip undergraduate pre-dental students with the tools and knowledge needed to make a difference 
                and to address the oral healthcare disparities that are prevalent in underserved communities through education and volunteerism. We are dedicated 
                to providing undergraduate pre-dental students with hands-on experience and comprehensive education. Through volunteer work and educational 
                initiatives, we wish to empower them in order to make a meaningful impact on the oral health of underserved areas.

                </p>
            </div>
        </div>
    </div>
    <div className="hero z-10 my-10">
        <div className="hero-content flex-col lg:flex-row z-10 w-5/6">
            <div className="w-full lg:w-1/2 flex lg:justify-start justify-center">
                <img
                src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                className="max-w-64 rounded-lg shadow-2xl" />
            </div>
            <div className='w-full lg:w-1/2 md:mt-0 mt-8 md:text-left text-center'>
            <h1 className="md:text-4xl text-2xl font-bold">Our Mission</h1>
            <p className="py-6">
            UCLA SBB supports fellow students by effort through hands-on projects and personal development to assist our members in becoming competitive dental 
            school applicants through educational opportunities, community service, and exposure to the dental field. Past programs include conferences, dental 
            professional presentations, dental school tours, socials, shadowing opportunities, practice DAT resources, resume workshops, in addition to a 
            growing range of other events.
            </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About;