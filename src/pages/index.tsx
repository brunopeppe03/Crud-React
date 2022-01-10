import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1',true),
    new Cliente('joao', 44, '3'),
    new Cliente('wagner', 78, '5',true),
    new Cliente('glaucio', 12, '2')
  ]

function clienteSelecionado(cliente : Cliente) {
  console.log(cliente.nome);
  
}

function clienteExcluido(cliente : Cliente) {
  console.log(`Excluir... ${cliente.nome}`);
  
}

  return (
    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
    `}>
   <Layout titulo="Cadastro Simples">
     <div className="flex justify-end">
       <Botao className="mb-5">Novo Cliente</Botao>
     </div>
    <Tabela clientes={clientes}
     clienteSelecionado={clienteSelecionado}
     clienteExcluido={clienteExcluido}
     />
   </Layout>
    </div>
  )
}
