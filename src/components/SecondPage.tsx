import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

interface CountryType {
    temperature: string
    icon: string
    speed: string
    precip: string
    countryName: string
    countryCapital: string
}
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const SecondPage: React.FC = () => {
    const navigate = useNavigate();

    const [countryWether, setCountryWether] = useState<CountryType>({
        temperature: "",
        icon: "",
        speed: "",
        precip: "",
        countryName: "",
        countryCapital: "",
    })
    const country: any = localStorage.getItem("wether")

    const getCoutryData = () => {
        let access_key = "be4867244bef9d26fbc1d1595f908d1b"
        fetch(`http://api.weatherstack.com/current?access_key=${access_key}&query=${country}`)
            .then(response => response.json())
            .then(dataWether => {
                console.log(dataWether)

                setCountryWether({
                    temperature: dataWether.current.temperature,
                    icon: dataWether.current.weather_icons,
                    speed: dataWether.current.wind_speed,
                    precip: dataWether.current.precip,
                    countryName: dataWether.location.country,
                    countryCapital: dataWether.location.name,
                })
            }
            );
    }

    useEffect(() => {
        getCoutryData()
    }, [])

    const backToFrist = () => {
        localStorage.clear()
        navigate('/')
    }
    return (
        <div data-testid="sceondPage">
            <Box>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item xs={6}>
                        <Item>
                            <h1>Spped : {countryWether.speed} </h1>
                            <h1>Temperature : {countryWether.temperature} </h1>
                            <h1>Temperature : {countryWether.precip} </h1>
                            <img width={100} height={100} alt="img" src={countryWether.icon} />
                            <h1>Country name : {countryWether.countryName} </h1>
                            <h1>Country Capital : {countryWether.countryCapital} </h1>
                            <Button variant='contained' data-testid="Button2" onClick={backToFrist}>back to start page</Button>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default SecondPage;
