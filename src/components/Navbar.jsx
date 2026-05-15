import 'react'

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      backgroundColor: '#0f0f0f',
      color: 'white',
      position: 'fixed',
      top: 0,
      width: '100%',
    }}>

      <h1 style={{ fontSize: '24px', color: '#00d4ff' }}>
        Sufiya
      </h1>

      <ul style={{
        display: 'flex',
        gap: '30px',
        listStyle: 'none',
        margin: 0,
        padding: 0,
      }}>
        <li><a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
        <li><a href="#skills" style={{ color: 'white', textDecoration: 'none' }}>Skills</a></li>
        <li><a href="#projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</a></li>
        <li><a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
      </ul>

    </nav>
  )
}

export default Navbar