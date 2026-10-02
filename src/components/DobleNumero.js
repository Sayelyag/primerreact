function DobleNumero () {
    const ejecutarDoble = (numero) => {
        let doble = numero * 2;
        console.log("El doble de " + numero + " es: " + doble);
    }
    let mensaje = "Es Viernes";
    const cambiarMensaje = () => {
        console.log("Antes dekl cambio: : " + mensaje);
        mensaje = "Es Sabado";
        console.log("Despues del cambio: : " + mensaje);
    }

    var estilo = {
        color: "blue",
        backgroundColor: "yellow",
    }

    return (<div>
        <h1 style={estilo}>Metodos Doble Número</h1>
        <h2 style={{color: "blue"}}>{mensaje}</h2>
        <button onClick={ () => cambiarMensaje() }>Modificar Mensaje</button>

        <button onClick={ () => ejecutarDoble(10) }>Doble 10</button>
        <button onClick={ () => ejecutarDoble(15) }>Doble 15</button>
        <button onClick={ () => ejecutarDoble(20) }>Doble 20</button>
        </div>)
}
export default DobleNumero;