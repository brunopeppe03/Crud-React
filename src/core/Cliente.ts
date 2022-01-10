export default class Cliente {
    #id: string
    #nome: string
    #idade: number
    #insulina: boolean

    constructor(nome: string, idade: number, id: string = null ,insulina = false){
        this.#nome = nome
        this.#idade = idade
        this.#id = id
        this.#insulina= insulina

    }

    static vazio() {
        return new Cliente('',0)
    }

    get id() {
        return this.#id
    }

    get nome() {
        return this.#nome
    }

    get idade() {
        return this.#idade
    }
    get insulina(){
        return this.#insulina
    }
}