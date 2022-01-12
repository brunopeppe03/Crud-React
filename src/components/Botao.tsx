interface BotaoProps {
    cor?: string
    className?: string
    children: any
    onClick?:() => void
}


function mudarCorDoBotao(cor: string) {
    let Cor = "bg-gradient-to-r from-red-400 to-red-700" //padrao
    switch(cor) {
        case 'blue':
            Cor = "bg-gradient-to-r from-blue-400 to-blue-700"
        break

        case 'purple':
            Cor = "bg-gradient-to-r from-purple-400 to-purple-700"
        break
        

    }
    return Cor



}

export default function Botao(props: BotaoProps) {
    const teste = mudarCorDoBotao(props.cor) 
    return(
        
        <button onClick={props.onClick} className={`
            ${teste} 
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}
//metodo que troca cor botao  bg-gradient-to-r from-blue-400 to-blue-700