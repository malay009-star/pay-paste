

const TextArea = ({ placeholdText }) => {
  return (
    <div>
      <textarea className="h-10 bg-success p-3 rounded-md w-full"
        placeholder={placeholdText}></textarea>
    </div>
  )
}

export default TextArea
