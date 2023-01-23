import React,{useState} from 'react';
import styled from "styled-components";
// import BalanceDisplay from './BalanceDisplay';
const ExpContainer = styled.div`
margin-top:20px;
 display: flex;
 flex-direction: column;
 align-items: center;

`;
const RadioForm = styled.div`
 font-weight: bold;
 display:flex;
 gap:8px;
`;

const Button = styled.button`
  color:white;
  background-color: black;
  /* margin-left:20px; */
  margin-top:15px;
  border-radius: 6px;
  cursor: pointer;
  font-family: Montserrat;
  font-weight: bold;
  padding:5px 15px;
  /* margin: 1rem 0  0 5rem; */


`;
const Input = styled.input`
display: flex;
flex-direction: column;
border-radius:5px;
margin:20px;
width:90%;
padding: 7px 20px;
`;
// const InputBox = styled.div`
// margin-top: 10px;
// display:flex;
// justify-content: space-around;
// `;

const AddExpense = (props)=>{
  const [expense,setExpense] = useState("");
  const [desc,setDesc] = useState("");
  const [type,setType] = useState(expense);

 
  const onExpenseChangeHandler = (event) =>{
      setExpense(event.target.value);
  }
  const onDescChangeHandler = (event) =>{
    setDesc(event.target.value);
  }
  const typeChangeHandler = (event) =>{
    setType(event.target.value);
  }
  const onClickHandler = ()=>{
        props.addTxn({
          expense,
          desc,
          type});
          
  }
  
  return(
    <ExpContainer>
      
      
                   <Input
                   type= "number"
                   placeholder="0"
                   value= {expense}
                   min="0"
                   name="Expense"
                  
                   onChange={onExpenseChangeHandler}
                   />
                    <Input
                   value={desc}
                   type= "text"
                   placeholder="Description"
                   name="Description"
                   onChange={onDescChangeHandler}
                   
                   
                   />
                   <RadioForm>
                   <input type="radio" value="Expense" name="gender" onClick = {typeChangeHandler} /> Expense
                   <input type="radio" value="Income" name="gender" onClick = {typeChangeHandler} /> Income
                  </RadioForm>

                   <Button type="submit" onClick={onClickHandler}>Add Transaction</Button>
                   
                
   
      
   
     
      
    </ExpContainer>
  );
}
export default AddExpense;