import React from 'react'
import Head from 'next/head'
import {AppBar, Typography, Toolbar, Container} from '@material-ui/core'
import useStyles from '../utils/styles'
import Link from 'next/link'

export default function Layout({children}) {
    const classes = useStyles();

    return (
        <div>
            <Head>
                <title>Shopping Zone</title>
            </Head>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <Link href="/">
                        <a>
                            <Typography variant="h6" className={classes.brand}> Shopping Zone </Typography>
                        </a>
                    </Link>
                    <div className={classes.grow}></div>
                    <div>
                        <Link href="/cart">
                            <a>Cart</a>
                        </Link>
                        <Link href="/login">
                            <a>Login</a>
                        </Link>
                    </div>
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
