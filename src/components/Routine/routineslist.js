import React, { useState, useEffect} from 'react';
import Routines  from './Routines';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { fontSize } from '@mui/system';

const Header = styled.header`
  font-family: "Akaya Telivigala", cursive;
  font-weight: 100;
  font-style: italic;
  font-size: 20px;
  text-align: center;
  padding: 0.25em 0;
  background: #033a8d;;
  color: #fafafa;
`;

const Container = styled.header`
  background: #587cf5;
  color: #fafafa;
`;

const Button = styled.button`
  display: flex;
  border-radius: 6px;
  box-shadow: 0 2px 6px -2px black;
  border: black solid 1px;
  background-color: #4853f3;
  justify-content: center;
  align-items: center;
  height: 70px;
  color: black;
  font-size: 25;
  font-Weight: bold;
  padding: 2px;
  margin: 0;
  position: fixed;
  cursor: pointer;
  a:visited {
    color: white;
  }
`;




const Routineslist = ({userToken, myUsername, allActivities, allRoutines, setallroutines, setusersRoutines, pageRoutines, usersRoutines}) => {
    const dataLimit = 10;
    const pageLimit = 5;
    const [pages, setPages] = useState( Math.round(pageRoutines.length/10))
    const [currentPage, setCurrentPage] =useState(1)



     useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
        setPages(Math.ceil(pageRoutines.length/10))
      }, [currentPage, pageRoutines]);
      
      
    function goToNextPage() {
      if(currentPage<pages){
      setCurrentPage((page) => page + 1);
      }
      else{
        setCurrentPage(2)
      }
    }
    function goToPreviousPage() {
      if(currentPage>1){
      setCurrentPage((page) => page - 1);}
      else{
        setCurrentPage(1)
      }
    
   }
   function changePage(event) {
      const pageNumber = Number(event.target.textContent);
      if(pageNumber<=pages){
      setCurrentPage(pageNumber);
    }
  }
    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        if(currentPage>pages){
          return pageRoutines? pageRoutines.slice(0,10):null;
        }
        else{
          
        return pageRoutines? pageRoutines.slice(startIndex, endIndex):null;
        }
      };
    const getPaginationGroup = () => {
      let start = currentPage-3>0? currentPage-3:0
      if(currentPage>pages){
        start=0
      }
      const array = new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
      return array
    };


  return (
    <Container>
        <div>
          <Header>
        {userToken ?
            <div className="loggedInMessage" style={{margin:"auto", textAlign:"center"}}>
              <h1 > {myUsername}'s Routines </h1>
            </div>:
            <div className="loggedOutMessage"style={{margin:"auto", textAlign:"center"}} >
              <h1>All Routines</h1>
            </div>
        }
        
        </Header>
        {userToken?
        <Link to={`/myroutines/new`} className="activityLink" title="Create New Routine"
        style={{
        cursor:"pointer", 
        marginLeft:"auto",
        top:"20%",
        left:"4%",
        position:'fixed'}} >
         <Button>
        <AddCircleOutlineIcon style ={{color:'black', fontSize:70}}>
        </AddCircleOutlineIcon></Button></Link>: null}
          <div>
            {getPaginatedData().map((routine)=>
            {return (<Routines
            pageRoutines={pageRoutines}
            routine ={routine} 
            userToken ={userToken}
            key ={routine.id}
            allRoutines={allRoutines}
            usersRoutines={usersRoutines}
            setallroutines={setallroutines}
            setusersRoutines={setusersRoutines}
            allActivities={allActivities}
            />)}
            )}
          </div>
        </div>
        
    <div className="pagination">
      {/* previous button */}
      <button
        onClick={goToPreviousPage}
        className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
      >
        prev
      </button>

      {/* show page numbers */}
      {getPaginationGroup().map((item, index) => (
        <button
          key={index}
          onClick={changePage}
          className={`paginationItem ${currentPage === item ? 'active' : null}`}
        >
          <span>{item}</span>
        </button>
      ))}

      {/* next button */}
      <button
        onClick={goToNextPage}
        className={`next ${currentPage === pages ? 'disabled' : ''}`}
      >
        next
      </button>
    </div>



        </Container>
    )
}

export default Routineslist;


