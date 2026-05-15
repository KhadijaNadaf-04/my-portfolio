import React from 'react'

const skills = [
  { name: 'MS Excel', icon: '📊' },
  { name: 'MS Word', icon: '📝' },
  { name: 'MS PowerPoint', icon: '📽️' },
  { name: 'Figma', icon: '🎨' },
  { name: 'Canva', icon: '✏️' },
  { name: 'Adobe Illustrator', icon: '🖌️' },
  { name: 'Blender', icon: '🧊' },
  { name: 'Krita', icon: '🖊️' },
  { name: 'VS Code', icon: '💻' },
]

const Skills = () => {
  return (
    <div id="skills" style={{
      backgroundColor: '#111111',
      padding: '80px 40px',
      textAlign: 'center',
      color: 'white',
    }}>
      <h2 style={{ fontSize: '40px', marginBottom: '10px' }}>
        🛠️ My <span style={{ color: '#00d4ff' }}>Skills</span>
      </h2>
      <p style={{ color: '#aaaaaa', marginBottom: '50px', fontSize: '18px' }}>
        Tools & technologies I work with
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        maxWidth: '800px',
        margin: '0 auto',
      }}>
        {skills.map((skill, index) => (
          <div key={index} style={{
            backgroundColor: '#1a1a1a',
            border: '2px solid #222',
            borderRadius: '16px',
            padding: '30px 20px',
            fontSize: '18px',
            fontWeight: 'bold',
            transition: 'all 0.3s',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.border = '2px solid #00d4ff'
              e.currentTarget.style.transform = 'translateY(-5px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.border = '2px solid #222'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>{skill.icon}</div>
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills