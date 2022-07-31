import React from 'react'
import Head from 'next/head'
import {AppBar, Typography, Toolbar, Container} from '@material-ui/core'
import useStyles from '../utils/Layout'

export default function Layout({children}) {
    const classes = useStyles();

    return (
        <div>
            <Head>
                <title>Shopping Zone</title>
            </Head>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <Typography variant="h6"> Shopping Zone </Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.main}>
                {children}
            </Container>
            <footer className={classes.footer}>
                <Typography variant="body2">
                    All rights reserved. &copy; {new Date().getFullYear()} Shopping Zone
                </Typography>
            </footer>
        </div>
    )
}
