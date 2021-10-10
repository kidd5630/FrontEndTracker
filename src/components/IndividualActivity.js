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

    //   const clear = () => {
    //     setFeaturedName([]);
    //     setFeaturedCreator([]);
    //     setIsError(false)
    //   };


    useEffect(async () => {
        try{
            // clear()
            const results = await fetchRoutinesFeature(BASE_URL, selectedAct);
            const {error} = results;
            console.log("results", results)
            if(Array.isArray(results)){
                results.map((routine) => {
                    if(routine.isPublic){
                        const name = routine.name;
                        const creator = routine.creatorName;
                        setFeaturedName([...featuredName, name]);
                        setFeaturedCreator([...featuredCreator, creator]);
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
                        <div className="allActivities" key={id}>
                            <div className="IPText">
                                <h3>Activity Name: {name}</h3>
                                <p>Description: {description}</p>
                            </div> 
                            {isError
                            ?
                            (<div>
                                <h3>Routine(s) That Feature(s) This Activity</h3>
                                <p>There Are Currently No Routines That Feature This Activity</p>
                            </div>)
                            :
                            (<div className="featuredList">
                                <h3>Routine(s) That Feature(s) This Activity:</h3>
                                <ul>
                                    <li>Name:{featuredName}</li>
                                    <li>Created By:{featuredCreator}</li>
                                </ul>
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
                    )  
                }
            })}
        </div>
        </>
        )
}

export default IndividualActivity; 