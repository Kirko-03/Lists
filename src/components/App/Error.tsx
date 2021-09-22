const style = require('./Error.module.css')

const ErrorSite = () => {
    return <div className={style.error}> 
    <h1>Error,страница не найдена</h1>
    <img  src={'https://www.seekpng.com/png/full/360-3605845_dog-holding-paper-in-mouth.png'} />
    </div>
}
export default ErrorSite