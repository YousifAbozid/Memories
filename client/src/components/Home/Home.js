import React, { useState, useEffect } from "react"
import Posts from "../Posts/Posts"
import Form from "../Form/Form"
import { Container, Grow, Grid } from "@material-ui/core"
import useStyles from "./styles"
import { useDispatch } from "react-redux"
import { getPosts } from "../../actions/posts"

const Home = () => {
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch()
    const classes = useStyles()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return (
        <Grow in>
            <Container>
                <Grid
                    container
                    className={classes.mainContainer}
                    justify="space-between"
                    alignItems="stretch"
                    spacing={3}
                >
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form
                            currentId={currentId}
                            setCurrentId={setCurrentId}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home
