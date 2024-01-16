import React  from "react";
import Navbar from "./nav";
import { Link } from "react-router-dom";

export default function Portfolio(){
  
    return(
        <>
          <Navbar/>
            
        <div className="container">
        <div className="flex flex-col md:flex-row justify-center items-center">
  <div className="text-center md:text-left md:ms-28">
    <h1 className="text-4xl md:text-6xl font-extrabold mt-6">Hi!</h1>
    <h1 className="text-4xl md:text-6xl">I'm Shamila</h1>
    <button className="btn-primary text-sm mx-auto md:m-6 p-2 bg-transparent border">
      <a
        href="../image/-SHAMILA V-.pdf"
        download="Shamila_Resume.pdf"
        className="text-black no-underline"
      >
        DOWNLOAD RESUME <span className="material-symbols-outlined text-sm">download</span>
      </a>
    </button>
  </div>
  <div className="mt-6 md:mt-0">
    <img src="../image/shan-new.jpg" className="w-full md:w-96 md:ml-16" alt="Shamila's Image" />
  </div>
</div>
</div>

<div className="container ms-20">
<div className="flex flex-col items-center md:items-start" id="about">
  <p className="text-xs tracking-widest font-13">ABOUT</p>
  <h6 className="font-16 text-xl mt-4 font-semibold tracking-widest">WHO AM I?</h6>
  <p className="tracking-wide leading-loose w-5/6 md:w-11/12 lg:w-10/12 xl:w-11/12 2xl:w-7/12 mt-4 text-stone-600 text-justify">
    I am Shamila V, a passionate MERN stack developer with a solid foundation in computer science, holding a B.Tech degree. My journey in the tech world has been both dynamic and rewarding. Throughout my academic career, I delved deep into the principles of computer science, honing my analytical and problem-solving skills. As a MERN (MongoDB, Express.js, React, Node.js) stack enthusiast, I have a comprehensive understanding of full-stack development, allowing me to create seamless and interactive web applications. My commitment to continuous learning and staying updated with the latest industry trends empowers me to craft robust and innovative solutions. With a dedication to excellence, I am eager to contribute my skills and passion to projects that push the boundaries of technology. Let's build the future together!
  </p>
</div>
<div className="flex flex-col md:flex-row mt-10 mb-20">
  <div className="w-full md:w-80 h-32 p-4 md:p-10 flex items-center justify-center text-lg border border-gray-300 rounded-md shadow-inner bg-white mx-auto my-3 md:my-0 md:mx-2">
    <span className="material-symbols-outlined text-3xl md:text-4xl mr-2 text-red-700">lightbulb</span>
    Web Design
  </div>

  <div className="w-full md:w-80 h-32 p-4 md:p-10 text-center text-lg border border-gray-300 rounded-md shadow-2xl bg-white mx-auto my-3 md:my-0 md:mx-2 flex items-center justify-center">
    <span className="material-symbols-outlined text-3xl md:text-4xl mr-2 text-blue-600">code_blocks</span>
    Web Development
  </div>

  <div className="w-full md:w-80 h-32 p-4 md:p-10 text-center text-lg border border-gray-300 rounded-md shadow-inner bg-white mx-auto my-3 md:my-0 md:mx-2 flex items-center justify-center">
    <span className="material-symbols-outlined text-3xl md:text-4xl mr-2 text-orange-400">database</span>
    Software
  </div>

  <div className="w-full md:w-80 h-32 p-4 md:p-10 text-center text-lg border border-gray-300 rounded-md shadow-2xl bg-white mx-auto my-3 md:my-0 md:mx-2 flex items-center justify-center">
    <span className="material-symbols-outlined text-3xl md:text-4xl mr-2 text-purple-900">api</span>
    UI/UX Design
  </div>
</div>
</div>

<div className="container mx-auto">
  <div className="flex flex-col items-center md:items-start ms-20" id="services">
    <p className="text-xs tracking-widest font-13">WHAT I DO?</p>
    <h6 className="font-16 text-xl mt-4 font-semibold tracking-widest">HERE ARE SOME OF MY EXPERTISE</h6>
  </div>

  <div className="flex flex-col md:flex-row mt-10 mb-20">
   
    <div className="mb-10 md:mb-0 md:w-1/2">
      <div className="mx-auto box p-4 md:p-10 flex items-center justify-center text-lg border border-gray-300 rounded-md shadow-2xl bg-white">
        <div className="flex flex-col">
          <span className="material-symbols-outlined text-5xl text-center mr-2 text-slate-200 bg-blue-800 rounded-full">lightbulb</span>
          <h4 className="text-justify mt-4 h_4">INNOVATIVE IDEAS</h4>
          <p className="text-justify text-lg text-slate-900 mt-5">As a web developer, I innovate Progressive Web Apps and approaches that redefine user experiences. These concepts exemplify my dedication to pushing boundaries and delivering cutting-edge solutions in web development.</p>
        </div>
      </div>
    </div>

    <div className="md:w-1/2">
      <div className="mx-auto box p-4 md:p-10 flex items-center justify-center text-lg border border-gray-300 rounded-md shadow-2xl bg-white">
        <div className="flex flex-col">
          <span className="material-symbols-outlined text-5xl text-center mr-2 text-slate-200 bg-red-800 rounded-full">database</span>
          <h4 className="text-justify mt-4 h_4">SOFTWARE</h4>
          <p className="text-justify text-lg text-slate-900 mt-5">Proficient in the MERN stack, I specialize in end-to-end web application development. With expertise in MongoDB, Express.js, React, and Node.js, I create scalable and dynamic solutions for the modern digital landscape.</p>
        </div>
      </div>
    </div>
  </div>

  <div className="flex flex-col md:flex-row mb-20">
    
    <div className="mb-10 md:mb-0 md:w-1/2">
      <div className="mx-auto box p-4 md:p-10 flex items-center justify-center text-lg border border-gray-300 rounded-md shadow-2xl bg-white">
        <div className="flex flex-col">
          <span className="material-symbols-outlined text-5xl text-center mr-2 text-slate-200 bg-violet-700 rounded-full">note_stack</span>
          <h4 className="text-justify mt-4 h_4">WEB DESIGN</h4>
          <p className="text-justify text-lg text-slate-900 mt-5">As a web designer, I specialize in creating visually striking and user-centric websites. My designs seamlessly integrate aesthetics with functionality, ensuring an optimal user experience. Explore my portfolio to see a diverse range of projects that showcase my commitment to crafting impactful and responsive web designs.</p>
        </div>
      </div>
    </div>


    <div className="md:w-1/2">
      <div className="mx-auto box p-4 md:p-10 flex items-center justify-center text-lg border border-gray-300 rounded-md shadow-2xl bg-white">
        <div className="flex flex-col w-full">
          <span className="material-symbols-outlined text-5xl text-center mr-2 text-slate-200 bg-cyan-900 rounded-full">api</span>
          <h4 className="text-center mt-4 h_4">UI/UX DESIGN</h4>
          <p className="text-justify text-lg text-slate-900 mt-3">Recognizing the pivotal role of UI/UX design in web development, I prioritize creating seamless and engaging user interfaces. By integrating thoughtful user experience principles, I aim to enhance usability and satisfaction in every project. My portfolio exemplifies a dedication to crafting web solutions that not only function flawlessly but also prioritize user-centric design.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container mx-auto ms-20">
  <div className="flex flex-col">
    <p className="text-xs tracking-widest font-13" id="skill">MY SPECIALTY</p>
    <h6 className="font-16 text-xl mt-4 font-semibold tracking-widest">MY SKILLS</h6>
    <p className="tracking-wide leading-loose w-11/12 md:w-full text-stone-600 mt-14 text-justify">
      As a MERN stack developer, I specialize in crafting dynamic and scalable web applications. With expertise in Node.js, Express, React, and MongoDB, my proficiency spans the entire development process, ensuring the creation of modern, responsive, and feature-rich solutions for the digital realm.
    </p>
    <div className="flex flex-col md:flex-row mb-36">
      <div className="md:w-1/2">
        <section className="skills mt-10" id="skills">
          <div className="max-w-full">
            <div className="skills-content">
              <div className="column right">
                <div className="bars">
                  <div className="info">
                    <span>HTML</span>
                    <span>90%</span>
                  </div>
                  <div className="line html"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>CSS</span>
                    <span>90%</span>
                  </div>
                  <div className="line css"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>JavaScript</span>
                    <span>80%</span>
                  </div>
                  <div className="line js"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0">
        <section className="skills" id="skills">
          <div className="max-w-full">
            <div className="skills-content">
              <div className="column right">
                <div className="bars">
                  <div className="info">
                    <span>React</span>
                    <span>70%</span>
                  </div>
                  <div className="line php"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>Java</span>
                    <span>80%</span>
                  </div>
                  <div className="line mysql"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>MongoDB</span>
                    <span>75%</span>
                  </div>
                  <div className="line ph"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>

<div className="container mx-auto ms-20">
  <div className="flex flex-col" id="education">
    <p className="text-xs tracking-widest font-13" >EDUCATION</p>
    <h6 className="font-16 text-xl mt-4 font-semibold tracking-widest">EDUCATION</h6>
    
    <div className="border mt-16 w-full md:w-10/12 lg:w-8/12 xl:w-6/12 font-8 text-2xl rounded p-4 bg-slate-200">
      <div>INTERNSHIP IN MERN STACK DEVELOPMENT</div>
      <div className="text-lg">SYNNEFO SOLUTIONS | AUG, 2023 - FEB, 2024 </div>
    </div>

    <div className="border mt-5 w-full md:w-10/12 lg:w-8/12 xl:w-6/12 font-8 text-2xl rounded p-4 bg-slate-200">
      <div>BACHELOR DEGREE OF COMPUTER SCIENCE</div>
      <div className="text-lg">JAWAHARLAL COLLEGE OF ENGINEERING AND TECHNOLOGY | 2019 - 2023 </div>
    </div>

    <div className="border mt-5 w-full md:w-10/12 lg:w-8/12 xl:w-6/12 font-8 text-2xl rounded p-4 bg-slate-200">
      <div>HIGH SCHOOL SECONDARY EDUCATION</div>
      <div className="text-lg">G H S S VADANAMKURUSSI | 2017 - 2019 </div>
    </div>

    <div className="border mt-5 w-full md:w-10/12 lg:w-8/12 xl:w-6/12 font-8 mb-24 text-2xl rounded p-4 bg-slate-200">
      <div>HIGH SCHOOL EDUCATION</div>
      <div className="text-lg">AL - HUDA E M H S | 2016 - 2017 </div>
    </div>
  </div>
</div>

<div className="container mx-auto ms-20">
  <div className="flex flex-col" id="project">
    <p className="text-xs tracking-widest font-13" id="work">MY WORK</p>
    <h6 className="font-16 text-xl mt-4 font-semibold tracking-widest">RECENT WORK</h6>
    <div className="flex flex-col md:flex-row mt-12">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <div className="card">
          <div className="pic">
            <img src="../image/shop.jpg" alt="FILM" />
            <div className="overlay">
              <p className="text-p">bookMyShow | Website </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 ms-0 md:ms-20">
        <div className="card">
          <div className="pic">
            <img src="../image/fas.png" alt="FASHION" />
            <div className="overlay">
              <p className="text-p">E-commerce | Website</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-4 text-center">
      <Link to="/more-projects" className="text-blue-500 font-semibold">Load More</Link>
    </div>
  </div>
</div>

<div className="container mx-auto mt-20 ms-20 ">
  <div className="flex flex-col md:flex-row mt-10 mb-20">
    <div className="md:w-1/2 mb-8 md:mb-0">
      <p className="text-xs tracking-widest font-13" id="contact">GET IN TOUCH</p>
      <h6 className="font-16 text-xl mt-4 font-semibold tracking-widest">CONTACT</h6>

      <div className="flex items-center mt-6">
        <span className="mr-2 material-symbols-outlined text-3xl back justify-center border p-4">pin_drop</span>
        <p className="text-xl">Palakkad, Kerala</p>
      </div>

      <div className="flex items-center mt-6">
        <span className="mr-2 material-symbols-outlined text-3xl back justify-center border p-4">mail</span>
        <p className="text-xl">shamilav01@gmail.com</p>
      </div>

      <div className="flex items-center mt-6">
        <span className="mr-2 material-symbols-outlined text-3xl back justify-center border p-4">call</span>
        <p className="text-xl">9656429317</p>
      </div>
    </div>

    <div className="md:w-1/2 ms-0 md:ms-16">
      <div className="flex flex-col mt-5 md:mt-0">
        <div className="flex items-center mt-6">
          <a href="https://github.com/shamirashi" target="_blank" rel="noopener noreferrer" className="linkee">
            <button className="flex items-center justify-center w-32 bg-red-800 hover:bg-red-800 text-white p-4 rounded-lg no-underline">GitHub</button>
          </a>
        </div>

        <div className="flex items-center mt-6">
          <a href="https://www.linkedin.com/in/shamila-v-12394b219/" target="_blank" rel="noopener noreferrer" className="linkee">
            <button className="flex items-center justify-center w-32 bg-red-800 hover:bg-red-800 text-white p-4 rounded-lg no-underline">LinkedIn</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

