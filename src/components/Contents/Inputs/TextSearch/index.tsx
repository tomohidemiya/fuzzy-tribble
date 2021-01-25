import {InputAdornment, TextField} from '@material-ui/core';
import {Search} from '@material-ui/icons';
import React from 'react';

type Props = {
  label: string;
  placeholder?: string;
  fullWidth?: boolean;
  Icon?: JSX.Element;
}

const TextSearch: React.FC<Props> = ({label, placeholder, fullWidth=false, Icon=Search}) => {
  return (
    <TextField
      label={label}
      style={{ margin: 8 }}
      placeholder={placeholder}
      fullWidth={fullWidth}
      variant="outlined"
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <Search />
        </InputAdornment>
        )
      }}
    />
  );
}

export default TextSearch;

