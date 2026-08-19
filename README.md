<div align="center">

# DeepSeek Harness em Português do Brasil

**A interface Web do DeepSeek Harness, inteira, no seu idioma.**

[![Licença MIT](https://img.shields.io/badge/licença-MIT-blue.svg?style=flat-square)](LICENSE)
[![Cobertura da interface](https://img.shields.io/badge/interface%20estática-100%25%20traduzida-brightgreen.svg?style=flat-square)](#cobertura-auditada)
[![Chaves traduzidas](https://img.shields.io/badge/chaves-379-informational.svg?style=flat-square)](src/client.ts)
[![Harness](https://img.shields.io/badge/dsh-0.1.0--rc.7-orange.svg?style=flat-square)](https://github.com/deepseek-ai/deepseek-harness)

Um pacote de idioma `pt-BR` para o
[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) —
sem tocar em componentes React, estilos, sessões ou nas suas configurações.

</div>

---

## Comece em um minuto

```sh
cd ~/deepseek-harness
pnpm dsh plugin --profile web add github:JoaoPauloNA/deepseek-harness-pt-br
pnpm dsh web
```

Abra `http://127.0.0.1:3080` e vá em **Settings → General → Language**.
**Português (Brasil)** estará na lista.

## Por que este pacote existe

O Harness nasceu bilíngue — chinês e inglês — e a lista de idiomas é fechada
no código. Este pacote não só traduz: ele também abre espaço para o
português nessa lista, para que a interface toda mude de idioma com um
clique, como qualquer outro idioma nativo.

| | |
| --- | --- |
| **Cobertura** | 379 chaves, 100% da interface Web estática auditada |
| **Escopo** | Só texto de interface — o que o modelo escreve continua como veio |
| **Invasividade** | Zero mudanças no Harness; é um plugin instalado ao lado |
| **Reversível** | Um comando remove; a interface volta ao inglês |

## O que está traduzido

| Área | Cobertura |
| --- | --- |
| **Conversa e ferramentas** | Mensagens, imagens, aprovações, fila, terminal, tarefas e detalhes |
| **Sessões e colaboração** | Espaços de trabalho, metas, perguntas, subagentes, workflows e trajetória |
| **Configurações** | Geral, idioma, aparência, modelos, plugins, permissões e predefinições de agente |
| **Navegação e apoio** | Barra lateral, comandos, habilidades, jobs, feedback e arquivos gerados |

Conteúdo dinâmico devolvido por modelos, ferramentas e APIs é preservado no
idioma de origem — traduzir a resposta do agente não é papel de um pacote de
interface.

## Requisitos

- [Node.js](https://nodejs.org/) 22 ou superior
- [pnpm](https://pnpm.io/installation)
- Um checkout do DeepSeek Harness preparado com `pnpm install` e `pnpm run build`

## Instalação

### Pelo GitHub

```sh
cd ~/deepseek-harness
pnpm dsh plugin --profile web add github:JoaoPauloNA/deepseek-harness-pt-br
pnpm dsh web
```

O repositório já traz o cliente JavaScript compilado, então a instalação não
depende de rodar scripts de build do pacote.

### Fixando uma versão

Para que uma mudança futura no repositório não altere a sua instalação, fixe
um commit ou uma tag:

```sh
pnpm dsh plugin --profile web add github:JoaoPauloNA/deepseek-harness-pt-br#<commit-ou-tag>
```

### Atualizar ou remover

Atualizar é reexecutar o comando de instalação com a revisão desejada.
Para remover:

```sh
cd ~/deepseek-harness
pnpm dsh plugin --profile web remove dsh-locale-pt-br
```

## Como o pt-BR é ativado

<details>
<summary><b>Detalhes técnicos — por que um pacote de tradução precisa de um patch</b></summary>

<br>

O serviço `@deepseek-ai/dsh-client-locale` (Harness `0.1.0-rc.7`, commit
`99f6f02fec`) trata o conjunto de idiomas como **fechado**:

```ts
export const LOCALE_IDS = ['zh', 'en'] as const   // locale-settings.ts
const LOCALES = Object.freeze([                    // client/index.ts
  { id: 'zh', label: '中文' },
  { id: 'en', label: 'English' },
])
```

Essa constante é exatamente o que a lista de **Settings → General → Language**
renderiza, e `setLocale()` valida contra ela — qualquer outro id lança
`Error: locale "<id>" is not registered`. Não existe, hoje, ponto de extensão
para um pacote de terceiros registrar um idioma novo.

Consequência prática: **registrar dicionários não basta.** Um pacote que só
chama `ctx.locale.register(ns, 'pt-BR', dicionário)` coloca as traduções na
tabela de lookup, mas "Português (Brasil)" nunca aparece como opção — foi
exatamente o que acontecia em versões anteriores deste pacote.

Por isso o `apply(ctx)` em [src/client.ts](src/client.ts) faz duas coisas:

1. **Registra os dicionários**, como qualquer pacote de tradução.
2. **Aplica `patchLocaleRuntime()`** sobre a instância em execução do serviço:
   acrescenta `{ id: 'pt-BR', label: 'Português (Brasil)' }` à lista de
   idiomas selecionáveis e envolve `setLocale` para que a escolha do pt-BR
   não tente persistir pelo caminho normal do Host — o schema de
   configurações (`LocaleSettingsSchema`) também aceita apenas `zh | en` e
   rejeitaria a gravação. A seleção fica em `localStorage`
   (`dsh-locale-pt-br:active`) e é restaurada a cada carregamento.

Isso se apoia em campos que o `dsh-client-locale` declara `private` no
TypeScript, mas que são propriedades comuns em tempo de execução. Funciona
hoje, é frágil a refatorações internas do Harness amanhã.

**Limitação conhecida:** se a seção de configurações `locale` do Host mudar
por outro motivo enquanto o pt-BR estiver ativo (por exemplo, uma
sincronização vinda de outra aba), o `adopt()` do próprio serviço volta para
a preferência `zh`/`en` armazenada. Reselecionar o idioma em Settings
recupera.

**A solução definitiva é upstream:** um método `registerLocale({ id, label })`
no serviço de idioma e um schema de preferências que aceite ids dinâmicos.
Enquanto isso não existe, este patch é o paliativo — e está documentado assim
de propósito.

</details>

## Cobertura auditada

A cobertura foi comparada chave a chave com os dicionários em inglês do
checkout do DeepSeek Harness no commit `99f6f02fec` (2026-08-17). Nesse
snapshot, todos os namespaces visuais estáticos auditados possuem entradas
`pt-BR` correspondentes.

O Harness evolui rapidamente. Ao atualizar o checkout de referência, refaça a
auditoria de namespaces e chaves antes de manter a alegação de cobertura
integral.

## Desenvolvimento local

Para testar alterações sem publicar nada, instale o diretório local no mesmo
perfil Web:

```sh
cd ~/deepseek-harness
pnpm dsh plugin --profile web add /caminho/absoluto/para/deepseek-harness-pt-br
pnpm dsh web
```

Confirme que a camada entrou:

```sh
pnpm dsh --profile web --dump-config    # deve listar "# == dsh-locale-pt-br"
```

O arquivo-fonte é [src/client.ts](src/client.ts); a instalação carrega o
artefato versionado [lib/client.js](lib/client.js). **Uma contribuição precisa
atualizar os dois** antes de reiniciar o servidor e recarregar a página.
O roteiro completo de validação está no [guia local](GUIA_LOCAL.md).

## Contribuindo

As traduções ficam em [src/client.ts](src/client.ts), organizadas por
namespace da interface. Ao cobrir uma área nova, valide no Harness tanto os
textos em português quanto o fallback para chaves ainda não traduzidas.

Correções de linguagem, sugestões de terminologia e novas traduções são
bem-vindas.

## Licença

Distribuído sob a [Licença MIT](LICENSE).
