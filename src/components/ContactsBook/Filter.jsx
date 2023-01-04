import React from 'react';
import { StyleName } from './Filter.styled'
import { StyleInput } from './Filter.styled'

const Filter = ({ value, changeFilter }) => (
    <div>
        <h3 style={{textAlign: 'center',
                    fontSize: 26,
                    fontWeight: 700,
                    marginBottom: 20}}>Contacts</h3>
        <StyleName htmlFor='filter'>Filter contacts</StyleName>
        <StyleInput type="text"
                id='filter'
                value={value}
                onChange={changeFilter}/>
    </div>
)

export default Filter