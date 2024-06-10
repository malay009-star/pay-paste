

const TextArea = ({ placeholdText }) => {
  return (
    <div>
      <textarea className="h-10 primaryInput"
        placeholder={placeholdText}></textarea>
    </div>
  )
}

export default TextArea
