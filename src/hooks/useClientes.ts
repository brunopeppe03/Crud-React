import Cliente from "../core/Cliente"
import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente"
import useTabelaOuForm from "./useTabela";
import ClienteRepositorio from "../core/ClienteRepositorio";

export default function useClientes() {

    const repo: ClienteRepositorio = new ColecaoCliente()

    const { tabelaVisivel, exibirTabela, exibirFormulario} = useTabelaOuForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
  
    useEffect(obterTodos, [])
  
  function obterTodos() {
      repo.obterTodos().then(clientes => {
        setClientes(clientes)
        exibirTabela()
      })
  }
  
  function SelecionarCliente(cliente : Cliente) {
    setCliente(cliente)
    exibirFormulario()
    
  }
  
    async function excluirCliente(cliente : Cliente) {
     await repo.excluir(cliente)
     obterTodos()
    
  }
  
  function novoCliente() {
    setCliente(Cliente.vazio())
    exibirFormulario()
  }
  
   async function salvarCliente(cliente: Cliente) {
      await repo.salvar(cliente)
      obterTodos()
  }
  
  return { 
      cliente,
      clientes,
      tabelaVisivel,
      exibirTabela,
      novoCliente,
      salvarCliente,
      excluirCliente,
      SelecionarCliente,
      obterTodos
  }
  
}