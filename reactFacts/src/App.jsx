import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo_dark from '/src/assets/logo_dark.svg'
import './App.css'

function App() {

  return (
    <>
      <div style={{
        width: '686px',
        height: '459px',
        top: '91px',
      }}>

        <header style={{
          width: '735px',
          height: '91px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          backgroundColor: '#21222A',
          margin: 0,
          padding: '18 30px',
         borderTopLeftRadius: '20px',borderTopRightRadius: '20px',
        }}>
          <img src="src/assets/react.svg"
            alt="reactjs-icon"
            style={{
              width: '40px',
              height: '29.39px',
              top: '7px',
              left: '26px',
              color: '#21222A'
            }} />
          <h2 style={{
            width: '122.39px',
            height: '22,25px',
            top: '31px',
            left: '61.61px',
            font: 'Inter',
            margin: 0,
            color: '#61DAFB'
          }}
          >
            ReactFacts
          </h2>
        </header>

        <main style={{ width: '681px', height: '459px', backgroundColor: '#282D35', padding: '20px 27px', margin: 0,  display:'flow', borderBottomLeftRadius:'20px', borderBottomRightRadius:'20px' }}>

          <h1 style={{
            width: 'flex',
            height: '41px',
            top: '148px',
            left: '27px',
            size: '39.06px',
            textAlign: 'left',
            lineHeight: '6%',

          }}>
            Fun facts about React
          </h1>

          <div style={{
            width: '390px',
            height: '190px',
            top: '235px',
            left: '74px',

          }}>
            <ul style={{
              textAlign: 'left',
              listStyleType: 'none',
              paddingLeft: '20px',
              margin: 0
            }} >

              <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px', color: '#FFFFFF' }}>
                <span style={{
                  position: 'absolute', left: 0, color: '#61DAFB'       // Bullet color
                }}>•</span>
                Was first released in 2013
              </li>

              <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px', color: '#FFFFFF' }}>
                <span style={{
                  position: 'absolute', left: 0, color: '#61DAFB'       // Bullet color
                }}>•</span>
                Was originally created by Jordan Walke
              </li>

              <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px', color: '#FFFFFF' }}>
                <span style={{
                  position: 'absolute', left: 0, color: '#61DAFB'       // Bullet color
                }}>•</span>
                Has well over 200K stars on GitHub
              </li>

              <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px', color: '#FFFFFF' }}>
                <span style={{
                  position: 'absolute', left: 0, color: '#61DAFB'       // Bullet color
                }}>•</span>
                Is maintained by Meta
              </li>

              <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px', color: '#FFFFFF' }}>
                <span style={{
                  position: 'absolute', left: 0, color: '#61DAFB'       // Bullet color
                }}>•</span>
                Powers thousands of enterprise apps, including mobile apps
              </li>

            </ul>
          </div>

        </main>
      </div >

    </>
  )
}

export default App

