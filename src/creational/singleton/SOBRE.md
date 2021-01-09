## Aplicabilidade
- Use o singleton quando uma classe precisa ter somente uma instância dispon´pivel em todo o seu programa.

- Use o singleton quando perceber que está usando variáveis globais para manter partes importantes do programa, como variáveis de configuração que são usadas por toda a aplicação



## BOM :)
- Acesso controlado à instância única
- É fácil permitir um número maior de instâncias caso mude de ideia
- Usa lazy instantion, o Singleton só é criado no momento do uso
- Substitui variáveis globais

## Ruim :(
- É mais difícil de testrar
- Viola o princípio da RSP 'solid'
- Requer tratamento especial em casos de concorrência
- Erich Gamma (autor) descreveu que este seria o único padrão que ele removeria se fosse refatorar o livro