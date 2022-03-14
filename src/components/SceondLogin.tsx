import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

interface dataType {
    capital?: string
    population?: number
    lating1?: string
    lating2?: string
    flag?: string
}
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const SceondLogin = () => {
    const navigate = useNavigate();
    const [Data, setData] = useState<dataType>({
        capital: "",
        population: 0,
        lating1: "",
        lating2: "",
        flag: ''
    })
    const getWether = async () => {
        const country = localStorage.getItem("wether")
        const apiUrl = `https://restcountries.com/v3.1/name/${country}`
        const response = await fetch(apiUrl);
        const data = await response.json();
        data.map((item: any) => {
            console.log(item.latlng[1])
            return (
                setData({
                    capital: item.capital,
                    population: item.population,
                    lating1: item.latlng[0],
                    lating2: item.latlng[1],
                    flag: item.flags.png
                })
            )
        })

    }
    useEffect(() => {
        getWether()
    }, [])

    return (
        <div data-testid="sceondLogin" >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Grid item xs={6}>
                    <Item >
                    </Item>
                    <Item>
                        <div>
                            {Data?.capital}
                        </div>
                        <div>
                            {Data?.population}
                        </div>
                        <div>
                            {Data?.lating2}
                        </div>
                        <div>
                            {Data?.lating1}
                        </div>
                        <div>
                            <img width={100} height={100} alt="img" src={Data.flag} />
                        </div>
                        <Button variant='contained' data-testid="ButtonLogin" onClick={() => navigate('/login')}>
                            go next
                        </Button>
                    </Item>
                </Grid>
            </Grid>
        </div>
    )
}

export default SceondLogin