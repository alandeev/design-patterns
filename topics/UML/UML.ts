export class UmaClasse {
  constructor(
    private nome: string,
    public sobrenome: string,
    protected idade: number
  ) {}

  public getNome(): string {
    return this.nome;
  }

  public getIdade(): number {
    return this.idade;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public setIdade(idade: number): void {
    this.idade = idade;
  }
}
