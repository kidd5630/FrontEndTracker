import React, {useState, useEffect} from 'react';

import {routinesFeature, BASE_URL}
from '../api'


  
import EditActivity from './EditActivity';


const IndividualActivity = ({userToken, allActivities, setAllActivities, selectedAct}) => {
 
    const [isActiveEdit, setActiveEdit] = useState("false");


    const [featuredList, setFeaturedList] = useState([])
    
    useEffect(async () => {
        try{
            const results = await routinesFeature(BASE_URL, selectedAct)
            console.log("?????????????", results)
            setFeaturedList([...results])
            console.log("!!!!", setFeaturedList)
        }catch(error) {
            console.error(error)
        }
    }, [])
    


    const ToggleClass = () => {
        setActiveEdit(!isActiveEdit);
      };

    
    return (
        <> 
        <div className="ia">
            {allActivities.map(act => {
                const {id, name, description} = act;
                if(id === selectedAct) {   
                    return (
                        <div className="allActivities" key={id}>
                            <div className="IPText">
                                <h3>{name}</h3>
                                <p className="description">{description}</p>
                            </div> 
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