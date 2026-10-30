window.__timelines = window.__timelines || {};
const tl = gsap.timeline({paused:true});
function handoff(selector, time, direction, flashId){
  const from = direction==='right' ? 'inset(0 0 0 100%)' : direction==='bottom' ? 'inset(100% 0 0 0)' : 'inset(0 100% 0 0)';
  tl.set(selector,{opacity:1,zIndex:20},time);
  tl.from(selector,{clipPath:from,duration:.42,ease:'power4.inOut'},time);
  tl.from(flashId,{opacity:.7,scaleX:1,duration:.07,ease:'steps(1)'},time+.03);
  tl.to(flashId,{opacity:0,scaleX:0,duration:.18,ease:'power3.in'},time+.10);
}
// Opening logo strike and alert build
 tl.from('.intro',{x:-54,opacity:0,duration:.55,ease:'power3.out'},.16);
 tl.from('.intro-title',{y:58,opacity:0,skewX:-8,duration:.66,ease:'expo.out'},.27);
 tl.from('.intro-status',{scaleX:.6,transformOrigin:'left center',opacity:0,duration:.34,ease:'back.out(2)'},.66);
 tl.from('.intro-tag',{y:25,opacity:0,duration:.44,ease:'power2.out'},.9);
 tl.from('.intro-copy',{y:18,opacity:0,duration:.4,ease:'power3.out'},1.07);
 tl.from('.intro-foot',{y:18,opacity:0,duration:.45,ease:'power2.out'},1.23);
 tl.from('.intro-poster',{scale:.82,opacity:0,filter:'brightness(3)',duration:.58,ease:'expo.out'},.48);
 tl.from('.intro-serial',{x:34,opacity:0,duration:.35,ease:'power3.out'},.95);
 tl.from('#s1 .rule',{scaleX:0,transformOrigin:'left center',duration:.38,ease:'power4.out'},1.12);
 tl.from('#s1 .scanline',{y:1080,duration:1.3,ease:'power1.inOut'},.15);
 // Scene 2 — operation room
 handoff('#s2',4.72,'right','#f1');
 tl.from('.operator',{x:-74,opacity:0,duration:.64,ease:'power3.out'},4.9);
 tl.from('.room-kicker',{y:22,opacity:0,duration:.35,ease:'power2.out'},4.91);
 tl.from('.room-title',{y:48,opacity:0,duration:.56,ease:'expo.out'},5.06);
 tl.from('.room-sub',{x:35,opacity:0,duration:.5,ease:'power3.out'},5.34);
 tl.from('.room-rule',{scaleX:0,transformOrigin:'left center',duration:.42,ease:'power4.out'},5.58);
 tl.from('.room-motto',{y:25,opacity:0,duration:.44,ease:'power2.out'},5.72);
 tl.from('.room-chant',{x:27,opacity:0,duration:.42,ease:'back.out(1.4)'},5.98);
 // Scene 3 — split vectors
 handoff('#s3',12.72,'bottom','#f2');
 tl.from('.battle-kicker',{x:-24,opacity:0,duration:.38,ease:'power2.out'},12.91);
 tl.from('.battle-title',{y:32,opacity:0,duration:.5,ease:'expo.out'},13.02);
 tl.from('.battle-label',{x:34,opacity:0,duration:.35,ease:'power3.out'},13.12);
 tl.from('.attack',{x:-42,opacity:0,duration:.5,ease:'power3.out'},13.08);
 tl.from('.defend',{x:42,opacity:0,duration:.5,ease:'power2.out'},13.16);
 tl.from('.attack-title',{scale:.82,opacity:0,duration:.42,ease:'back.out(1.7)'},13.37);
 tl.from('.defend-title',{scale:.82,opacity:0,duration:.48,ease:'expo.out'},13.43);
 tl.from(['.atk-1','.atk-2','.atk-3'],{x:-20,opacity:0,duration:.3,stagger:.14,ease:'power2.out'},13.65);
 tl.from(['.def-1','.def-2','.def-3'],{x:22,opacity:0,duration:.32,stagger:.14,ease:'power3.out'},13.76);
 // Scene 4 — competition dashboard
 handoff('#s4',22.72,'right','#f3');
 tl.from('.dash-kicker',{x:-25,opacity:0,duration:.35,ease:'power2.out'},22.91);
 tl.from('.dash-title',{y:34,opacity:0,duration:.52,ease:'expo.out'},23.02);
 tl.from('.live',{scale:.84,opacity:0,duration:.32,ease:'back.out(1.6)'},23.12);
 tl.from('.dash-terminal',{y:30,opacity:0,duration:.45,ease:'power3.out'},23.21);
 tl.from('.dash-score',{x:42,opacity:0,duration:.46,ease:'power2.out'},23.33);
 tl.from('.dash-feature',{y:28,opacity:0,duration:.42,ease:'power3.out'},23.62);
 // Scene 5 — reward reveal
 handoff('#s5',30.72,'bottom','#f4');
 tl.from('.prize-kicker',{y:20,opacity:0,duration:.34,ease:'power2.out'},30.92);
 tl.from('.prize-title',{y:42,opacity:0,scale:.94,duration:.56,ease:'expo.out'},31.02);
 tl.from('.prize-sub',{y:21,opacity:0,duration:.38,ease:'power3.out'},31.22);
 tl.from('.p1',{y:66,rotation:-3,opacity:0,duration:.52,ease:'back.out(1.6)'},31.46);
 tl.from('.p2',{y:76,opacity:0,duration:.58,ease:'expo.out'},31.58);
 tl.from('.p3',{y:66,rotation:3,opacity:0,duration:.52,ease:'power3.out'},31.7);
 tl.from('.prize-more',{y:25,opacity:0,duration:.44,ease:'power2.out'},32.12);
 // Final affiliation and exact logo assets
 handoff('#s6',37.72,'right','#f5');
 tl.from('.final-kicker',{y:19,opacity:0,duration:.33,ease:'power2.out'},37.91);
 tl.from('.final-title',{scale:.76,opacity:0,filter:'blur(10px)',duration:.72,ease:'expo.out'},38.02);
 tl.from('.final-motto',{y:20,opacity:0,duration:.42,ease:'back.out(1.4)'},38.28);
 tl.from('.final-sub',{y:18,opacity:0,duration:.36,ease:'power2.out'},38.47);
 tl.from('.final-poster',{x:-40,scale:.9,opacity:0,duration:.56,ease:'power3.out'},38.78);
 tl.from('.final-ham',{x:40,scale:.9,opacity:0,duration:.56,ease:'power2.out'},38.89);
 tl.from('.final-aff',{y:22,opacity:0,duration:.4,ease:'expo.out'},39.16);
 tl.from('.final-part',{y:15,opacity:0,duration:.36,ease:'power3.out'},39.38);
 tl.from('.lower-line',{scaleX:0,transformOrigin:'center center',duration:.48,ease:'power3.out'},38.67);
 tl.to('#s6',{opacity:0,duration:.32,ease:'power2.in'},44.68);
window.__timelines['defcon-promo']=tl;

