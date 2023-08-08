import React from 'react'
import project1 from '../../assets/project1.jpeg'
import project2 from '../../assets/project2.jpeg'
import project3 from '../../assets/project3.jpeg'
import '../blog/blog.css'

const projectData = [
  {
    id: 1,
    image: project1,
    title: 'GIG Website design',
    summary: 'I am passionate graphic designer. I design user interfaces for websites and applications, flyers, instagram posts, branding and reports.',
    date: '2 May 2022'
  },
  {
    id: 1,
    image: project1,
    title: 'GIG Website design',
    summary: 'I am passionate graphic designer. I design user interfaces for websites and applications, flyers, instagram posts, branding and reports.',
    date: '2 May 2022'
  },
  {
    id: 1,
    image: project1,
    title: 'GIG Website design',
    summary: 'I am passionate graphic designer. I design user interfaces for websites and applications, flyers, instagram posts, branding and reports.',
    date: '2 May 2022'
  }
  
  ]

const Blog = () => {
  return (
    <section id='blog'>
    <h2> MY Blog</h2>
    <div className='container blog_container'>
    {
    projectData.map(({id,image,title,summary,date}) => {
      return (
        <article className='blog_item'>
        <div className='blog_item_img'>
          <img src={image}></img>
        </div>
        <h5 className='text-light '>{date}</h5>
        <h3> {title}</h3>
        <p className='text-light blog_discription'>{summary}</p>

      </article>
      )

    })
  }

<a href='#blog' className='btn btn-primary'> view blogs </a>

    </div>
    

    </section>
  )
}

export default Blog