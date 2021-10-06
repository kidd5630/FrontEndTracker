import React from 'react';

const Routines = (props) => {
    const { baseURL } = props;
	
    return <div className="routines">
        <h1>Routines</h1>
        {baseURL}
    </div>
}

export default Routines;