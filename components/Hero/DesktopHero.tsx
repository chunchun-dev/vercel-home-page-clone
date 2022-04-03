import { Button, Grid } from '@geist-ui/core'
import React from 'react'

function DesktopHero() {
  return (
    <>
      <style>{`
        #hero {
          padding-top: 3.5rem;
          width: 100%; 
          height: 90vh;
          margin-top: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        #buttons {
          margin-top: 20px;
          display: flex;
          gap: 20px;
          margin-bottom: 64px;
        }

        #desc {
          color: gray;
          font-size: 1.25rem;
          font-weight: 400;
          text-align: center;
        }
      `}</style>
      <div id='hero'>
        <div id='title' style={{ textAlign: 'center' }}>
          <h1 style={{fontSize: '10rem', lineHeight: 1, fontWeight: 800,letterSpacing: '-.06em', marginTop: '-3rem', marginBottom: '2.7rem'}}>Develop.</h1>
          <h1 style={{fontSize: '10rem', lineHeight: 1, fontWeight: 800,letterSpacing: '-.06em', marginTop: '-3rem', marginBottom: '2.7rem'}}>Preview.</h1>
          <h1 style={{fontSize: '10rem', lineHeight: 1, fontWeight: 800,letterSpacing: '-.06em', marginTop: '-3rem', marginBottom: '2.7rem'}}>Ship.</h1>
        </div>
        <div id='buttons'>
          <Button style={{ minWidth: 200 }} height={'50px'} paddingLeft={1.7} paddingRight={1.7} auto scale={1.55} width={'100%'} type='secondary'>Start Deploying</Button>
          <Button style={{ minWidth: 200 }} height={'50px'} auto scale={1.55} width={'100%'}>Get a demo</Button>
        </div>
        <div id='desc'>
          <p>Vercel combines the best developer experience with an obsessive focus on end-user performance.<br/> Our platform enables frontend teams to do their best work.</p>
        </div>
      </div>
    </>
  )
}

export default DesktopHero