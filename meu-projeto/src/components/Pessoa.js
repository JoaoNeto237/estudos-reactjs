function Pessoa({nome, idade, foto}){
    return(
        <div>
            <img src={foto} alt={nome} />
            <h2>Nome: {nome} </h2>
            <p>Idade: {idade} </p>
        </div>
    )
}

export default Pessoa;