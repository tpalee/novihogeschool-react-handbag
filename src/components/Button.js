import React from 'react';

//create button component
function Button({name, disabled}) {
    return (
            <button disabled={disabled} onClick={() => {console.log(name)}}>
                {name}
            </button>
    );
}
export default Button;



