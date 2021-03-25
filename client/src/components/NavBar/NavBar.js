import React from "react"
import { Link } from "react-router-dom"
import useStyles from "./styles"
import memories from "../images/memories.png"
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core"

const NavBar = () => {
    const classes = useStyles()
    const user = null

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography
                    component={Link}
                    to="/"
                    className={classes.heading}
                    variant="h2"
                    align="center"
                >
                    Memories
                </Typography>
                <img
                    className={classes.image}
                    src={memories}
                    alt="memories"
                    height="60"
                />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar
                            className={classes.purple}
                            alt={user.result.name}
                            src={user.result.imageUrl}
                        >
                            {user.result.name.charAt(0)}
                        </Avatar>
                        <Typography variant="h6" className={classes.userName}>
                            {user.result.name}
                        </Typography>
                        <Button
                            className={classes.logout}
                            variant="contained"
                            color="secondary"
                        >
                            Logout
                        </Button>
                    </div>
                ) : (
                    <Button
                        className={classes.login}
                        component={Link}
                        to="/auth"
                        variant="contained"
                        color="primary"
                    >
                        Login
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
