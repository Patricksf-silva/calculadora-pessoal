import { useState } from 'react';
import BudgetForm from './components/BudgetForm';
import BudgetResult from './components/BudgetResult';
import StatusMessage from './components/StatusMessage';
import styles from './App.module.css';

export default function App() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleCalculate = (inc, exp) => {
    setIncome(Number(inc));
    setExpense(Number(exp));
    setSubmitted(true);
  };

  return (
    <div className={styles.container}>
      <h1>Calculadora de Orçamento Pessoal</h1>
      <BudgetForm onCalculate={handleCalculate} />
      {submitted && (
        <>
          <BudgetResult income={income} expense={expense} />
          <StatusMessage balance={income - expense} />
        </>
      )}
    </div>
  );
}
