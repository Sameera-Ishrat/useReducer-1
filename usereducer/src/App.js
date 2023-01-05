import React from "react";
import useFetch from "./useFetch";


function App() {
  const BASE_URL = "https://inshortsapi.vercel.app/news?category=all";
  // const BASE_URL =  "https://jsonplaceholder.typicode.com/users";

  const { isLoading, error, data:users} = useFetch(BASE_URL);
   console.log(users,"USERS")
  return (
    <div>
      <h2>useReducer() Example Fetching data using custom useFetch hook</h2>
      {isLoading && <p style={{display:"flex",justifyContent:"center",alignItems:"center"}}>Loading...</p>}
      {error && <p style={{display:"flex",justifyContent:"center",alignItems:"center"}}>Error</p>}
 {/* <ul>
 {users.map((user) => {
    return (
      <li key={user.id}>{user.name}</li>
    )
  })}
 </ul> */}
      <div> 
        <pre>{JSON.stringify(users, undefined, 2)}</pre> 
        {/* syntax JSON.stringify(data , function ,spaces); */}
      </div>
    </div>
  );
}

export default App;
