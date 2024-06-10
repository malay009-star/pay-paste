

const LightBlueInput = ({ value, primary }) => {
  return (
    <div className={`lightBlueInput py-3 ${primary ? 'bg-success border-0 ' : ''}`}><p>{value}</p></div>
  )
}

export default LightBlueInput
