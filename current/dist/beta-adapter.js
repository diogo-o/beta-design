(function(){
  const page=document.body.dataset.betaPage||'';
  const file=n=>n;
  const normalNav=[
    ['20_JOB_ON_01_VISUAL_AUTHORITY_job-on.html','Job On','jobon'],
    ['22_PESO_OPERADOR_01_VISUAL_AUTHORITY_peso-operador.html','Controlo Criar','controlo-create'],
    ['31_BOQUILHAS_01_VISUAL_AUTHORITY_boquilhas.html','Boquilhas','boquilhas']
  ];
  const supervisorNav=[
    ['20_JOB_ON_01_VISUAL_AUTHORITY_job-on.html','Job On','jobon'],
    ['23_PESO_RESPONSAVEL_01_VISUAL_AUTHORITY_peso-responsavel.html','Controlo Aprovar','controlo-approve'],
    ['31_BOQUILHAS_01_VISUAL_AUTHORITY_boquilhas.html','Boquilhas','boquilhas']
  ];
  function applyNav(){
    const nav=document.querySelector('.dmo-primary-nav,.global-nav');
    if(!nav)return;
    // Retain the legacy shell styling while showing only Beta destinations.
    nav.querySelectorAll('a').forEach(a=>{
      const href=a.getAttribute('href')||'';
      if(/(?:32_ARMAZEM|34_REPARACAO)/.test(href))a.remove();
    });
  }
  applyNav();
  const header=document.querySelector('.dmo-app-header');
  const primary=document.querySelector('.dmo-primary-nav');
  if(page==='boquilhas'&&header&&primary&&header.contains(primary))header.insertAdjacentElement('afterend',primary);
  if(primary){
    primary.querySelectorAll('a').forEach(link=>{if((link.getAttribute('href')||'').includes('JOB_ON'))link.textContent='Planeamento'});
    let chosen;try{const records=JSON.parse(localStorage.getItem('betaAccessTemplates')||'[]');chosen=records.find(item=>item.name===localStorage.getItem('betaActiveTemplate'))?.modules}catch(e){}
    const order=['jobon','controlo-criar','controlo-aprovar','boquilhas'];
    const position=href=>href.includes('JOB_ON')?'jobon':href.includes('CONTROLO')?'controlo-criar':href.includes('BOQUILHAS')?'boquilhas':'admin';
    [...primary.querySelectorAll('a')].sort((a,b)=>{const rank=x=>{const id=position(x.getAttribute('href')||'');return (chosen||order).findIndex(module=>module===id||(id==='controlo-criar'&&module==='controlo-aprovar'))};return (rank(a)<0?99:rank(a))-(rank(b)<0?99:rank(b))}).forEach(link=>primary.append(link));
  }
  if(page==='login'){
    const id=document.querySelector('#email');
    if(id){id.type='text';id.removeAttribute('required');id.placeholder='Email de Admin ou número de funcionário';id.previousElementSibling.textContent='Utilizador';}
    const form=document.querySelector('#loginForm');
    if(form)form.addEventListener('submit',e=>{e.preventDefault();e.stopImmediatePropagation();const value=(id?.value||'').toLowerCase();location.href=value.includes('admin')?'13_ADMIN_01_VISUAL_AUTHORITY_admin.html':value.includes('chefe')||value.includes('respons')?'23_PESO_RESPONSAVEL_01_VISUAL_AUTHORITY_peso-responsavel.html':'20_JOB_ON_01_VISUAL_AUTHORITY_job-on.html'},true);
  }
  if(page==='admin'){
    document.querySelectorAll('.admin-nav button').forEach(b=>{if(['apps','audit'].includes(b.dataset.view))b.remove()});
    document.querySelector('#apps')?.remove();document.querySelector('#audit')?.remove();
    const adminNav=document.querySelector('.admin-nav');
    adminNav?.insertAdjacentHTML('beforeend','<button type="button" data-view="settings">Definições</button>');
    document.querySelector('.admin-main')?.insertAdjacentHTML('beforeend','<section class="admin-view" id="settings"><div class="page-head"><div><h2>Definições</h2><p>Preferências da administração do portal.</p></div></div><div class="dmo-card beta-admin-settings"><h3>Acesso e navegação</h3><p>Os templates de acesso definem os módulos visíveis e a ordem dos separadores para cada perfil.</p><a class="dmo-button" href="#" id="manageAccessTemplates">Gerir templates de acesso</a></div></section>');
    document.querySelector('#manageAccessTemplates')?.addEventListener('click',event=>{event.preventDefault();document.querySelector('.admin-nav [data-view="templates"]')?.click()});
    adminNav?.querySelector('[data-view="settings"]')?.addEventListener('click',()=>{adminNav.querySelectorAll('button').forEach(b=>b.classList.toggle('active',b.dataset.view==='settings'));document.querySelectorAll('.admin-view').forEach(view=>view.classList.toggle('active',view.id==='settings'))});
    const templatesView=document.querySelector('#templates');
    if(templatesView){
      const modules=[['jobon','Job On','Planeamento e produções'],['controlo-criar','Controlo Criar','Peso, Pegamentos, Resumo e Histórico'],['controlo-aprovar','Controlo Aprovar','Revisão e aprovação de Peso'],['boquilhas','Boquilhas','Movimentos e histórico de boquilhas'],['admin','Administração','Utilizadores e templates']];
      const defaults=[{name:'Responsável operacional',modules:['jobon','controlo-aprovar','boquilhas']},{name:'Operador',modules:['jobon','controlo-criar','boquilhas']},{name:'Administração pura',modules:['admin']}];
      let records;try{records=JSON.parse(localStorage.getItem('betaAccessTemplates')||'null')||defaults}catch(e){records=defaults}
      let selected=-1;
      templatesView.innerHTML=`<div class="page-head"><div><h2>Templates de acesso</h2><p>Escolha um template para consultar ou editar os módulos atribuídos.</p></div><button type="button" class="dmo-button" id="createAccessTemplate">Criar template</button></div><section class="beta-template-list dmo-card" id="accessTemplateList" aria-label="Templates existentes"></section><form class="beta-template-editor dmo-card" id="accessTemplateEditor" hidden><div class="page-head"><div><h3 id="templateFormHeading">Criar template</h3><p>Selecione os módulos a que este template dá acesso.</p></div><button class="dmo-button ghost" type="button" id="cancelAccessTemplate">Voltar à lista</button></div><div class="dmo-field"><label for="accessTemplateName">Nome do template</label><input id="accessTemplateName" required maxlength="80" placeholder="Ex.: Metrologia"></div><fieldset class="beta-template-options"><legend>Módulos atribuídos e ordem dos separadores</legend>${modules.map(([id,name,description])=>`<div class="beta-template-option" data-module="${id}"><label><input type="checkbox" name="module" value="${id}"><span><strong>${name}</strong><small>${description}</small></span></label><div class="beta-order-controls"><button type="button" data-move="up" aria-label="Subir ${name}">↑</button><button type="button" data-move="down" aria-label="Descer ${name}">↓</button></div></div>`).join('')}</fieldset><div class="beta-template-actions"><button class="dmo-button" type="submit" id="saveAccessTemplate">Criar template</button></div></form>`;
      const list=templatesView.querySelector('#accessTemplateList'),editor=templatesView.querySelector('#accessTemplateEditor');
      const render=()=>{list.replaceChildren();records.forEach((record,index)=>{const button=document.createElement('button');button.type='button';button.className='beta-template-item';const title=document.createElement('strong');title.textContent=record.name;const count=document.createElement('span');count.textContent=`${record.modules.length} ${record.modules.length===1?'módulo':'módulos'}`;button.append(title,count);button.onclick=()=>open(index);list.append(button)})};
      const open=index=>{selected=index;const record=records[index];editor.reset();editor.querySelector('#accessTemplateName').value=record?.name||'';editor.querySelectorAll('.beta-template-option').forEach(row=>{const id=row.dataset.module;row.querySelector('input').checked=!!record?.modules.includes(id);row.style.order=record?.modules.includes(id)?record.modules.indexOf(id):modules.length+modules.findIndex(item=>item[0]===id)});editor.querySelector('#templateFormHeading').textContent=index<0?'Criar template':'Editar template';editor.querySelector('#saveAccessTemplate').textContent=index<0?'Criar template':'Guardar alterações';list.hidden=true;editor.hidden=false;editor.querySelector('#accessTemplateName').focus()};
      const close=()=>{editor.hidden=true;list.hidden=false;selected=-1};
      editor.querySelectorAll('[data-move]').forEach(button=>button.onclick=()=>{const rows=[...editor.querySelectorAll('.beta-template-option')].sort((a,b)=>Number(a.style.order)-Number(b.style.order));const row=button.closest('.beta-template-option'),at=rows.indexOf(row),other=rows[at+(button.dataset.move==='up'?-1:1)];if(!other)return;const order=row.style.order;row.style.order=other.style.order;other.style.order=order});
      templatesView.querySelector('#createAccessTemplate').onclick=()=>open(-1);
      templatesView.querySelector('#cancelAccessTemplate').onclick=close;
      editor.onsubmit=event=>{event.preventDefault();const name=editor.querySelector('#accessTemplateName').value.trim();const chosen=[...editor.querySelectorAll('.beta-template-option')].sort((a,b)=>Number(a.style.order)-Number(b.style.order)).filter(row=>row.querySelector('input').checked).map(row=>row.dataset.module);if(!name||!chosen.length){if(!chosen.length)alert('Selecione pelo menos um módulo.');return}if(records.some((record,index)=>index!==selected&&record.name.toLocaleLowerCase('pt-PT')===name.toLocaleLowerCase('pt-PT'))){alert('Já existe um template com esse nome.');return}if(selected<0)records.push({name,modules:chosen});else records[selected]={name,modules:chosen};localStorage.setItem('betaAccessTemplates',JSON.stringify(records));localStorage.setItem('betaActiveTemplate',name);render();close();document.querySelector('#toast').textContent='Template atualizado nesta demonstração';document.querySelector('#toast').classList.add('show');setTimeout(()=>document.querySelector('#toast')?.classList.remove('show'),2200)};
      render();
    }
    // Selection and actions live outside the user table. Double click opens the user form.
    const userTable=document.querySelector('#userRows');
    if(userTable){
      document.querySelector('#users thead th:last-child')?.remove();
      userTable.querySelectorAll('tr').forEach(row=>row.lastElementChild?.querySelector('.row-actions')?.closest('td')?.remove());
      const card=document.querySelector('#users .table-card');
      card?.insertAdjacentHTML('beforeend','<div class="beta-table-actions"><span id="selectedUserLabel">Selecione um utilizador</span><button type="button" class="dmo-button" id="editSelectedUser" disabled>Editar utilizador</button><button type="button" class="dmo-button" id="resetSelectedUser" disabled>Reset password</button></div>');
      const usersSection=document.querySelector('#users');
      const usersHeader=usersSection.querySelector(':scope > .page-head'),usersToolbar=usersSection.querySelector(':scope > .toolbar');
      usersSection.insertAdjacentHTML('beforeend','<section id="userDetailPage" class="dmo-card beta-user-detail" hidden><div class="page-head"><div><h2 id="userDetailName">Utilizador</h2><p>Ficha do utilizador selecionado</p></div><button type="button" class="dmo-button ghost" id="backUsers">Voltar aos utilizadores</button></div><div id="userDetailFields" class="beta-user-fields"></div><div class="beta-table-actions"><button type="button" class="dmo-button" id="editUserFromDetail">Editar utilizador</button></div></section>');
      const detailPage=document.querySelector('#userDetailPage');
      document.querySelector('#backUsers').onclick=()=>{detailPage.hidden=true;usersHeader.hidden=false;usersToolbar.hidden=false;card.hidden=false};
      let selectedUser=null;
      const choose=row=>{selectedUser=row;userTable.querySelectorAll('tr').forEach(item=>{item.classList.toggle('selected',item===row);item.setAttribute('aria-selected',String(item===row))});document.querySelector('#selectedUserLabel').textContent=row.cells[0].textContent.trim();document.querySelector('#editSelectedUser').disabled=false;document.querySelector('#resetSelectedUser').disabled=false};
      const showDetail=()=>{if(!selectedUser)return;const cells=[...selectedUser.cells];document.querySelector('#userDetailName').textContent=cells[0].textContent.trim();const labels=['Nome','Email','Título / função','Template','Estado','Último acesso'];const fields=document.querySelector('#userDetailFields');fields.replaceChildren();cells.forEach((cell,index)=>{const box=document.createElement('div'),label=document.createElement('span'),value=document.createElement('strong');label.textContent=labels[index];value.textContent=cell.textContent.trim();box.append(label,value);fields.append(box)});usersHeader.hidden=true;usersToolbar.hidden=true;card.hidden=true;detailPage.hidden=false};
      const edit=()=>{if(!selectedUser)return;document.querySelector('#userModalTitle').textContent='Editar utilizador';document.querySelector('#editName').value=selectedUser.cells[0].textContent.trim();document.querySelector('#editEmail').value=selectedUser.cells[1].textContent.trim();document.querySelector('#editLabel').value=selectedUser.cells[2].textContent.trim();document.querySelector('#userModal').classList.add('open')};
      userTable.querySelectorAll('tr').forEach(row=>{row.tabIndex=0;row.onclick=()=>choose(row);row.ondblclick=()=>{choose(row);showDetail()};row.onkeydown=e=>{if(e.key==='Enter'){choose(row);showDetail()}else if(e.key===' '){e.preventDefault();choose(row)}}});
      document.querySelector('#editSelectedUser').onclick=edit;document.querySelector('#editUserFromDetail').onclick=edit;
      document.querySelector('#resetSelectedUser').onclick=()=>{if(selectedUser&&confirm(`Iniciar reset de password para ${selectedUser.cells[0].textContent.trim()}?`)){const notice=document.querySelector('#toast');notice.textContent='Reset iniciado';notice.classList.add('show');setTimeout(()=>notice.classList.remove('show'),2200)}};
    }
    document.querySelector('.admin-user')?.insertAdjacentHTML('beforeend','<div class="beta-user-nav"><a href="12_LOGIN_01_VISUAL_AUTHORITY_login.html">Sair</a></div>');
  }
  if(page==='controlo-hub'){
    document.querySelector('#openResumo')?.addEventListener('click',()=>location.href='resumo.html');
    document.querySelectorAll('.beta-control-summary .tool-control-card').forEach(card=>{
      const action=card.querySelector('.text-action');if(action)action.onclick=()=>location.href='resumo.html';
      const menu=card.querySelector('.tool-menu-trigger');if(menu)menu.onclick=()=>location.href='resumo.html';
    });
  }
  if(page==='controlo-create'){
    const brand=document.querySelector('.brand p');if(brand)brand.textContent='Controlo Criar';
    const tabs=document.querySelector('.tabs');
    if(tabs){tabs.insertAdjacentHTML('beforeend','<a class="beta-sub-link" href="24_PEGAMENTOS_01_VISUAL_AUTHORITY_pegamentos.html">Pegamentos</a><a class="beta-sub-link" href="resumo.html">Resumo</a>');}
    if(new URLSearchParams(location.search).get('view')==='settings')document.querySelector('.tab[data-view="settings"]')?.click();
  }
  if(page==='controlo-approve'){
    const brand=document.querySelector('.brand p');if(brand)brand.textContent='Controlo Aprovar';
    const head=document.querySelector('.page-head p');if(head)head.textContent='Controlos submetidos para decisão do responsável autorizado.';
  }
  if(page==='pegamentos'){
    const tabs=document.querySelector('nav.tabs');
    if(tabs)tabs.insertAdjacentHTML('afterbegin','<a class="beta-sub-link" href="22_PESO_OPERADOR_01_VISUAL_AUTHORITY_peso-operador.html">Peso</a><a class="beta-sub-link active" href="24_PEGAMENTOS_01_VISUAL_AUTHORITY_pegamentos.html">Pegamentos</a><a class="beta-sub-link" href="resumo.html">Resumo</a>');
  }
  if(page==='jobon'){
    const title=document.querySelector('.sheet-reference-title');if(title)title.textContent='5447T137';
    const production=document.querySelector('#sheetProduction');if(production)production.value='202601';
    const machine=document.querySelector('#sheetMachine');if(machine)machine.value='B3';
    const productionSelect=document.querySelector('#productionSelect');
    if(productionSelect&&productionSelect.options[0]){productionSelect.options[0].value='202601';productionSelect.options[0].textContent='202601 · atual';}
    const tools={
      CM:{reference:'ST100',lot:'12',machines:'B1 · B3',process:'NNPB',quantity:'16',usage:'30%'},
      MF:{reference:'5447',lot:'08',machines:'B3',process:'NNPB',quantity:'16',usage:'22%'},
      BQ:{reference:'T173',lot:'04',machines:'B3',process:'—',quantity:'144',usage:'42%'}
    };
    Object.entries(tools).forEach(([type,facts])=>{
      const card=document.querySelector(`.tool-card[data-family="${type}"]`);
      if(!card)return;
      const fields=card.querySelector('.tool-fields');
      if(!fields)return;
      const original=fields.querySelectorAll('label');
      if(original[0]?.querySelector('input')){original[0].querySelector('span').textContent='Referência da ferramenta';original[0].querySelector('input').value=facts.reference;}
      if(original[1]){const select=original[1].querySelector('select');if(select){select.add(new Option(facts.lot,facts.lot,true,true));}}
      fields.insertAdjacentHTML('afterbegin',`<div class="beta-tool-identity"><span>Ferramenta selecionada</span><strong>${type} ${facts.reference} · Lote ${facts.lot}</strong><small>${facts.machines} · ${facts.process} · ${facts.quantity} peças · ${facts.usage} utilização</small></div>`);
    });
    const toolSection=document.querySelector('.priority-grid');
    if(toolSection)toolSection.insertAdjacentHTML('beforebegin','<div class="beta-module-note" style="margin-bottom:12px"><strong>Conjunto 5447T137 · Produção 202601 · Linha B3</strong>CM ST100 lote 12 · MF 5447 lote 08 · BQ T173 lote 04</div>');
    const pickerRows=document.querySelectorAll('#inventoryPicker table tbody tr');
    if(pickerRows[0]){pickerRows[0].children[0].innerHTML='<strong>ST100</strong>';pickerRows[0].children[1].textContent='12';}
    if(pickerRows[1]){pickerRows[1].children[0].innerHTML='<strong>ST21</strong>';pickerRows[1].children[1].textContent='07';}
  }
  if(['jobon','controlo-create','controlo-hub','pegamentos','boquilhas'].includes(page)){
    document.querySelector('.dmo-app-header__user,.user')?.insertAdjacentHTML('beforeend','<div class="beta-user-nav"><a href="12_LOGIN_01_VISUAL_AUTHORITY_login.html">Sair</a></div>');
  }
  const origins={jobon:'20_JOB_ON_01_VISUAL_AUTHORITY_job-on.html','controlo-create':'22_PESO_OPERADOR_01_VISUAL_AUTHORITY_peso-operador.html','controlo-hub':'21_CONTROLO_01_VISUAL_AUTHORITY_controlo.html',boquilhas:'31_BOQUILHAS_01_VISUAL_AUTHORITY_boquilhas.html'};
  function missingTool(input,container,type){
    if(!input||!container)return;
    const prompt=document.createElement('div');prompt.className='beta-tool-missing';prompt.hidden=true;
    prompt.innerHTML='<strong>Ferramenta não encontrada</strong><span>Confirme a referência e o lote antes de criar uma ferramenta.</span><a class="dmo-button beta-create-tool" href="tool-create.html">Criar ferramenta</a>';
    container.append(prompt);
    const update=()=>{const query=input.value.trim().toLocaleLowerCase('pt-PT');const matches=[...container.querySelectorAll('tbody tr, .result:not(#notFound), .lot')].filter(row=>!row.classList.contains('hidden')&&!row.hidden&&row.textContent.toLocaleLowerCase('pt-PT').includes(query));prompt.hidden=!query||matches.length>0};
    input.addEventListener('input',update);
    prompt.querySelector('a').addEventListener('click',e=>{const url=new URL('tool-create.html',location.href);url.searchParams.set('from',page);url.searchParams.set('type',type);url.searchParams.set('reference',input.value.trim());e.currentTarget.href=url.href;sessionStorage.setItem('toolOriginDraft:'+page,JSON.stringify([...document.querySelectorAll('input,select,textarea')].map(el=>[el.id||el.name,el.value]).filter(x=>x[0])))});
    update();
  }
  const savedDraft=sessionStorage.getItem('toolOriginDraft:'+page);
  if(savedDraft&&new URLSearchParams(location.search).has('toolCreated')){try{JSON.parse(savedDraft).forEach(([key,value])=>{const field=document.getElementById(key)||document.querySelector(`[name="${CSS.escape(key)}"]`);if(field)field.value=value});sessionStorage.removeItem('toolOriginDraft:'+page)}catch(e){}}
  if(page==='jobon')missingTool(document.querySelector('#inventoryPicker .picker-filters input'),document.querySelector('#inventoryPicker'), 'CM');
  if(page==='controlo-hub')missingTool(document.querySelector('input[placeholder*=Pesquisar]'),document.querySelector('main'), 'CM');
  if(page==='controlo-create')missingTool(document.querySelector('#refs .reference-list input'),document.querySelector('#refs .reference-list'), 'CM');
  if(page==='boquilhas'){
    const input=document.querySelector('#recordSearch'),container=document.querySelector('#recordResults');
    missingTool(input,container,'BQ');
    input?.addEventListener('input',()=>{container.querySelector('.beta-tool-missing').hidden=!input.value.trim()||document.querySelector('#notFound')?.classList.contains('hidden');});
  }
  if(page==='controlo-approve'){
    document.querySelector('.dmo-app-header__user,.user')?.insertAdjacentHTML('beforeend','<div class="beta-user-nav"><a href="12_LOGIN_01_VISUAL_AUTHORITY_login.html">Sair</a></div>');
  }
  if(page==='boquilhas'){
    const lotGrid=document.querySelector('#lots');
    if(lotGrid){
      const section=lotGrid.closest('.card');section?.insertAdjacentHTML('beforeend','<div class="beta-table-actions"><span id="selectedBqLabel">Selecione uma boquilha</span><button class="btn" type="button" id="openBqCard" disabled>Abrir ficha</button></div>');
      let selectedLot=null;
      const openCard=()=>{if(!selectedLot)return;const [reference,lot]=selectedLot.querySelector('h4').textContent.split('·').map(x=>x.trim());const data=[...selectedLot.querySelectorAll('.lot-data div')];const quantity=data.find(x=>x.querySelector('span')?.textContent==='Quantidade')?.querySelector('strong')?.textContent.match(/\d+/)?.[0]||'';const line=data.find(x=>x.querySelector('span')?.textContent==='Linha')?.querySelector('strong')?.textContent||'';location.href=`tool-create.html?mode=detail&from=boquilhas&type=BQ&reference=${encodeURIComponent(reference)}&lot=${encodeURIComponent(lot)}&quantity=${encodeURIComponent(quantity)}&line=${encodeURIComponent(line)}`};
      lotGrid.querySelectorAll('.lot').forEach(lot=>{lot.tabIndex=0;lot.setAttribute('role','button');lot.onclick=()=>{selectedLot=lot;lotGrid.querySelectorAll('.lot').forEach(item=>item.classList.toggle('selected',item===lot));document.querySelector('#selectedBqLabel').textContent=lot.querySelector('h4').textContent;document.querySelector('#openBqCard').disabled=false};lot.ondblclick=()=>{lot.click();openCard()};lot.onkeydown=e=>{if(e.key==='Enter'){lot.click();openCard()}else if(e.key===' '){e.preventDefault();lot.click()}}});
      document.querySelector('#openBqCard').onclick=openCard;
    }
    const main=document.querySelector('main.main');
    if(main)main.insertAdjacentHTML('afterbegin',`<section class="beta-bq-context" aria-label="Contexto da boquilha e produção">
      <div><span>Boquilha</span><strong>T132</strong></div>
      <div><span>Referência</span><strong>5447T137</strong></div>
      <div><span>Produção</span><strong>202601</strong></div>
      <div><span>Lote</span><strong>04</strong></div>
      <div><span>Linha</span><strong>B3</strong></div>
      <div><span>Estado</span><strong>Aberto</strong></div>
    </section>`);
    const summary=[...document.querySelectorAll('.history-summary .metric')].find(x=>x.textContent.includes('Saldo de movimentos'));
    if(summary)summary.innerHTML='<span>Discrepância geral</span><strong>−5</strong><small>Gerada na entrada de 14/08/2026 · 09:16</small>';
    const incoming=[...document.querySelectorAll('.movement[data-type="in"]')][0];
    if(incoming){incoming.children[3].textContent='15';incoming.children[4].textContent='−5';incoming.children[7].textContent='14/08/2026 · 09:16';}
  }
})();
