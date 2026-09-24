# Percurso funcional do frontend Beta

1. O Admin é uma conta separada dos módulos operacionais. Os templates atribuem módulos de acesso, incluindo Controlo Criar e Controlo Aprovar, que são diferentes embora partilhem o destino visível Controlo.

2. **Job On é o centro do planeamento da produção.** O utilizador pesquisa e seleciona explicitamente as ferramentas CM, MF e BQ. Se uma Tool necessária não existir, a criação acontece no Job On e o rascunho é preservado. Guardar cria o `jobon_id` e os contextos da produção (`cm_id`, `mf_id`, `bq_id`) ligados às respetivas Tools.

3. A informação do planeamento **escoa do Job On para os módulos operacionais**. Cada módulo recebe/puxa apenas o contexto necessário ao seu próprio funcionamento. O operador não volta a introduzir informação que já é conhecida no Job On. Os módulos continuam independentes e persistem apenas os seus próprios outputs.

4. **Controlo entra pela produção através do Resumo.** Para um Job On concreto, o Resumo mostra o contexto daquela produção e serve de ponto de entrada para os controlos correspondentes. A procura por referência e o seletor de produção permitem consultar Resumos anteriores da mesma referência.

5. Em Controlo Criar, ao abrir Peso a partir dessa produção, o Peso já vem populated pelo contexto do `cm_id`/Job On com os dados aplicáveis, incluindo máquina, referência, lote, processo e CM. O operador introduz apenas os dados próprios das medições. Pegamentos recebe os contextos CM/MF/BQ necessários ao seu workflow.

6. Controlo Criar e Controlo Aprovar continuam módulos funcionais distintos. Podem reutilizar apresentação, componentes ou leituras quando isso simplifica a implementação, mas cada um segue o workflow que realmente necessita; não se força uma página única nem uma regra de simetria entre os dois módulos.

7. Em Controlo Aprovar, os dados submetidos são consultados no contexto correto da produção e as ações pertencem ao workflow de aprovação. Aprovar não altera medições como se fosse Controlo Criar.

8. Boquilhas recebe o contexto BQ associado ao Job On quando esse contexto existe. Registos iniciados antes do Job On podem ficar temporariamente ligados à Tool; quando o módulo recebe depois um `bq_id` cuja master Tool corresponde ao mesmo `tool_id`, esse é o ponto certo para apresentar a associação ao contexto da produção.

9. O frontend pede apenas a informação necessária para a ação atual. Históricos, relações antigas e outros contextos são carregados através de queries específicas quando o utilizador os pede; não se carrega o domínio inteiro para depois filtrar no browser.

A versão HTML usa identificadores e dados de exemplo na sessão do navegador. Não implementa autenticação, autorização, Tool canónica, persistência, PDFs reais nem backend.
