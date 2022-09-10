import React from 'react';


function About() {
  return (
    <section className="About bg-dark text-white m-5 p-5 rounded">
      <h2 className='text-center'>About Me</h2>
      <div className='text-center'>
        <img src={'./assets/img/profile.jpg'} alt="Peter" height="200" className="mt-2" />
      </div>
      <p>Email: pettran866@gmail.com</p>
      <p className="mt-2">
        My name is Peter Tran and I am a developer/engineer with a computer science background. Earned my certificate in Full Stack Web Development from the UC Davis Coding Booting.
        I have become proficient in technical skills such as HTML, CSS, JavaScript, Node, Express, React, and others. As a creator, my goal is to design innovative, quality web
        applications. Additionally, I enjoy assisting others whether it is teaching them new concepts/tools or bugfixing. In my spare time, I like to play videogames, watch anime,
        read stories/books people have written online, and practicing my technical skills on hackerrank or making personal projects. If you have any questions, contact me by email.
      </p>
    </section>
  )
}

export default About;