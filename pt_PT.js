lang = {
    DEFAULT: (key) => `${key} Ainda Não Foi Traduzido Para pt-PT.`,
    DEFAULT_LANGUAGE: 'Idioma padrão', //idk MORE COMMENTS :D
    // well idk what to put here cuz u wanted to me delete the comments so im sad
    // PREFIX COMMAND
    PREFIX_REMINDER: (prefix = `@${this.client.user.tag}`) => `Prefix actual${Array.isArray(prefix) ?
        `es Neste Servidor São: ${prefix.map(pre => `\`${pre}\``).join(', ')}` :
        ` Neste Servidor Está Definido Como: \`${prefix}\``
    }`,
    PREFIX_SET: (prefix) => `O Prefix Foi Alterado A \`${prefix}\``,
    CURRENT_PREFIX: (cprefix) => `Prefix Actual: \`${cprefix}\``,
    PREFIX_DESCRIPTION: 'Altera o Prefix Del Servidor/Mostra o Prefix Actual',
    PREFIX_LENGTH: '**Você não pode definir prefixo com mais de 10 caracteres!**',
    // SHIT
    // ik now asfohsafhbasuifhaiu idk why i put this comments lol
    COOLDOWN_TITLE: 'Espera',
    COOLDOWN: (remaining) => `Você Tem Que Esperar ${remaining} Segundo${remaining === 1 ? '' : 's'} Mais.`,
    COMMAND_DISABLED_SERVER: 'Este Comando Foi Desactivado Neste Servidor.',
    COMMAND_DISABLED_GLOBAL: 'Este Comando Não Está Disponível De momento.',
    MISSING_BOTPERMS: (missing) => `Eu não tenho permissões necessárias para concluir este comando, falta: **${missing}**.`,
    NSFW: 'Este comando só pode ser usado em canais NSFW!',
    NO_PERMISSIONS: 'Você não tem permissões para usar este comando!',
    MISSING_REQUIRED_SETTINGS: (settings) => `Este servidor não tem o **${settings.join(', ')}** configuração do servidor${settings.length !== 1 ? 's' : ''} e assim este comando não pode completar.`,
    RUNIN: (types) => `Este Comando Só Está Disponível Em \`${types}\` Canais!`,
    RUNIN_NONE: (name) => `Comando \`${name}\` Não Está Configurado Para Correr Em Nenhum Canal.`,
    // EVAL
    // IETF pt-PT *bruh*
    EVAL_DESCRIPTION: 'Evalua Codigo',
    EVAL_ERROR: (time, output, type) => `**Error**:${output}\n**Tipo**:${type}\n${time}`,
    EVAL_OUTPUT: (time, output, type) => `**Output**:${output}\n**Tipo**:${type}\n${time}`,
    EVAL_SENDFILE: (time, type) => `Output Era Demasido Longo... Resultado Enviado Como Archivo.\n**Tipo**:${type}\n${time}`,
    EVAL_CONSOLE: (time, type) => `Output Era Demasido Longo... Resultado Enviado A La Consola.\n**Tipo**:${type}\n${time}`,
    // PING
    PING: '**Pong!**\nRoundtrip Tomo: \`Calculando...\`.\nHeartbeat: \`Calculando...\`.\nDatabase: \`Calculando...\`.\nREST: \`Calculando...\`.',
    PONG: (diff, ping, db, rest) => `**Pong!**\nRoundtrip Tomo: \`${diff}ms\`.\nHeartbeat: \`${ping}ms\`.\nDatabase: \`${db}ms\`.\nREST: \`${rest}\`.`,
    PING_DESCRIPTION: 'Pong!',
    // INVITE
    INVITE_DESCRIPTION: 'Invite Bass Para O Seu Servidor',
    BASS_INVITE: 'Invite Bass Para O Seu Servidor!',
    // INFO
    INFO_DESCRIPTION: 'Info Sobre Bass',
    // HELP
    HELP_DESCRIPTION: 'Esta Mensagem',
    HELP_NO_EXTENDED: 'Nenhuma Ajuda Estendida Disponível.',
    HELP_USAGE: (usage) => `Uso :: ${usage}`,
    HELP_EXTENDED: 'Ajuda Estendida ::',
    HELP_BOT_OWNER_ONLY: `Owner Do Bot`,
    HELP_MANAGE_GUILD: `Administrar Servidor`,
    HELP_SERVER_OWNER: `Owner do Servidor`,
    HELP_SYNTAX: (prefix) => `${prefix}Comando - Descripcion *(Permissões necessárias)*\nPara obter informações sobre o uso do comando ${prefix} e produzirá uma utilização válida\nPor Exemplo: ${prefix}volume`,
    //HELP_SYNTAX: (prefix) => `${prefix}command - Description *(Required permissions)*\nTo get informations about command usage do ${prefix}help (commandname)\nUsing command that requires args, without giving them will also give command usage info`,
    HELP_COMMANDS_STRING: `Comandos`,
    HELP_COMMAND_NOT_FOUND: (command) => `Comando \`${command}\` não foi encontrado.`,
    HELP_TITLE: 'Ajuda De Bass',
    HELP_LINKS: 'Links',
    HELP_SUPPORT_SERVER: 'Servidor de Suporte',
    HELP_INVITE: 'Invitar',
    // STATS
    STATS_DESCRIPTION: 'Mostra estatísticas sobre Bass',
    CLUSTER: 'Cluster',
    ERROR: 'Error',
    SHARDS: 'Shards',
    SERVERS: 'Servers',
    USERS: 'Usuarios',
    CONNECTIONS: 'Conexões',
    PLAYERS: 'Jogadores',
    TOTAL: 'Total',
    CLUSTERS: 'Clusters',
    //EVENTS_RECIEVED: 'Events recieved',
    //COMMANDS_USED: 'Commands used',
    EVENTS_RECIEVED: 'Eventos',
    COMMANDS_USED: 'Comandos',
    MESSAGES_RECIEVED: 'Mensagens Recibidos',
    MESSAGES_SENT: 'Messages Enviados',
    TOOK: (time) => `Tomo ${time}`,
    STATS: 'Stats De Bass',
    // LANG
    LANG_NOT_FOUND: (lang, langsavailable) => `Lingua \`${lang}\` Não Foi Encontrado.\nIdiomas Disponíveis: \`${langsavailable}\``,
    LANG_LANGUAGE_SET: (lang) => `O Idioma Foi Alterado A \`${lang}\`!`,
    CURRENT_LANGUAGE: (clang, langsavailable) => `**Idioma atual é:** \`${clang}\`\n\nIdiomas Disponíveis: \`${langsavailable}\``,
    LANG_DESCRIPTION: 'Muda A Língua Do Servidor/Mostra A Língua Actual',
    // TRANSLATORS / CONTRIBUTORS
    TRANSLATORS_DESCRIPTION: 'Mostra todos Os Tradutores Que Ajudaram A Traduzir o Projecto Bass Para Outras Línguas',
    CONTRIBUTORS_DESCRIPTION: 'Mostra A Todos Os Que Contribuíram No Projecto Bass',
    // SAY
    SAY_DESCRIPTION: 'Bass Repete o Mesagem Dado',
    // SHARD
    SHARD_DESCRIPTION: 'Mostra Informacion Sobre Os Shards/Clusters',
    EMBED_SHARD_DESCRIPTION: (shard, shards, cluster, clusters) => `Este Servidor É Executado No Shard \`${shard}/${shards}\` E Cluster \`${cluster}/${clusters}\``,
    // SUPPORT
    BASS_SUPPORT_SERVER: 'Servidor De Suporte De Bass',
    // MUSIC
    NODE_BUSY: 'Oops, O Nodo De Áudio Neste Servidor **Está Ocupado**, Por Favor Espere Alguns Segundos E Tente Novamente.',
    NODE_NOTHING_PLAYING: '**Nada Está Sonando Neste Servidor.**\nTalvez Pon Algo?',
    NODE_NOTHING_PLAYED: '**Nada Está Sonando.**',
    NODE_PROCESSING: 'O Nodo de Áudio Está Procesando A Sua Solicitação...',
    H4DEEP_DESCRIPTION: 'Comuta o filtro de áudio 4deep',
    NODE_4DEEP_ENABLED: '**Filtro Activado** `4deep`.',
    NODE_4DEEP_DISABLED: '**Filtro Desactivado** `4deep`.',
    H8D_DESCRIPTION: 'Comuta o filtro de áudio 8D',
    NODE_8D_ENABLED: '**Filtro Activado** `8D`.',
    NODE_8D_DISABLED: '**Filtro Desactivado** `8D`.',
    ECHO_DESCRIPTION: 'Comuta o filtro de áudio Echo',
    NODE_ECHO_ENABLED: '**Filtro Activado** `Echo`.',
    NODE_ECHO_DISABLED: '**Filtro Desactivado** `Echo`.',
    NIGHTCORE_DESCRIPTION: 'Comuta o filtro de áudio NightCore',
    NODE_NIGHTCORE_ENABLED: '**Filtro Activado** `Nightcore`.',
    NODE_NIGHTCORE_DISABLED: '**Filtro Desactivado** `Nightcore`.',
    VAPORWAVE_DESCRIPTION: 'Comuta o filtro de áudio Vaporwave',
    NODE_VAPORWAVE_ENABLED: '**Filtro Activado** `Vaporwave`.',
    NODE_VAPORWAVE_DISABLED: '**Filtro Desactivado** `Vaporwave`.',
    CHORUS_DESCRIPTION: 'Comuta o filtro de áudio Coro',
    NODE_CHORUS_ENABLED: '**Filtro Activado** `Chorus`.',
    NODE_CHORUS_DISABLED: '**Filtro Desactivado** `Chorus`.',
    KARAOKE_DESCRIPTION: 'Comuta o filtro de áudio Karaoke',
    NODE_KARAOKE_ENABLED: '**Filtro Activado** `Karaoke`.',
    NODE_KARAOKE_DISABLED: '**Filtro Desactivado** `Karaoke`.',
    PULSATOR_DESCRIPTION: 'Comuta o filtro de áudio Pulsator', // Filtro Activado
    NODE_PULSATOR_ENABLED: '**Filtro Activado** `Pulsator`.', //Filtro Desactivado
    NODE_PULSATOR_DISABLED: '**Filtro Desactivado** `Pulsator`.', // ^ for Copy and Paste lol
    TREMOLO_DESCRIPTION: 'Comuta o filtro de áudio Tremolo',
    NODE_TREMOLO_ENABLED: '**Filtro Activado** `Tremolo`.',
    NODE_TREMOLO_DISABLED: '**Filtro Desactivado** `Tremolo`.',
    HSURROUND_DESCRIPTION: 'Comuta o filtro de áudio Surround',
    NODE_SURROUND_ENABLED: '**Filtro Activado** `Surround`.',
    NODE_SURROUND_DISABLED: '**Filtro Desactivado** `Surround`.',
    BITRATE_DESCRIPTION: 'Muda A Música Bitrate/Calidad',
    NODE_CHANGED_BITRATE: (amount) => `Bitrate Se a Cambiado A \`${amount}kbps\``,
    NODE_INVALID_BITRATE: 'Por Favor, Dê Uma Bitrate Adequada De \`8\` A \`512\` (kbps)',
    CLEAR_DESCRIPTION: 'Limpa a Cola',
    CLEARED_QUEUE: 'A Cola A Sido Limpiada.',
    LOOP_DESCRIPTION: 'Pone En Repetição a Cancion/Sonido',
    LOOP_SONG: '**Repetição de música activada.**',
    LOOP_QUEUE: '**Repetição de Cola activada.**',
    LOOP_ALREADY_SONG: 'A Cancion Ya esta En Repetição!',
    LOOP_ALREADY_QUEUE: 'A Cola Ya esta En Repetição!',
    LOOP_DISABLED: '**Repetição Desactivada**',
    LOOP_INVALID: (prefix) => `**Por Favor Di Un Numero Adecuado De Repetição** \`(0 - Desactivar, 1 - Cancion, 2 - Cola)\`\nPor Exemplo: \`${prefix}loop 2\``,
    NOWPLAYING_DESCRIPTION: 'Mostra a música que está a tocar',
    NOWPLAYING: 'Ahora Sonando',
    PAUSE_DESCRIPTION: 'Pausa a Cancion',
    PAUSED: '**Pausado.**',
    RESUME_DESCRIPTION: 'Recomeça a Cancion',
    RESUMED: '**Recomeçao.**',
    SHUFFLE_DESCRIPTION: 'Embaralhar a Cola',
    SHUFFLE_SHUFFLING: '**Emabarallando a Cola...**',
    SHUFFLE_SHUFFLED: '**Cola Embarallada.**',
    QUEUE_DESCRIPTION: 'Enseña La Cola',
    QUEUE_FETCHING: '**Buscando Cola...**',
    QUEUE_MORE: (length) => `*.. Y ${length} más*`,
    QUEUE_NOWPLAYING: 'Agora Sonando',
    QUEUE_UPNEXT: 'Siguente',
    QUEUE_NOTHING: '**Nada**',
    QUEUE_LENGTH: 'Longitud Da Cola:',
    QUEUE_FILTERS: 'Filtros:',
    QUEUE_BASS_STRENGTH: 'Forza Do Bass',
    QUEUE_SONG: 'Cancion:',
    QUEUE_YES: 'si',
    QUEUE_NO: 'no',
    QUEUE: 'Cola:',
    SKIP_DESCRIPTION: 'Salta a música que está a Sonar',
    SKIPPED: 'Saltado',
    STOP_DESCRIPTION: 'Pára de Sonar, limpa a Cola e sai do canal de voz',
    STOPPED: 'Parado.',
    PREV_DESCRIPTION: 'Mostra música tocada recentemente',
    RECENTLY_PLAYED: 'Recientemente Tocada:',
    VOLUME_DESCRIPTION: 'Cambia o Volumen',
    VOLUME_CHANGED: (prev, amount) => `**O volume foi alterado de \`${prev}%\` A \`${amount}%\`.**`,
    VOLUME_SAME: (amount) => `**O volume já está definido \`${amount}%\`!**`,
    GIVE_PROPER_VOLUME: (current) => `Por favor, dê um volume adequado de 0 a 500 (%)\nVolumen Actual: \`${current}%\``,
    BASS_DESCRIPTION: 'Muda a força do baixo',
    GIVE_PROPER_BASS: (current) => `Por favor, dar um impulso graves adequada de 0 A 60 (dB)\nActual impulso baixo é: \`+${current}dB\``,
    NODE_BASS_CHANGED_DONATOR: (amount) => `**Mudou a força de impulso baixo para** \`+${amount}dB\`\Obrigado por apoiar Bass!`,
    PLAY_DESCRIPTION: 'Toca una Cancion',
    JOINING_VC_ERROR: 'Um erro desconhecido ocorreu ao tentar entrar no seu canal de voz.\nPor Favor Intente Novamente.',
    QUEUED: (url, title) => `Añadido [${title}](${url}) A La Cola.`,
    QUEUED_NOW: (url, title) => `[${title}](${url}) Va A Sonar.`,
    QUEUE_ENDED: 'A fila acabou, deixei o canal de voz.',
    PLAYING_ERROR: (error) => `Ocorreu um erro ao tentar Reproduccir.\nMesagem do Erro: \`${error}\``,
    PLAYING_EVENT_WITH: (bass, volume, bitrate, filters) => `Bitrate: \`${bitrate}kbps\`, Volumen: \`${volume}%\`\Filtros Aplicados: *${filters.join(', ') || '*-*'}*\nForza do Bass Boost: \`+${bass}dB\``,
    PLAY_NO_SONG: 'Por favor, indique o nome ou URL da música que deseja tocar.',
    PLAY_NO_VC: 'Não estás num canal de voz.',
    PLAY_OTHER_VC: 'Você não está no mesmo canal de voz que eu. Por favor, entre no meu canal de voz e tente novamente.',
    PLAY_NO_PERMS_SPEAK: 'Eu não tenho permissões para falar em seu canal de voz.',
    PLAY_NO_PERMS_CONNECT: 'Eu não tenho permissões para entrar no seu canal de voz.',
    SEARCHING_ERROR: (error) => `Ocorreu um erro ao pesquisar.\nMesagem do Error: \`${error}\``,
    SEARCHING_NOT_FOUND: 'Não foram encontrados resultados para a sua pesquisa.',
    PLAY_WRONGURL: 'URL Você forneceu parece estar errado.',
    PLAY_PROCESSING: 'Procesando...',
    PLAY_BACKEND_ERROR: 'Backend para o processamento de resultados de Pesquisa/Playlists parece estar para baixo ou retornou um erro.\nPor favor, envie esta informação para o nosso servidor de suporte em **https://discord.gg/By3bvFc**!',
    PLAY_QUEUED_PLAYLIST: (size) => `Carregou ${size} Canciones.`,
    LEAVING_VC: 'Parare de tocar e sair do canal de voz em 15 segundos se ninguém entrar.',
    LEFT_VC: 'Eu parei de tocar e deixei o canal de voz devido à inatividade.',
    // SUPPORT
    SUPPORT_DESCRIPTION: 'Servidor de suporte para ajuda com Bass',
    // TTS
    TTS_DESCRIPTION: 'Envia un Texto a Voz nun ficheiro',
    TTS_WRONG_LANG: (langs, prefix) => `**Por favor, dê idioma suportado!**\nidiomas suportados: \`${langs.join(', ')}\`\nExemplo de Uso: \`${prefix}tts Olá | pt\``,
    TTS_ERROR: 'Ocorreu um erro ao obter o ficheiro.',
    TTS_WRONG_TXT_LENGTH: 'O comprimento do texto deve ser maior que 0 caracteres e não deve exceder 200 caracteres.',
    TTS_NO_ARGS: (prefix, langs) => `**Por favor, dê texto e linguagem para gerar tts para.**\nExemplo De Uso: \`${prefix}tts Olá | pt\`\nIdiomas disponíveis: \`${langs.join(', ')}\``,
    // IDK
    NONE_VC: 'Você tem que estar no meu canal de voz para usar esse comando.',
    NONE_NVC: 'Não posso entrar no seu canal de voz!',
    NONE_NOVC: 'Você não está nun canal de voz!',
    NONE_VCFULL: 'Seu canal de voz está cheio! ',


    // OTHER
    REQUESTED_BY: 'Solicitado Por',
    OK: 'OK',
    ERROR: 'ERROR'
};
