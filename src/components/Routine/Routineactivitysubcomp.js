import React from 'react';
import DeleteActvity from './DeleteActivity';

const Routineactivitysubcomp = ({activity}) => {
    return (
        <div>
            Activity: {activity.name}- {activity.description}  
            <div>Duration:{activity.duration} Count:{activity.count}</div>
            <DeleteActvity  />
        </div>
    )
}

export default Routineactivitysubcomp;