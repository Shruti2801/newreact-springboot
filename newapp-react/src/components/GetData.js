import React from 'react'

function GetData(props) {
  return (
    <>
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
              props.data.map((item)=>(
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
</table></>
  )
}

export default GetData