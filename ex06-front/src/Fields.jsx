export function Field({ label, value }) {
  return (
    <div className="field">
      <span className="label">{label}</span>
      <span className="value">{value ?? ''}</span>
    </div>
  )
}
