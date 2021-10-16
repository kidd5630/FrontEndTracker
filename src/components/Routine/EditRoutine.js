import React, {useState} from 'react';
import styled from "styled-components";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
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
  margin: 12px 0 4px;
`;
const Input = styled.input`
  height: 1.5rem;
  background: #ddd;
  width: 460px;
  padding: 8px;
  font-size: 22px;
  margin-bottom: 8px;
`;
const Labelcheck = styled.label`
  position: relative;
  top; 50%;
  margin: 0;
`;
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
const EditRoutine= ({show, setShow, routine, routineToDelete, userToken, setallroutines, setusersRoutines, allRoutines, usersRoutines}) => {
  const [name, setname] = useState('')
  const [goal, setgoal] = useState('')
  const [isPublic, setisPublic] =  useState(false)
  const [createSuccess, setcreateSucess] = useState(false)
  const handleOnCheck = () => {
    setisPublic(!isPublic)
  };
  const editHandler = async (e) =>{
    e.preventDefault()
    try{
      const url = `https://fitnesstrac-kr.herokuapp.com/api/routines/${routineToDelete}`
      setcreateSucess(false)
      const response = await fetch(url,{
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userToken}`
        },
        body: JSON.stringify({
          "name": name,
          "goal": goal
        })
      })
      const data = await response.json();
      if(data){
        const newallRoutines = allRoutines.filter((routine)=>
          {return routine.id !==routineToDelete}
        )
        const newuserRoutines = usersRoutines.filter((routine)=>
          {return routine.id !==routineToDelete}
        ) 
        setallroutines([data, ...newallRoutines])
        setusersRoutines([data, ...newuserRoutines])
        setname('')
        setgoal('')
        setcreateSucess(true)
      }
      if(createSuccess){
        setShow(false)
      }
    }catch(error){
      console.error(error)
    }
  }
  const content =  show && (
    <Modal>
      <Content>
        <section className="EditRoutine">
          <Heading>{<h3>Edit Routine</h3>}</Heading>
          <Form>
            <form id="edit_form" onSubmit={editHandler}>
              <div>
                <Label>Name*</Label>
                <Input  
                type="text"
                placeholder="Name"
                required="required"
                value={name}
                onChange={(e) => setname(e.target.value)}
                />
              </div>
              <div>
                <Label>Goal*</Label>
                <Input
                type="text"
                placeholder="Goal"
                required="required"
                value={goal}
                onChange={(e) => setgoal(e.target.value)}
                />
              </div>
              <div>
                <Labelcheck> Public? 
                <Input
                id="publicCheck"
                style={{width: "auto", transform: "scale(1.5)", verticalAlign: "middle", margin: "5px" }}
                type="checkbox"
                checked= {isPublic}
                onChange={()=>handleOnCheck()}
                /></Labelcheck>
              </div>
              <Footer>
                <FooterButton>
                  <CloseRoundedIcon
                    style={{ color: "white", fontSize: 30 }}
                  ></CloseRoundedIcon>{" "}
                  <button style={{ textDecoration: "none" }}
                    onClick={() => setShow(false)}
                  >
                    Cancel</button>
                </FooterButton>
                <FooterButton>
                  <CheckRoundedIcon
                    style={{ color: "white", fontSize: 30 }}
                  ></CheckRoundedIcon>
                  <button
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
                  </button>
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
export default EditRoutine;