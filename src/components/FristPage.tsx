import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router';

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
const FristPage: React.FC = () => {
  const navigate = useNavigate();
  const [country, setCountry] = useState("")
  const getWether = async () => {
    const apiUrl = `https://restcountries.com/v3.1/name/${country}`
    const response = await fetch(apiUrl);

    if (response.status === 200) {
      navigate('/second')
      localStorage.setItem("wether", JSON.stringify(country))
    } else {
      alert("data not found")
    }


  }

  return (
    <div>
      <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          direction="row"
          justifyContent="center"
          alignItems="center">
          <Grid item xs={6}>
            <Item>
              <div>
                <TextField label="wether" variant="outlined" onChange={(e) => setCountry(e.target.value)} />
              </div>
              <div>
                <Button disabled={country.length == 0} onClick={getWether} variant="contained" >FETCH DATA</Button>
              </div>
            </Item>
            {/* <Item>
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
            </Item> */}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default FristPage;
