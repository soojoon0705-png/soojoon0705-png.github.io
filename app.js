'use strict';
const dictionary={en:{
skip:'Skip to content',navStyles:'Styles',navHow:'How it works',navDownload:'Download',getPlugin:'Get BlobHUD',
heroLine1:'See your footage.',heroLine2:'A little differently.',heroDescription:'Frames, color labels, connections.<br>Turn the light and color in your footage into graphics.',heroCta:'Download a test build',heroBottom:'Small details. A different feeling.',exploreStyles:'Explore the styles',actualCaption:'BlobHUD demo · Six styles',heroAlt:'People moving through a public space with six BlobHUD styles applied',sixStyles:'6 DESIGNS + LEGACY / MANUAL',
stylesTitle:'One scene.<br>Many expressions.',stylesIntro:'From paper color labels to precise frames.<br>Choose a style to explore actual plug-in output.',actualCaptionShort:'Style still frame',watchStyle:'Play this style',videoFallback:'Open video file',paper:'Paper Labels',technical:'Technical White',tags:'Color Tags',orbits:'Color Orbits',flow:'Signal Flow',pixel:'Pixel Scanner',
detail1Title:'Make the lines your own',detail1Body:'Straight, curved or right angle.<br>Mix solid, dashed and dotted patterns.',detail2Title:'Colors from your footage',detail2Body:'Paper Labels show average input RGB.<br>The HEX code and color dot stay matched.',detail3Title:'Find what matters',detail3Body:'Choose brightness, color and detection ranges.<br>Fine-tune label placement and element opacity.',
watchShowcase:'Watch the full demo',howTitle:'Start simply.<br>Fine-tune freely.',howIntro:'Begin with recommended settings.<br>Analyze a range when you want less flicker.',step1Title:'Apply it.',step1Body:'Add BlobHUD from Open FX and click Apply Recommended Settings.',step2Title:'Find it.',step2Body:'Use Detection Mask to adjust your selection, then turn it off and choose a design.',step3Title:'Steady it.',step3Body:'Analyze a range to smooth changes in boxes and color. Save your project afterward.',analysisNote:'Saved analysis uses geometric region matching, not AI object tracking. Fast motion, crossings and occlusion can change region IDs.',
downloadTitle:'Your next frame.<br>With BlobHUD.',downloadIntro:'Choose your platform and plug-in language.<br>Each ZIP includes an installer and a guide.',releaseStatus:'Test builds available',releaseDetails:'Versions & validation',packageLanguage:'Plug-in language',downloadZip:'Download ZIP',installationGuide:'Install & usage guide',copyHash:'Copy SHA256',
faqTitle:'A few things<br>to know.',faq1Q:'Can I install Korean and English together?',faq1A:'Only one language is installed at a time. Installing the other language of the same version replaces the current plug-in. Parameter IDs and saved analysis formats are shared. Keep a backup of important projects and check them after switching.',faq2Q:'Why does my system show a security warning?',faq2A:'Current Mac packages have no Developer ID signing or Apple notarization, and Windows packages are unsigned. Security warnings or blocks may appear. Do not disable system-wide security protections.',faq3Q:'Why does the HEX code differ from my eyedropper?',faq3A:'Paper Labels show detected average input RGB without automatic color-space conversion. Values can differ from a display-transformed eyedropper. Saved analysis may also smooth colors over time.',faq4Q:'Playback is heavy, or I cannot see any boxes.',faq4A:'For missing boxes, turn on Auto Detection and Detection Mask, then adjust brightness, color and area limits. For heavy playback, reduce regions/connections or try half/quarter-resolution playback. Inspect final exports at full resolution.',faq5Q:'When do I need to analyze again?',faq5A:'Reanalyze after changing detection/stabilization, source footage, speed/retiming or upstream effects/grading. With Keep Connection Targets on, connection distance/count changes also need reanalysis. Styles, label placement and line patterns can change directly.',faq6Q:'What if I have a problem on Windows?',faq6A:'Extract the entire ZIP and run Run_Checks.cmd. If a check fails, stop before installation and send Check_Result.txt to the creator. Checks use a temporary folder and need no developer tools or administrator privileges.',
footerLine:'A different way to see your footage.',backTop:'Back to top',independent:'An independent OpenFX plug-in for DaVinci Resolve.',downloadManifest:'Download list & checksums',macReleaseTitle:'Korean & English packages',macReleaseBody:'Install and uninstall packages for Apple Silicon Macs. Package creation, installation and English operation were confirmed on the creator’s Mac. This does not guarantee compatibility with every Mac or Resolve version. No Developer ID signing or notarization.',winReleaseTitle:'First Windows x64 test build',winReleaseBody:'Operation was confirmed in the creator’s Windows environment. Package structure and integrity checks were performed, and native verification tools are included. Full installer, uninstall, UAC and every Resolve version have not been validated. Unsigned.',priceNote:'BlobHUD is free to download. Choose the test build for your platform and plug-in language.'}};
const korean={};
document.querySelectorAll('[data-i18n]').forEach(el=>{korean[el.dataset.i18n]=el.innerHTML;});
const copy={ko:{
platformMac:'macOS · Apple Silicon',platformWin:'Windows · Intel / AMD x64',macReq:'macOS 12 이상 · Apple Silicon 맥',winReq:'Windows 10 이상 · Intel·AMD x64 PC',macNotice:'개발자 서명·Apple 공증이 없는 LOCAL 빌드입니다. 다른 맥에서 보안 경고나 설치 차단이 발생할 수 있습니다.',winNotice:'코드 서명이 없는 TEST 빌드입니다. Windows 보안 경고가 나올 수 있습니다. 먼저 포함된 검사 도구를 실행해 주세요.',macFoot:'압축 해제 후 Install 패키지를 실행하세요. 제거용 패키지도 포함돼 있어요.',winFoot:'먼저 Run_Checks.cmd → PASS 확인 → Resolve 종료 → Setup EXE 실행. 제거는 Windows의 설치된 앱에서 할 수 있어요.',copied:'SHA256 체크섬을 복사했어요.',copyFailed:'복사할 수 없습니다. 다운로드 목록에서 체크섬을 확인하세요.',loading:'파일 정보를 불러오는 중입니다.',styleAlt:'스타일의 실제 플러그인 출력 예시',descriptions:{paper:'감지한 영역의 평균 색을 종이 라벨과 HEX 코드로 표시합니다.',technical:'섬세한 흰색 프레임과 정밀한 그래픽으로 영역을 강조합니다.',tags:'번호 캡슐과 강조색으로 감지 영역에 경쾌한 리듬을 더합니다.',orbits:'컬러 곡선으로 가까운 영역 사이의 관계를 연결합니다.',flow:'가느다란 흰색 흐름으로 장면에 담백한 움직임을 더합니다.',pixel:'픽셀 그래픽과 모자이크 영역 효과를 조합합니다.'}},
en:{platformMac:'macOS · Apple Silicon',platformWin:'Windows · Intel / AMD x64',macReq:'macOS 12+ · Apple Silicon Mac',winReq:'Windows 10+ · Intel/AMD x64 PC',macNotice:'LOCAL build without Developer ID signing or Apple notarization. Other Macs may show security warnings or block installation.',winNotice:'Unsigned TEST build. Windows may show security warnings. Run the included native checks before installing.',macFoot:'Extract the ZIP and run the Install package. An Uninstall package is also included.',winFoot:'Run_Checks.cmd → confirm PASS → quit Resolve → run Setup EXE. Remove through Windows Installed apps.',copied:'SHA256 checksum copied.',copyFailed:'Cannot copy. Open the download list to view the checksum.',loading:'Loading package information.',styleAlt:'style, actual plug-in output',descriptions:{paper:'Show each detected region’s average color in a paper label with a HEX code.',technical:'Highlight regions with fine white frames and precise graphic details.',tags:'Add a playful rhythm with numbered capsules and accent colors.',orbits:'Connect nearby detected regions with colorful curves.',flow:'Add a restrained graphic flow with delicate white connections.',pixel:'Combine pixel graphics with mosaic effects inside detected boxes.'}}
};
const state={language:'ko',platform:/Windows/i.test(navigator.userAgent)?'Windows':'macOS',packageLanguage:'KO',style:'paper',demo:'showcase',packages:[]};
const styleOrder=['paper','technical','tags','orbits','flow','pixel'];
const $=id=>document.getElementById(id);
function toast(message){$('toast').textContent=message;$('toast').classList.add('visible');clearTimeout(toast.timer);toast.timer=setTimeout(()=>$('toast').classList.remove('visible'),3500);}
function renderStyle(){
  const id=state.style,locale=state.language,names=locale==='en'?dictionary.en:korean;
  $('styleImage').src='assets/'+id+'.webp';$('styleImage').alt=names[id]+' — '+copy[locale].styleAlt;
  $('styleCounter').textContent=String(styleOrder.indexOf(id)+1).padStart(2,'0')+' / 06';
  $('styleDescription').textContent=copy[locale].descriptions[id];
  document.querySelectorAll('[data-style]').forEach(button=>{const active=button.dataset.style===id;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
}
function currentPackage(){return state.packages.find(p=>p.platform===state.platform&&p.language===state.packageLanguage);}
function renderDownload(){
  const mac=state.platform==='macOS',c=copy[state.language],p=currentPackage();
  document.querySelectorAll('[data-platform]').forEach(button=>{const active=button.dataset.platform===state.platform;button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;});
  $('downloadPanel').setAttribute('aria-labelledby',mac?'tabMac':'tabWindows');
  $('platformTitle').textContent=mac?c.platformMac:c.platformWin;
  $('platformRequirements').textContent=mac?c.macReq:c.winReq;
  $('packageVersion').textContent='VERSION '+(p?p.version:mac?'0.8.4':'0.8.5');
  $('buildBadge').textContent=mac?'LOCAL':'TEST';
  $('packageNotice').textContent=mac?c.macNotice:c.winNotice;
  $('downloadFootnote').textContent=mac?c.macFoot:c.winFoot;
  document.querySelectorAll('input[name=packageLanguage]').forEach(input=>{input.checked=input.value===state.packageLanguage;});
  $('guideLink').href='guides/'+state.platform+'_'+state.packageLanguage+'.html';
  const fallback='BlobHUD_'+(mac?'0.8.4_macOS':'0.8.5_Windows')+'_'+state.packageLanguage+'_'+(mac?'LOCAL':'TEST')+'.zip';
  $('downloadLink').href='downloads/'+(p?p.file:fallback);$('downloadLink').download=p?p.file:fallback;
  $('downloadSize').textContent=p?(p.bytes<1048576?Math.round(p.bytes/1024)+' KB':(p.bytes/1048576).toFixed(1)+' MB'):mac?'217 KB':'3.7 MB';
}
function setLanguage(language){
  state.language=language;state.packageLanguage=language.toUpperCase();
  document.documentElement.lang=language;
  const words=language==='en'?dictionary.en:korean;
  document.querySelectorAll('[data-i18n]').forEach(el=>{const word=words[el.dataset.i18n];if(word!==undefined)el.innerHTML=word;});
  document.querySelectorAll('[data-language]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.language===language)));
  $('heroVideo').setAttribute('aria-label',words.heroAlt||'사람들이 오가는 장면에 여섯 가지 BlobHUD 스타일을 적용한 합본 데모 영상');
  renderDemoText();
  document.querySelectorAll('[data-close]').forEach(button=>button.setAttribute('aria-label',language==='en'?'Close':'닫기'));
  document.title=language==='en'?'BlobHUD — A different way to see your footage':'BlobHUD — 영상에 더하는 새로운 시선';
  try{localStorage.setItem('blobhud-language',language);}catch{}
  renderStyle();renderDownload();
}
document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.language)));
document.querySelectorAll('[data-style]').forEach(button=>button.addEventListener('click',()=>{state.style=button.dataset.style;renderStyle();}));
document.querySelectorAll('[data-platform]').forEach(button=>{
  button.addEventListener('click',()=>{state.platform=button.dataset.platform;renderDownload();});
  button.addEventListener('keydown',event=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(event.key)){event.preventDefault();state.platform=event.key==='Home'?'macOS':event.key==='End'?'Windows':state.platform==='macOS'?'Windows':'macOS';renderDownload();document.querySelector('[data-platform="'+state.platform+'"]').focus();}});
});
document.querySelectorAll('input[name=packageLanguage]').forEach(input=>input.addEventListener('change',()=>{state.packageLanguage=input.value;renderDownload();}));
function renderDemoText(){
  const en=state.language==='en',names=en?dictionary.en:korean;
  $('showcaseTitle').textContent=state.demo==='showcase'?(en?'Six styles · Full demo':'6가지 스타일 · 합본 데모'):names[state.demo]+(en?' · Demo':' · 데모');
  $('showcaseCaption').textContent=state.demo==='showcase'?(en?'Six BlobHUD styles, applied to the same scene.':'같은 장면에 여섯 가지 BlobHUD 스타일을 적용한 합본 영상입니다.'):(en?'Watch '+names[state.demo]+' applied to the scene.':'선택한 ‘'+names[state.demo]+'’ 스타일을 적용한 데모 영상입니다.');
  $('showcaseVideo').setAttribute('aria-label',$('showcaseTitle').textContent);
}
function openDemo(id){
  state.demo=id;renderDemoText();
  const video=$('showcaseVideo');$('heroVideo').pause();video.pause();
  video.src='assets/'+id+'.mp4';video.poster='assets/'+id+'.webp';
  $('demoVideoLink').href='assets/'+id+'.mp4';
  video.load();$('showcaseDialog').showModal();
  video.play().catch(()=>{/* Native controls remain available if playback is blocked. */});
}
$('openShowcase').addEventListener('click',()=>openDemo('showcase'));
$('openStyleVideo').addEventListener('click',()=>openDemo(state.style));
$('heroVideo').addEventListener('play',()=>$('showcaseVideo').pause());
$('openReleases').addEventListener('click',()=>$('releasesDialog').showModal());
document.querySelectorAll('dialog').forEach(dialog=>{
  dialog.querySelector('[data-close]').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
});
$('showcaseDialog').addEventListener('close',()=>$('showcaseVideo').pause());
$('copyChecksum').addEventListener('click',async()=>{
  const p=currentPackage();if(!p){toast(copy[state.language].copyFailed);return;}
  try{await navigator.clipboard.writeText(p.sha256);toast(copy[state.language].copied);}catch{toast(copy[state.language].copyFailed);}
});
let initial='ko';try{const saved=localStorage.getItem('blobhud-language');if(saved==='en')initial='en';}catch{}
setLanguage(initial);
fetch('downloads/releases.json').then(response=>{if(!response.ok)throw new Error('release metadata');return response.json();}).then(data=>{state.packages=data.packages;renderDownload();}).catch(()=>{/* Actual download and guide links remain available without metadata. */});
