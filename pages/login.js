import { 
    Button,
    Container, 
    Grid, 
    TextField 
} from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import { colors, container } from "../styles/basicStyles";

const login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = (e) => {
        e.preventDefault();
        console.log(email, password);
    }

    return (
        <>
            <Head>
                <title>Sign In</title>
            </Head>

            <Container style={{padding: container.padding}}>
                    <form onSubmit={loginHandler}>
                        <Grid 
                            container
                            direction={"column"}
                            rowSpacing={4}
                            justifyContent="center"
                            alignItems="center"
                            style={{border: "2px solid red"}}
                        >
                            <Grid item>
                                <h1>Sign In</h1>
                            </Grid>
                            <Grid item>
                                <TextField
                                    label="Email"
                                    type="email"
                                    variant="outlined"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    size="small"
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    size="small"
                                />
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    style={{
                                        background: colors.primaryColor,
                                        fontWeight: 600,
                                        textTransform: "capitalize"
                                    }}
                                >
                                    Sign In
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
            </Container>
        </>
    )
}

export default login;