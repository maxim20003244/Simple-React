function About (){
    const name = "Maksym Rotar";
    const profession = "Java Developer";
    return(
        <section id='about' className='about-section'>
        <h2>About Me</h2>
        <p>Hello ! I am {name} , a passsionate {profession}, I love building web applicaiton that solve real worl user world</p>
       </section>
    );
}
export default About