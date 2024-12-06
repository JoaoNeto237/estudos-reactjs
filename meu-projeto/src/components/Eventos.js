function Evento(){

    const meuEvento =() =>{
        alert('Opa, fui ativado')
    }
    return(
        <div>
            <p>Clique para disparar algum evento</p>
            <button onClick={meuEvento} >Ativar</button>
        </div>
    )
}

export default Evento;