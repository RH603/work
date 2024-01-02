import styles from "./Button.module.css"
import classNames from "classnames"

function Button({className, variant, ...restProps}){
    return(
        <>
        <div {...restProps} className={classNames(styles.button, variant && styles[variant], className)}/>
        </>
    )
}
export default Button