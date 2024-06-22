import React from 'react';
import Button from "./Button";
import {v4} from 'uuid'
function AddForm(props) {
    const [newname, setNewname] = React.useState("");
    const [newemail, setNewemail] = React.useState("");
    const [newnum,setNewnum] = React.useState("");
    const [newaddress,setNewaddress] = React.useState("");

    const onadd = (e)=>{
        e.preventDefault();
        if(newname===""&&newemail===""&&newnum===""&&newaddress===""){
            alert("Please Enter infomation")
        }
        else{
            if(newname===""){
                alert("Please Enter name")
            }
            if(newemail===""){
                alert("Please Enter email")
            }
            if(newnum===""){
                alert("Please Enter phone")
            }
            if(newaddress===""){
                alert("Please Enter address")
            }
            if(newnum.length!==10){
                alert("Please enter 10 digits")
            }
            if(!newnum.startsWith('0')||isNaN(newnum)){
                alert("Please enter phone number")
            }
            else{
                const newemployee ={
                    id:v4,
                    name: newname,
                    email: newemail,
                    num:newnum,
                    address:newaddress
                }
                props.addEmployee(newemployee)
                oncancel(e)
            }
        }

        }


    const oncancel=(e)=>{
        e.preventDefault();

        props.setHidden(true)
        setNewname("")
        setNewemail("")
        setNewnum("")
        setNewaddress("")
    }
    const namechange=(e)=>{
        setNewname(e.target.value)
    }
    const emailchange=(e)=>{
        setNewemail(e.target.value)
    }
    const numchange=(e)=>{
        setNewnum(e.target.value)
    }
    const addresschange=(e)=>{
        setNewaddress(e.target.value)
    }
    return (
        <div style={props.hidden ?
            {
                display: 'none',
            }
            :
            {


            }}>
            <form action=""  style={{
                position:'absolute',
                top:'50%',
                left:'50%',
                transform:'translate(-50%, -50%)',
                backgroundColor:'white',
                border:'1px solid black',
                borderRadius:'5px',


            }}>
                <div style={{
                    display:'flex',
                    justifyContent:'space-between',
                    margin:'20px',
                    borderBottom:'1px solid black',
                }}>
                    <h1>Add Employee</h1>
                    <Button onClick={oncancel} text={'X'} style={{
                        background:'transparent',
                        border:'none',

                    }}/>

                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin:'19px',

                }}>
                    <div style={{padding: '20px',display: 'flex',
                        flexDirection: 'column'}}>
                        Name
                        <input value={newname} style={{width: '400px'}} type="text" onChange={namechange}/>
                    </div>
                    <div style={{padding: '20px',display: 'flex',
                        flexDirection: 'column'}}>
                        Email
                        <input value={newemail} style={{width: '400px'}} type="text" onChange={emailchange}/>
                    </div>
                    <div style={{padding: '20px',display: 'flex',
                        flexDirection: 'column'}}>
                        Address
                        <textarea value={newaddress} style={{width: '400px'}} name="" id="" cols="20" rows="5" onChange={addresschange}></textarea>
                    </div>
                    <div style={{padding: '20px',display: 'flex',
                        flexDirection: 'column'}}>
                        Phone
                        <input value={newnum} style={{width: '400px'}} type="text" onChange={numchange}/>
                    </div>

                </div>
                <div style={{display:'flex',justifyContent:'end',marginTop:'30px',backgroundColor:'darkgray',padding:'20px'}}>
                    <Button onclick={oncancel} type={'cancel'} text={'Cancel'} style={{color:'black',background:'transparent',fontSize:'20px',padding:'5px 30px',border:'none'}}/>
                    <Button text={'Add'} type={'submit'} onClick={onadd} style={{color:'white',backgroundColor:'black',fontSize:'20px',padding:'5px 30px'}}/>
                </div>
            </form>

        </div>
    );
}

export default AddForm;