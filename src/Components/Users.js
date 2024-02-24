import React from 'react'
import Card from './Card'

const Users = (props) => {

    return (
        <div >
            <h1>Users List</h1>
                <div className='container'>
                    <div className='row'>
                {
                    props.abc.map(x => <Card data={x}/> )
                }
                    </div>
                </div>
        </div>
    )
}
export default Users








// return (
//     <div style={{width:'400px', height: '250px' , border:'2px solid black' , borderRadius:'10px' , margin: '20px auto' , padding: '10px' , backgroundColor: 'lightblue'}}>
//         <h1>Users List</h1>

//         <h1>name1: {props.name1}</h1>
//         <h1>Company: {props.Company}</h1>

//         <hr />
//         {/* <h1>Name2: {name2}</h1>
//         <h1>Company: {company2}</h1>

//         <hr /> */}

//     </div>
//   )


// return (
//     <div style={{width:'400px', height: '250px' , border:'2px solid black' , borderRadius:'10px' , margin: '20px auto' , padding: '10px' , backgroundColor: 'lightblue'}}>
//         <h1>Users List</h1>

//         <h1>name: {props.abc[0].name}</h1>
//         <h1>Company: {props.abc[0].company}</h1>

//         <hr />
//         {/* <h1>Name2: {name2}</h1>
//         <h1>Company: {company2}</h1>

//         <hr /> */}

//     </div>
//   )