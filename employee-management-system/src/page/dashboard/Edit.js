import React, { useState } from 'react'
import Swal from 'sweetalert2'

function Edit (props){
    const [firstName, setFirstName] = useState(props.selectedEmployee.firstName)
    const [lastName, setLastName] = useState(props.selectedEmployee.lastName)
    const [email, setEmail] = useState(props.selectedEmployee.email)
    const [salary, setSalary] = useState(props.selectedEmployee.salary)
    const [date, setDate] = useState(props.selectedEmployee.date)

    const id = props.selectedEmployee.id
console.log(props.selectedEmployee.date)
    const handleUpdate = e =>{
        e.preventDefault()
        if (!firstName || !lastName || !email || !salary || !date){
            return(
                Swal.fire({
                    icon: 'error',
                    title:'Error!',
                    text:'All Fields Are Required',
                    showConfirmButton: true
                })
            )
        }
       
        const employee = {
            id,
            firstName,
            lastName,
            email,
            salary,
            date
        }

        for(let i = 0; i < props.employees.length; i++) {
            if (props.employees[i].id === id) {
                props.employees.splice(i, 1, employee)
                break;
            }
        }

        props.setEmployees(props.employees)
        props.setIsEditing(false)

        Swal.fire({
            icon:'success',
            title: 'Added!',
            text: `${firstName} ${lastName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        })

    }
    return (
        <div className='small-container'>
            <form onSubmit={handleUpdate}>
                <h1>Edit Employee</h1>
                <lable htmlFor='firstName'>First Name</lable>
                <input
                    id='firstName'
                    type='text'
                    name='firstName'
                    value={firstName}
                    onChange= {e => setFirstName(e.target.value)}
                />
                <lable htmlFor='lastName'>Last Name</lable>
                <input
                    id='lastName'
                    type='text'
                    name='lastName'
                    value={lastName}
                    onChange= {e => setLastName(e.target.value)}
                />
                <lable htmlFor='email'>Email</lable>
                <input
                    id='email'
                    type='email'
                    name='email'
                    value={email}
                    onChange= {e => setEmail(e.target.value)}
                />
                <lable htmlFor='salary'>Salary</lable>
                <input
                    id='salary'
                    type='number'
                    name='salary'
                    value={salary}
                    onChange= {e => setSalary(e.target.value)}
                />
                <lable htmlFor='date'>Date</lable>
                <input
                    id='date'
                    type='date'
                    name='date'
                    value={date}
                    onChange= {e => setDate(e.target.value)}
                />
                <div style={{marginTop: '30px'}} >
                    <input type='submit' value= 'Update' />
                    <input
                        style={{marginLeft: '12px'}}
                        className= 'muted-button'
                        type='button'
                        value='Cancel'
                        onClick={() => props.setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    )
}
export default Edit