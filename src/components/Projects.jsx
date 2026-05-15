import React from 'react'

const projects = [
  {
    title: '📊 Fund Flow Analysis',
    description: 'Analysed fund flow at Star Line Industries during my finance internship using MS Excel. Tracked income, expenses and financial patterns.',
    tags: ['MS Excel', 'Finance', 'Data Analysis'],
  },
  {
    title: '🌱 Super-Yielder',
    description: 'A business plan for an agriculture startup focused on improving crop yields. Covers market research, strategy and financial projections.',
    tags: ['Business Plan', 'MS PowerPoint', 'Research'],
  },
  {
    title: '🎨 Art Portfolio',
    description: 'A collection of traditional pencil sketches, ink drawings and anime style characters showcasing my creative skills.',
    tags: ['Drawing', 'Sketching', 'Illustration'],
  },
]

const Projects = () => {
  return (
    <div id="projects" style={{
      backgroundColor: '#0f0f0f',
      padding: '80px 40px',
      textAlign: 'center',
      color: 'white',
    }}>
      <h2 style={{ fontSize: '40px', marginBottom: '10px' }}>
        💼 My <span style={{ color: '#00d4ff' }}>Projects</span>
      </h2>
      <p style={{ color: '#aaaaaa', marginBottom: '50px', fontSize: '18px' }}>
        Things I have worked on
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px',
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        {projects.map((project, index) => (
          <div key={index} style={{
            backgroundColor: '#1a1a1a',
            border: '2px solid #222',
            borderRadius: '16px',
            padding: '30px 24px',
            textAlign: 'left',
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
            <h3 style={{ fontSize: '22px', marginBottom: '14px' }}>{project.title}</h3>
            <p style={{ color: '#aaaaaa', fontSize: '15px', lineHeight: '1.7', marginBottom: '20px' }}>
              {project.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.tags.map((tag, i) => (
                <span key={i} style={{
                  backgroundColor: '#00d4ff22',
                  color: '#00d4ff',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '13px',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects