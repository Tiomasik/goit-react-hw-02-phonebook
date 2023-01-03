import React from 'react';

const Filter = ({value, changeFilter}) => (
    <label>Filtr contacts
        <input  type="text"
                value={value}
                onChange={changeFilter}/>
    </label>
)

export default Filter