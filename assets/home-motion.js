/* Presentation-only enhancement. Existing scene, permission and voice logic stays authoritative. */
(() => {
  'use strict';
  const home = document.getElementById('home');
  if (!home) return;
  const icon = name => typeof uiIcon === 'function' ? uiIcon(name) : '';
  const room = document.createElement('div');
  room.className = 'motionRoom';
  room.setAttribute('aria-hidden', 'true');
  room.innerHTML = `<svg viewBox="0 0 1440 740" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="rmGlass" x2=".2" y2="1"><stop stop-color="#979fe8" stop-opacity=".38"/><stop offset="1" stop-color="#252547" stop-opacity=".16"/></linearGradient>
    <linearGradient id="rmShade" x2="1" y2=".5"><stop stop-color="#15162e" stop-opacity=".08"/><stop offset="1" stop-color="#131122" stop-opacity=".54"/></linearGradient>
    <linearGradient id="rmArch" x2="0" y2="1"><stop stop-color="#ffe3b9"/><stop offset="1" stop-color="#b899b1" stop-opacity=".3"/></linearGradient>
    <linearGradient id="rmSofa" x2=".3" y2="1"><stop stop-color="#ffffff" stop-opacity=".35"/><stop offset="1" stop-color="#341d3b" stop-opacity=".35"/></linearGradient>
    <linearGradient id="rmPlatform" x2="0" y2="1"><stop stop-color="#c1b8e0"/><stop offset="1" stop-color="#59536f"/></linearGradient>
    <radialGradient id="rmGlow"><stop stop-color="#d8d4ff" stop-opacity=".5"/><stop offset="1" stop-color="#8e7bc5" stop-opacity="0"/></radialGradient>
    <filter id="rmBlur"><feGaussianBlur stdDeviation="18"/></filter>
    <filter id="rmSoft"><feDropShadow dx="0" dy="15" stdDeviation="15" flood-color="#151324" flood-opacity=".4"/></filter>
    <clipPath id="rmWindow"><path d="M0 0H560Q645 0 645 86V426H0Z"/></clipPath>
  </defs>
  <rect width="1440" height="740" class="roomFloor"/>
  <g class="roomWorld">
    <path d="M0 0H1440V456L772 502 0 445Z" class="roomWall"/>
    <path d="M0 0H1440V456L772 502 0 445Z" fill="url(#rmShade)"/>
    <g clip-path="url(#rmWindow)">
      <rect width="648" height="430" class="roomSky"/>
      <ellipse cx="280" cy="375" rx="340" ry="170" fill="url(#rmGlow)"/>
      <g class="roomStars" fill="#dcdfff"><circle cx="160" cy="110" r="1.7"/><circle cx="250" cy="72" r="1"/><circle cx="334" cy="165" r="2"/><circle cx="496" cy="125" r="1.5"/><circle cx="545" cy="228" r="1"/><circle cx="202" cy="228" r="1"/><circle cx="389" cy="62" r="1.5"/></g>
      <g class="roomPlanet"><circle cx="228" cy="228" r="38" fill="#cdc4ee" opacity=".4"/><ellipse cx="228" cy="228" rx="67" ry="13" fill="none" stroke="#e3d0ff" stroke-opacity=".5" stroke-width="2" transform="rotate(-28 228 228)"/></g>
      <path d="M-70 408Q90 251 257 385Q410 280 620 402L680 450H0Z" fill="#282c4c"/><path d="M-40 445Q118 324 285 418Q431 350 664 435V470H0Z" fill="#7775a2" opacity=".55"/>
      <rect width="648" height="430" fill="url(#rmGlass)"/>
    </g>
    <path d="M0 429H649V86Q649 0 560 0" fill="none" stroke="#c7b6e0" stroke-opacity=".3" stroke-width="4"/>
    <path d="M166 0V428M376 0V428" stroke="#c7b6e0" stroke-opacity=".18" stroke-width="2"/>
    <path d="M710 0V472" stroke="#b4a1c0" stroke-opacity=".18" stroke-width="2"/>
    <path d="M1042 422V205a84 84 0 0 1 168 0V453Z" class="roomLight" opacity=".75"/>
    <path d="M1042 422V205a84 84 0 0 1 168 0V453Z" fill="url(#rmShade)"/>
    <path d="M1036 424V205a90 90 0 0 1 180 0V454" stroke="#ddcade" stroke-opacity=".28" stroke-width="5" fill="none"/>
    <path d="M1290 0H1440V457L1290 447Z" fill="#29283f" opacity=".45"/>
    <g stroke="#c8b6dc" stroke-opacity=".08" stroke-width="2"><path d="M1308 0V448M1325 0V449M1342 0V450M1359 0V451M1376 0V452M1393 0V453M1410 0V454M1427 0V455"/></g>
    <ellipse cx="734" cy="530" rx="530" ry="110" fill="url(#rmGlow)"/>
    <ellipse cx="940" cy="487" rx="260" ry="39" fill="#151123" opacity=".23" filter="url(#rmBlur)"/>
    <g filter="url(#rmSoft)">
      <rect x="927" y="344" width="278" height="106" rx="40" class="roomSofa"/>
      <rect x="927" y="344" width="278" height="106" rx="40" fill="url(#rmSofa)"/>
      <path d="M928 404Q932 385 958 386H1183Q1208 387 1215 413V464Q1070 491 923 454Z" class="roomSofa"/>
      <path d="M928 404Q932 385 958 386H1183Q1208 387 1215 413V464Q1070 491 923 454Z" fill="url(#rmSofa)"/>
      <rect x="908" y="381" width="47" height="79" rx="23" class="roomSofa"/><rect x="1194" y="383" width="44" height="78" rx="22" class="roomSofa"/>
      <path d="M1058 398V460" stroke="#694253" stroke-opacity=".2"/>
      <ellipse cx="350" cy="457" rx="84" ry="25" fill="#585177"/><path d="M272 401H428V449Q350 485 272 449Z" fill="#a7a0b9"/><ellipse cx="350" cy="401" rx="78" ry="25" fill="#c2b9cb"/>
      <path d="M337 389V302" stroke="#cebca8" stroke-width="7"/><ellipse cx="340" cy="309" rx="38" ry="12" fill="#8a87a7"/>
      <path d="M340 308Q288 260 299 243Q337 242 340 308M340 305Q352 258 386 265Q390 291 340 305" fill="#9cb7b2"/>
    </g>
    <ellipse cx="699" cy="526" rx="192" ry="43" fill="#1b1737" opacity=".38" filter="url(#rmBlur)"/>
    <path d="M500 467V483Q697 570 895 483V467Z" fill="url(#rmPlatform)"/>
    <ellipse cx="698" cy="467" rx="198" ry="48" fill="#aaa1cd"/><ellipse cx="698" cy="462" rx="190" ry="42" fill="#7d769f"/>
    <ellipse cx="698" cy="462" rx="169" ry="33" fill="none" stroke="#dfd7ff" stroke-opacity=".65" stroke-width="2"/>
    <ellipse cx="698" cy="460" rx="114" ry="28" fill="url(#rmGlow)"/>
    <g class="roomOrbital" fill="#e6d9ff" opacity=".35"><circle cx="543" cy="390" r="3"/><circle cx="840" cy="390" r="2"/></g>
  </g>
  <path d="M0 660Q720 594 1440 650V740H0Z" fill="#17192e" opacity=".18"/>
  </svg>`;
  const hero = document.createElement('section');
  hero.className='motionHero';
  hero.innerHTML=`<button class="motionCharacterButton" aria-label="点击 i 开始语音对话"><span class="iCharacter" aria-hidden="true"></span></button><h2>你好，我是 i</h2><p id="motionHeroCaption">点击形象，直接和我说</p>`;
  const picker=document.createElement('div');
  picker.className='motionScenePicker';
  picker.setAttribute('role','group');picker.setAttribute('aria-label','首页内容分屏');
  picker.innerHTML=`<button data-room-pick="fun" aria-pressed="true">iCAR趣玩</button><button data-room-pick="skills" aria-pressed="false">场景技能</button><button data-room-pick="recommended" aria-pressed="false">推荐场景</button><button data-room-pick="mine" aria-pressed="false">我的场景</button><button class="pauseMotion" aria-label="暂停动效" aria-pressed="false">${icon('pause')}</button>`;
  const stage=document.createElement('section');stage.className='motionPageStage';stage.setAttribute('aria-live','polite');
  const settingsButton=document.createElement('button');settingsButton.className='motionSettingsButton';settingsButton.setAttribute('aria-label','打开设置');settingsButton.innerHTML=icon('settings');settingsButton.addEventListener('click',()=>openSettings('services'));
  const launches=document.createElement('div');launches.className='motionLaunchers';
  launches.innerHTML=`<button data-open-catalog="services" aria-expanded="false"><span class="motionLauncherIcon">${icon('shield')}</span><span><b>主动服务</b><small id="motionServiceCount">查看推荐场景与我的场景</small></span><span class="launchArrow">›</span></button><button data-open-catalog="skills" aria-expanded="false"><span class="motionLauncherIcon">${icon('sparkles')}</span><span><b>场景技能</b><small>发现能力，直接语音体验</small></span><span class="launchArrow">›</span></button>`;
  const back=document.createElement('button');back.className='motionDrawerBack';back.textContent='返回客厅';
  const shadow=document.createElement('div');shadow.className='motionShadow';shadow.setAttribute('aria-hidden','true');
  home.prepend(room);home.append(shadow,hero,stage,picker,launches,back,settingsButton);
  home.classList.add('motionHome','motionEntering');home.dataset.room='fun';
  const panel=home.querySelector('.carMain');panel.inert=true;
  let previousLauncher=null;
  function setCatalog(kind){
    if(kind){home.dataset.catalog=kind;panel.inert=false;back.focus({preventScroll:true});}
    else{delete home.dataset.catalog;panel.inert=true;if(previousLauncher)previousLauncher.focus({preventScroll:true});}
    launches.querySelectorAll('button').forEach(b=>b.setAttribute('aria-expanded',String(b.dataset.openCatalog===kind)));
  }
  launches.addEventListener('click',e=>{const b=e.target.closest('[data-open-catalog]');if(b){previousLauncher=b;setCatalog(b.dataset.openCatalog);}});
  back.addEventListener('click',()=>setCatalog(null));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&home.dataset.catalog&&!document.getElementById('modalWrap').classList.contains('open'))setCatalog(null);});
  hero.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>startHomeVoice()));
  const captions={fun:'今天，想玩点什么？',skills:'复杂需求，也能一步安排',recommended:'适合你的服务，正在主动发生',mine:'你的习惯，由你定义'};
  const pageCopy={fun:['趣玩实验室','用声音打开一点想象力'],skills:['场景技能','能听懂、会规划，也能协同多项能力'],recommended:['推荐场景','i 根据出行状态主动提供服务'],mine:['我的场景','只属于你的自动化习惯']};
  const funNames=['情景互动与品牌彩蛋','惬意午休','测测','沿途识物'];
  let activeHomeSkill='车辆控制';
  const safe=s=>typeof escapeHtml==='function'?escapeHtml(s):s;
  function smallCard(title,copy,action,kind='') {let scene=kind.includes('scene');return `<article class="motionContentCard ${kind}" role="button" tabindex="0" onclick="${action}" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();${action}}"><span class="motionCardGlow"></span><b>${safe(title)}</b><p>${safe(copy)}</p><span class="motionCardCta">${scene?'查看与管理':'立即体验'} ${icon(scene?'arrowRight':'mic')}</span></article>`}
  function funCard(name,index){let labels={情景互动与品牌彩蛋:'品牌彩蛋',惬意午休:'休憩模式',测测:'趣味测试',沿途识物:'视觉探索'};return `<button class="funSkillCard card${index}" onclick="startSkillExperience('iCAR趣玩','${safe(name)}')"><span class="funCardVisual"><span class="funCardIcon">${uiIcon(skillIconKey('iCAR趣玩',name))}</span><i>${labels[name]||'趣玩互动'}</i></span><span class="funCardCopy"><b>${safe(name)}</b><small>${safe(userSkillCopy(name))}</small><em>“${safe(voiceExample('iCAR趣玩',name))}”</em></span><span class="funCardCta">${icon('mic')}立即体验</span></button>`}
  function renderStage(){let roomKey=home.dataset.room,html='',meta=pageCopy[roomKey];hero.querySelector('h2').textContent=meta[0];
    if(roomKey==='fun'){let tab=SKILL_TABS.find(t=>t.name==='iCAR趣玩'),all=tab?tab.skills:funNames,names=funNames.filter(n=>all.includes(n)).slice(0,4),more=Math.max(0,all.length-names.length);html=`<div class="motionStageHeader"><span>PLAYGROUND · VOICE FIRST</span><h3>${meta[1]}</h3></div><div class="funConstellation scalable funCardLayout">${names.map(funCard).join('')}<button class="allFunCard" onclick="openAllFunHome()"><span>${icon('sparkles')}</span><span class="allFunCopy"><b>更多趣玩</b><small>${more} 个玩法，持续上新</small></span>${icon('arrowRight')}</button></div>`;}
    if(roomKey==='skills'){let tabs=SKILL_TABS.filter(t=>t.name!=='iCAR趣玩'),current=tabs.find(t=>t.name===activeHomeSkill)||tabs[0],accent=categoryStyle(current.name)[1];html=`<div class="motionStageHeader"><span>MASTER AGENT · ${safe(current.name)}</span><h3>${meta[1]}</h3></div><div class="skillQuickGrid sceneCards">${current.skills.map((s,i)=>`<article style="--skill-accent:${accent};--card-index:${i}"><div class="skillSceneVisual"><span class="skillMiniIcon">${uiIcon(skillIconKey(current.name,s))}</span><em>“${safe(voiceExample(current.name,s))}”</em></div><div class="skillSceneCopy"><b>${safe(s)}</b><p>${safe(userSkillCopy(s))}</p></div><footer><button onclick="showSkillDemo('${safe(current.name)}','${safe(s)}')">${icon('play')}了解能力</button><button class="directVoice" onclick="startSkillExperience('${safe(current.name)}','${safe(s)}')">${icon('mic')}语音体验</button></footer></article>`).join('')}</div><div class="skillCategoryBar">${tabs.map(t=>`<button class="${t.name===current.name?'active':''}" onclick="setHomeSkillCategory('${safe(t.name)}')">${uiIcon(categoryStyle(t.name)[0])}<span>${safe(t.name)}</span></button>`).join('')}</div>`;}
    let list=roomKey==='recommended'?S.services.filter(s=>s.enabled&&s.source==='iCAR 官方'&&s.tableScene&&!s.legacyHidden):roomKey==='mine'&&S.loggedIn?S.services.filter(s=>s.enabled&&s.source==='我的场景'&&!s.template&&!s.legacyHidden):[];
    if(roomKey==='recommended')html=`<div class="motionStageHeader"><span>SMART RECOMMENDATION · ${list.length} 项生效</span><h3>${meta[1]}</h3></div><div class="recommendOrbit">${list.slice(0,6).map((s,i)=>smallCard(s.name,depStatus(s).length?'待恢复：'+depStatus(s).join('、'):s.desc,`openScene('${s.id}')`,'scene r'+i)).join('')}</div><button class="stageManage" onclick="openSettings('services')">管理全部推荐场景 ${icon('arrowRight')}</button>`;
    if(roomKey==='mine')html=`<div class="motionStageHeader"><span>PERSONAL WORKSPACE · ${list.length} 项生效</span><h3>${meta[1]}</h3></div><div class="mineWorkbench">${list.length?list.map((s,i)=>smallCard(s.name,s.trigger||s.desc,`openScene('${s.id}')`,'scene mine')).join(''):`<button class="emptyMine" onclick="openSettings('services')">${icon('plus')}<b>${S.loggedIn?'创建第一个我的场景':'登录后恢复我的场景'}</b><span>用语音描述触发条件和希望完成的任务</span></button>`}</div><button class="stageManage" onclick="openSettings('services')">进入主动服务管理 ${icon('arrowRight')}</button>`;
    stage.innerHTML=html;stage.classList.remove('pageSwap');requestAnimationFrame(()=>stage.classList.add('pageSwap'));updateCaption();}
  window.setHomeSkillCategory=name=>{activeHomeSkill=name;renderStage()};
  window.openAllFunHome=()=>{let i=SKILL_TABS.findIndex(t=>t.name==='iCAR趣玩');if(i>=0){activeSkillTab=i;renderSkillTabs();let title=panel.querySelector('.skillsPanel .panelHead h2'),copy=panel.querySelector('.skillsPanel .panelHead p'),featured=new Set(funNames);panel.querySelectorAll('.skillsPanel .unifiedSkillCard').forEach(card=>{let trigger=card.querySelector('[data-skill]');if(trigger&&featured.has(trigger.dataset.skill))card.remove()});if(title)title.textContent='更多趣玩';if(copy)copy.textContent='首页之外的趣玩内容，选择后可直接体验';back.textContent='返回 iCAR 趣玩';previousLauncher=picker.querySelector('[data-room-pick="fun"]');setCatalog('fun')}};
  picker.addEventListener('click',e=>{const b=e.target.closest('[data-room-pick]');if(!b)return;home.dataset.room=b.dataset.roomPick;picker.querySelectorAll('[data-room-pick]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));renderStage();});
  picker.querySelector('.pauseMotion').addEventListener('click',e=>{const paused=home.classList.toggle('motionPaused');const b=e.currentTarget;b.setAttribute('aria-pressed',String(paused));b.setAttribute('aria-label',paused?'播放动效':'暂停动效');b.innerHTML=icon(paused?'play':'pause');});
  function updateCaption(){const off=typeof S!=='undefined'&&!S.voiceAssistantOn;home.dataset.voice=off?'off':'ready';document.getElementById('motionHeroCaption').textContent=off?'语音助手已关闭，可前往设置开启':home.dataset.room==='fun'?'点击形象，直接和我说':captions[home.dataset.room];}
  function updateSummary(){const official=document.getElementById('officialCount').textContent,mine=document.getElementById('customCount').textContent;document.getElementById('motionServiceCount').textContent=`推荐 ${official} · 我的 ${mine}`;renderStage();}
  const observer=new MutationObserver(updateSummary);
  ['officialCount','customCount','homeLead'].forEach(id=>observer.observe(document.getElementById(id),{childList:true,characterData:true,subtree:true}));
  updateSummary();
  document.querySelector('#bottomNav .navBtn').addEventListener('click',()=>{setCatalog(null);});
  home.addEventListener('animationend',e=>{if(e.animationName==='roomEnter')home.classList.remove('motionEntering');});
})();
