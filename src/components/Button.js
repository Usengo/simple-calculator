const Button = (props) => {
  return (
    <input
      onClick={props.onClick}
      type="button"
      style={{
        backgroundColor:
          props.color === 'primary'
            ? 'green'
            : props.color === 'warning'
            ? 'orange'
            : props.color === 'danger'
            ? 'red'
            : props.color == '' || undefined || null
            ? 'gray'
            : props.color,
      }}
      value={props.value}
    />
  )
}

export default Button
