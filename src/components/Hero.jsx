import 'react'

const Hero = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0f0f0f',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'white',
      paddingTop: '80px',
    }}>

      <div>
        <p style={{ fontSize: '20px', color: '#00d4ff', marginBottom: '10px' }}>
          👋 Hello, I am
        </p>

        <h1 style={{ fontSize: '60px', fontWeight: 'bold', margin: '10px 0' }}>
          Sufiya Nadaf
        </h1>

        <h2 style={{ fontSize: '26px', color: '#00d4ff', marginBottom: '20px' }}>
          Turning Ideas into Designs & Data into Stories
        </h2>

        <p style={{ fontSize: '18px', color: '#cccccc', maxWidth: '580px', margin: '0 auto 40px', lineHeight: '1.8' }}>
          BBA Graduate from Belgaum, India  | Aspiring UI/UX Designer, Data Analyst & Game Character Designer. 
          Passionate about Drawing, Painting, Crafting & Gaming 🎨🎮
        </p>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <a href="#projects" style={{
            padding: '14px 32px',
            backgroundColor: '#00d4ff',
            color: '#0f0f0f',
            borderRadius: '30px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '16px',
          }}>
            View Projects
          </a>

          <a href="#contact" style={{
            padding: '14px 32px',
            border: '2px solid #00d4ff',
            color: '#00d4ff',
            borderRadius: '30px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '16px',
          }}>
            Contact Me
          </a>
        </div>

      </div>
    </div>
  )
}

export default Hero
