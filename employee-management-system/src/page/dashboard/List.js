import React from 'react'

function List (props){
    return (
        <div className='container-table'>
            <table className='striped-table'>
                <thead>
                    <tr>
                    <th>No.</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Salary</th>
                    <th>Date</th>
                    <th colSpan={2} className='text-center'>Actions</th>
                    </tr>
                </thead>
               
                <tbody>
                   {props.employees.length > 0 ? (
                    props.employees.map((employee, i)=>(
                        <tr>
                            <td>{i + 1}</td>
                            <td>{employee.firstName} </td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.date}</td>
                            <td className='text-right'>
                                <button onClick={() => props.handleEdit(employee.id)} className='button muted-button'>
                                    Edit
                                </button>
                            </td>
                            <td className='text-left'>
                                <button onClick={() => props.handleDelete(employee.id)} className='button muted-button'>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                   ):(
                    <tr>
                        <td colSpan={7}>No Employees</td>
                    </tr>
                   )}
                </tbody>
            </table>
        </div>
    )
}
export default List