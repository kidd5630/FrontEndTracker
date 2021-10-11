import React, {useState, useEffect} from 'react';

import {fetchRoutinesFeature, BASE_URL}
from '../api'

import EditActivity from './EditActivity';

const IndividualActivity = ({userToken, allActivities, setAllActivities, selectedAct ,featuredName, setFeaturedName, featuredCreator, setFeaturedCreator}) => {
    const [isActiveEdit, setActiveEdit] = useState(false);
    const [isError, setIsError] = useState(false);
    const ToggleClass = () => {
        setActiveEdit(!isActiveEdit);
      };
    let template;

    useEffect(async () => {
        try{
            const results = await fetchRoutinesFeature(BASE_URL, selectedAct);
            const {error} = results;
            if(Array.isArray(results)){
                results.map((routine) => {
                    if(routine.isPublic){
                        const name = routine.name;
                        const creator = routine.creatorName;
                        setFeaturedName([...featuredName, name]);
                        setFeaturedCreator([...featuredCreator, creator]);
                        template = `<div>
                            <h3 className="rlTitle">Name:${featuredName}</h3>
                            <p className="rlText">Created By:${featuredCreator}</p>
                        </div>`
                    }
                })
            }else{
                setIsError(true)
            }}catch(error) {
            console.error(error)
        }
    }, [])

    return (
        <> 
        <div className="ia">
            {allActivities.map(act => {
                const {id, name, description} = act;
                if(id === selectedAct) {   
                    return (
                        <div className="individualContainer" key={id}>
                            <div className="showbox">
                            <div className="iaText">
                                <h2 className="innerboxText">Activity Name: {name}</h2>
                                <p className="innerText">Description: {description}</p>
                            </div> 
                            {isError
                            ?
                            (<div className="featuredList">
                                <h2 className="rlHeader">Routine(s) That Feature(s) This Activity</h2>
                                <p className="rlText">There Are Currently No Routines That Feature This Activity</p>
                            </div>)
                            :
                            (<div className="featuredList">
                                <h2 className="rlHeader">Routine(s) That Feature(s) This Activity</h2>
                                {template}
                            </div>)
                            }
                            
                            {userToken
                            ?
                            (<div>
                                <button className="edit button" onClick={ToggleClass}>
                                Edit
                                </button>
                            </div>)
                            :
                            (<div></div>)
                            }
                            

                            {userToken
                            ?
                            (<div className="iaInteractiveBox">
                                    <div className={`editFeild-${isActiveEdit ? "inactive" : "active"}`}>
                                        <EditActivity 
                                            userToken={userToken} 
                                            allActivities={allActivities} 
                                            setAllActivities={setAllActivities} 
                                            selectedAct={selectedAct}
                                            ToggleClass={ToggleClass}/>
                                    </div>
                                </div>)
                            :
                            (<div></div>)
                            }
                        </div> 
                        </div>    
                    )  
                }
            })}
        </div>
        </>
        )
}

export default IndividualActivity; 