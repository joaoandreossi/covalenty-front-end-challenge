# Lista de produtos
Esse projeto faz parte do processo seletivo da Covalenty.

O sistema consiste em uma aplicação React que exibe uma lista de cards de produto baseados na API aberta https://fakeapi.platzi.com/en. A camada de serviços foi escrita usando axios para iniciar requisições HTTP com o servidor e também usando Tanstack Query para gerenciar o estado das requisições. Fora isso, também foi implementada uma store com Redux Toolkit que serve para gerenciar o estado dos produtos selecionados.

Os componentes de UI foram escritos com React e TypeScript, e foram estilizados com TailwindCSS. O sistema é bem responsivo, se adaptando bem a diferentes tamanhos de tela e foi desenvolvido com a estratégia de mobile-first. Os testes foram escritos com jest, Testing Library e MSW. O webpack foi utilizado para fazer o processo de build.

Para facilitar o acesso sem precisar executar localmente, a aplicação foi hospedada no Github Pages.

# Como rodar o projeto
É necessário ter o `node v22+` instalado.

1. Clone este repositório
2. Instale as dependências do projeto principal com `npm install`
3. Gere os arquivos com `npm run build`
4. Abra o arquivo `index.html` na pasta `dist` que foi gerada.

Também é possível acessar uma versão online hospedada no Github Pages usando o link abaixo:
https://joaoandreossi.github.io/covalenty-front-end-challenge/


# Instruções originais
Abaixo estão as instruções originais do teste:

> # Desafio Técnico – Listagem e Detalhe de Produtos
> 
> ## Objetivo Criar uma aplicação frontend que exibe uma lista de produtos e permite visualizar os detalhes de cada um, utilizando
> React, Tailwind CSS para o estilo, React Query para consumo de APIs,
> Redux para estado global e Axios como cliente HTTP.
> 
> ## API pública Use a seguinte API pública de exemplo:
> 
> 📦 Produtos:
> https://fakeapi.platzi.com/en/rest/products#get-all-products
> 
> 📦 Detalhes de um produto:
> https://fakeapi.platzi.com/en/rest/products#get-a-single-product-by-id
> 
> ## Funcionalidades obrigatórias
> 
> ✅ Página de Listagem de Produtos
> 
> - Listar os produtos da API
> - Exibir por produto:
> - Imagem (image)
> - Nome (title)
> - Preço (price)
> - Organizar os produtos em cards responsivos com Tailwind
> - Ao clicar em um produto, redirecionar para a página de detalhe
> 
> ✅ Página de Detalhe do Produto
> 
> - Buscar produto por ID via React Query e exibir:
> - Nome
> - Imagem
> - Descrição
> - Categoria
> - Preço
> - Botão para voltar para a listagem
>
> ## Requisitos técnicos
> 
> **React**
> 
> - Componentização limpa e reutilizável
> 
> **Tailwind CSS**
> 
> - Usar Tailwind para toda a estilização
> - Responsividade obrigatória
> 
> **React Query**
> 
> - Utilizar React Query para busca de dados da API
> - Tratar loading e erros
> 
> **Axios**
> 
> - Utilizar Axios como cliente HTTP
> 
> **Redux**
> 
> - Armazenar no Redux:
> - Produto selecionado (ao clicar em um produto)
> - Exemplo: selectedProductId
> - Mostrar no topo da tela da listagem (como demonstração de uso do Redux):
> "Último produto selecionado: [nome do produto]"
> 
> ## Extras opcionais (diferenciais)
> 
> - Loader animado com Tailwind
> - Testes com React Testing Library
> 
> ## Entrega
> 
> - Repositório no GitHub com README contendo:
> - Instruções para rodar localmente
> - Tecnologias utilizadas
> 
> ## Importante
> 
> - O foco não está na complexidade visual, mas sim em organização de código, boas práticas, integração com a API, estado global e estilo com Tailwind.

# Considerações finais

O projeto pedia algumas funcionalidades bem definidas e também tecnologias específicas, mas não teve nenhum direcionamento sobre arquitetura, então eu aproveitei a oportunidade para desenvolver uma arquitetura bem limpa e com alta cobertura de testes. Eu foquei em separar o sistema em camadas bem definidas e individualmente testadas (serviços, store, etc), assim pude garantir que cada parte funcionaria corretamente.

Em questão de UI, por conta do prazo eu não podia perder muito tempo com design, então segui uma estrutura simples de grids e cards em formato de galeria responsiva, com a parte de detalhes dos produtos implementando uma página descritiva simples baseada em lojas online, dando destaque para as imagens do produto.

Tendo mais tempo, eu focaria em aumentar a cobertura de testes e incluir alguns testes de integração, também implementaria code splitting para separar as partes mais estáticas do sistema (módulos third-party como React e Redux), assim o usuário não precisa baixar tudo de novo quando houver algum update. Fora essas otimizações, o sistema tem uma arquitetura bem extensível e seria simples de adicionar novas funcionalidades no futuro.

# Informações de contato

[LinkedIn](https://www.linkedin.com/in/joaoandreossi/)

[E-mail](mailto:joao.andreossi@gmail.com)

[WhatsApp](https://wa.me/5516981666814)
