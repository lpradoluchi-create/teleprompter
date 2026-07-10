// Biblioteca de roteiros do teleprompter (falas corridas, prontas pra ler).
// ORDEM = sugestão de gravação (as DATAS de postagem ficam nas pastas datadas do Desktop).
// Blocos: [1] Vídeos a gravar (prioridade) · [1B] Com prova · [2] Stories · [3] Reserva · [4] Já postados.
// Para adicionar/editar: mexer aqui e dar git push (o link atualiza sozinho).
//
// ─── PLANO v2 (atualizado 10/07/2026) ───
// TODO vídeo é TAKE CORRIDO (sem cortes de 10s / sem Gemini Omni — abandonado).
// A ordem de POSTAR (com datas) está nas pastas datadas do Desktop\posicionamento —
// prova e conceito já se intercalam lá (1ª prova posta 17/07). Aqui é o banco de gravação.
//
// B1 = vídeo "traduz" (Saraev: 1 conceito/ferramenta/notícia + analogia).
// B2 = vídeo-assinatura (Hanah: opinião/cicatriz em 1ª pessoa, fecho = modelo mental).
window.ROTEIROS = [

  // ===================== [1] GRAVAR AGORA — vídeos (LinkedIn + Reels), em ordem =====================

  { t: "Sonnet 5: a IA de ponta ficou barata", p: "▶ 1 · Notícia (fresca!) · B1 · ~50s", x:
`A notícia que mais interessa pra quem toca operação no dia a dia não foi o modelo mais potente. Foi o mais barato.

No fim do mês passado a Anthropic lançou o Claude Sonnet 5, feito pra rodar agente: planejar, usar ferramenta, trabalhar sozinho por um bom tempo. E o pulo do gato é o preço. Ele entrega qualidade perto do modelo de topo por uma fração do custo.

Por que isso muda o jogo? Porque agente bom era caro demais pra rodar o dia inteiro na operação. Ficava na demonstração. Quando a inteligência de ponta fica barata, ela sai do slide e entra no processo: roda em escala, todo dia, sem estourar o orçamento.

Foi sempre assim com tecnologia. A virada não acontece quando fica possível. Acontece quando fica barato.` },

  { t: "Sistemas > Gênios", p: "▶ 2 · Pilar 2 · B2 · ~42s", x:
`Eu já quis ser a pessoa que resolve tudo. Hoje, eu vejo isso como um risco.

Se a operação só anda quando eu estou por perto, ela ficou dependente de mim. E dependência não escala. Ela quebra no primeiro dia que eu falto.

Então eu mudei. Parei de guardar o que só eu sabia. Comecei a transformar cada tarefa num passo a passo que qualquer um da equipe segue.

Hoje, eu durmo tranquilo quando vejo tudo rodar sem mim.

E você? Quer ser necessário, ou quer construir algo que anda sem você?` },

  { t: "O erro de automatizar 100%", p: "▶ 3 · Pilar 1 · B2 · ~50s", x:
`Automatizar cem por cento de um processo é quase sempre um erro. E parece o oposto do que eu deveria dizer.

O ganho de automação não é linear. Os primeiros oitenta por cento são baratos e diretos: tarefa repetitiva, regra clara, a máquina faz. Os últimos vinte por cento são as exceções, os casos estranhos, o julgamento — e ali você gasta o dobro do esforço pra automatizar metade tão bem.

Então eu paro antes. Deixo a máquina fazer o volume e o humano cuidar da exceção e da conferência. Não é preguiça, é economia: a última milha custa mais do que vale.

Automação madura não é a que dispensa o humano. É a que sabe exatamente onde ele ainda precisa entrar.` },

  { t: "Auditável vale mais que infalível", p: "▶ 4 · Pilar 4 · B2 · ~48s", x:
`Todo mundo quer uma IA que não erra. Eu prefiro uma IA que deixa rastro.

Numa operação de verdade, o que te protege não é a máquina ser perfeita. É você conseguir mostrar como ela chegou naquele resultado: onde entrou, o que um humano conferiu, onde terminou a máquina e começou a sua decisão.

Perfeição ninguém garante. Rastreabilidade, sim.

E quando alguém perguntar "como isso foi decidido?", a diferença entre quem responde e quem gagueja não é quem usou a melhor IA. É quem registrou.

Auditável vale mais que infalível.` },

  { t: "O que é um agente de IA", p: "▶ 5 · Conceito · B1 · ~45s", x:
`Todo mundo fala em agente de IA agora, mas a maioria está descrevendo um chatbot. E não é a mesma coisa.

Um chatbot responde. Você pergunta, ele devolve texto, e para por aí. Um agente age. Você dá um objetivo e ele decide os passos, usa ferramentas, executa, confere o resultado e corrige o rumo sozinho, sem você conduzir cada etapa.

A diferença prática é essa: o chatbot te ajuda a fazer a tarefa; o agente faz a tarefa e te entrega o resultado. É a passagem da IA que fala pra IA que trabalha.

Antes de contratar qualquer agente, pergunte uma coisa: ele só responde, ou ele resolve?` },

  { t: "O que são skills", p: "▶ 6 · Conceito · B1 · ~45s", x:
`A pergunta que mais me fazem agora: qual a diferença entre a IA conversar e a IA fazer? A resposta tem um nome. Skill.

Uma skill é uma habilidade específica que você ensina pro modelo. Não é papo, é procedimento. É pegar uma tarefa que a sua operação faz do mesmo jeito toda vez e transformar num passo a passo que a IA executa sob demanda, sozinha.

E o pulo do gato é que a skill só carrega quando é preciso. A IA não fica com mil instruções na cabeça o tempo todo; ela puxa a habilidade certa na hora certa.

É a diferença entre um assistente que sabe tudo mal e um especialista que faz uma coisa muito bem. Skill não é a IA sabendo mais. É a IA sabendo fazer.` },

  { t: "MCP: a IA deixa de ser uma ilha", p: "▶ 7 · Conceito · B1 · ~48s", x:
`Durante muito tempo a IA foi uma ilha. Ela era inteligente, mas não conseguia tocar em nada: não abria o seu sistema, não puxava o seu dado, não executava nada no mundo real. Você era o cabo entre a IA e as ferramentas, copiando e colando o dia inteiro.

O que mudou isso tem um nome técnico, MCP, mas a ideia é simples. É uma tomada padrão que conecta a IA às suas ferramentas.

Com ela, a IA para de só falar sobre o trabalho e passa a fazer o trabalho: consultar, preencher, disparar, dentro dos sistemas que você já usa.

É a diferença entre um consultor que te dá conselho e um que senta e opera. E é aí que a IA deixa de ser demonstração e vira operação.` },

  { t: "A ferramenta não conserta o processo", p: "▶ 8 · Pilar 1 · B2 · ~48s", x:
`A ferramenta nova não vai consertar o seu processo. Esse é um dos erros mais caros que eu vejo.

A empresa sente uma dor, compra um software e espera que ele arrume a bagunça sozinho. Só que tecnologia boa em cima de processo ruim não conserta nada. Só acelera o problema.

Se o que fazer já era confuso na mão, vai continuar confuso — agora automático e com mensalidade.

A pergunta certa antes de comprar não é "essa ferramenta é boa?". É "o meu processo está pronto pra receber ela?".

Ferramenta é a parte fácil. Desenho é o trabalho.` },

  { t: "A ordem é inegociável: Simplificar, Padronizar, Automatizar", p: "▶ 9 · Pilar 1 · B2 · ~50s", x:
`Simplificar, padronizar, automatizar. Nessa ordem. E a ordem não é enfeite: é a diferença entre dar certo e dar errado.

Quase todo mundo pula direto pra automatizar, porque é a parte que brilha. Aí automatiza um processo confuso e ganha uma confusão mais rápida — e mais cara.

Antes de automatizar, eu elimino o que não precisa existir. Depois transformo o que sobra em regra clara. Só então entrego pra máquina.

Pular etapa parece mais rápido. É o caminho mais caro pro prejuízo.

Você está automatizando, ou congelando a bagunça em código?` },

  { t: "Por que a IA alucina — e como o RAG resolve", p: "▶ 10 · Conceito · B1 · ~48s", x:
`Se a IA já te deu uma resposta errada com a maior confiança, você viu uma alucinação. E quase sempre a causa é uma só: ela respondeu de memória, sem os seus dados na frente.

O modelo é treinado num apanhado gigante da internet até certa data. Ele não conhece o seu processo, o seu cliente, o seu número de ontem. Quando você pergunta sobre isso, ele preenche a lacuna com o que soa provável. E às vezes inventa.

A técnica que resolve tem um nome: RAG. Antes de responder, a IA busca a informação certa na sua base e responde ancorada naquilo, não no chute.

A regra é simples: IA sem o seu contexto não é inteligente, é confiante. E confiança sem fonte é o jeito mais caro de errar.` },

  { t: "Janela de contexto: por que 1 milhão de tokens importa", p: "▶ 11 · Conceito · B1 · ~48s", x:
`Saiu uma notícia técnica que parece detalhe de nerd, mas muda o que dá pra fazer com IA na prática: os modelos novos leem um milhão de tokens de uma vez.

Traduzindo, é a memória de trabalho da IA numa única conversa. Quanto ela consegue segurar na cabeça ao mesmo tempo. Um milhão de tokens é mais ou menos setecentas mil palavras. É o processo inteiro, o contrato inteiro, meses de histórico, tudo aberto na frente dela ao mesmo tempo.

Antes você tinha que picar o documento em pedacinhos, e a IA perdia o fio. Agora ela vê o todo.

Pra quem opera, isso é a diferença entre uma IA que responde sobre um trecho e uma que entende o caso inteiro. Contexto não é enfeite. É o que separa resposta genérica de resposta que serve.` },

  { t: "Automação vs Agente", p: "▶ 12 · Conceito · B1 · ~48s", x:
`Automação e agente parecem a mesma coisa, e não são. Confundir os dois faz você construir a ferramenta errada.

Automação é um trilho. Se acontece A, faça B. É previsível, é barato, é ótimo pra tarefa que sempre segue o mesmo caminho. O problema é que a vida real tem exceção, e o trilho não sabe o que fazer quando o caso foge do script.

O agente é diferente. Ele lida com o que não estava previsto: recebe o objetivo, avalia a situação e decide o caminho na hora.

A escolha certa não é qual é mais moderno. É: a tarefa sempre segue o mesmo trilho, ou ela precisa de julgamento? Trilho, automatiza. Julgamento, agente. Usar agente onde bastava automação é pagar caro por uma decisão que ninguém precisava tomar.` },

  { t: "A IA que sabe recuar", p: "▶ 13 · Notícia · B1 · ~48s", x:
`Um detalhe do lançamento do modelo mais avançado da Anthropic me chamou mais atenção que a potência dele.

Em temas de risco alto, como segurança cibernética, área biológica e química, o modelo não responde. Ele recusa e passa a tarefa pra um modelo anterior, mais contido.

Pensa no que isso significa. O sistema mais capaz foi desenhado pra saber quando não usar toda a capacidade. Isso é governança virando parte do produto, não um adendo.

E é exatamente o que falta na maioria das empresas correndo pra adotar IA: elas ligam a potência e esquecem o freio.

A lição não é técnica, é de gestão. Poder sem limite não é vantagem. Vantagem é saber, na hora certa, recuar.` },

  { t: "Velocidade impressiona, controle diferencia", p: "▶ 14 · Pilar 4 · B2 · ~48s", x:
`Acelerar virou commodity. O que quase ninguém constrói é o controle.

Porque todo mundo quer mais: mais leads, mais entregas, mais IA, mais volume. E acelerar ficou barato — hoje tem ferramenta pra tudo.

Só que numa demo a velocidade impressiona; numa operação de verdade, o que separa quem escala de quem implode é outra coisa: saber o que a máquina fez, conseguir auditar e ter o rastro de cada decisão.

Porque velocidade sem guarda-corpo não é produtividade, é velocidade rumo ao prejuízo. E governança não é o freio da inovação; é justamente o que deixa você acelerar com segurança.

Então fica a pergunta: a sua operação está crescendo sob controle, ou só está rápida?` },

  { t: "Premiar quem usa IA foi o erro", p: "▶ 15 · Pilar 4 · B2 · ~50s", x:
`Algumas das maiores empresas do mundo premiaram quem mais usava IA. E deu muito ruim.

A Amazon e a Meta criaram rankings internos de uso de IA. E o que aconteceu? Gente rodando robô em tarefa inútil só pra subir no placar, com o custo explodindo e valor real nenhum. As duas acabaram desligando os rankings.

A Uber, por exemplo, estourou o orçamento de IA do ano inteiro em só quatro meses. Hoje ela limita quanto cada funcionário pode gastar com IA por mês.

E o problema nunca foi a IA. Foi a falta de governança: ninguém pôs limite de consumo, ninguém definiu métrica de valor, ninguém auditou o ROI. Porque medir quanto você usa é fácil; o que importa é medir se aquilo gerou resultado.

No fim, governança de IA não é só ética, é controle financeiro. Então me diz: a sua empresa adotou IA, ou só abriu a torneira?` },

  { t: "Toda automação é uma conta que chega depois", p: "▶ 16 · Pilar 1 · B2 · ~48s", x:
`A automação que você cria hoje é uma conta que chega depois. E ninguém te avisa disso na hora de criar.

Todo fluxo automático que entra na operação é um sistema que precisa de dono: ele quebra quando o sistema do outro lado muda, para quando a regra muda — e alguém precisa perceber que parou.

Eu aprendi isso na pele: automatizar demais é trocar trabalho repetitivo por manutenção invisível. E manutenção invisível é a pior dívida que existe, porque você só descobre o tamanho quando ela cobra.

Por isso, antes de automatizar, a pergunta não é só "dá pra automatizar?". É "isso vale um dono?". Se ninguém vai cuidar, é melhor nem nascer.` },

  { t: "Ninguém resiste à mudança", p: "▶ 17 · Pilar 4 · B2 · ~48s", x:
`Ninguém resiste à mudança. As pessoas resistem ao jeito que ela chega.

Eu já vi ferramenta boa morrer porque foi anunciada num comunicado. E já vi rotina ruim sobreviver anos porque era confortável. A diferença nunca foi a tecnologia. Foi a chegada.

Mudança que chega pronta, de cima pra baixo, vira ameaça: trocaram o jeito da pessoa trabalhar sem perguntar nada. A mesma mudança, construída junto com quem vai usar, vira conquista — gente defende o que ajudou a criar.

Adoção não é a última etapa do projeto. Adoção é o projeto. O resto é instalação.` },

  { t: "O processo perfeito que durou uma semana", p: "▶ 18 · Pilar 1 · B2 · ~48s", x:
`Eu já escrevi um processo perfeito. Durou uma semana.

Era completo: cada exceção mapeada, cada passo detalhado, um documento bonito. E foi exatamente por isso que morreu. Ninguém abre um manual de vinte páginas com a operação pegando fogo.

O que sobrevive é o processo que cabe na rotina: uma página, as três decisões que importam, o essencial pra pessoa não travar. Feio e vivo vale mais que perfeito e ignorado.

Hoje eu escrevo processo pro dia corrido, não pra auditoria. Se não sobrevive a uma segunda-feira cheia, não é processo. É decoração.` },

  // ===================== [1B] COM PROVA — dados reais da operação (anonimizado) =====================
  // REGRA: nunca nomear a FG; sistemas descritos por função (não codinome); só números
  // do dossiê, exatos; enquadrar em método/gestão, nunca promessa de resultado a cliente.
  // Fonte primária = a própria operação (não precisa link externo). Formato: cena/prova → princípio.

  { t: "PROVA · Um agente de IA fecha contrato em 11 minutos", p: "▶ P1 · Prova (comercial) · ~50s", x:
`Um agente de IA que eu construí fecha contrato em onze minutos. Onze é a mediana, não o recorde.

Ele atende no WhatsApp por áudio, entende o que o cliente fala e responde falando. Faz a qualificação, agenda a reunião na agenda real dos advogados e manda o contrato pra assinar dentro da própria conversa — sem trocar de canal, sem formulário, sem "aguarde retorno".

E o número que importa: de cada dez contratos que ele envia, seis a sete são assinados. Onze minutos entre o link e a assinatura.

A lição não é sobre chatbot. É sobre onde a IA gera valor de verdade. Não é a que responde pergunta. É a que fecha o ciclo — leva do primeiro "oi" ao contrato assinado sem passar por uma pessoa no meio.

Atendimento vira operação quando a máquina não só conversa. Ela conclui.` },

  { t: "PROVA · 95 contra 7: o número que mudou como escolho caso", p: "▶ P2 · Prova (dado decide) · ~52s", x:
`Um número me fez parar de tentar litigar mais pra litigar melhor.

Eu cruzei mais de mil processos da operação com o resultado real, conferido no tribunal. E o padrão foi brutal: quando o laudo da perícia é positivo, o êxito é de noventa e cinco por cento. Quando é negativo, só sete por cento dos casos revertem.

Ou seja: a perícia decide o jogo. E ela acontece lá na frente, depois que você já aceitou o caso e já investiu nele.

Então a alavanca não é trabalhar mais o caso ruim. É escolher melhor o caso na entrada. O dado parou de ser um relatório do que já passou e virou o critério do que entra.

Essa é a diferença entre medir pra saber e medir pra decidir. Todo mundo tem dashboard. Poucos deixam o dado mudar a decisão.` },

  { t: "PROVA · Minha IA não consegue inventar jurisprudência", p: "▶ P3 · Prova (anti-alucinação) · ~50s", x:
`A IA que escreve as minhas peças não consegue inventar jurisprudência. E isso não é sorte, é arquitetura.

O medo de todo mundo é o mesmo: a IA cita uma súmula que não existe e alguém protocola. Eu não resolvi isso pedindo pro modelo "por favor, não invente". Pedido não segura nada.

Eu resolvi construindo uma parede. A redação só pode puxar de um banco curado por mim: seiscentas e trinta e seis normas reais e duzentos argumentos jurídicos estruturados. Qualquer citação fora desse pool é barrada automaticamente e conferida contra a fonte. Jurisprudência inventada é impossível por construção — não improvável, impossível.

É a diferença entre confiar no modelo e desenhar o sistema onde o erro não cabe. Anti-alucinação não é um prompt caprichado. É uma parede que a IA não atravessa.` },

  { t: "PROVA · R$ 0,00 de diferença", p: "▶ P4 · Prova (auditável) · ~50s", x:
`Eu prefiro uma IA que deixa rastro a uma que promete não errar. E agora eu tenho o número disso.

O meu motor de cálculo reconstrói a conta do zero, a partir do documento bruto. Nas memórias de cumprimento de sentença, ele bate ao centavo contra o valor que o juiz fixou: zero de diferença. Em petição inicial, treze centésimos por cento de divergência, auditados contra casos reais.

Mas o número que eu mais gosto é outro. Quando ele encontra um caso que não domina com segurança, ele rebaixa a própria confiança e manda pra revisão humana — em vez de cuspir um valor bonito e errado.

O que protege a operação nunca foi a máquina ser perfeita. É ela saber onde não confiar em si mesma. E te deixar conferir cada passo.` },

  { t: "PROVA · O custo de produzir a peça: centavos", p: "▶ P5 · Prova (custo marginal) · ~50s", x:
`A petição que a minha esteira produz custa centavos. Não é força de expressão — é o custo real de máquina de cada peça a mais.

A peça nasce dos documentos reais do caso, com o cálculo embutido, a jurisprudência verificada contra um banco curado e a formatação do escritório. E o humano entra no fim: revisa e protocola.

O que isso muda? O gargalo deixa de ser a redação e passa a ser só a revisão. A produção cresce sem a folha crescer junto.

E aqui está a parte que quase ninguém enxerga: quando o custo de produzir cai pra perto de zero, o limite da operação para de ser "quantas peças a gente dá conta de escrever" e vira "quantas a gente consegue revisar com qualidade".

O trabalho não some. Ele sobe de nível — do braço pra cabeça.` },

  { t: "PROVA · O atendimento que responde falando", p: "▶ P6 · Prova (voz/UX) · ~48s", x:
`O meu atendimento não digita. Ele fala.

A maioria dos chatbots te obriga a ler um menu e escolher a opção três. O meu faz o contrário: escuta o áudio que a pessoa manda — do jeito que ela fala, corrido, com "é… deixa eu ver" — e responde em áudio, com voz neural. Não aquela voz de robô de operadora.

Parece detalhe estético. Não é. No WhatsApp, a maior parte das pessoas manda áudio. Obrigar a digitar num menuzinho é atrito puro — e atrito derruba conversa.

Quando a IA encontra a pessoa no canal dela e no formato dela, a qualificação acontece sem parecer interrogatório. Vira conversa.

Tecnologia boa não força a pessoa a se adaptar a ela. Ela se adapta à pessoa. O resto é a empresa terceirizando o próprio trabalho pro cliente.` },

  { t: "PROVA · O cliente nunca pergunta 'cadê meu processo'", p: "▶ P7 · Prova (suporte proativo) · ~52s", x:
`Eu construí uma esteira inteira com um objetivo só: o cliente nunca precisar perguntar "e o meu processo?".

Cada marco vira mensagem automática, na hora certa: protocolo, perícia, sentença, precatório. No protocolo, a pessoa recebe o número do processo, um vídeo com o nome dela e o link de consulta do tribunal certo — são trinta e três tribunais mapeados, mais o Meu INSS, com o CPF conferido dígito por dígito pra nunca avisar a pessoa errada.

Demorei pra entender uma coisa: a pergunta "cadê meu processo" quase nunca é sobre informação. É sobre ansiedade. E toda vez que o cliente precisa perguntar, a relação já falhou um pouquinho antes.

Suporte bom não é o que responde rápido. É o que chega antes da pergunta.

A maioria das operações mede quão rápido responde. Eu prefiro medir quantas perguntas deixaram de existir.` },

  { t: "PROVA · Na dúvida, não dispara", p: "▶ P8 · Prova (guardrail) · ~50s", x:
`A regra mais importante do meu sistema de avisos não é sobre quando ele fala. É sobre quando ele fica calado.

Um exemplo: o aviso de trânsito em julgado, aquele "acabou, ganhamos", só sai se a decisão foi mesmo favorável — o sistema confere na base antes de mandar. Se tem qualquer ambiguidade, ele não dispara. Trava e chama um humano.

Parece pouco. É o que separa produção de demonstração.

Porque uma mensagem errada pro cliente — um "parabéns, você ganhou" num caso que na verdade perdeu — custa muito mais caro que dez avisos que não saíram. O silêncio é reversível. A mensagem errada, não.

Automação madura não é a que fala mais. É a que sabe a hora de calar. "Na dúvida, não dispara" devia estar escrito na parede de todo projeto de IA.` },

  { t: "PROVA · A cobrança que se cancela sozinha", p: "▶ P9 · Prova (automação que termina) · ~50s", x:
`A automação que eu mais tenho orgulho é uma que se desliga sozinha.

Quando o juiz manda emendar o processo, a IA lê o despacho e separa só o que é obrigação do cliente entregar — ela tem uma lista do que é ônus do escritório e isso ela nunca cobra da pessoa. Aí ela pede o documento e agenda dois lembretes.

Mas o pulo do gato é o fim: no instante em que o documento chega, ela cancela os lembretes automaticamente. Ninguém fica cobrando quem já entregou.

Porque metade da raiva que as pessoas têm de robô vem exatamente disso: continuar cobrando depois que você já fez. O difícil na automação nunca foi ligar. Foi desligar na hora certa.

Automação madura sabe terminar. A que só sabe começar vira spam com o seu nome.` },

  { t: "PROVA · A IA que sabe que o prazo não é seu", p: "▶ P10 · Prova (acertar o 'não') · ~50s", x:
`Eu ensinei uma IA a reconhecer um prazo que não é meu. E essa função vale mais que qualquer prazo que ela captura.

Ela lê as publicações dos tribunais e transforma cada intimação em tarefa com prazo calculado. Útil. Mas a parte que me deixa tranquilo é outra: ela detecta quando a intimação é dirigida à parte contrária — e aí NÃO cria prazo nenhum.

Porque prazo fantasma, que não existe, enche a fila da equipe de tarefa falsa. E quando o sistema erra pra mais, todo mundo para de confiar nele — e volta a conferir tudo na mão. Aí você automatizou pra nada.

Uma IA que gera prazo a mais parece produtiva e é péssima. O jurídico raramente quebra por um prazo que faltou. Quebra por ruído.

Em sistema de risco, acertar o "não" vale mais que acertar o "sim".` },

  // ===================== [2] STORIES (IG) — grava em bloco =====================

  { t: "O gargalo é você", p: "Story 1 · IG · ~20s", x:
`Tem uma verdade incômoda sobre operação: às vezes o gargalo é você.

Se toda decisão passa por você, você não é o líder do processo — é o pedágio dele. O time trava esperando seu aval, e você vira o teto do que a operação entrega.

Delegar não é perder controle. É parar de ser o funil.

Onde a sua operação para quando você tira uma semana de férias? É ali que você precisa agir primeiro.` },

  { t: "A IA não te demite", p: "Story 2 · IG · ~22s", x:
`A IA não vai chegar te demitindo. O que ela faz, no silêncio, é mudar o que faz sentido uma pessoa fazer.

Então o risco não é ser trocado por uma máquina. É ser trocado por alguém que aprendeu a dirigir a máquina.

A pergunta não é se a IA vai tirar o seu emprego. É se você vai ser quem manda nela — ou quem disputa espaço com ela.

E isso é uma escolha que dá pra fazer hoje.` },

  { t: "A pergunta que corta metade das tarefas", p: "Story 3 · IG · ~20s", x:
`Antes de automatizar qualquer coisa, eu faço uma pergunta meio incômoda: e se a gente simplesmente parasse de fazer isso?

Metade das tarefas que a gente chama de essencial só existe por hábito. Relatório que ninguém lê. Aprovação que nunca reprova nada.

Automatizar isso é deixar o inútil mais rápido. Antes de acelerar, corta.

Qual tarefa da sua semana sumiria sem ninguém sentir falta?` },

  { t: "Você não tem processo, tem a Fulana", p: "Story 4 · IG · ~22s", x:
`Teste rápido: se a tarefa só sai certa quando a Fulana faz, você não tem um processo. Tem uma dependência.

E a Fulana tira férias, adoece, um dia vai embora.

Processo é quando alguém novo consegue executar lendo uma página, sem perguntar pra ninguém. Se depende da memória de uma pessoa, é sorte, não sistema.

O seu processo-chave está no papel, ou na cabeça de alguém?` },

  { t: "É gente que falta, ou é desenho?", p: "Story 5 · IG · ~22s", x:
`Operação apertou e o instinto é um só: contratar. Mas antes de abrir a vaga, uma pergunta.

O gargalo é de gente, ou de desenho?

Porque colocar mais gente num processo manual quebrado é escalar o problema junto com a solução. Mais gente, mais ponto de falha.

Headcount é a resposta mais cara e mais lenta pra um problema que quase sempre é de processo.` },

  { t: "Comprou, anunciou, ninguém usou", p: "Story 6 · IG · ~22s", x:
`A cena se repete em todo escritório: compra a ferramenta, anuncia no grupo, espera o salto de produtividade.

Três meses depois, ninguém usa. E a culpa cai na ferramenta.

Quase nunca é a ferramenta. É que ninguém conduziu a mudança. Adoção não se decreta no grupo do WhatsApp — se constrói, uma pessoa de cada vez.

Qual foi a última ferramenta que entrou e morreu na praia?` },

  { t: "Automatizou e ninguém usou?", p: "Story 7 · IG · ~25s", x:
`Você montou a automação perfeita e ninguém usa? Já passei por isso — e a culpa não é da ferramenta.

A tecnologia é a parte fácil. Adoção é a difícil.

Antes de construir, eu vou atrás de uma pessoa só: o cético mais respeitado do time. Resolvo um problema real dele e deixo ele achar o defeito. Quando ele vira, o resto segue.

Adoção não se anuncia. Se constrói, uma pessoa de cada vez.` },

  { t: "3 sinais de que você automatizou a coisa errada", p: "Story 8 · IG · ~25s", x:
`Três sinais de que você automatizou a coisa errada.

Um: ficou mais rápido, mas a fila não diminuiu. Você só trocou o gargalo de lugar.

Dois: ninguém usa, e todo mundo voltou pro jeito antigo.

Três: você não consegue dizer o que melhorou — só que "economizou tempo". E tempo que ninguém mede é brinquedo caro.

Automação boa mexe em fila, erro ou realocação. O resto é enfeite.` },

  { t: "O relatório que ninguém lê", p: "Story 9 · IG · ~20s", x:
`Aposto que tem um relatório na sua operação que alguém monta toda semana e ninguém lê. Uma aprovação que nunca reprovou nada. Uma conferência do que já veio conferido.

A gente chama tudo isso de essencial. Mas metade só existe por hábito.

Antes de automatizar ou acelerar qualquer coisa, a pergunta é: e se a gente simplesmente parasse? Corta primeiro. Acelera depois.` },

  { t: "Quem vai cuidar dela?", p: "Story 10 · IG · ~20s", x:
`Antes de aprovar qualquer ferramenta de IA, eu faço uma pergunta que trava a reunião: quem vai cuidar dela?

Não quem vai usar. Quem vai perceber quando quebrar, ajustar quando o processo mudar, responder quando der ruim.

Ferramenta sem dono não é investimento. É abandono com mensalidade.` },

  { t: "IA não é projeto, é rotina", p: "Story 11 · IG · ~20s", x:
`O jeito mais garantido de fracassar com IA: tratar como projeto. Projeto tem começo, meio e fim — aí acaba a verba, o time desmonta e a ferramenta fica órfã.

IA que funciona é rotina: alguém olha toda semana, ajusta, melhora um pouco.

Você não implanta um hábito. Você sustenta.` },

  { t: "PROVA · A IA que não esqueceu nenhum cliente", p: "Story P6 · IG · ~22s", x:
`Eu troquei a plataforma de atendimento da operação inteira. Trezentas e setenta conversas de clientes.

E a IA não esqueceu ninguém: cada histórico migrou com resumo, funil e contexto preservados. Nenhum relacionamento recomeçou do zero.

Porque ferramenta você troca quando quiser. A memória do cliente, não pode perder. Contexto é o ativo — o resto é acessório.` },

  { t: "PROVA · 3.383 vezes que a equipe corrigiu a IA", p: "Story P7 · IG · ~22s", x:
`A minha IA jurídica já foi corrigida pela equipe três mil trezentas e oitenta e três vezes. De propósito.

Toda vez que ela classifica uma intimação, o jurista concorda ou discorda. Cada discordância vira dado — e o sistema acorda melhor no dia seguinte.

A IA não substituiu o jurista. Ela aprende com ele todo dia. E esse histórico de correção é um ativo que concorrente nenhum tem.` },

  { t: "PROVA · O lead não estava perdido, estava esquecido", p: "Story P8 · IG · ~20s", x:
`Um robô meu recupera cliente que sumiu no meio da conversa.

Um scanner varre as conversas paradas e reengaja — com limite, sem bombardear ninguém. Gente que abandonou bem na hora de mandar o documento volta pro fluxo sozinha.

Porque o lead que sumiu quase nunca disse não. Ele só foi esquecido. Follow-up não é insistência. É memória.` },

  // ===================== [3] RESERVA — tema já postado como texto no LinkedIn (usar só como Reel no IG, se quiser) =====================

  { t: "O que automatizar primeiro", p: "reserva · texto já saiu · ~40s", x:
`Quer automatizar e trava porque tudo parece urgente? Eu faço três perguntas pra cada tarefa — e só sigo se as três derem sim.

A primeira é se a tarefa é frequente: acontece toda semana, todo dia? A segunda é se ela dói: consome tempo, gera fila, trava gente? E a terceira é se o erro humano ali sai caro. Se as três respostas forem sim, é essa que você automatiza primeiro. E agora.

Só que o erro mais comum é começar pela tarefa mais divertida de resolver. Comece pela que mais sangra, não pela mais bonita.

No fim, automatizar é escolher a tarefa certa antes da ferramenta. Salva esse vídeo: essas três perguntas são a sua régua.` },

  { t: "Contratar não resolve o gargalo", p: "reserva · texto já saiu · ~45s", x:
`Operação apertou, o instinto é contratar. Eu quase fui por aí.

Só que aí você escala o problema junto com a solução. Mais gente no mesmo processo manual é mais ponto de falha e mais retrabalho.

O que virou o jogo foi inverter a ordem. Antes de pedir headcount, eu passo por três etapas: primeiro eu simplifico, vendo o que dá pra eliminar; depois eu padronizo, transformando o que sobra em regra; e só então eu automatizo o que passou pelas duas.

Porque automatizar a bagunça só te dá uma bagunça mais rápida.

Antes da próxima vaga, se pergunte: o gargalo é de gente, ou de desenho?` },

  { t: "3 erros que me custaram caro", p: "reserva · texto já saiu · ~50s", x:
`Três erros que cometi automatizando. Aprende com os meus.

O primeiro foi automatizar a bagunça. Botei velocidade num processo confuso e o resultado foi confusão mais rápida. Hoje eu simplifico antes.

O segundo foi automatizar sem medir. Eu achava que estava economizando tempo, mas não estava — só tinha mudado o trabalho de lugar.

E o terceiro foi esquecer as pessoas. Entreguei um sistema impecável que ninguém usou. No fim, a tecnologia é a parte fácil; o difícil é quem vai usar.

No fundo, os três vêm de pular o trabalho chato: simplificar antes, medir depois e levar as pessoas junto. Qual deles já te pegou?` },

  { t: "O passo que todo mundo pula", p: "reserva · texto já saiu · ~42s", x:
`Entre simplificar e automatizar tem um passo que ninguém quer fazer: padronizar.

E é justamente ele que separa processo de sorte. Se a tarefa só sai certa quando a Fulana faz, você não tem processo — tem dependência de uma pessoa. E pessoa tira férias, adoece, vai embora.

Padronizar é responder, em uma página, três coisas: qual é a entrada, qual é a regra de decisão e qual é a saída boa. Sem isso, automatizar é só congelar a bagunça em código.

Por isso eu só viro automação quando alguém novo consegue executar lendo a régua, sem perguntar pra ninguém. E o seu processo-chave: depende de um documento, ou da cabeça de uma pessoa?` },

  { t: "Produtividade não é fazer mais rápido", p: "reserva · texto já saiu · ~38s", x:
`Produtividade não é fazer mais rápido. É parar de fazer o que não devia.

A gente compra ferramenta pra acelerar uma tarefa que, no fundo, nem precisava existir. Então, antes de acelerar qualquer coisa, eu paro e pergunto: e se a gente simplesmente parasse de fazer isso?

Repara que metade das tarefas essenciais só existe por hábito: o relatório que ninguém lê, a aprovação que nunca reprova nada. E acelerar lixo é só produzir lixo mais rápido.

No fim, eficiência começa com uma subtração, não com uma ferramenta nova.` },

  { t: "O número que me fez voltar atrás", p: "reserva · ~42s", x:
`Eu tinha certeza de qual era o gargalo da operação. E estava errado.

Eu ia colocar gente na etapa que parecia o problema. Mas, antes, montei um painel bobo medindo o tempo de cada etapa — foi uma semana de dado honesto.

E o gargalo era outro. O tempo morria numa fila invisível, esperando uma aprovação que nem precisava existir. Ou seja, eu ia gastar energia resolvendo o problema errado, e com a maior convicção.

Porque opinião sobre o gargalo é barata, e quase sempre errada. Então meça antes de decidir.` },

  { t: "'Economizou tempo' não é resultado", p: "reserva · ~38s", x:
`Economizou tempo é a resposta que todo mundo dá — e não prova nada.

Porque tempo economizado some. Se a pessoa pega esse tempo livre e enche com outra tarefa manual, você não ganhou nada — só trocou a fila de lugar.

O que eu meço de verdade são três coisas: a fila diminuiu? O erro caiu? E a pessoa foi pra uma tarefa de mais valor? Se a automação não mexeu em fila, erro ou realocação, foi brinquedo caro.

No fim, economizou tempo é sensação. Fila, erro e realocação: isso sim é resultado.` },

  { t: "A pergunta errada sobre IA", p: "reserva · ~40s", x:
`Todo mundo pergunta se a IA vai tirar o emprego. E essa é a pergunta errada.

Porque a IA não chega te demitindo. O que ela faz, no silêncio, é mudar o que faz sentido uma pessoa fazer. Então o risco não é a máquina — é quem aprendeu a dirigir a máquina.

E tem dois grupos se formando. Um trata a IA como ameaça e tenta competir com ela na velocidade; o outro trata como alavanca e usa pra fazer o que antes não cabia no dia. O primeiro perde, e não pra IA: perde pro segundo grupo.

Então a pergunta certa é outra: você vai mandar na IA, ou vai disputar espaço com ela? Marca alguém que precisa ouvir isso.` },

  { t: "Comece pelo cético", p: "reserva · ~45s", x:
`O cético do time é o seu melhor aliado pra adotar IA. Sério.

No começo eu fazia tudo errado: anunciava a ferramenta pro grupo todo e ficava esperando a adesão chegar. E em três semanas estava todo mundo de volta ao manual.

O que virou a chave foi parar de tentar convencer a maioria e ir atrás de uma pessoa só: o cético mais respeitado do time. Sentei com ele, resolvi um problema real dele com a ferramenta e deixei ele mesmo achar o defeito.

Aí, quando ele virou, eu não precisei convencer mais ninguém: o time seguiu quem ele já seguia. Porque adoção não se anuncia, se constrói, uma pessoa de cada vez.` },

  // ===================== [4] JÁ POSTADOS — não regravar =====================

  { t: "Fable 5: a régua do que dá pra delegar subiu", p: "✓ POSTADO 04/07 · ~50s", x:
`Essa semana a Anthropic lançou o Claude Fable 5, o modelo mais capaz que eles já disponibilizaram pro público. Melhor em praticamente todos os testes: engenharia, análise, pesquisa, visão.

E tem um detalhe que interessa mais que o benchmark. Quanto mais longa e complexa a tarefa, maior a vantagem dele. Ou seja, o ganho não está em responder pergunta solta. Está em aguentar trabalho de verdade, do começo ao fim, sem se perder no meio.

Pra quem opera, é isso que importa: a régua do que dá pra delegar acabou de subir de novo. Tarefa que ano passado exigia uma pessoa do início ao fim, hoje cabe numa sessão de IA com supervisão.

A pergunta não é mais se a IA consegue fazer. É o que ainda faz sentido que a gente faça.` },

  { t: "40% adotam, 40% cancelam (Gartner)", p: "✓ POSTADO 06/07 · ~50s", x:
`Tem dois dados sobre Inteligência Artificial que todo gestor deveria colar na parede do escritório.

O primeiro: até o fim do ano, 4 em cada 10 ferramentas de trabalho que a gente usa vão ter IA embutida. A onda não está vindo. Ela já chegou.

O segundo dado é aquele que ninguém posta no Instagram: as maiores pesquisas de mercado projetam que mais de 40% dos projetos de IA nas empresas vão fracassar e ser cancelados.

Agora leia os dois juntos: o mercado inteiro vai tentar usar, e quase metade vai jogar dinheiro fora.

A diferença entre quem tem sucesso e quem fracassa não vai ser quem comprou a melhor ferramenta. Vai ser quem arrumou a casa e criou processos antes de automatizar.

A onda da IA é real. Mas surfar ou tomar caldo é uma escolha de método, não de tecnologia.` },
];
