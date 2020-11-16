import React, { memo } from 'react';
import Theme from './Theme';

const Table = ({ themes }) => {



  return (
    <div>
      <ol>
        {themes.map((theme) => (
          <Theme theme={theme} />
        ))}
      </ol>
    </div>
  );
};

export default memo(Table);
