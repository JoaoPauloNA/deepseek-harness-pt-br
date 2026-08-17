# Iniciar e testar localmente

Este guia executa o DeepSeek Harness a partir do checkout local e valida a interface em português do Brasil.

## Pré-requisitos

- Node.js 22.19 ou mais recente
- `npm` disponível
- Um clone local de `deepseek-harness`

Para testar respostas reais do agente, crie o arquivo `.env` na raiz do clone do Harness com a sua chave. Não publique esse arquivo.

```dotenv
DEEPSEEK_API_KEY=sua-chave-aqui
```

## Preparar o Harness

No terminal, entre no checkout do Harness e instale as dependências:

```sh
cd /Users/joaopaulo/deepseek-harness
npm exec --yes pnpm -- install --frozen-lockfile
npm exec --yes pnpm -- run build
```

## Iniciar a interface

Use a porta 3080:

```sh
cd /Users/joaopaulo/deepseek-harness
npm exec --yes pnpm -- dsh web --host 127.0.0.1 --port 3080
```

Abra http://127.0.0.1:3080 no navegador. Para encerrar o servidor, pressione `Ctrl+C` no mesmo terminal.

## Testar pt-BR

1. Abra **Configurações**.
2. Em **Idioma**, escolha **Português (Brasil)**.
3. Recarregue a página e confirme que a escolha continua selecionada.
4. Navegue por conversa, espaços de trabalho e metas e confirme os textos em português.
5. Com `DEEPSEEK_API_KEY` configurada, conecte um espaço de trabalho e envie uma mensagem de teste.

As áreas ainda não cobertas pelo pacote usam o fallback em inglês. A lista de tradução restante está na issue [#1](https://github.com/JoaoPauloNA/deepseek-harness-pt-br/issues/1).

## Verificações de desenvolvimento

Após alterar os dicionários do Harness, execute:

```sh
cd /Users/joaopaulo/deepseek-harness
./node_modules/.bin/vitest run packages/client/locale/tests
npm exec --yes pnpm -- run typecheck
```
