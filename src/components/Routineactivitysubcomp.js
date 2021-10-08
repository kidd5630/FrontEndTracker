import React from 'react';

const Routineactivitysubcomp = ({activity}) => {
    return (
        <div>
            {activity.name}: {activity.description}  
            <div>Duration:{activity.duration} Count:{activity.count}</div>
        </div>
    )
}

export default Routineactivitysubcomp;