import { useState } from 'react';
import styles from './BudgetForm.module.css';

export default function BudgetForm({ onCalculate }) {
  const [income, setIncome] = useState('');
  const [expense, setExpense] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(income, expense);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Receita:
        <input
          type="number"
          value={income}
          onChange={e => setIncome(e.target.value)}
          min="0"
          required
        />
      </label>
      <label>
        Despesa:
        <input
          type="number"
          value={expense}
          onChange={e => setExpense(e.target.value)}
          min="0"
          required
        />
      </label>
      <button type="submit">Calcular</button>
    </form>
  );
}
