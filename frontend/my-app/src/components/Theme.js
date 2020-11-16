import React from "react";
import Question from './Question';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Theme = ({ theme }) => {
  return (
    <Grid container style={{ textAlign: 'center', marginTop: '2vh', alignItems: 'center' }}>
      <Grid item xs={4}>
        {theme.title}
      </Grid>
      <Grid item xs={8}>
        <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
          {theme.status.map((el, i) => (
            <Question title={theme.title} price={200 * (1 + i)} state={el} />
          ))}
        </ButtonGroup>
      </Grid>
    </Grid >
  );
};

export default Theme;