import React, { useState } from 'react';
import { Container, Typography, Button,Card, Grid, TextField} from '@material-ui/core';


export default () => {
    const [searchText, setSearchText] = useState('');

    const handleSearchTextChange = event => {
        setSearchText(event.target.value)
        console.log(event.target.value);
    };

    const handleCleanTextClick  = event => {
        setSearchText('');
    }

    const handleSearchTextClick = event => {
        setSearchText('hola')
    }

    return (
        <Container>
            <Card>
                <Grid container>
                    <Grid>
                        <Typography>Welcome!</Typography>
                    </Grid>
                    <Grid>
                        <label>Icon</label>
                    </Grid>
                </Grid>
                <TextField value={ searchText }
                           placeholder='Search...'
                           onChange={handleSearchTextChange} />
                <Button variant="contained"
                        color="primary"
                        onClick={handleCleanTextClick}>
                    Clean
                </Button>
                <Button variant="contained"
                        color="primary"
                        onClick={handleSearchTextClick}>
                    Search
                </Button>
            </Card>
        </Container>
    )
}