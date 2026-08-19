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

/** Keys added after the initial release, kept complete for the three supported areas. */
Object.assign(dictionaries.conversation, {
  'hint.plan': 'Descreva sua tarefa para gerar um plano',
  'hint.goal': 'Descreva o objetivo de uma tarefa de longa duração',
  'hint.goal.active': 'Meta em andamento — editar / pausar / retomar / limpar',
  'placeholder.plan': 'Descreva sua tarefa para gerar um plano',
  'placeholder.parentOffline': 'A sessão pai está offline; não é possível enviar mensagens, mas você ainda pode interromper a execução',
  'placeholder.steerQueue': 'Cmd/Ctrl+Enter envia todas as mensagens na fila',
  'input.accessMode': 'Modo de acesso atual: {name}',
  'image.dropTitle': 'Arraste imagens aqui para adicioná-las', 'image.dropDesc': 'Até {count} imagens, {size} cada',
  'image.dropBlocked': 'Não é possível adicionar imagens agora', 'image.pending': 'Imagens pendentes',
  'image.openOriginal': 'Ver original', 'image.openOriginalLabel': '{label}; clique para ver o original',
  'image.remove': 'Remover imagem {name}', 'image.scrollLeft': 'Rolar imagens para a esquerda',
  'image.scrollRight': 'Rolar imagens para a direita', 'image.original': 'Imagem original', 'image.label': 'Imagem',
  'image.loadFailed': 'Não foi possível carregar a imagem; clique para tentar novamente', 'image.loading': 'Carregando imagem…',
  'image.preview': 'Prévia da imagem original', 'image.closePreview': 'Fechar prévia da imagem original',
  'image.serviceUnavailable': 'Serviço de carregamento de imagens indisponível',
  'image.unsupportedType': 'São aceitas somente imagens PNG, JPG, WebP e GIF',
  'image.tooMany': 'Uma mensagem pode conter até {count} imagens', 'image.fileTooLarge': 'Cada imagem deve ter menos de {size}',
  'image.totalTooLarge': 'As imagens excedem {size} no total; remova algumas e tente novamente',
  'image.tooManyPixels': 'A resolução da imagem é alta demais; compacte-a e tente novamente',
  'image.modelUnsupported': 'O modelo atual não aceita imagens; escolha um modelo compatível',
  'image.subagentUnsupported': 'Sessões de subagentes ainda não aceitam imagens',
  'image.sendFailed': 'Não foi possível enviar as imagens ({reason}); adicione-as novamente e tente outra vez',
  'context.aria': '{percent} do contexto usado', 'context.used': 'do contexto usado', 'context.system': 'Prompt do sistema',
  'context.tools': 'Ferramentas', 'context.messages': 'Mensagens', 'stats.counts': '{turns} rodadas · {steps} etapas',
  'stats.llm': 'LLM {duration}', 'stats.toolCall': 'Chamada de ferramenta {duration}', 'stats.ttftAverage': 'TTFT médio {duration}',
  'stats.tokensPerSecond': '{throughput} tok/s', 'stats.cacheHit': 'Cache atingido {percent}%',
  'stats.tokens': 'Entrada {input} tok · Saída {output} tok', 'settings.enter.title': 'Comportamento de Enter durante execução',
  'settings.enter.description': 'Aplicável somente enquanto o agente executa; Cmd/Ctrl+Enter usa a outra ação',
  'settings.enter.queue': 'Enfileirar', 'settings.enter.steer': 'Intervir', 'access.confirm.title': 'Ativar acesso total?',
  'access.confirm.description': 'O acesso total reduz as confirmações e permite que o agente execute mais ações diretamente, incluindo operações sensíveis, alterações de arquivos ou comandos externos. Use-o somente se confiar na tarefa atual.',
  'access.confirm.acknowledge': 'Entendo os riscos e quero continuar', 'access.confirm.cancel': 'Cancelar',
  'access.confirm.enable': 'Ativar acesso total', 'hero.headline': 'Rumo ao desconhecido', 'session.hierarchy': 'Hierarquia de sessões',
  'details.empty': 'Clique em uma linha de ferramenta no fluxo de mensagens para ver os detalhes',
  'details.notInWindow': 'Esta chamada está fora da janela atual', 'todo.progress.done': '{done} concluídas',
  'todo.progress.active': '{active} em andamento', 'todo.progress.pending': '{pending} pendentes',
  'todo.rowTitle': 'Atualizar lista de tarefas', 'todo.completed': '{done}/{total} concluídas',
  'chat.loadError': 'Não foi possível carregar o histórico: {message} ({code})', 'message.extraBlock': 'Bloco de conteúdo adicional',
  'message.contextInjection': 'Injeção de contexto', 'message.contextRecall': 'Recuperação de sessão',
  'message.context.instructions.loaded': 'carregado', 'message.context.instructions.added': 'adicionado',
  'message.context.instructions.updated': 'atualizado', 'message.context.instructions.removed': 'removido',
  'message.context.catalog.replaced': 'Catálogo substituído', 'message.context.catalog.more': '… e mais {count}',
  'message.context.snapshot.supersedes': 'Substitui instantâneos anteriores', 'message.context.relay.from': 'Da sessão {session}',
  'message.context.recall.counts': '{retained} mantidas · {omitted} omitidas', 'message.context.recall.truncated': 'truncado',
  'message.compaction': 'Contexto compactado', 'message.compaction.running': 'Compactando contexto…',
  'message.compaction.completed': '{items} itens do histórico compactados (~{tokens} tokens)',
  'message.compaction.expand': 'Ver resumo da compactação', 'message.compaction.unavailable': 'Resumo da compactação indisponível',
  'message.unknownSurface': 'Evento de interface desconhecido: {type}', 'message.unknownBlock': 'Bloco de conteúdo desconhecido',
  'message.branch': 'Criar ramificação em uma nova conversa',
  'message.branchUnavailable': 'Disponível apenas na última mensagem de uma rodada concluída',
  'message.retry.active': 'Tentando novamente a solicitação ao modelo', 'message.retry.cancelled': 'Nova tentativa cancelada',
  'message.retry.started': 'Solicitação ao modelo tentada novamente', 'message.retry.scheduled': 'Aguardando nova tentativa',
  'message.retry.status': '{label} ({retry}/{maximum}) · {seconds}s', 'message.retry.delay': 'Atraso da nova tentativa: ',
  'message.retry.failure': 'Motivo da falha: ', 'message.maxTokens': 'Limite de tokens de saída atingido',
  'message.maxTokens.hint': 'A resposta foi cortada; a saída anterior foi mantida na conversa. Envie “continue” para o modelo retomar.',
  'message.ranFor': 'Executado por {duration}', 'message.ttft': 'TTFT {seconds}s', 'message.tokensPerSecond': '{tps} tok/s',
  'duration.seconds': '{seconds}s', 'duration.minutes': '{minutes}min {seconds}s', 'command.title': 'Comando',
  'approval.detail.aria': 'Detalhes da aprovação', 'approval.escalation': 'A ferramenta {toolName} solicita execução com privilégios',
  'ask.rowTitle': 'Fazer pergunta', 'ask.waiting': 'aguardando', 'ask.cancelled': 'cancelada', 'ask.interrupted': 'interrompida',
  'ask.answered': '{answered}/{total} respondidas', 'bash.running': 'Em execução', 'bash.failed': 'Falhou', 'bash.stopped': 'Interrompido',
  'row.running': 'Em execução', 'row.failed': 'Falhou', 'row.stopped': 'Interrompido',
  'queue.count': '{n} mensagens na fila', 'queue.edit': 'Editar mensagem na fila',
  'queue.edit.unsupported': 'Contém conteúdo não textual; a edição ainda não é compatível', 'queue.save': 'Salvar mensagem na fila',
  'queue.cancelEdit': 'Cancelar edição', 'queue.remove': 'Remover mensagem da fila', 'queue.steer': 'Intervir na mensagem da fila',
  'queue.steer.unavailable': 'A intervenção só está disponível enquanto o agente executa',
  'queue.editFailed': 'Não foi possível editar: esta mensagem talvez já tenha começado a ser enviada.',
  'queue.removeFailed': 'Não foi possível remover: esta mensagem talvez já tenha começado a ser enviada.',
  'queue.steerFailed': 'Não foi possível intervir. Tente novamente.', 'terminal.signal': 'sinal {signal}',
  'terminal.exitCode': 'código de saída {code}', 'terminal.running': 'Em execução', 'terminal.failed': 'Falhou',
  'terminal.done': 'Concluído', 'terminal.noOutput': 'Sem saída', 'terminal.collapseAria': 'Recolher saída',
  'terminal.expandAria': 'Expandir as {n} linhas restantes da saída', 'terminal.expandRest': '… mais {n} linhas',
  'json.truncated': '… truncado, {total} caracteres no total', 'clock.md': '{d}/{m}', 'clock.ymd': '{d}/{m}/{y}',
})

