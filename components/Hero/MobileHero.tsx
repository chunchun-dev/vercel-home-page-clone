import { Button, Grid } from '@geist-ui/core'
import React from 'react'

function MobileHero() {
  return (
    <>
        <style>{`
            #hero {
                height: 90vh;
            }
            
            #title {
                display: flex;
                flex-direction: column;
                margin-bottom: 64px;
            }

            #title > h1 {
                text-align: center;
                font-size: 23vw;
                font-weight: 800;
                letter-spacing: -.06em;
                line-height: 1;
                margin-bottom: 5px;
                margin-top: 0;
            }

            #actions {
                display: flex;
                flex-direction: column;
                gap: 30px;
                margin-bottom: 64px;
                letter-spacing: -.02em;
                line-height: 1.6em;
            }

            #desc > h2 {
                color: gray;
                font-size: 1.25rem;
                font-weight: 400;
                text-align: center;
            }
        `}</style>
        <Grid padding={'2rem'} paddingTop={'3rem'} id='hero'>
            <div id='title'>
                <h1>Develop.</h1>
                <h1>Preview.</h1>
                <h1>Ship.</h1>
            </div>
            <div id='actions'>
                <Button auto scale={1.25} type='secondary'>Start Deploying</Button>
                <Button auto scale={1.25}>Get a demo</Button>
            </div>
            <div id='desc'>
                <h2>Vercel combines the best developer experience with an obsessive focus on end-user performance. Our platform enables frontend teams to do their best work.</h2>
            </div>
        </Grid>
    </>
  )
}

export default MobileHero