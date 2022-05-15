import { InputWrapper } from "./style"

type InputProps = {
  type?: string, 
  label?: string, 
  placeholder?: string, 
  className?: string, 
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const Input = ({className, placeholder, onChange, type, label}:InputProps) => (
  <>
  <InputWrapper className={className}>
    <label>
      {label}
    </label>
    <input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />
  </InputWrapper>
  </>
)