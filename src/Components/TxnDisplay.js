import styled from "styled-components";
import React, { useEffect, useState } from "react";

const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  padding: 0.4 rem 1 rem;
  font-size: 1.2rem;
  width: 100%;
  gap: 10px;
  font-weight: bold;
  margin-top: 1rem;
  overflow-y: auto !important;
  & input {
    padding: 0.5rem 0.9rem;
    border-radius: 12px;
    background: #e6e8e9;
    border: 1px solid #e6e8e9;
    outline: none;
  }
`;
const Cell = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #e6e8e9;
  align-items: center;
  font-weight: normal;
  justify-content: space-between;
  border-right: 4px solid ${(props) => (props.isExpense ? "red" : "green")};
`;
const TransactionCell = (props) => {
  return (
    <Cell isExpense={props.payload[2] === "Expense"}>
      <span>{props.payload[1]}</span>
      <span>${props.payload[0]}</span>
    </Cell>
  );
};
const TxnDisplay = (props) => {
  const [searchText, updateSearchText] = useState("");
  const [filteredTransaction, updateTxn] = useState(props.transactions);

  const filterData = (searchText) => {
    if (!searchText || !searchText.trim().length) {
      updateTxn(props.transactions);
      return;
    }
    let txn = [...props.transactions];
    txn = txn.filter((payload) =>
      payload[1].toLowerCase().includes(searchText.toLowerCase().trim()),
    );
    updateTxn(txn);
  };

  useEffect(() => {
    filterData(searchText);
  }, [props.transactions]);

  return (
    <Container>
      Transactions
      <input
        placeholder="Search"
        onChange={(e) => {
          updateSearchText(e.target.value);
          filterData(e.target.value);
        }}
      />
      {filteredTransaction?.map((payload) => (
        <TransactionCell payload={payload} />
      ))}
    </Container>
  );
};
export default TxnDisplay;