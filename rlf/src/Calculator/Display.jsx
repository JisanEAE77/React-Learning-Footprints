import css from './Display.module.css'

const Display = () => {
    return (
        <>
            <input type="text" readOnly className={`${css.display}`} />
        </>
    )
}

export default Display;