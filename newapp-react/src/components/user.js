import React , {useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
import GetData from './GetData';

function User() {
 const[data,setData] = useState([]);
 const[name,setName] = useState("");
 const[password,setPassword] = useState("");
 const[address,setAddress] = useState("");
 const[city,setCity] = useState("");
 const[state,setState] = useState("");
 const[zipcode,setZipcode] = useState("");

  // constructor(props);{
  //   super(props);
  //   this.state={
  //     users : []
  //   };
  // }
  useEffect(() => {
    fetch("http://localhost:8080/get-all-person-info").then((result) => {
      result.json().then((resp) => {
        console.log("result ",resp );
        setData(resp);
      })
    });
  },[]);


  //post
  function saveData(){
  console.log(name, password, address, city, state, zipcode)
    let data = {name, password, address, city, state, zipcode} 

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    fetch('http://localhost:8080/add-person-info', requestOptions)
        .then(response => response.json())
        .then(data);
  }

   
  return (
    <>
        <form className="row g-3">
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label" value={name}>UserName</label>
    <input type="text" className="form-control" id="inputEmail4"  
     onChange={(e) => setName(e.target.value)}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label"  value={password}>Password</label>
    <input type="password" className="form-control" id="inputPassword4"  
     onChange={(e) => setPassword(e.target.value)}/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label" value={address}  >Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"  
     onChange={(e) => setAddress(e.target.value)}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label"  value={city}>City</label>
    <input type="text" className="form-control" id="inputCity"   
     onChange={(e) => setCity(e.target.value)}/>
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label"  value={state}  >State</label>
    <select id="inputState" className="form-select" 
     onChange={(e) => setState(e.target.value)}>
      <option>Choose...</option>
      <option>Gujarat</option>
      <option>Rajasthan</option>
      <option>Maharashtra</option>
      <option>kerala</option>
    </select>
  </div>
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label"  value={zipcode}  >Zip</label>
    <input type="text" className="form-control" id="inputZip" 
     onChange={(e) => setZipcode(e.target.value)}/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit"  className="btn btn-primary" onClick={saveData}>Sign in</button>
  </div>
</form>

{/* <GetData data={data}/> */}
<table class="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Password</th>
      <th scope="col">Address</th>
      <th scope="col">City</th>
      <th scope="col">State</th>
      <th scope="col">Zip</th>
    </tr>
  </thead>
  <tbody>
  {
    data.map((item)=>(
  <tr>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.password}</td>
    <td>{item.address}</td>
    <td>{item.city}</td>
    <td>{item.state}</td>
    <td>{item.zipcode}</td>
  </tr>)
   )
  }      
    
  </tbody>
</table>

    </>
  );
}

export default User;

// onClick={fetchdata}