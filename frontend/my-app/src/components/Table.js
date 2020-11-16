import React, { memo } from 'react';
import Theme from './Theme';
import Grid from '@material-ui/core/Grid';

const Table = ({ themes }) => {



  return (
    <Grid container spacing={3}>
      {themes.map((theme) => (
        <Theme theme={theme} />
      ))}
    </Grid>
  );
};

export default memo(Table);
