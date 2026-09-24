# Percurso funcional do frontend Beta

1. O Admin é uma conta separada dos módulos operacionais. Os templates atribuem módulos de acesso, incluindo Controlo Criar e Controlo Aprovar, que são diferentes embora partilhem o destino visível Controlo.
2. O trabalho começa no Job On: pesquisar e selecionar explicitamente as ferramentas CM, MF e BQ. Se uma não existir, criar a Tool exclusivamente no Job On e regressar ao rascunho com essa Tool escolhida. Guardar cria o `jobon_id` e os contextos da produção (`cm_id`, `mf_id`, `bq_id`) ligados às respetivas Tools.
3. O Resumo é uma função do Controlo acessível a Criar e Aprovar. Lê referência, produção, máquina, processo e ferramentas do contexto do Job On. A procura por referência e o seletor de produção permitem a Operador e Responsável consultar os mesmos Resumos anteriores da referência; Aprovar mantém a folha em leitura.
4. Em Controlo Criar, Peso recebe automaticamente a Tool CM via `cm_id`, incluindo referência, lote, processo NNPB/PS e restantes dados necessários. O operador introduz apenas os dados próprios das medições. Pegamentos recebe os contextos CM/MF/BQ. Os controlos alimentam os estados apresentados no Resumo.
5. Em Controlo Aprovar, a mesma folha e os ficheiros são apenas de leitura. Uma submissão pendente pode ser aprovada ou não aprovada; a decisão não edita as medições.

A versão HTML usa identificadores e dados de exemplo na sessão do navegador. Não implementa autenticação, autorização, Tool canónica, persistência, PDFs reais nem backend.

6. Boquilhas consulta as ferramentas e lotes associados no Job On e regista movimentos. Não cria a Tool nem lotes independentes; se não houver ferramenta, o percurso volta ao Job On.
