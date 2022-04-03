import { Button, Grid } from '@geist-ui/core'
import React from 'react'

function TabletHero() {


    return (
        <>
            <style>{`
                #hero {
                    padding: 24px;
                    width: 100%; 
                    height: 90vh;
                    margin-top: 2.5rem;
                }

                #title {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 64px;
                }
    
                #title > h1 {
                    text-align: center;
                    font-size: 8rem;
                    font-weight: 800;
                    letter-spacing: -.06em;
                    line-height: 1;
                    margin-bottom: 5px;
                    margin-top: 0;
                }

                #actions {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 15px;
                    margin-bottom: 64px;
                }

                #desc {
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
                    <Grid xs={7}><Button style={{ minWidth: 200 }} height={'50px'} paddingLeft={1.7} paddingRight={1.7} auto scale={1.55} width={'100%'} type='secondary'>Start Deploying</Button></Grid>
                    <Button style={{ minWidth: 200 }} height={'50px'} auto scale={1.55} width={'100%'}>Get a demo</Button>
                </div>
                <div id='desc'>
                    <p>Vercel combines the best developer experience with an obsessive focus on end-user performance. Our platform enables frontend teams to do their best work.</p>
                </div>
            </Grid>
        </>
    )
}

export default TabletHero