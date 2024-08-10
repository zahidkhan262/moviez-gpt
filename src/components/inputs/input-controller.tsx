
type InputProps = {
  type: string;
  placeholder: string;
  value: string;
}


export const InputController = (props: InputProps) => {
  const { type, placeholder, value } = props
  return (
    <>
      <input type={type} placeholder={placeholder} value={value} />
    </>
  )
}
