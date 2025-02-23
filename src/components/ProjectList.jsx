function projectList(){
    const project = [
        {
          title: "Project One",
          description : "A web application using React and Spring",
          link : "£"
        },
        
        {
          title: "Project Two",
          description : "E-commerce Platform build using Django",
          link : "£"
        }
      ]
    
   
    return (
        <section id='project' className='project-section'>
        <h2>Projects</h2>
        <div className='projects-list'>
      {project.map((project,index)=>(
        <div key={index} className='project-item'>
        <h3>{project.title}</h3>
        <h3>{project.description}</h3>
        <a href={project.link} target='_blank' rel='noopener' noreferrer>View Project</a>
        </div>
      
      ))}
      </div>
      </section>
    )
}
export default projectList;