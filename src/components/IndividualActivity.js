import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";



const IndividualActivity=({userToken, deleteItem, allPosts, setAllPosts, myUsername, selectedPost}) => {
    if (userToken){
        return (
            <> 
                <div className="ia">

            <h1>you'll be able to edit here</h1>

                </div>
            
            
            </>
        )
    }else{
        
    }


}

export default IndividualActivity; 