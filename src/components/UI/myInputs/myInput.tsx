const style = require("./myInput.module.css");

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function MyInput(props: InputProps): React.ReactElement<InputProps> {
  const { children, ...rest } = props;
  return (
    <input className={style.myInp} {...rest}>
      {children}
    </input>
  );
}
