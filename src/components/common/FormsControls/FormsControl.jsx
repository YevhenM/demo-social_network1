import React from "react";
import s from "./FormsControl.module.css"


export const Textarea = ({input, meta, ...props}) => {
    let hasError = (meta.touched && meta.error && meta.active)
    let textError = meta.error
    return (
        <div className={s.formControl + " " + ( hasError? s.error: "")}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            { hasError && <span>{textError}</span> }
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    let hasError = (meta.touched && meta.error && meta.active)
    let textError = meta.error
    return (
        <div className={s.formControl + " " + ( hasError? s.error: "")}>
            <div>
                <input {...input} {...props}/>
            </div>
            { hasError && <span>{textError}</span> }
        </div>
    )
}