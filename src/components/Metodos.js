function Metodos() {
    const mostrarMensaje = () => {
        console.log("Mostrando Mensaje");
    }
    return (
        <div>
            <h2>Ejemplo Metodos react</h2>
            <button onClick={ () => mostrarMensaje() }>Pulsar...</button>
        </div>
    );
}
export default Metodos;