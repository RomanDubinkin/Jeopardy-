import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Timer from './Timer';
import { wsContext } from '../screen/Main';

const useStyles = makeStyles({
  root: {
    marginTop: "3vh",
    minWidth: 275,
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


function Game({ title, answer, price, question }) {
  const classes = useStyles();
  const [text, setText] = React.useState('');
  const ws = React.useContext(wsContext);
  const handleChange = (event) => {
    setText(event.target.value);
  }
  const handleClick = () => {
    console.log('check handle click>>>>>!');
    const score = (-1 + 2 * (text === answer)) * price;
    console.log('>>>>>>>price', score);
    // setText('');
    ws.send(JSON.stringify({ func: 'handleAnswer', args: score }));
  };

  return (
    // store is a reserved word!!!!
    <Grid container style={{ textAlign: 'center', marginTop: '4vh', marginLeft: '4vh', alignItems: 'center' }}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {question}
          </Typography>
          <Typography variant="body2" component="p">
            <TextField onChange={handleChange} id="standard-basic" label="Answer" />
          </Typography>
        </CardContent>
        <CardActions>
          <div style={{}}><Timer price={price} /></div>
          <Button onClick={handleClick} size="small">Add!</Button>

        </CardActions>
      </Card>
    </Grid>

  );
}

export default Game;
