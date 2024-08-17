export const commonButton = ({ text, href, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
    if (href) {
      window.location.href = href
    }
  }
  return (
    <button onClick={handleClick} className='main__btn__long'>
      {text}
    </button>
  )
}
