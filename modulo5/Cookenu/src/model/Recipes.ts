
export class Recipes {
    constructor(
        private id: string,
        private titulo: string,
        private descricao: string,
        private modo_de_preparo: string,
        private data_de_criacao: Date
      
    ) {}
    public getId(): string {
        return this.id;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public getModoDePreparo(): string {
        return this.modo_de_preparo;
    }
    public getDataDeCriacao(): Date {
       return this.data_de_criacao
    }

   
}