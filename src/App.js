import React from 'react';
import ExpenseDisplay from './Components/ExpenseDisplay';
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  margin:auto;
  align-items: center;
  height: 100vh;
  width: 98%;
  padding-top: 1.5rem ;
  font-family: Montserrat;
  
`;
const Head = styled.span` 
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px;
  font-size: 25px;
  font-weight: bold;

`;
function App() {
  return (
    <Container>
     <Head>Expense Tracker</Head>
     <ExpenseDisplay />

    </Container>
  );
}

export default App;
