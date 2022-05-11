import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const FristPage = () => {
    const [Country, setCountry] = useState("")
    const Navigate = useNavigate()

    const fetchData = async () => {
        const ApiUrl = `https://restcountries.com/v3.1/name/${Country}`
        try {
            fetch(ApiUrl).then((response) => response.json().then((data) => Navigate('/2', { state: { population: data[0].population, capital: data[0].capital, latlng: data[0].latlng, flags: data[0].flags } }))).catch((error) => console.log(error))
        } catch (error) {

        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item>
                        <TextField inputProps={{
                            "data-testid": "contry"
                        }} value={Country} onChange={(e) => setCountry(e.target.value)} id="outlined-basic" label="contry name" variant="outlined" />
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <Item>
                        <Button data-testid="btn" onClick={fetchData} disabled={Country.length === 0} variant="contained">submit</Button>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}

export default FristPage