Object.assign(dictionaries.workspace, {
  'group.ungrouped': 'Sem grupo', 'viewOptions.label': 'Opções de visualização', 'groupBy.label': 'Agrupar por',
  'groupBy.workspace': 'Espaço de trabalho', 'groupBy.flat': 'Em uma lista', 'orderBy.label': 'Ordenar por',
  'orderBy.manual': 'Manual', 'orderBy.updated': 'Atualização mais recente', 'sessions.expand': 'Mostrar mais {n} sessões',
  'sessions.collapse': 'Mostrar menos', 'search.results.aria': 'Resultados da pesquisa',
  'search.pending': 'Pesquisando histórico de sessões…', 'search.unavailable': 'A pesquisa de conteúdo está temporariamente indisponível. Mostrando correspondências de nome.',
  'search.noMatches': 'Nenhuma sessão correspondente', 'search.hasMore': 'Mostrando os primeiros {n} resultados. Refine sua pesquisa.',
  'menu.addWorkspace': 'Adicionar espaço de trabalho…', 'picker.loading': 'Carregando espaços de trabalho…',
  'conflict.named': 'Já existe um espaço de trabalho chamado “{name}”.', 'folderError.title': 'Não foi possível abrir a pasta',
  'folderError.retry': 'Escolher novamente', 'rename.workspace.title': 'Renomear espaço de trabalho',
  'rename.session.title': 'Renomear sessão', 'field.workspaceName': 'Nome do espaço de trabalho', 'field.sessionName': 'Nome da sessão',
  'delete.desc': 'Isso remove “{name}” da lista de espaços de trabalho. A pasta e os registros de sessão serão mantidos; as sessões aparecerão em Sem grupo.',
  'delete.pending': 'Excluindo espaço de trabalho…', 'sessions.count.one': '{n} sessão', 'sessions.count.other': '{n} sessões',
  'actions.workspace.aria': 'Ações do espaço de trabalho {name}', 'actions.session.aria': 'Ações da sessão {name}',
  'actions.newSession.aria': 'Nova sessão em {name}', 'status.subagentsRunning.one': '{n} subagente em execução',
  'status.subagentsRunning.other': '{n} subagentes em execução', 'status.planReview': 'Plano aguardando revisão',
  'status.waitingAnswer': 'Aguardando resposta', 'hover.created': 'Criada {time}', 'hover.copied': 'Copiado',
  'date.ymd': '{d}/{m}/{y}', 'time.now': 'agora', 'time.minutes': '{n}min', 'time.hours': '{n}h',
  'time.days': '{n}d', 'time.months': '{n} mês(es)', 'time.years': '{n} ano(s)', 'time.ago': 'há {t}',
})

