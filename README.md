# ExpensePlan

Após finalizar a primeira parte do **[Curso de React do Jonas Schmedtmann](https://www.udemy.com/course/the-ultimate-react-course/)**, que aborda os fundamentos do React (o que é React, por que usá-lo, JSX, estado e gerenciamento de estado), o instrutor recomendou que criássemos um projeto por conta própria antes de avançar no curso. Foi assim que decidi desenvolver uma ideia que já tinha há algum tempo: um **gestor de economias**.

[Clique aqui para testar o app! (ABRA NO COMPUTADOR OU NOTEBOOK)](https://pevss.github.io/expense-plan/)

### Minha ideia inicial incluía:

-   Acompanhar quanto dinheiro tenho;
-   Saber quanto ganhei;
-   Monitorar quanto gastei;
-   Separar os movimentos financeiros em categorias.

Até então, eu fazia esse acompanhamento no bloco de notas, o que muitas vezes tornava difícil ter uma visão clara de quanto ainda tinha disponível. Manter uma calculadora aberta para cada totalizador também não era prático (e sim, eu sei que poderia usar uma planilha, mas desenvolver um app é bem mais interessante!).

### O que busquei praticar:

-   Criar componentes altamente reutilizáveis;
-   Formulários com controlled elements;
-   Comunicação entre componentes (child-parent);
-   Gerenciamento de estado;
-   Lógica de pensamento em React;
-   Organização de arquivos;
-   Versionamento de código.

# A execução

## Planejamento

Para iniciar o desenvolvimento, criei um **[protótipo no Figma](https://www.figma.com/design/pwYz22o4IaSKd1pxoGfanA/ExpensePlan?node-id=0-1&t=62vbiFNPG2YqFRv6-1)**. Nesse ponto, já comecei a pensar nos componentes, nomes de arquivos, e na organização do projeto. A estrutura das camadas ficou bem semelhante à árvore de componentes final.

## Componentes

Após finalizar o protótipo inicial, voltei ao material de estudos para entender o próximo passo. Seguindo o fluxo de trabalho sugerido no curso, montei a interface estática do app – ou seja, os componentes sem funcionalidade.

Comparando com o desenvolvimento em JavaScript Vanilla, onde eu teria que construir um HTML grande e inflexível, essa etapa foi um alívio. O React torna a criação de interfaces muito mais simples e intuitiva.

Alterar qualquer parte do layout, que antes envolvia modificar várias funções e criar elementos manualmente com `createElement()`, agora é feito de forma muito mais fluida e eficiente usando JSX. Isso tornou o desenvolvimento mais dinâmico e menos propenso a erros, especialmente ao lidar com listas.

Em relação ao **CSS**, adotei uma abordagem em que cada componente tem seu próprio arquivo de estilo. Isso deixou o código mais organizado e evitou ter que lidar com um arquivo CSS gigantesco e confuso, tornando o desenvolvimento muito mais ágil.

# Implementação das funcionalidades

Essa foi a parte mais rápida de todo o processo. Após ter todos os componentes estáticos prontos, adicionei a funcionalidade ao app em apenas três horas!

Conforme fui adicionando estado, percebi que o desenvolvimento se tornou progressivamente mais rápido e eficiente. Antes, achava que grandes mudanças trariam muita dor de cabeça, mas com React, a experiência foi surpreendentemente tranquila.

A comunicação entre componentes (siblings, child-parent) fluiu naturalmente, e, por entender o fluxo de dados do app, eu sabia exatamente onde e como fazer as alterações necessárias. Me sinto muito mais confiante para adicionar novas funcionalidades ou realizar mudanças, seja na interface ou na lógica.

Foi como jogar Tetris: as peças se encaixaram perfeitamente, sem necessidade de gambiarras – uma sensação extremamente satisfatória.

## Conclusão

Esse projeto me permitiu praticar e entender mais profundamente os conceitos que aprendi no curso, mesmo que ainda sejam considerados básicos. O **gerenciamento de estado** e a **visualização do fluxo de dados** já se tornaram naturais para mim, e agora consigo navegar pelo código com muito mais facilidade.

> Antes de começar a estudar React, eu me sentia completamente perdido olhando para o código, sem saber por onde começar.

As funcionalidades do projeto são simples, mas úteis: dois formulários que alimentam duas listas separadas, com interação entre elas por meio de IDs, além de estados derivados, como os totalizadores. Mesmo sendo um projeto simples, foi um ótimo aprendizado, e estou extremamente satisfeito com o resultado!
