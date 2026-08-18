# Teste local

Este pacote requer um checkout recente do DeepSeek Harness: ele já deve exibir
**Português (Brasil)** no seletor de idiomas. A versão publicada pelo `npx`
pode não ter essa opção ainda.

## Preparar o Harness

No checkout do Harness:

```sh
cd ~/deepseek-harness
pnpm install
pnpm run build
```

## Instalar este pacote no perfil de teste

Ainda no checkout do Harness, instale o diretório local em um perfil separado:

```sh
pnpm dsh plugin --profile web add /Users/joaopaulo/deepseek-harness-pt-br
```

Confira se a camada foi ativada:

```sh
pnpm dsh --profile web --dump-config
```

A saída deve incluir uma seção `# == dsh-locale-pt-br` e a entrada
`locale-pt-br`.

## Iniciar e validar

```sh
pnpm dsh web
```

Abra `http://127.0.0.1:3080`, acesse **Settings → General → Language** e
selecione **Português (Brasil)**. Atualize a página se a seleção não for
aplicada imediatamente.

Valide, no mínimo, os textos de conversa, espaço de trabalho e meta. Textos
sem tradução continuam em inglês pelo fallback do Harness.