Object.assign(dictionaries.goal, {
  'objective.aria': 'Objetivo da meta', 'commandInput.aria': 'Entrada de comando',
})

/** Additional visual namespaces supplied by the Web client. */
Object.assign(dictionaries, {
  'settings.theme': {
    'appearance.title': 'Aparência', 'appearance.light': 'Claro', 'appearance.dark': 'Escuro', 'appearance.system': 'Sistema',
  },
  plan: {
    'chip.on.aria': 'Modo de plano ativado; pressione para desativar', 'chip.on.title': 'Modo de plano ativado — clique para desativar (/plan off)',
    'chip.off.aria': 'Modo de plano desativado; pressione para ativar', 'chip.off.title': 'Modo de plano desativado — clique para ativar (/plan)',
  },
  sidebar: {
    'session.new': 'Nova sessão', 'session.new.label': 'Nova sessão', 'toggle.open': 'Abrir barra lateral', 'toggle.collapse': 'Recolher barra lateral',
  },
  deliverables: {
    'produced.label': 'Arquivos gerados', 'produced.moreOne': '+ 1 arquivo', 'produced.more': '+ {count} arquivos',
    'produced.open': 'Abrir {name}', 'produced.showInFolder': 'Mostrar na pasta',
  },
  skill: {
    'row.running': 'Carregando habilidade', 'row.failed': 'Falha ao carregar a habilidade', 'row.stopped': 'Carregamento da habilidade interrompido',
    'row.instructions': 'Instruções', 'menu.userOnly': 'somente usuário',
  },
  command: {
    'search.placeholder': 'Pesquisar…', 'search.aria': 'Filtrar opções', 'status.loading': 'Carregando opções…',
    'status.applying': 'Aplicando…', 'status.empty': 'Sem opções', 'overlay.aria': 'Opções de /{command}', 'listbox.aria': 'Correspondências de /{command}',
  },
  'slash.menu': {
    command: 'Comandos', skill: 'Habilidades', subagent: 'Subagentes', loading: 'Carregando…', 'suggestions.aria': 'Sugestões de acionamento',
  },
  question: {
    'error.incomplete': 'Conclua esta pergunta primeiro.', 'error.unanswered': 'Selecione uma opção ou informe uma resposta personalizada.',
    'nav.prev': 'Pergunta anterior', 'nav.next': 'Próxima pergunta', 'nav.minimize': 'Recolher cartão de perguntas',
    'nav.maximize': 'Expandir cartão de perguntas', 'nav.cancel': 'Dispensar todas as perguntas', 'option.recommended': 'Recomendado',
    'custom.placeholder': 'Digite sua resposta', 'action.skip': 'Pular esta pergunta', 'action.next': 'Próxima',
    'plan.header': 'Revisão do plano', 'plan.approve': 'Aprovar', 'plan.decline': 'Recusar', 'plan.discuss': 'Conversar sobre isso',
  },
  feedback: {
    'action.like': 'Boa resposta', 'action.likeActive': 'Remover avaliação', 'action.dislike': 'Resposta ruim',
    'action.dislikeActive': 'Remover avaliação', 'note.open': 'Adicionar observação',
    'note.placeholder': 'O que foi bom ou deu errado? (opcional)', 'note.save': 'Salvar', 'note.cancel': 'Cancelar',
    'note.aria': 'Observação de feedback', 'error.conflict': 'Este feedback foi alterado em outro lugar; o estado mais recente está sendo exibido',
    'error.load': 'Não foi possível carregar o feedback', 'error.generic': 'Não foi possível salvar o feedback',
  },
  job: {
    'count.live.one': '{count} tarefa em segundo plano em execução', 'count.live.other': '{count} tarefas em segundo plano em execução',
    'count.idle.one': '{count} tarefa em segundo plano', 'count.idle.other': '{count} tarefas em segundo plano',
    'list.aria': 'Tarefas em segundo plano', 'status.running': 'em execução', 'status.stopping': 'interrompendo',
    'status.completed': 'concluída', 'status.killed': 'cancelada', 'status.failed': 'falhou', 'duration.seconds': '{seconds}s',
    'duration.minutes': '{minutes}min {seconds}s', 'duration.hours': '{hours}h {minutes}min',
    'duration.title.live': 'Em execução há {duration}', 'duration.title.done': 'Levou {duration}',
  },
  settings: {
    trigger: 'Configurações', title: 'Configurações', close: 'Fechar', openDocument: 'Abrir arquivo de configuração',
    'openDocument.error': 'Não foi possível abrir o arquivo de configuração', 'general.nav': 'Geral',
  },
  'settings.pluginInventory': {
    tab: 'Lista de plugins', loading: 'Lendo plugins…', error: 'Os plugins estão temporariamente indisponíveis.', retry: 'Tentar novamente',
    search: 'Pesquisar plugins', catalog: 'Lista de plugins', empty: 'Nenhum plugin disponível.', emptySearch: 'Nenhum plugin correspondente.',
    enabledTag: 'Ativado', disabledTag: 'Desativado', configuration: 'Configuração', cordis: 'Status do Cordis',
    unobserved: 'Não montado', pending: 'Aguardando dependências', loadingPhase: 'Carregando', active: 'Montado', failed: 'Falha na montagem', unloading: 'Desmontando',
  },
  'settings.permission': {
    title: 'Permissão', description: 'Escolha o modo de permissão padrão para novas sessões', loading: 'Carregando', unavailable: 'Indisponível',
    'confirm.title': 'Ativar acesso total?',
    'confirm.description': 'O acesso total permite que novas sessões reduzam as confirmações e executem mais ações diretamente, incluindo operações sensíveis, alterações de arquivos ou comandos externos. Use-o somente se confiar nas tarefas seguintes.',
    'confirm.acknowledge': 'Entendo os riscos e quero continuar', 'confirm.cancel': 'Cancelar', 'confirm.enable': 'Ativar acesso total',
  },
  'permission.access': {
    'confirm.title': 'Ativar acesso total?',
    'confirm.description': 'O acesso total reduz as confirmações e permite que o agente execute mais ações diretamente, incluindo operações sensíveis, alterações de arquivos ou comandos externos. Use-o somente se confiar na tarefa atual.',
    'confirm.acknowledge': 'Entendo os riscos e quero continuar', 'confirm.cancel': 'Cancelar', 'confirm.enable': 'Ativar acesso total',
  },
  model: {
    'command.description': 'Selecionar o modelo desta conversa', 'option.loadError': 'Não foi possível carregar o catálogo: {message}',
    'trigger.fallback': 'Selecionar modelo', 'trigger.selectAria': 'Selecionar modelo', 'trigger.aria': 'Selecionar modelo; atual: {model}',
    'trigger.ariaEffort': 'Selecionar modelo; atual: {model}; esforço de raciocínio: {effort}', 'menu.aria': 'Modelo e esforço de raciocínio',
    'menu.model': 'Modelo', 'menu.effort': 'Esforço', 'effort.providerDefault': 'Padrão', 'status.loading': 'Atualizando lista de modelos…',
    'error.action': 'Falha na operação do modelo: {message}', 'action.reload': 'Recarregar', 'warning.groupLoad': 'Não foi possível carregar {name}: {message}',
    'empty.models': 'Nenhum modelo disponível.', 'blocked.composer': 'Este modelo está indisponível — selecione outro para continuar',
    'empty.efforts': 'Este modelo não oferece níveis de esforço de raciocínio.',
  },
  workflowRun: {
    'run.title': '{name}', 'run.members.one': '{count} membro', 'run.members.other': '{count} membros', 'run.empty': 'Nenhum membro iniciado',
    'phase.unassigned': 'Sem fase', 'phase.empty': 'Nome de fase vazio', 'statusCount.running': 'Em execução: {count}',
    'statusCount.completed': 'Concluídos: {count}', 'statusCount.failed': 'Com falha: {count}', 'statusCount.cancelled': 'Cancelados: {count}',
    'statusCount.interrupted': 'Interrompidos: {count}', 'member.empty': 'Nome de membro vazio', 'member.open': 'Abrir {name}',
    'status.running': 'Em execução', 'status.completed': 'Concluído', 'status.failed': 'Falhou', 'status.cancelled': 'Cancelado', 'status.interrupted': 'Interrompido',
  },
  trajectory: {
    'view.trajectory': 'Trajetória', 'toolbar.aria': 'Barra de ferramentas da trajetória', 'toolbar.duration': 'Duração',
    'toolbar.useActualDuration': 'Usar duração real', 'toolbar.useEqualWidth': 'Usar operações de largura igual',
    'toolbar.actualTime': 'Tempo real', 'toolbar.turns': 'Rodadas', 'toolbar.expandTurns': 'Expandir rodadas',
    'toolbar.collapseTurns': 'Recolher rodadas', 'toolbar.calls': 'Chamadas', 'toolbar.expandCalls': 'Expandir chamadas',
    'toolbar.collapseCalls': 'Recolher chamadas', 'toolbar.search': 'Pesquisar trajetória', 'toolbar.searchPlaceholder': 'Pesquisar',
  },
  subagent: {
    'diagnostic.corrupt': 'registro de sessão corrompido', 'diagnostic.unsupported': 'versão de registro de subagente não compatível',
    'diagnostic.unavailable': 'registro de sessão temporariamente indisponível', 'duration.seconds': '{seconds}s',
    'duration.minutes': '{minutes}min {seconds}s', 'duration.hours': '{hours}h {minutes}min {seconds}s',
    'duration.days': '{days}d', 'duration.daysHours': '{days}d {hours}h', 'duration.months': '~{months} meses',
    'duration.monthsDays': '~{months} meses {days}d', 'duration.years': '~{years} anos',
    'duration.yearsMonths': '~{years} anos {months} meses', 'duration.exactDays': '{days}d {hours}h {minutes}min {seconds}s',
    'duration.exactTitle': 'Duração total ativa: {duration}', 'loading.label': 'Carregando subagentes…', 'loading.aria': 'Carregando subagentes',
    'load.error': 'Não foi possível carregar subagentes', retry: 'Tentar novamente', 'mode.oneShot': 'execução única',
    'mode.continuable': 'continuável', 'activity.running': 'em execução', 'activity.inactive': 'não está em execução',
    'branch.collapse': 'Recolher descendentes de {label}', 'branch.expand': 'Expandir descendentes de {label}',
    'count.total.one': '{count} subagente', 'count.total.other': '{count} subagentes',
    'count.running.one': '{count} subagente em execução', 'count.running.other': '{count} subagentes em execução',
    'tree.aria': 'Sessões de subagentes', 'readonly.oneShot.title': 'Registro de subagente de execução única',
    'readonly.title': 'Este subagente está somente para leitura por enquanto',
    'readonly.oneShot.body': 'Tarefas de execução única não aceitam mensagens posteriores; consulte aqui o registro completo da execução.',
    'readonly.body': 'A sessão pai está offline; reabra-a para continuar enviando mensagens.',
  },
  'settings.models': {
    nav: 'Modelos', title: 'Modelos', intro: 'Informe suas chaves de API para usar modelos dos provedores abaixo.', edit: 'Editar',
    editProvider: 'Editar {provider}', remove: 'Excluir', removeProvider: 'Excluir {provider}', deleteTitle: 'Excluir {provider}?',
    deleteDescription: 'Excluir {provider} remove sua configuração. As credenciais usadas são gerenciadas em outro local e serão mantidas.',
    deleteDescriptionWithCredential: 'Excluir {provider} remove sua configuração e a chave de API armazenada.', deleteConfirm: 'Excluir {provider}',
    deleting: 'Excluindo {provider}…', add: 'Adicionar provedor', provider: 'Provedor', close: 'Fechar', cancel: 'Cancelar',
    apply: 'Aplicar', applying: 'Aplicando…', savedProvider: '{provider} salvo.', credentialConfigured: 'Chave de API configurada',
    credentialMissing: 'Chave de API ausente', readOnly: 'O documento de configurações é somente leitura nesta implantação.',
    loadFailed: 'Não foi possível carregar o catálogo de provedores', conflict: 'Estas configurações foram alteradas enquanto este cartão estava aberto. Feche-o e reabra para editar os valores atuais.',
    retry: 'Tentar novamente', keyInput: 'Chave de API', keyPlaceholder: 'Informe sua chave de API',
    keyPlaceholderNative: 'Informe uma chave de API ou deixe em branco para usar a autenticação do ambiente',
    keyStored: 'Configurada — informe um novo valor para substituir', keyEnvLocked: 'Fornecida pelo ambiente de inicialização (somente leitura)',
    customized: 'Configurações personalizadas', baseUrl: 'URL base', baseUrlDefault: 'Padrão do provedor', models: 'Modelos',
    modelsInherited: 'Usando os padrões do adaptador', modelsCustomized: 'Catálogo de modelos personalizado', resetModels: 'Restaurar padrões',
    model: 'Modelo', modelId: 'ID do modelo', modelName: 'Nome de exibição', modelNamePlaceholder: 'Usa o ID do modelo quando vazio',
    contextWindow: 'Janela de contexto', contextWindowPlaceholder: 'Usa o padrão do provedor', maxTokens: 'Máximo de tokens de saída',
    maxTokensPlaceholder: 'Usa o padrão do provedor', modelAdvanced: 'Capacidades', addModel: 'Adicionar modelo', removeModel: 'Excluir modelo',
    modelsEmpty: 'Nenhum modelo será exibido no seletor. IDs não listados ainda podem ser enviados diretamente.',
    keyBlank: 'Informe a chave de API ou deixe em branco para manter a armazenada.',
    keyBlankNew: 'Informe a chave de API ou deixe em branco se este provedor autenticar de outra forma.',
    keyIllegalCharacters: 'Esta chave de API não está em um formato válido. Verifique-a.', modelIdRequired: 'O ID do modelo é obrigatório.',
    modelIdDuplicate: 'O ID do modelo deve ser único.', modelNameInvalid: 'O nome de exibição não pode estar vazio.',
    modelContextInvalid: 'A janela de contexto deve ser um número positivo, como 131072, 256K ou 1M.',
    modelMaxTokensInvalid: 'O máximo de tokens de saída deve ser um número positivo, como 8192, 64K ou 1M.',
    advancedHint: 'Os demais campos ficam em settings.yaml; edite essa seção diretamente.',
    modelCapacityInvalid: 'Uma capacidade deve ser um número, opcionalmente com o sufixo K ou M.', modelDuplicate: 'Cada ID de modelo pode aparecer uma vez.',
    modelContextWindow: 'Janela de contexto', modelMaxTokens: 'Máximo de tokens de saída', fetchModels: 'Buscar modelos disponíveis',
    fetching: 'Consultando o provedor…', fetchNeedsBaseUrl: 'Informe a URL base antes de buscar.',
    fetchEmpty: 'O provedor não listou modelos. Adicione-os manualmente.', fetchTitle: 'Escolha os modelos para adicionar',
    fetchDescription: 'Estes são os modelos disponíveis neste provedor. Escolha quais deseja adicionar.', fetchAdopt: 'Adicionar selecionados',
    customAdd: 'Adicionar provedor personalizado', customTitle: 'Provedor personalizado', customTag: 'Personalizado',
    customRoute: 'ID do provedor', customRouteHint: 'Identificador em minúsculas, iniciado por letra, que nomeia exclusivamente este provedor nas solicitações e nas credenciais.',
    customRouteInvalid: 'Comece com uma letra minúscula; depois use letras minúsculas, números e hífens.', customRouteTaken: 'Já existe um provedor com este ID.',
    customDisplayName: 'Nome de exibição', customApi: 'Protocolo de API', customApiUnset: 'Não selecionado',
    customNeedsBaseUrl: 'Um provedor personalizado precisa de uma URL base.', customNeedsModels: 'Um provedor personalizado precisa de pelo menos um modelo.',
    create: 'Criar provedor', creating: 'Criando…', welcomeTitle: 'Bem-vindo ao DeepSeek Harness',
    welcomeBody: 'Antes de começar, configure um provedor de modelo para usar o agente.', welcomeContinue: 'Continuar',
    welcomeError: 'Não foi possível salvar a confirmação. Tente novamente.', onboardingTitle: 'Adicione uma chave de API para começar',
    onboardingDescription: 'Configure o provedor oficial da DeepSeek para começar a criar.', onboardingLater: 'Configurar mais tarde',
    onboardingSave: 'Salvar e continuar', onboardingSaving: 'Salvando…', keyRequired: 'Informe uma chave de API para continuar.',
  },
  'settings.plugins': {
    nav: 'Plugins', title: 'Plugins', intro: 'Configure e inspecione os plugins instalados nesta implantação.',
    tabs: 'Visualizações de plugins', configurableTab: 'Configuração de plugins', empty: 'Esta implantação não expõe configurações de plugins.',
    overridden: 'Substituído', reset: 'Restaurar padrão', readOnly: 'Esta implantação armazena configurações como somente leitura.',
    expand: 'Mostrar configurações', collapse: 'Ocultar configurações', save: 'Salvar', saving: 'Salvando…', discard: 'Descartar', unsaved: 'Não salvo',
    saveFailed: 'A implantação não aceitou estes valores; eles foram mantidos para que você os corrija.',
    invalidNumber: 'Informe um número ou deixe em branco para usar o padrão.', bashTitle: 'Shell',
    bashDescription: 'Limita todos os comandos executados pelo agente.', bashTimeoutMs: 'Tempo limite do comando (ms)',
    bashTimeoutMsHint: 'Por quanto tempo um comando pode ser executado antes de ser encerrado.',
    bashMaxOutputBytes: 'Limite de saída por fluxo (bytes)', bashMaxOutputBytesHint: 'A saída excedente vai para um arquivo temporário em vez de ser perdida.',
    agentLoopTitle: 'Ciclo do agente', agentLoopDescription: 'Como o agente despacha chamadas de ferramentas.',
    agentLoopMaxParallel: 'Chamadas de ferramentas paralelas', agentLoopMaxParallelHint: 'Limite máximo de chamadas seguras em paralelo em uma mesma etapa.',
    webSearchTitle: 'Pesquisa na Web', webSearchDescription: 'O provedor de pesquisa da DeepSeek.', webSearchApiKey: 'Chave de API',
    webSearchApiKeyHint: 'Armazenada fora do arquivo de configurações. Deixe em branco para manter a chave atual.',
    webSearchApiKeySet: 'Uma chave está configurada.', webSearchApiKeyUnset: 'Nenhuma chave configurada; a pesquisa fica indisponível até que uma seja informada.',
    webSearchBaseUrl: 'Endpoint', webSearchBaseUrlHint: 'Deixe em branco para usar o padrão do provedor.',
    webSearchMaxUses: 'Máximo de pesquisas por solicitação', webSearchMaxUsesHint: 'Quantas vezes uma solicitação pode pesquisar antes de precisar responder.',
  },
  'settings.agentPreset': {
    title: 'Predefinição de agente', description: 'Aplica-se às sessões iniciadas a partir de agora. Sessões em execução mantêm a predefinição com que começaram.',
    loading: 'Carregando predefinições…', error: 'Não foi possível carregar as predefinições de agente.', userTrust: 'Personalizado',
    seatHint: 'Predefinição do agente para a sessão que você está prestes a iniciar', headerHint: 'A predefinição com que esta sessão é executada, fixada ao iniciar',
    nav: 'Predefinições de agente', sectionIntro: 'Uma predefinição é a composição de plugins que executa o agente de uma sessão — suas ferramentas, prompt e capacidades.',
    builtIn: 'Integrado', setDefault: 'Definir como padrão', view: 'Ver', presetStandardName: 'Modo padrão',
    presetStandardDescription: 'Agente de programação completo com edição de arquivos, shell, pesquisa de arquivos e Web, habilidades, planos, metas, subagentes e workflows.',
    presetCodeName: 'Modo PTC', presetCodeDescription: 'Todos os recursos do modo padrão, com ferramentas expostas pelo SDK do Modo Código.',
    presetMinimalName: 'Modo mínimo', presetMinimalDescription: 'Agente de programação com bash persistente e str_replace_editor.',
    presetCordisName: 'Modo criador', presetCordisDescription: 'Para criar predefinições personalizadas, com inspeção em tempo de execução, experimentos de plugins e orientação de autoria.',
    duplicate: 'Duplicar', duplicateUnavailable: 'Esta implantação não possui um diretório de predefinições gravável', delete: 'Excluir',
    presetId: 'Identificador', presetIdPlaceholder: 'meu-agente', displayName: 'Nome', displayNamePlaceholder: 'Exibido no seletor; por padrão usa o identificador',
    inUse: 'Em uso', builtInGroup: 'Integrados', customGroup: 'Personalizados', noDescription: 'Sem descrição.', brokenBadge: 'Falha ao carregar',
    brokenNoCopy: 'Uma predefinição que não carregou não pode ser duplicada', copyOf: 'Copiado de', composition: 'Composição (agent.cordis.yml)',
    cancel: 'Cancelar', close: 'Fechar', retry: 'Tentar novamente', copyTitle: 'Duplicar predefinição',
    copyIntro: 'Toda a predefinição é copiada nesta máquina. O identificador se torna o nome da pasta e não poderá ser alterado depois.',
    create: 'Criar', creating: 'Criando…', creatorDraft: 'Rascunhar uma predefinição personalizada com o Modo Criador',
    openLocation: 'Abrir pasta', showLocation: 'Mostrar local', revealedPathLabel: 'Arquivos da predefinição:',
    idRequired: 'Informe um identificador para a predefinição.', idInvalid: 'Use letras minúsculas, números e hífens, começando com uma letra ou número.',
    idTaken: 'Já existe uma predefinição com este identificador.', deleteTitle: 'Excluir esta predefinição?',
    deleteDescription: 'O diretório da predefinição será excluído. Sessões que já a utilizam continuam funcionando; novas sessões não poderão selecioná-la.',
    deleteConfirm: 'Excluir', deleting: 'Excluindo…',
  },
})

