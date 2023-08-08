import React from 'react'
import './projects.css'
import project1 from '../../assets/project1.jpeg'
import project2 from '../../assets/project2.jpeg'
import project3 from '../../assets/project3.jpeg'

// my data
const projectData = [
{
  id: 1,
  image: project1,
  title: 'GIG Website design',
  summary: 'I am passionate graphic designer. I design user interfaces for websites.',
  link: 'https://www.behance.net/gallery/165551295/GIG-Website-UI-Design'
},
{
  id: 2,
  image: project2,
  title: 'Anwar UI Logo',
  summary: 'I am passionate graphic designer. I design user interfaces for websites.',
  link: 'https://www.behance.net/gallery/165563729/Anwar-UI-Logo'
},
{
  id: 3,
  image: project3,
  title: 'SYRA Branding',
  summary: 'I am passionate graphic designer. I design user interfaces for websites.',
  link: 'https://www.behance.net/gallery/166435851/SYRA-Branding'
},

]

const Projects = () => {
  return (

  <section id='projects'>
   <h2> Projects</h2>
    <div className='container project_container'>
    {
    projectData.map(({id,image,title,summary,link}) => {
      return (
        <article className='project_item'>
        <div className='project_item_img'>
          <img src={image}></img>
        </div>
        <h3> {title}</h3>
        <p className='text-light project_discription'>{summary}</p>
        <a href={link} className='btn'> Live Demo</a>
      </article>
      )

    })
  }

<a href='#projects' className='btn btn-primary'> view projects </a>

    </div>



    </section>
  )
}

export default Projects