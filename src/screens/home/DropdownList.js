import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Artists from '../../common/artists.js'

const useStyles = makeStyles((theme) => ({
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


export default function MultipleSelect() {
  const classes = useStyles();
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  return (
    <div>


      <FormControl className={classes.formControl} style={{width:225}}>
        <InputLabel id="demo-mutiple-checkbox-label">Artists</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
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

    </div>
  );
}