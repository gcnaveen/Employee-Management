import React, { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2'

function Add (props){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [salary, setSalary] = useState('')
    const [date, setDate] = useState('')
    const textInput = useRef(null)

    useEffect(() => {
        textInput.current.focus()
    }, [])
    const handleAdd = (e) => {
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
        const id = props.employees.length + 1
        const newEmployee = {
            id,
            firstName,
            lastName,
            email,
            salary,
            date
        }
        props.employees.push(newEmployee)
        props.setEmployees(props.employees)
        props.setIsAdding(false)

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
            <form onSubmit={handleAdd}>
                <h1>Add Employee</h1>
                <lable htmlFor='firstName'>First Name</lable>
                <input
                    id='firstName'
                    type='text'
                    ref={textInput}
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
                    <input type='submit' value= 'Add' />
                    <input
                        style={{marginLeft: '12px'}}
                        className= 'muted-button'
                        type='button'
                        value='Cancel'
                        onClick={() => props.setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    )
}
export default Add