import {useState} from "react";

function Form(){

    function cadastrar(e){
        e.preventDefault();
        alert(`Usuario ${name} senha ${senha}`) 
    }

    const [name, setName] = useState();
    const [senha, setSenha] = useState();

    return(
        <form>
            <div>
                <label htmlFor="name" >Nome: </label>
                <input type="text" id="name" name="name" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} ></input>
            </div>
            <div>
                <label htmlFor="senha" >Senha: </label>
                <input type="password" id="senha" name="senha" placeholder="Digite sua senha" onChange={(e) => setSenha(e.target.value)} ></input>
            </div>
            <div>
                <input onSubmit={cadastrar} type="submit" placeholder="Cadastrar" ></input>
            </div>
        </form>
    )
}

export default Form;