/** Required locale service. */
export const inject = ['locale']

/** Locale id this package adds. */
const PT_BR_ID = 'pt-BR'
/** Display name shown in the Settings language row, in its own language. */
const PT_BR_LABEL = 'Português (Brasil)'
/** Session-persistence key, since the Host settings schema only accepts 'zh' | 'en'. */
const STORAGE_KEY = 'dsh-locale-pt-br:active'

/**
 * Internal shape of `@deepseek-ai/dsh-client-locale`'s LocaleRuntime that this
 * plugin reaches into. `snapshot`, `publish` and `setLocale` are declared
 * `private` in the TypeScript source, but that is a compile-time-only
 * boundary — at runtime they are plain instance members, which is what makes
 * the stopgap below possible.
 */
interface PatchableLocaleRuntime {
  snapshot: { active: string, locales: readonly { id: string, label: string }[], revision: number }
  publish: (active: string, localeChanged: boolean) => void
  setLocale: (id: string) => void
}

/**
 * Register the Brazilian Portuguese dictionaries with the active client
 * locale service, then patch that service so pt-BR is actually selectable.
 *
 * Why the patch exists: as of DeepSeek Harness 0.1.0-rc.7,
 * `@deepseek-ai/dsh-client-locale` ships a closed locale set — `LOCALE_IDS`
 * and the Settings language row's `LOCALES` are both hardcoded to
 * `['zh', 'en']`, and `setLocale()` throws for any other id. Dictionary
 * registration alone (the block below) lands translations in the lookup
 * table but never makes "Português (Brasil)" appear as an option. There is
 * currently no supported extension point for a third-party package to add a
 * new locale id — see the upstream tracking note this package's README
 * links to. Until the harness ships one (or accepts a patch adding a
 * `registerLocale` API), this function mutates the running LocaleRuntime
 * instance directly.
 *
 * What the patch does NOT do: persist the pt-BR preference through the Host
 * settings service, because `LocaleSettingsSchema` (also `zh | en`-only)
 * would reject that write. The selection is instead remembered in
 * `localStorage` and reapplied on boot. A caveat this implies: if the Host
 * settings section for `locale` changes for any other reason while pt-BR is
 * active (e.g. a sync from another tab), the runtime's own `adopt()` will
 * fall back to the Host-stored zh/en preference. Selecting the language
 * again from Settings recovers it.
 * @param ctx - client cordis context carrying the injected `locale` service.
 */
