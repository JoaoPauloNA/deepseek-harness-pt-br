# DeepSeek Harness — Português do Brasil

Pacote de idioma para a interface Web do [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness).

Ele registra textos em `pt-BR` por namespace da interface e não modifica componentes React, estilos ou dados da sessão.

## Estado

Este repositório contém a primeira cobertura de conversa, espaços de trabalho e metas. As demais áreas serão adicionadas em dicionários do mesmo pacote.

O Harness também precisa expor `pt-BR` como idioma selecionável. A alteração-base está sendo preparada separadamente no checkout do Harness; este pacote não substitui internamente a lista de idiomas do aplicativo.

## Ativação

Adicione o pacote ao perfil Web depois de `@deepseek-ai/dsh-client-locale`:

```yaml
- id: locale-pt-br
  name: dsh-locale-pt-br
```

Selecione **Português (Brasil)** nas configurações do aplicativo. Chaves ainda não incluídas no pacote usam o fallback da aplicação.

## Desenvolvimento

O arquivo [src/client.ts](src/client.ts) contém os dicionários por namespace. Cada nova área deve ser acompanhada de uma verificação no Harness para garantir que a interface carregue a tradução e mantenha o fallback quando apropriado.

Consulte o [guia local](GUIA_LOCAL.md) para preparar, iniciar e testar a interface manualmente.
