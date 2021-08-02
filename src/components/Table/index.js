import React, {useState} from 'react';

export default function Table(){
    const [number, setNumber] = useState(3);

    const aumentarNumero = () => {
        let numero = number;
        setNumber(numero+1)
    }

    const disminuirNumero = () => {
        let numero = number;
        setNumber(numero-1)
    }

    return (
        <div>
            <div style={{display:'inline-block'}}>
                <button onClick={aumentarNumero} style={{height:40}}>Aumentar número</button>
                <button onClick={disminuirNumero} style={{height:40}}>Disminuir número</button>
                <table>
                    <thead>
                        <tr>head</tr>
                    </thead>
                    
                    <tbody>
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>

                    </tbody>
                </table>
            </div>
            
            <h1> {number} </h1>
            <h1>Muestra tabla</h1>
        </div>
    )
}
