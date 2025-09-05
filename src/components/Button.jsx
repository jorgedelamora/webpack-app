const Button = ({onClick}) => {
    return (
        <button 
            data-testid="hello-button"
            onClick={onClick}>
                Click me to say hello
		</button>
    )
}
export default Button;