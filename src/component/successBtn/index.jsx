

const SuccessBtn = ({ placeholdText }) => {
  return (
    <div>
      <input className="bg-success p-3 rounded-md w-full"
        placeholder={placeholdText}
        type="text" />
    </div>
  )
}

export default SuccessBtn
