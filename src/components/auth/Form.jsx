const Form = ({ data, handleChange }) => {
  return (
    <>
      {data.map((value) => {
        return (
          <aside key={value.name}>
            <label htmlFor={value.name}>{value.label}: </label>
            <input
              type={value.type}
              placeholder={value.placeholder}
              name={value.name}
              value={value.value}
              id={value.name}
              onChange={handleChange} />
          </aside>
        )
      })}
    </>
  )
}

export default Form
