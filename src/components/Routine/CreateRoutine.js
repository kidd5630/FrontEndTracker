import React, { useState } from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";


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


const CreateRoutine = ({usertoken, setallroutines, setusersRoutines, allroutines, usersRoutines}) =>{
    const [name, setname] = useState('')
    const [goal, setgoal] = useState('')
    const [createSuccess, setcreateSucess] = useState(false)
    const postHandler = async(e) =>{
        event.preventDefault()
        if(true){setcreateSucess(true)}
    }
    if(createSuccess){
        return <Redirect to='/myroutines'/>
    }

    return (
      <Modal>
      <Content>
        <section className="NewRoutine">
          <Heading>{<h3>New Routine</h3>}</Heading>
          <Form>
            <form id="my_form" onSubmit={postHandler}>
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
              <Footer>
                <FooterButton>
                  <CloseRoundedIcon
                    style={{ color: "white", fontSize: 30 }}
                  ></CloseRoundedIcon>{" "}
                  <Link
                    to="/myroutines"
                    style={{ textDecoration: "none" }}
                    className="btn btn-primary"
                    onClick={() => {}}
                  >
                    Cancel
                  </Link>
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

}

export default CreateRoutine;