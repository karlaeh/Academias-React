import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import './style.css'


export default function FilterPosts ( props ) {

  
  return (
    <div align='center'>
      <ToggleButtonGroup className='filter-style'>
        <ToggleButton value="all" >
           All
        </ToggleButton>,
        <ToggleButton value="travel">
          Travel
        </ToggleButton>   
        <ToggleButton value="lifestyle">
          Lifestyle
        </ToggleButton>
        <ToggleButton value="business">
          Business
        </ToggleButton>
        <ToggleButton value="food">
          Food
        </ToggleButton>
        <ToggleButton value="work">
          Work
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}