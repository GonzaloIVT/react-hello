import React, { useState } from 'react';

const Jugador = () => {

    const [jugador1, setJugador1] = useState("")
    const [jugador2, setJugador2] = useState("")
 

    return (
        <div className="Jugador">
         <h2>Escoge un nombre</h2>      
            <div className="chooseWeapon">
                <input type="text" name="jugador1" placeholder="Jugador 1" onChange={e => setJugador1(e.target.value)} value={jugador1}/>
                <input type="text" name="jugador2" placeholder="Jugador 2" onChange={e => setJugador2(e.target.value)} value={jugador2}/>
                <br />
                <button value="X">X</button>
                <button value="O">O</button>
            </div>
        </div>
    )
}



export default Jugador;