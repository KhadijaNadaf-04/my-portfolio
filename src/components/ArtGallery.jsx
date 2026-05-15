import React, { useState } from 'react'

import art1 from '../images/art1.jpeg'
import art2 from '../images/art2.jpeg'
import art3 from '../images/art3.jpeg'
import art4 from '../images/art4.jpeg'
import art5 from '../images/art5.jpeg'
import art6 from '../images/art6.jpeg'
import art7 from '../images/art7.jpeg'
import art8 from '../images/art8.jpeg'
import art9 from '../images/art9.jpeg'

const arts = [
  art1, art2, art3, art4, art5,
  art6, art7, art8, art9
]

const ArtGallery = () => {
  const [selected, setSelected] = useState(null)

  return (
    <div style={{
      backgroundColor: '#0f0f0f',
      padding: '80px 40px',
      color: 'white',
      textAlign: 'center',
    }}>

      <h2 style={{ fontSize: '40px', marginBottom: '10px' }}>
        🎨 Art <span style={{ color: '#00d4ff' }}>Gallery</span>
      </h2>
      <p style={{ color: '#aaaaaa', marginBottom: '50px', fontSize: '18px' }}>
        Traditional pencil and ink sketches — my creative side 🖊️
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        {arts.map((art, index) => (
          <div
            key={index}
            onClick={() => setSelected(art)}
            style={{
              cursor: 'pointer',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '2px solid #222',
              transition: 'transform 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.05)'
              e.currentTarget.style.border = '2px solid #00d4ff'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.border = '2px solid #222'
            }}
          >
            <img
              src={art}
              alt={'Art ' + (index + 1)}
              style={{
                width: '100%',
                height: '220px',
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
      </div>
        <a

      href="https://www.instagram.com/khadija04__"
        target="_blank"
        rel="noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '50px',
          padding: '14px 32px',
          backgroundColor: '#00d4ff',
          color: '#0f0f0f',
          borderRadius: '30px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '16px',
        }}
      >
        See More on Instagram 📸
      </a>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            cursor: 'pointer',
          }}
        >
          <img
            src={selected}
            alt="Selected Art"
            style={{
              maxWidth: '80%',
              maxHeight: '80vh',
              borderRadius: '16px',
            }}
          />
        </div>
      )}

    </div>
  )
}

export default ArtGallery