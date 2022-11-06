import React from 'react'

function Header (props){
    return (
        <div>
            <h1>Employee Management</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px'}}>
                <button onClick={()=>props.setIsAdding(true)} className='round-button'>Add Employee</button>
            </div>
        </div>
    )
}
export default Header