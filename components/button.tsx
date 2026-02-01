import "./button.css"

type ButtonProps = {
  label?: string
  onClick?: () => void
  disabled?: boolean
}

export const Button = ({ label = "Button", onClick, disabled = false }: ButtonProps) => {
  return (
    <button className="ui-button" onClick={onClick} disabled={disabled}>
      {label}
    </button>
  )
}
