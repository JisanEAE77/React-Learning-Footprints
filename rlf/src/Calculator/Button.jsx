import css from './Button.module.css'

const Button = ({value}) => {
    return (
        <>
            <button className={`col-4 ${css.cbutton}`}>{value}</button>
        </>
    )
}

export default Button;