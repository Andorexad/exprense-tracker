import { fromPairs } from "lodash";
import React from "react";
import { Header } from "./component/Header";
import { Balance } from "./component/Balance";
import { IncomeExpense } from "./component/IncomeExpense";
import { TransactionList } from "./component/TransactionList";
import { AddTransaction } from "./component/AddTransaction";
//import { Option } from "./component/Option";
import { GlobalProvider } from "./context/GlobalState";

import './App.css' ;

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
