import React from 'react';
import styled from "styled-components";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
const Button = styled.button`
  display: flex;
  border-radius: 6px;
  box-shadow: 0 2px 6px -2px black;
  background-color: black;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 36px;
  color: white;

  a:visited {
    color: white;
  }
`;


const DeleteActivity= ({activityToDelete, routine, usersRoutines, setusersRoutines, userToken, updateroutine, setupdateroutine }) => {

    const deleteHandler = async () =>{
        const response = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/routine_activities/${activityToDelete}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            }
            })
        const data = await response.json();
        if(data){
            const newroutine = updateroutine.filter((routine)=>{
                return routine.routineActivityId!==activityToDelete})
            setupdateroutine(newroutine)
        }
    }
    return (
         <div>
    <Button

        type="button"
        title="Delete Activity"
        className="btn btn-delete"
        onClick={() => deleteHandler()}
      >
        <DeleteForeverRoundedIcon
          style={{ color: "white", fontSize: 30 }}
        ></DeleteForeverRoundedIcon>{" "}
      </Button>
      </div>
    )
}

export default DeleteActivity;
