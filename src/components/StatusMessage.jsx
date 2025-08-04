import styles from './StatusMessage.module.css';

export default function StatusMessage({ balance }) {
  let message, status;
  if (balance > 0) {
    message = 'Parabéns! Seu saldo está positivo.';
    status = styles.positive;
  } else if (balance < 0) {
    message = 'Atenção! Seu saldo está negativo.';
    status = styles.negative;
  } else {
    message = 'Seu saldo está zerado.';
    status = styles.neutral;
  }
  return <div className={status}>{message}</div>;
}
