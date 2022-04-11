import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button, TextField } from '@material-ui/core';
import Genres from './DropdownList1.js'
import Artists from './DropdownList.js'


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
  
  return (
    <Card className={classes.root}>
      <CardContent>

        {/* Heading */}
        <Typography className={classes.title} style={{padding: 5}} color="primary" gutterBottom>
        FIND MOVIES BY:
        </Typography>

        <form>
            {/* Search by Movie Name */}
            <TextField id="standard-basic"  style={{width:225}} label="Movie Name" /><br/>

            {/* Search by Movie Genres */}
            <Genres />

            {/* Search by Movie Artists */}
            <Artists />

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