/** Brazilian Portuguese dictionaries for DeepSeek Harness browser plugins. */
import type { Context } from '@deepseek-ai/cordis'
import type {} from '@deepseek-ai/dsh-client-locale/client'

type Dictionary = Record<string, string>

/** Translations are grouped by the namespace owned by each visual feature. */
const dictionaries: Readonly<Record<string, Dictionary>> = {
  conversation: {
    'view.chat': 'Conversa',
    'placeholder.default': 'Envie uma mensagem ao agente',
    'placeholder.hero': 'Descreva o que você quer criar',
    'placeholder.workspace': 'Escolha um espaço de trabalho para começar',
    'placeholder.unavailable': 'Sessão indisponível',
    'input.commands': 'Comandos',
    'input.stop': 'Parar geração',
    'input.send': 'Enviar mensagem',
    'hero.preview': 'Prévia',
    'hero.chooseWorkspace': 'Escolher espaço de trabalho',
    'details.title': 'Detalhes',
    'details.close': 'Fechar detalhes',
    'details.input': 'Entrada',
    'details.output': 'Saída',
    'details.running': 'Em execução…',
    'todo.title': 'Tarefas',
    'chat.loadingHistory': 'Carregando histórico…',
    'chat.loadOlder': 'Carregar anteriores',
    'chat.toBottom': 'Ir para o fim',
    'message.stopped': 'Interrompido',
    'message.turnError': 'A execução desta rodada falhou',
    'command.running': 'Em execução…',
    'command.failed': 'Comando falhou',
    'command.done': 'Concluído',
    'approval.waiting': 'Aguardando aprovação',
    'approval.reject': 'Recusar',
    'approval.allowOnce': 'Permitir uma vez',
  },
  workspace: {
    'session.new': 'Nova sessão',
    'section.workspaces': 'Espaços de trabalho',
    'section.sessions': 'Sessões',
    'workspace.add': 'Adicionar espaço de trabalho',
    'search.sessions.aria': 'Pesquisar sessões',
    'search.placeholder': 'Pesquisar sessões…',
    'search.clear': 'Limpar pesquisa',
    'empty.none': 'Ainda não há sessões',
    'empty.noMatches': 'Nenhum resultado',
    'rename': 'Renomear',
    'delete.workspace': 'Excluir espaço de trabalho',
    'menu.fork': 'Criar ramificação da sessão',
    'menu.archiveSession': 'Arquivar sessão',
    'status.running': 'Em execução',
    'status.idle': 'Ocioso',
    'status.waitingApproval': 'Aguardando aprovação',
    'status.completed': 'Concluído',
  },
  goal: {
    'phase.active': 'Meta em andamento',
    'phase.paused': 'Meta pausada',
    'phase.blocked': 'Meta bloqueada',
    'action.save': 'Salvar meta',
    'action.cancel': 'Cancelar edição',
    'action.pause': 'Pausar meta',
    'action.resume': 'Retomar meta',
    'action.edit': 'Editar meta',
    'action.clear': 'Limpar meta',
  },
}

/** Required locale service. */
export const inject = ['locale']

/** Register the Brazilian Portuguese dictionaries with the active client locale service. */
export function apply(ctx: Context): void {
  for (const [namespace, dictionary] of Object.entries(dictionaries)) {
    ctx.effect(() => ctx.locale.register(namespace, 'pt-BR', dictionary), `locale-pt-br: ${namespace}`)
  }
}
