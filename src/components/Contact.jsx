import React from 'react'

const Contact = () => {
  return (
    <div id="contact" style={{
      backgroundColor: '#111111',
      padding: '80px 40px',
      textAlign: 'center',
      color: 'white',
    }}>
      <h2 style={{ fontSize: '40px', marginBottom: '10px' }}>
        📬 Contact <span style={{ color: '#00d4ff' }}>Me</span>
      </h2>
      <p style={{ color: '#aaaaaa', marginBottom: '50px', fontSize: '18px' }}>
        Feel free to reach out!
      </p>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        maxWidth: '500px',
        margin: '0 auto',
      }}>
        <a href="mailto:sufiyanadaf00@gmail.com" style={{
          backgroundColor: '#1a1a1a',
          border: '2px solid #222',
          borderRadius: '16px',
          padding: '24px',
          color: 'white',
          textDecoration: 'none',
          fontSize: '18px',
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
          📧 sufiyanadaf00@gmail.com
        </a>

        <a href="https://www.instagram.com/khadija04__" target="_blank" rel="noreferrer" style={{
          backgroundColor: '#1a1a1a',
          border: '2px solid #222',
          borderRadius: '16px',
          padding: '24px',
          color: 'white',
          textDecoration: 'none',
          fontSize: '18px',
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
          📸 Instagram — @khadija04__
        </a>

        <a href="https://www.linkedin.com/in/sufiya-nadaf-77a9b234a/" target="_blank" rel="noreferrer" style={{
          backgroundColor: '#1a1a1a',
          border: '2px solid #222',
          borderRadius: '16px',
          padding: '24px',
          color: 'white',
          textDecoration: 'none',
          fontSize: '18px',
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
          💼 LinkedIn — Sufiya Nadaf
        </a>
      </div>
    </div>
  )
}

export default Contact

