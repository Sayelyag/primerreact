function Saludo(props) {
    //se pueden declara variables, funciones, etc
    var mensaje = "Hoy es un gran día para aprender React";
    let nombre = props.nombre;
    return ( <div>
        <h1> BUENASSS</h1>
        <h2> Mi primer React!! {mensaje}</h2>
        <h2> bienvenido, {nombre} y su edad es {props.edad}</h2></div>);
}

export default Saludo;