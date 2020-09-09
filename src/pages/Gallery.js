import React, { useEffect, useState, Component } from "react";
import API from "../utils/API";
import CardContainer from "../components/CardContainer";


function Gallery() {
 
  const [users, setUsers] = useState([]);
  const [matched,setMatched] =useState([])


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

  function handleInput(searchName){
    console.log(searchName.target.value)
    let nameSearch =searchName.target.value.toLowerCase()

    let x =matched.filter(item=>{
      let firstName=item.firstname.toLowerCase()
      if((firstName.indexOf(nameSearch))!==-1){
        return item
      }
    })
    console.log("check arr")
    console.log(x)
    setMatched(x)
  };



  return (
    <div>
      {/* <h1 className="text-center">Employee Directory</h1>
      <p className="text-center h3">Click on the arrows to browse users</p> */}
       <input type="text" onChange={handleInput}/>

       <table className="table table-striped table-hover table-condensed align-middle" size = "md">
       <thead>
    <tr>
      <th className="align-middle">Image</th>
      <th className="align-middle" ><button type="button" >
          Name
        </button>
      </th>
      <th className="align-middle">Phone</th>
      <th className="align-middle">DOB</th>
    </tr>
  </thead>
        {matched.map(user=>{
         return <CardContainer      
      image={user?.image}
      firstname={user?.firstname}
      lastname={user?.lastname}
      phone={user?.phone}
      dob={user?.dob}
    />
        
        })}
  
  </table>
    </div>
  );
}

export default Gallery;
