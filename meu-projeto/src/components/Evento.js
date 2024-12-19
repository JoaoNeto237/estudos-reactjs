import Button from "./evento/Button";

function Evento({numero}){

    const meuEvento =() =>{
        console.log(`Opa, fui ativado ${numero}`);
    }
    return(
        <div>
            <p>Clique para disparar algum evento</p>
            <Button text="Primeiro evento" />
        </div>
    )
}
 
export default Evento;