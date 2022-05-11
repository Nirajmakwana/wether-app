import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useLocation } from 'react-router-dom'

const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const SecondPage = () => {
    const localtionData = useLocation()
    const { state } = localtionData as any
    console.log(state, "state")
    const [capitalData, setcapitalData] = useState<any>([])

    const fetchData = async () => {
        const apiKey = `http://api.weatherstack.com/current?access_key=be4867244bef9d26fbc1d1595f908d1b&query=${state.capital}`
        try {
            fetch(apiKey).then((response) => response.json().then((data) => setcapitalData(data.current))).catch((error) => console.log(error))
        } catch (error) {

        }
    }
    console.log(capitalData, "capitalData")
    return (

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item>
                        <h3 data-testid="second">Population {state.population}</h3>
                        <h3>capital {state.capital}</h3>
                        <h3>latlng {state.latlng.map((item: any) => `${item},`)}</h3>
                        <img src={state.flags.svg} width="100px" height="100px" alt="flag" />
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <Item>
                        <Button data-testid="btncap" onClick={fetchData} variant="contained">Capital wether</Button>
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <Item>
                        <h3 data-testid="temp">temperature {capitalData.temperature}</h3>
                        <h3>wind_speed {capitalData.wind_speed}</h3>
                        <h3>precip {capitalData.precip}</h3>
                        <h3>wether icon</h3>
                        <img src={capitalData.weather_icons} width="100px" height="100px" alt="flag" />
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SecondPage