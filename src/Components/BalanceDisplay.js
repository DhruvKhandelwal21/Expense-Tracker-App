import  React from 'react';
import {useState,useEffect} from 'react';
import styled from 'styled-components';

const ExpContainer = styled.div`
display:flex;
width:100%;
justify-content: space-around;
margin-top: 25px;
`;
const Income=  styled.div`
display:flex;
align-items: center;
margin-right: 10px;
flex-direction: column;
font-size:1.2rem;
font-weight: bold;
& span {
    color: ${(props) => (props.isIncome ? "green" : "red")};
    font-weight: bold;
    font-size: 20px;
  }
`;
const Expense = styled.div`
display:flex;
align-items: center;
margin-right: 10px;
flex-direction: column;
font-size:1.2rem;
font-weight: bold;
& span {
    color: ${(props) => (props.isIncome ? "green" : "red")};
    font-weight: bold;
    font-size: 20px;
  }
`;

const BalanceDisplay = (props)=>{
  
  const[income,setIncome] = useState(0);
  const[expense,setExpense] = useState(0);
  const transactions = props.txn;

  useEffect(()=>{
    
    calculateBalance();
  }
  , [props.txn]);

  const calculateBalance = () => {
    let exp = 0;
    let inc = 0;
   console.log("hi");
    transactions.map((payload) =>
        payload[2] === "Expense"
            ? (exp = exp + parseInt(payload[0]))
            : (inc = inc + parseInt(payload[0])),
    );
    props.newBalance(inc-exp);
    setExpense(exp);
    setIncome(inc);
  }
  console.log(income)
  console.log(expense)


return(
  
    <ExpContainer>
      <Income isIncome={true}>
      Income<span>${income}</span>
        
      </Income>
      <Expense isIncome={false}>
      Expense<span>${expense}</span>
        
      </Expense>
    </ExpContainer>


  )
}
export default BalanceDisplay;