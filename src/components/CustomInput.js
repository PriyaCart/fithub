import * as React from "react"
import { useState } from "react";
import styled from 'styled-components';
import * as styles from "../components/index.module.css"
import './antStyles.css';
import logo from '../images/fithub.png';


import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Modal, CheckOutlined } from 'antd';
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-right: 10px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 5px;
  font-size: 16px;
`;

const CustomInput = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [popup, setPopup] = useState(false);
const [modal2Open, setModal2Open] = useState(false);
const [accDelete, setAccDelete] = useState(false)

const handleSubmit = (e) => {
 e.preventDefault();
 setModal2Open(true)

}

const handleDeleteAuth = () => {
    setModal2Open(false)
    setAccDelete(true)
}


  return (
    <form onSubmit={handleSubmit} className={styles.authenticateField} >
    <div className={styles.imgHolder}><img src={logo} alt="logo" /></div>
    <p>Authenticate and Delete</p>
    <fieldset className={styles.authFieldset}>
    <legend className={styles.authLegend}>Email</legend>
      
    <input type="text"
          id="text creator"
         class="form-control"
         name="object-creator"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         className= {styles.inputfield} /> 
   </fieldset>
   <fieldset className={styles.authFieldset}>
    <legend className={styles.authLegend}>Password</legend>
      
    <input type="password"
          id="text creator"
         class="form-control"
         name="object-creator"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         className= {styles.inputfield} /> 
   </fieldset>
  <button onClick={handleSubmit} className={styles.deleteBtn}>Delete Account</button>
  <Modal
        title="Are you sure you want to delete your account?"
        centered
        open={modal2Open}
        onOk={handleDeleteAuth}
        onCancel={() => setModal2Open(false)}
        okText= "Yes, Continue"
        cancelText= "Go Back"
      >
        <p>Deleting your account will remove usage history, profile information, and custom settings. </p>
      </Modal>

      <Modal
        icon = {<CheckOutlined />}
        title="Account Deleted"
        centered
        open={accDelete}
        onOk={() => setAccDelete(false)}
        onCancel={() => setAccDelete(false)}
        cancelText= "Got It"
        okButtonProps={{ style: { display: 'none' } }}
      >
        <p>We are sorry to see you leave. You are always welcome to join Fit Hub again</p>
      </Modal>

   </form>
  );
};

export default CustomInput;
