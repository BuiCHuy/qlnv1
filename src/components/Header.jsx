import React from 'react';
import Button from "./Button";

function Header(props) {
    const onAddemp=()=>{
        props.setHidden(false)
    }
    return (
        <div style={{
            background:"#000080",
            color:'white',
            padding:'8px',
            display:'flex',
            justifyContent:'space-between'
        }}>
            <h1>Quản lý nhân viên</h1>
            <div style={{
                display:'flex',
            }}>
                <Button style={{
                    margin:'30px',
                    fontSize:'20px',
                    backgroundColor:'black',
                    color:'white'
                }} text={"- Xóa Nhân viên"}/>
                <Button style={{
                    margin:'30px',
                    fontSize:'20px',
                    backgroundColor:'black',
                    color:'white'
                }} text={"+ Thêm nhân viên"} onClick={onAddemp}/>
            </div>

        </div>
    );
}

export default Header;