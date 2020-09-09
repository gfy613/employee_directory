import React, { useEffect, useState } from "react";
import API from "../utils/API";
import CardContainer from "../components/CardContainer";
import Row from "../components/Row";

function Gallery() {
 
  const [users, setUsers] = useState([]);
  const [matched,setMatched] =useState([])

  const [userIndex, setUserIndex] = useState(0);

  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    loadUsers();
    

  }, []);



  function loadUsers() {
    API.fetchUsers()
      .then(users => {
        console.log(users);
        setUsers(users);
        setMatched(users)
      
      })
      .catch(err => console.log(err));
  }

  function handleInput(e){
    console.log(e.target.value)
    let nameSearch =e.target.value.toLowerCase()

    let x =matched.filter(item=>{
      let firstName=item.firstname.toLowerCase()
      if((firstName.indexOf(nameSearch))!==-1){
        return item
      }
    })
    console.log("check arr")
    console.log(x)
    setMatched(x)
    // setMatched(matched)
  }

  return (
    <div>
      {/* <h1 className="text-center">Employee Directory</h1>
      <p className="text-center h3">Click on the arrows to browse users</p> */}
       <input type="text" onChange={handleInput}/>

      
       
        {matched.map(user=>{
         return <Row>
      <CardContainer
      image={user?.image}
      firstname={user?.firstname}
      lastname={user?.lastname}
      phone={user?.phone}
      // dob={user?.dob}
    />
          </Row>
        })}
  
      
    </div>
  );
}

export default Gallery;
