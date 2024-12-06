import PropTypes from "prop-types";

function List({marca, lancamento}){
    return(
        <>
            <h1>Lista de coisas</h1>
            <ul>
                <li>{marca} - {lancamento} </li>
            </ul>
        </>
    )
}

//Valida qual tipo de dados esta sendo passado para props

List.prototype={
    marca: PropTypes.string,
    lancamento: PropTypes.number
}

//Indica um valor padrao, ate o usuario preencher
List.defaultProps={
    marca: "Faltou a marca",
    lancamento: 0 

}

export default List;