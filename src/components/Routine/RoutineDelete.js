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
const RoutineDelete= ({routineToDelete, userToken, setallroutines, setusersRoutines, allRoutines, usersRoutines}) => {
  const deleteHandler = async (routineToDelete) =>{
    const response = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/routines/${routineToDelete}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`
      }
    })
    const data = await response.json();
    if(data){
      const newallRoutines = allRoutines.filter((routine)=>
      {return routine.id !==routineToDelete}
      )
      const newuserRoutines = usersRoutines.filter((routine)=>
      {return routine.id !==routineToDelete}
      ) 
      setallroutines(newallRoutines)
      setusersRoutines(newuserRoutines)
    }
  }
  return (
    <div>
      <Button
        title="Delete Routine"
        type="button"
        className="btn btn-delete"
        onClick={() => 
          deleteHandler(routineToDelete)}
      >
        <DeleteForeverRoundedIcon
          style={{ color: "white", fontSize: 30 }}
        ></DeleteForeverRoundedIcon>{" "}
      </Button>
    </div>
  )
}
export default RoutineDelete;