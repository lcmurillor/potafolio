/** Muestra el resultado de una acción y permite cerrar el aviso. */
export default function Toast({ message, onClose, t }) {
  return (
    message && (
      <div className="toast" role="status">
        <span>{message}</span>
        <button onClick={onClose} aria-label={t('Cerrar notificación')}>
          ×
        </button>
      </div>
    )
  )
}