export function apply(ctx: Context): void {
  for (const [namespace, dictionary] of Object.entries(dictionaries)) {
    ctx.effect(() => ctx.locale.register(namespace, 'pt-BR', dictionary), `locale-pt-br: ${namespace}`)
  }
  patchLocaleRuntime(ctx.locale as unknown as PatchableLocaleRuntime)
}

/**
 * Add pt-BR to the running locale service's selectable list and make
 * `setLocale('pt-BR')` work without touching Host-persisted settings.
 * Idempotent: re-applying (HMR, local dev reload) is a no-op once patched.
 * @param runtime - the locale service instance to patch in place.
 */
function patchLocaleRuntime(runtime: PatchableLocaleRuntime): void {
  if (runtime.snapshot.locales.some(locale => locale.id === PT_BR_ID)) return

  runtime.snapshot = Object.freeze({
    ...runtime.snapshot,
    locales: Object.freeze([...runtime.snapshot.locales, { id: PT_BR_ID, label: PT_BR_LABEL }]),
  })

  const originalSetLocale = runtime.setLocale.bind(runtime)
  runtime.setLocale = (id: string): void => {
    if (id !== PT_BR_ID) {
      clearStoredPreference()
      originalSetLocale(id)
      return
    }
    if (runtime.snapshot.active === PT_BR_ID) return
    runtime.publish(PT_BR_ID, true)
    storePreference()
  }

  if (readStoredPreference()) runtime.publish(PT_BR_ID, true)
}

/** Persist the pt-BR selection across reloads (best-effort; ignore storage failures). */
function storePreference(): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, '1')
  } catch {
    // Storage unavailable (private browsing, disabled cookies, …); the
    // selection still works for this page load.
  }
}

/** Clear a previously stored pt-BR selection when another locale is chosen. */
function clearStoredPreference(): void {
  try {
    window.localStorage.removeItem(STORAGE_KEY)
  } catch {
    // See storePreference.
  }
}

/** Read whether pt-BR was the last selection stored by this package. */
function readStoredPreference(): boolean {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}
