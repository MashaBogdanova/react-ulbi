import React from 'react';

const MySelect = ({options, defaultOption, value, onChange}) => {


    return (
        <div>
            <select
                value={value}
                onChange={event => onChange(event.target.value)}
            >
                <option disabled value="">{defaultOption}</option>
                {options.map(o => <option key={o.value} value={o.value}>{o.name}</option>)}
            </select>
        </div>
    );
};

export default MySelect;