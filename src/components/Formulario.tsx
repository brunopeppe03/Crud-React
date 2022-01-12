import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return(
        <div>
            {id ? (
            <Entrada 
            somenteLeitura
            texto="Codigo" 
            valor={id}
            className="mb-2"
            />
            ) : false}
            <Entrada 
            texto="nome" 
            valor={nome}
            valorMudou={setNome}
            className="mb-2"
            />
            <Entrada 
            texto="idade" 
            tipo="number"
             valor={idade}
             valorMudou={setIdade}
             className="mb-2"
             />
             <div className=" flex justify-end mt-3">
                 <Botao  className="mr-2" 
                 onClick={() => props.clienteMudou?.(new Cliente(nome, idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                 </Botao>
                 <Botao onClick={props.cancelado} cor="purple" >
                     Cancelar
                 </Botao>
             </div>
        </div>
    )
}