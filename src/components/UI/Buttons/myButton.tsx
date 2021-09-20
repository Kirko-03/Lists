const style = require('./myButton.module.css') 

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function MyButton(props: ButtonProps): React.ReactElement<ButtonProps> {
    const { children, ...rest } = props;
    return (
        <button
        className={style.myBtn}
            {...rest}
        >
            {children}
        </button>
    );
}