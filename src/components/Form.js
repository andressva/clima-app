import React from 'react';

const Form = (props) =>{
    return (
        <div className="form-container">
            <form onSubmit={props.handleSubmit}>
                <input name="cityName" type="text" placeholder="Ciudad"></input>
                <button>Buscar</button>
            </form>
            
        </div>
    )
}

export default Form;