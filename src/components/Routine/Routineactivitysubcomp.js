import React from 'react';

const Routineactivitysubcomp = ({activity}) => {
    return (
        <div>
            Activity: {activity.name}- {activity.description}  
            <div>Duration:{activity.duration} Count:{activity.count}</div>
        </div>
    )
}

export default Routineactivitysubcomp;