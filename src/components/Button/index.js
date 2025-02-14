import React from "react";
import "./Button.css";

const Button = React.forwardRef(({ onClick, className, children, ...props }, ref) => {
    return (
        <button 
            ref={ref} 
            onClick={onClick} 
            className={`button ${className || ""}`}
            {...props}
        >
            {children}
        </button>
    )
})

export default Button;
