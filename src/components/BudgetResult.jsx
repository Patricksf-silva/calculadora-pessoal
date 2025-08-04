import styles from './BudgetResult.module.css';

export default function BudgetResult({ income, expense }) {
  const balance = income - expense;
  return (
    <div className={styles.result}>
      <h2>Resumo</h2>
      <p>Receita: R$ {income}</p>
      <p>Despesa: R$ {expense}</p>
      <p>Saldo: <strong>R$ {balance}</strong></p>
    </div>
  );
}
