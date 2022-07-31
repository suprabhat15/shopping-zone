import React from 'react'
import Head from 'next/head'
import {AppBar, Typography, Toolbar, Container} from '@material-ui/core'

export default function Layout({children}) {
  return (
    <div>
        <Head>
            <title>Shopping Zone</title>
        </Head>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6"> Shopping Zone </Typography>
            </Toolbar>
        </AppBar>
        <Container>
            {children}
        </Container>
        <footer>
            <Typography variant="body2">
                All rights reserved. &copy; {new Date().getFullYear()} Shopping Zone
            </Typography>
        </footer>
    </div>
  )
}
