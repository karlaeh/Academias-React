import React, { useState } from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import './style.css'


export default function FilterPosts ( props ) {
  const [filter, setFilter] = useState('all');
  props.handleFilter(filter);
  
  return (
    <div align='center'>
      <ToggleButtonGroup className='filter-style' >
        <ToggleButton value="all" onClick={() => setFilter('all')}>
           All
        </ToggleButton>,
        <ToggleButton value="travel" onClick={() => setFilter('travel')}>
          Travel
        </ToggleButton>   
        <ToggleButton value="lifestyle" onClick={() => setFilter('lifestyle')}>
          Lifestyle
        </ToggleButton>
        <ToggleButton value="business" onClick={() => setFilter('business')}>
          Business
        </ToggleButton>
        <ToggleButton value="food" onClick={() => setFilter('food')}>
          Food
        </ToggleButton>
        <ToggleButton value="work" onClick={() => setFilter('work')}>
          Work
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}