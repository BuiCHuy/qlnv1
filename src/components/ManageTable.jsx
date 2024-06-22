import React from 'react';
import Button from './Button'
function ManageTable(props) {
    return (
        <table style={{
            margin: '0 auto',
            width: '98%',
            textAlign:'center',
            fontSize:'20px',
            borderCollapse: 'collapse'
        }}>
            <thead>
            <tr style={{
                borderBottom:'1px solid black',
            }}>
                <th><input type="checkbox"/></th>
                <th>Họ tên</th>
                <th>Email</th>
                <th>SĐT</th>
                <th>Địa chỉ</th>
                <th>Hành động</th>
            </tr>
            </thead>
            <tbody>
            {props.employees.map((employee) => (
                <tr style={{
                    borderBottom:'1px solid black',
                }} key={employee.id}>
                    <td><input type="checkbox"/></td>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.num}</td>
                    <td>{employee.address}</td>
                    <td style={{
                        display:'flex',
                        justifyContent:'center',
                    }}>
                        <Button style={{
                            background: 'transparent',
                            border:'none',
                            color:'white',
                        }} src={"pen.svg"}/>
                        <Button style={{
                            background: 'transparent',
                            border:'none',
                            color:'white',
                        }} src={"trash.svg"}/>
                    </td>
                </tr>

            ))}
            </tbody>


        </table>
    );
}

export default ManageTable;