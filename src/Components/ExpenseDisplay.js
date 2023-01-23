import React from 'react';
import styled from 'styled-components';
import {useState} from 'react';
import AddExpense from './AddExpense';
import BalanceDisplay from './BalanceDisplay';
import TxnDisplay from './TxnDisplay';

const OutBox = styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin-top: 1rem;
`;
const ExpDisplay = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  /* flex-direction: column; */
  /* margin: 0 10px; */
  align-items: center;
  justify-content: space-around;
 
  /* padding-top: 20px ; */
  font-family: Montserrat;
  gap: 10vw;
  
`;
const Button = styled.button`
  color:white;
  background-color: black;
  /* margin-left:20px; */
  border-radius: 6px;
  cursor: pointer;
  font-family: Montserrat;
  font-weight: bold;
  padding:5px 15px;
`;
const Balance = styled.span`

 font-weight: bold;
 font-size:1.2rem;
`;
const ExpenseDisplay = ()=>{
  
const [showTxn,setshowTxn] = useState(false);
const [balance,setBalance] = useState(0);
const [txn,setTxn] = useState([]);

const showTxnHandler = () => {
  setshowTxn(!showTxn);
}
const addBalance =  (payload)=>{

  setshowTxn(!showTxn);
  const transactionArray = [...txn];
  const newtxn = Object.values(payload);
  transactionArray.push(newtxn);
  setTxn(transactionArray);
}

const calcBalance = (payload)=>{
  setBalance(payload);
}
  return(
    <OutBox>
    <ExpDisplay>
     <Balance> Balance: ${balance} </Balance>
     < Button onClick = {showTxnHandler}> {showTxn?"CANCEL":"ADD"} </Button>
     
  </ExpDisplay>
  {showTxn&&<AddExpense  addTxn = {addBalance} />}
  
   <BalanceDisplay newBalance = {calcBalance} txn = {txn}/>
  
   {txn?.length ? (
                <TxnDisplay transactions={txn} />
            ) : (
                ""
            )}
   
   </OutBox>
  
  
    
  )
}
export default ExpenseDisplay;