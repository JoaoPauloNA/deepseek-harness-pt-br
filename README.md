# DeepSeek Harness em Português do Brasil

[![Licença MIT](https://img.shields.io/badge/licen%C3%A7a-MIT-blue.svg)](LICENSE)
[![Cobertura da interface](https://img.shields.io/badge/cobertura%20da%20interface-100%25-brightgreen.svg)](#cobertura-auditada)

Pacote de idioma `pt-BR` para a interface Web do
[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness).

O projeto adiciona traduções `pt-BR` para toda a interface Web estática do
Harness, sem modificar componentes React, estilos, sessões ou configurações
do usuário. Conteúdo dinâmico retornado por modelos, ferramentas e APIs é
preservado no idioma de origem.

> **Status da cobertura — interface estática:** `██████████ 100%`

> **Sobre a opção de idioma em Settings:** o DeepSeek Harness (`dsh`
> `0.1.0-rc.7`, commit `99f6f02fec`) ainda não tem um ponto de extensão para
> um pacote de terceiros adicionar um idioma novo à lista de
> **Settings → General → Language** — o serviço `@deepseek-ai/dsh-client-locale`
> trata `zh`/`en` como um conjunto fechado (`LOCALE_IDS`), tanto na lista
> exibida quanto na validação de `setLocale()`. Registrar só os dicionários
> pt-BR (como uma versão anterior deste pacote fazia) carrega as traduções,
> mas nunca torna **Português (Brasil)** selecionável. Por isso este pacote
> aplica um patch em tempo de execução na instância do serviço de idioma
> (ver [Como o pt-BR é ativado](#como-o-pt-br-é-ativado) abaixo) para expor a
> opção enquanto o Harness não ganha suporte nativo a idiomas adicionais.

## O que está traduzido

| Área | Cobertura |
| --- | --- |
| Conversa e ferramentas | Mensagens, imagens, aprovações, fila, terminal, tarefas e detalhes |
| Sessões e colaboração | Espaços de trabalho, metas, perguntas, subagentes, workflows e trajetória |
| Configurações | Geral, idioma, aparência, modelos, plugins, permissões e predefinições de agente |
| Navegação e superfícies auxiliares | Barra lateral, comandos, habilidades, jobs, feedback e arquivos gerados |

## Como o pt-BR é ativado

`src/client.ts` faz duas coisas em `apply(ctx)`:

1. Registra os dicionários pt-BR no serviço de idioma, como qualquer pacote
   de tradução (`ctx.locale.register(namespace, 'pt-BR', dicionário)`).
2. Em seguida, `patchLocaleRuntime()` altera a instância em execução do
   serviço para incluir `{ id: 'pt-BR', label: 'Português (Brasil)' }` na
   lista de idiomas selecionáveis, e troca `setLocale` para que a seleção do
   pt-BR não tente persistir a preferência pelo caminho normal do Host — o
   schema de configurações (`LocaleSettingsSchema`) também só aceita
   `zh | en` e rejeitaria a gravação. A seleção do pt-BR é lembrada em
   `localStorage` (`dsh-locale-pt-br:active`) e reaplicada a cada
   carregamento da página.

Isso depende de campos e métodos que o `dsh-client-locale` declara `private`
no TypeScript, mas que continuam sendo propriedades comuns em tempo de
execução — funciona hoje, contra o commit `99f6f02fec`, mas é inerentemente
frágil a mudanças internas desse pacote em versões futuras do Harness.

**Limitação conhecida:** se a seção de configurações `locale` do Host mudar
por qualquer outro motivo enquanto o pt-BR estiver ativo (por exemplo, uma
sincronização vinda de outra aba), o próprio `adopt()` do serviço volta para
a preferência `zh`/`en` armazenada no Host. Selecionar Português (Brasil)
novamente em Settings recupera o idioma.

A solução definitiva é o Harness expor um ponto de extensão de verdade (por
exemplo, um método `registerLocale({ id, label })` no serviço de idioma, e um
schema de preferências que aceite ids dinâmicos) para que pacotes de terceiros
não precisem tocar em estado interno. Esse patch é um paliativo até lá.

## Cobertura auditada

A cobertura foi comparada chave a chave com os dicionários em inglês do
checkout do DeepSeek Harness no commit `99f6f02fec` (2026-08-17). Nesse
snapshot, todos os namespaces visuais estáticos auditados possuem entradas
`pt-BR` correspondentes.

O Harness evolui rapidamente. Ao atualizar o checkout de referência, execute
uma nova auditoria de namespaces e chaves antes de manter a alegação de
cobertura integral.

## Requisitos

- [Node.js](https://nodejs.org/) 22 ou superior;
- [pnpm](https://pnpm.io/installation);
- um checkout recente do DeepSeek Harness preparado com `pnpm install` e
  `pnpm run build`.

## Instalação pelo GitHub

No terminal, entre no checkout do DeepSeek Harness e adicione o pacote ao
perfil Web:

```sh
cd ~/deepseek-harness
pnpm dsh plugin --profile web add github:JoaoPauloNA/deepseek-harness-pt-br
```

Inicie a interface:

```sh
pnpm dsh web
```

Abra `http://127.0.0.1:3080`. Em **Settings → General → Language**, selecione
**Português (Brasil)**.

### Instalação reproduzível

Para evitar que uma mudança futura no repositório altere a sua instalação,
fixe um commit ou uma tag:

```sh
pnpm dsh plugin --profile web add github:JoaoPauloNA/deepseek-harness-pt-br#<commit-ou-tag>
```

O repositório já contém o cliente JavaScript compilado. Por isso, a instalação
via GitHub não depende de executar scripts de build do pacote.

## Desenvolvimento local

Para testar alterações sem publicar nada, instale o diretório local no mesmo
perfil Web:

```sh
cd ~/deepseek-harness
pnpm dsh plugin --profile web add /caminho/absoluto/para/deepseek-harness-pt-br
pnpm dsh web
```

O arquivo-fonte é [src/client.ts](src/client.ts). A instalação carrega o
artefato versionado [lib/client.js](lib/client.js), portanto uma contribuição
deve atualizar os dois arquivos antes de reiniciar o servidor e atualizar a
página no navegador. Consulte o [guia local](GUIA_LOCAL.md) para o roteiro de
validação.

## Atualizar ou remover

Para atualizar a instalação do GitHub, execute novamente o comando de
instalação com a revisão desejada. Para remover o pacote:

```sh
cd ~/deepseek-harness
pnpm dsh plugin --profile web remove dsh-locale-pt-br
```

## Contribuindo

As traduções ficam em [src/client.ts](src/client.ts), organizadas por
namespace da interface. Ao adicionar uma área, valide no Harness tanto os
textos em português quanto o fallback para chaves ainda não cobertas.

Correções de linguagem, sugestões de terminologia e novas traduções são bem-vindas.

## Licença

Distribuído sob a [Licença MIT](LICENSE).
