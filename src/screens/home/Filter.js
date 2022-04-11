import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import Genres from '../../common/genre.js'
import Artists from '../../common/artists.js'

const useStyles = makeStyles({
  root: {
    minWidth: 260,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  // CheckBox
  const [checked, setChecked] = useState(false);
  const handleChange = event => {
    setChecked(event.target.checked);
  }


  
    

  return (
    <Card className={classes.root}>
      <CardContent>

        {/* Heading */}
        <Typography className={classes.title} style={{padding: 5}} color="primary" gutterBottom>
        FIND MOVIES BY:
        </Typography>

        <form style={{}}>
            {/* Search by Movie Name */}
            <TextField id="standard-basic"  style={{width:225}} label="Movie Name" /><br/>



            {/* Search by Movie Genres */}
            <FormControl className={classes.formControl} style={{width:225}}>
              <InputLabel id="demo-simple-select-label" >Genres</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                {Genres.map(mov => (
                <MenuItem value={mov.name}>
                  <FormControlLabel
                  label={mov.name}
                  control={
                    <Checkbox checked={checked} 
                      color="primary" 
                      onChange={handleChange}
                    />
                  }>
                  </FormControlLabel>
                </MenuItem>
                ))}
              </Select>
            </FormControl>


            {/* Search by Movie Artists */}
            <FormControl className={classes.formControl}
             style={{width:225}}
             >
              <InputLabel id="movieArtists" >Artists</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                {Artists.map(mov => (
                <MenuItem value={mov.first_name+" "+mov.last_name}>
                <FormControlLabel
                 label={mov.first_name+" "+mov.last_name}
                 control={<Checkbox checked={checked} color="primary" onChange={handleChange}/>}></FormControlLabel>
                </MenuItem>
                ))}
              </Select>
            </FormControl>



            {/* Search by Movie Date */}
            <TextField
              id="date"
              style={{width:225, marginTop: 10}}
              label="Release Date Start"
              type="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              id="date"
              style={{width:225, marginTop: 10}}
              label="Release Date End"
              type="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />

            {/* Apply Button */}
            <Button variant="contained" style={{width:200, margin: 15, marginTop: 30}} color="primary">
              APPLY
            </Button>
        </form>
      </CardContent>
    </Card>
  );
}