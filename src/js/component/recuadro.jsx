import React from 'react';

const Recuadro = ({value, selectSquare}) =>{
    return (
        <div className="recuadro" onClick={selectSquare}>
            {value}
        </div>
    )

}

export default Recuadro;