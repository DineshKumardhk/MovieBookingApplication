import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Genres from '../../common/genre.js';
import Artists from '../../common/artists.js';
import { useState } from 'react';
import { Button,
         Checkbox, 
         FormControl, 
         Input, 
         InputLabel, 
         ListItemText, 
         MenuItem, 
         Select, 
         TextField 
        } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
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
  formControl: {
    // margin: theme.spacing(1),
    marginTop: 5,
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function SimpleCard() {
  const classes = useStyles();

  // Genres
  const [genres, setgenres] = useState([]);
  const handleChange = (event) => {
    setgenres(event.target.value);
  };

  // Artists
  const [personName, setPersonName] = useState([]);
  const handleChange1 = (event) => {
    setPersonName(event.target.value);
  };

  // Movie Name
  const [movName, setMovName] = useState("");

  
  const handleMovSearch = () => {
    if(movName.length > 0){
      console.log("Movie Name: " + movName);
    }
    if(genres.length > 0){
      console.log("Genres: " + genres);
    }
    if(personName.length > 0){
      console.log("Artists: " + personName);
    }
    
    // console.log("Starting Date: ");
    // console.log("Ending Date: ");
  };


  
  return (
    <Card className={classes.root}>
      <CardContent>

        {/* Heading */}
        <Typography className={classes.title} style={{padding: 5}} color="primary" gutterBottom>
        FIND MOVIES BY:
        </Typography>

        <form>
            {/* Search by Movie Name */}
            <TextField id="standard-basic"
              style={{width:225}} 
              value={movName}
              onChange={(event) =>
                setMovName(event.target.value)
              } 
              label="Movie Name" 
            /><br/>


            {/* Search by Movie Genres */}
            <FormControl className={classes.formControl} style={{width:225}}>
              <InputLabel id="demo-mutiple-checkbox-label">Genres</InputLabel>
              <Select
                labelId="demo-mutiple-checkbox-label"
                id="demo-mutiple-checkbox"
                multiple
                value={genres}
                onChange={handleChange}
                input={<Input />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {Genres.map((name) => (
                  <MenuItem key={name.name} value={name.name}>
                    <Checkbox checked={genres.indexOf(name.name) > -1} />
                    <ListItemText primary={name.name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>


            {/* Search by Movie Artists */}
            <FormControl className={classes.formControl} style={{width:225}}>
              <InputLabel id="demo-mutiple-checkbox-label">Artists</InputLabel>
              <Select
                labelId="demo-mutiple-checkbox-label"
                id="demo-mutiple-checkbox"
                multiple
                value={personName}
                onChange={handleChange1}
                input={<Input />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {Artists.map((name) => (
                  <MenuItem key={name.first_name+" "+name.last_name} value={name.first_name+" "+name.last_name}>
                    <Checkbox checked={personName.indexOf(name.first_name+" "+name.last_name) > -1} />
                    <ListItemText primary={name.first_name+" "+name.last_name} />
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
              id="date1"
              style={{width:225, marginTop: 10}}
              label="Release Date End"
              type="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />

            {/* Apply Button */}
            <Button variant="contained"
             onClick={handleMovSearch} 
            //  onClick={() => console.log('click')}
             style={{width:200, margin: 15, marginTop: 30}} 
             color="primary">
              APPLY
            </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default SimpleCard;