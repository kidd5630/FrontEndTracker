
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";
import EditActivity from "../EditActivity";


const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(6px);
`;

const Content = styled.div`
  font-family: "ABeeZee", sans-serif;
  width: 480px;
  padding: 12px;
  min-height: 200px;
  background: #ADD8E6;
  box-shadow: 0 2px 12px -8px black;
  border-radius: 5%;
`;

const Heading = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 24px;
  border-bottom: 1px solid #888;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
`;
const Labelcheck = styled.label`
  position: relative;
  top; 50%;
  margin: 0;
`;
const Input = styled.input`
  height: 1.5rem;
  background: #ddd;
  width: 460px;
  padding: 8px;
  font-size: 22px;
  margin-bottom: 8px;
`;

const RadioInput = styled.input``;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const FooterButton = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border-radius: 6px;
  box-shadow: 0 2px 6px -2px black;
  background-color: black;
  justify-content: space-around;
  align-items: center;
  height: 36px;
  width: 100px;

  a:visited {
    color: white;
  }
`;


const EditRoutineActivity = ({EditShow, setEditShow, routine, setupdateroutine, updateroutine, routineToDelete, userToken, activitytoEdit, allActivities}) =>{
    const [createSuccess, setcreateSucess] = useState(false)
    const [count, setCount]= useState('')
    const [duration, setDuration]= useState('')
    const AddHandler = async (e)=>{
        e.preventDefault()
        try{
            const url = `http://fitnesstrac-kr.herokuapp.com/api/routine_activities/${activitytoEdit}`
            setcreateSucess(false)
            const response = await fetch(url,{
                    method: "PATCH",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${userToken}`
                    },
                    body: JSON.stringify({
                            ...(count && {count: count}), 
                            ...(duration && {duration: duration})
                        })
            })
            const data = await response.json();

            if(data){
                const newobj = updateroutine.find((x)=> x.routineActivityId==activitytoEdit)
                count? newobj.count = parseInt(count):null
                duration? newobj.duration = parseInt(duration): null
                const index = updateroutine.findIndex((x)=> x.routineActivityId==activitytoEdit)
                const map = updateroutine.map(obj => obj.routineActivityId==activitytoEdit? newobj: obj)
                setupdateroutine(map)
                setEditShow(false)
            }
        }catch(error){
            console.error("this is the error", error)
        }
}

const content =  EditShow && (
          <Modal>
            <Content>
            <section className="Editactivity">
            <Heading>{<h3>Edit Activity</h3>}</Heading>
            <Form>
                <form id="edit_activity" onSubmit={AddHandler}>
                <div className="inputs">
                <label>Count: </label>
                <input type='number' min="0" onChange={(e)=> setCount(e.target.value)}></input> 
                <label>Duration: </label>
                <input type='number' min="0" onChange={(e)=> setDuration(e.target.value)}></input> 
                </div>      
                <Footer>
                    <FooterButton>
                    <CloseRoundedIcon
                        style={{ color: "white", fontSize: 30 }}
                    ></CloseRoundedIcon>{" "}
                    <button style={{ textDecoration: "none" }}
                    onClick={() => setEditShow(false)}
                    >
                        Cancel</button>
                    </FooterButton>
                    <FooterButton>
                    <CheckRoundedIcon
                        style={{ color: "white", fontSize: 30 }}
                    ></CheckRoundedIcon>
                    <Button
                        variant="contained"
                        style={{
                        textDecoration: "none",
                        backgroundColor: "black",
                        color: "white",
                        }}
                        className="btn btn-primary"
                        type="submit"
                    >
                        Submit
                    </Button>
                    </FooterButton>
                </Footer>
                </form>
            </Form>
            </section>
            </Content>
    </Modal>
    )
    return content

}
export default EditRoutineActivity;