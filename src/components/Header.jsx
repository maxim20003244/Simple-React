function Header (){
    const name = "Maksym Rotar";
    const profession = "Java Developer";
    return (
        <header className="header">
  <h1>{name}</h1>
  <p>{profession}</p>
  <nav>
    <a href='about'>About</a>
    <a href='project'>Project</a>
    <a href='contact'>Contact</a>
    </nav>
</header>
    );
}
export default Header;