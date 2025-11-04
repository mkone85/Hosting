'use client';
import React from 'react';

export default function Maintenance() {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(to top,#e8f0fc,#fff 56%,#bdd3e5 96%)',
      overflow: 'hidden',
      position: 'relative',
      fontFamily: 'Quicksand, Arial, sans-serif',
    }}>
      {/* Schneefall */}
      <Snowfall/>
      {/* Zwei moderne, differenzierte Turmdrehkräne */}
      <div style={{position:'absolute', left:'10vw', bottom:225, zIndex:3}}>
        <TowerCrane type="left" scale={1.9}/>
      </div>
      <div style={{position:'absolute', right:'12vw', bottom:195, zIndex:3, transform:'scaleX(-1)'}}>
        <TowerCrane type="right" scale={1.72}/>
      </div>
      {/* Winterliche Server-Racks in der Mitte */}
      <div style={{position:'absolute', left:'50%', bottom:120, zIndex:2, transform:'translateX(-50%) scale(1.25)'}}>
        <ServerRack/>
      </div>
      {/* Animierter, größerer Schneemann */}
      <div style={{position:'absolute', left:'13%', bottom:116, zIndex:1}}>
        <AnimatedSnowman/>
      </div>
      {/* Schneelandschaft */}
      <svg width="100vw" height="46vh" style={{position : 'absolute', bottom:0, left:0, zIndex:0, width:'100vw'}} viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="720" cy="410" rx="760" ry="130" fill="#eaf6fe" />
        <ellipse cx="340" cy="370" rx="150" ry="29" fill="#d4e7f8" />
        <ellipse cx="1240" cy="388" rx="140" ry="35" fill="#d8edf7" />
      </svg>
      {/* Drei professionelle Baustellen-Schilder */}
      <div style={{position:'absolute', left:'25vw', bottom:80, zIndex:5}}><ProConstructionSign size={1.35}/></div>
      <div style={{position:'absolute', left:'62vw', bottom:76, zIndex:5, transform:'scale(1.13)'}}><ProConstructionSign size={1.15}/></div>
      <div style={{position:'absolute', left:'47vw', bottom:119, zIndex:5, transform:'scale(0.95) rotate(-7deg)'}}><ProConstructionSign size={1.08}/></div>
      {/* Ursprünglicher Textbereich */}
      <section style={{position:'relative', zIndex:10, marginTop:40, background:'rgba(255,255,255,0.93)', borderRadius:14, boxShadow:'0 4px 16px #a2bad7ba', padding:'2.1rem 2.8rem 1.6rem', textAlign:'center', maxWidth:480, border:'1.7px solid #e5edf7'}}>
        <span style={{fontSize:54, display:'block',marginBottom:10,color:'#2a384d',lineHeight:1}}>🚧</span>
        <h1 style={{fontSize:'2.36rem', fontWeight:700, color:'#163453', marginBottom:17, letterSpacing:0.01}}>Wartungsarbeiten im Gange</h1>
        <p style={{fontSize:'1.18rem', color:'#233957', lineHeight:1.55, fontWeight: 500}}>
          Unser Service wird derzeit winterfit gemacht und verbessert.<br/>
          Die Webseite steht Ihnen zeitnah wieder wie gewohnt zur Verfügung.<br/>
          Vielen Dank für Ihr Verständnis.
        </p>
      </section>
    </div>
  );
}

// Animierter Schneemann
function AnimatedSnowman() {
  const [sway, setSway] = React.useState(0);
  const [tilt, setTilt] = React.useState(0);
  React.useEffect(()=>{
    let id: number;
    const animate = ()=>{
      const t = Date.now()/1800;
      setSway(Math.sin(t)*2.8); // leichtes Wackeln
      setTilt(Math.sin(t*0.7+1.2)*1.5); // leichtes Neigen
      id = requestAnimationFrame(animate);
    };
    animate();
    return ()=>cancelAnimationFrame(id);
  },[]);
  return (
    <svg width="130" height="158" style={{transform:`translateX(${sway}px) rotate(${tilt}deg)`, transition:'transform 0.2s ease-out'}} viewBox="0 0 130 158">
      <ellipse cx="65" cy="130" rx="48" ry="27" fill="#fff" stroke="#b7cee3" strokeWidth="2.4"/>
      <ellipse cx="65" cy="80" rx="34" ry="34" fill="#fff" stroke="#b7cee3" strokeWidth="2.4"/>
      <ellipse cx="65" cy="42" rx="20" ry="20" fill="#fff" stroke="#b7cee3" strokeWidth="2.4"/>
      <ellipse cx="58" cy="38" rx="2.6" ry="2.6" fill="#535a6d"/>
      <ellipse cx="72" cy="38" rx="2.6" ry="2.6" fill="#535a6d"/>
      <polygon points="65,42 65,48 76,45" fill="#f69e29"/>
      <path d="M56,50 q9,7 18,0" stroke="#535a6d" strokeWidth="1.6" fill="none"/>
      <rect x="50" y="20" width="30" height="11" fill="#22262e" stroke="#101215" strokeWidth="1.5" rx="3"/>
      <rect x="46" y="31" width="38" height="8" fill="#2d3462" stroke="#101215" strokeWidth="1.5" rx="3"/>
      <ellipse cx="65" cy="72" rx="1.6" ry="1.7" fill="#333"/>
      <ellipse cx="65" cy="81" rx="1.6" ry="1.7" fill="#333"/>
      <ellipse cx="65" cy="90" rx="1.6" ry="1.7" fill="#333"/>
    </svg>
  );
}

// Moderner Turmdrehkran
function TowerCrane({type, scale}:{type:"left"|"right",scale:number}) {
  // Moderner und detaillierter SVG-Baustellenkran
  // Laufkatze animiert, rechter Kran hebt Objekt
  const [cart, setCart] = React.useState(type=="left"?47:92);
  React.useEffect(()=>{
    let id: number;
    const loop = ()=>{
      const t = Date.now()/750;
      if(type==="left") setCart(47+Math.sin(t+2)*26);
      else setCart(92-Math.sin(t+3.6)*33);
      id = requestAnimationFrame(loop);
    };
    loop();
    return ()=>cancelAnimationFrame(id);
  },[type]);
  // Standard-Kranfarben und Schlagschatten
  return (
    <svg width={230*scale} height={160*scale} style={{userSelect:'none', pointerEvents:'none', filter:"drop-shadow(0px 7px 15px #bfc8d7ab)", borderRadius:11}} viewBox="0 0 230 160" fill="none">
      {/* Mast mit Gitterstruktur */}
      <rect x="27" y="36" width="11" height="90" rx="4.5" fill="#e2e1dc" stroke="#a8aeb2" strokeWidth="2.9"/>
      <g stroke="#c1bb8b" strokeWidth="2.5">
        {[0,18,36,54,72].map(y=>(<line key={y} x1="27" y1={46+y} x2="38" y2={63+y} />))}
        {[0,18,36,54,72].map(y=>(<line key={y+100} x1="38" y1={46+y} x2="27" y2={63+y} />))}
      </g>
      {/* Ausleger mit eig. Laufkatze */}
      <rect x="34" y="22" width="123" height="10" rx="4.2" fill="#fbe34e" stroke="#c0a52b" strokeWidth="2.5"/>
      {/* Seil von Laufkatze */}
      <rect x={cart+21.5} y="32" width="2.8" height={type==="left"?35:54} rx="1.1" fill="#b6babb"/>
      {/* Laufkatze */}
      <ellipse cx={cart+23} cy="27" rx="8.8" ry="7.1" fill="#ecd03c" stroke="#ac9d24" strokeWidth="2"/>
      {/* Kabine und Turmabschluss */}
      <rect x="21" y="17" width="23" height="16" rx="7" fill="#e9ebee" stroke="#acb4c6"/>
      {/* Ballastkörper (links) oder Kasten (rechts) */}
      {type==="left"
        ?<rect x="20" y="7" width="20" height="11" rx="5.2" fill="#bcb493" stroke="#8a846a"/>
        :<g>
          <rect x={cart+16.8} y={type=="right"?86:67} width={type=="right"?19:11} height={type=="right"?19:11} rx="2.2" fill="#d4dad4" stroke="#989e9a"/>
          <rect x={cart+19.5} y={type=="right"?85.5:66} width={type=="right"?14:7} height={type=="right"?14:7} rx="2.1" fill="#b5bcc2" stroke="#898e99"/>
        </g>}
      {/* Betonbasis */}
      <ellipse cx="32.5" cy="134" rx="18.8" ry="4.6" fill="#bcbdc7" fillOpacity=".67"/>
      {/* Stahlseildräht */}
      <line x1={cart+23} y1="34" x2={cart+23} y2={type=="left"?69:88} stroke="#939393" strokeWidth="2.2"/>
      {/* Kranhaken und ggf. geschlossene Last (rechts) */}
      {type==="right"
       ? <g>
        <ellipse cx={cart+23} cy="98.5" rx="5.5" ry="4.5" fill="#feedbe" stroke="#c0a54e" strokeWidth="1.1"/>
        {/* Box */}
        <rect x={cart+17.8} y="102" width="11" height="13" rx="2.4" fill="#d1d3db" stroke="#aaa"/>
        <rect x={cart+19.7} y="107" width="7.2" height="5.1" rx="1.2" fill="#a5afc3" stroke="#8fa1b6"/>
       </g>
       : <ellipse cx={cart+23} cy="77" rx="5.2" ry="4.2" fill="#ffe6ae" stroke="#c0a54e" strokeWidth="1.1"/>}
      {/* Gegengewicht (Short-End) */}
      <rect x="21" y="28" width="16" height="8" rx="3.5" fill="#9f9656" stroke="#7b7946"/>
    </svg>
  );
}

// SVG Server Rack
function ServerRack() {
  // Leichte "Eisbildung" an Kanten, oranger Wartungs-Warnbalken oben
  return (
    <svg width="182" height="120" viewBox="0 0 182 120" fill="none">
      {/* Rack-Body */}
      <rect x="22" y="16" width="136" height="87" rx="13" fill="#f7f9fa" stroke="#566482" strokeWidth="3"/>
      {/* Servers */}
      <rect x="35" y="33" width="111" height="9" rx="3.2" fill="#dde6ed" stroke="#b9c4ce" />
      <rect x="35" y="45" width="111" height="9" rx="3.2" fill="#dde6ed" stroke="#b9c4ce" />
      <rect x="35" y="57" width="111" height="9" rx="3.2" fill="#dde6ed" stroke="#b9c4ce" />
      <rect x="35" y="69" width="111" height="9" rx="3.2" fill="#dde6ed" stroke="#b9c4ce" />
      {/* Lights */}
      {[42, 54, 66, 78].map((y,i)=>([
        <ellipse key={'g'+i} cx="46" cy={y} rx="2.1" ry="2.5" fill="#5fe95f"/>,
        <ellipse key={'r'+i} cx="55.3" cy={y} rx="2.1" ry="2.5" fill="#df2f2a"/>
      ]))}
      {/* snow/ice details */}
      <ellipse cx="113" cy="16" rx="21" ry="6.5" fill="#c7e7ff" fillOpacity=".55"/>
      <ellipse cx="74" cy="13" rx="10" ry="5" fill="#f2fafe"/>
      <ellipse cx="164" cy="41" rx="7" ry="4.7" fill="#e7f3fe"/>
      <ellipse cx="22" cy="29" rx="7" ry="2.8" fill="#d4e3f5"/>
      {/* Wartungsbalken oben */}
      <rect x="22" y="16" width="136" height="16" rx="7.5" fill="#ff8743" stroke="#b84b08" strokeWidth="1.9"/>
      <g>
        <rect x="40" y="21.5" width="20" height="5.5" rx="2.7" fill="#fff4e5"/>
        <text x="50" y="26" textAnchor="middle" fontSize="7.2" fontWeight="bold" fill="#fd7c00">WARTUNG</text>
        <path d="M68,22 l8,4 l-8,4 z" fill="#b61c00"/>
        <rect x="118" y="23.3" width="27" height="4.7" rx="1.8" fill="#ffe7a6"/><text x="132" y="27" textAnchor="middle" fontSize="6" fill="#ac6b00" fontWeight="bold">Admin-Panel</text>
      </g>
      {/* Werkzeugsymbol */}
      <g>
        <rect x="145" y="18" width="10" height="10" rx="4.8" fill="#fff6e1" stroke="#b58a44"/>
        <path d="M151.3,23c0.55,1.05 2.2,2.09 2.7,1.57 0.47,-0.49 0.2,-1.17 1.12,-1.36 0.57,-0.13 1.12,0.09 1.35,-0.63 0.27,-0.81 -0.57,-1.31 -1.23,-1.23 -0.7,0.09 -1.29,0.6 -2.19,1.33z" fill="#ffac42"/>
        <circle cx="151" cy="19.5" r="1.05" fill="#f7a109"/><rect x="149.3" y="25" width="2.2" height="2.2" rx="0.6" fill="#e45c1b"/>
      </g>
    </svg>
  )
}

function ProConstructionSign({size=1.0}:{size?:number}) {
  // Skalierbares, kontrastreiches Baustellenschild
  const [tilt, setTilt] = React.useState(0);
  React.useEffect(()=>{
    let id:number, base=Math.random()*10;
    const anim=()=>{
      setTilt(Math.sin(Date.now()/920+base)*2.1);
      id=requestAnimationFrame(anim);
    };
    anim();
    return ()=>cancelAnimationFrame(id)
  },[]);
  return (
    <svg width={59*size} height={56*size} style={{userSelect:'none', pointerEvents:'none', transform:`rotate(${tilt}deg)`}} viewBox="0 0 59 56" fill="none">
      <rect x="6" y="11" width="47" height="33" rx="6.5" fill="#ffd120" stroke="#d1a116" strokeWidth="3.3"/>
      <rect x="16" y="26" width="27" height="8" rx="3.5" fill="#fff4c1" stroke="#d1a116" strokeWidth=".7"/>
      <path d="M12,17 l35,0" stroke="#a58313" strokeWidth="2.5" strokeDasharray="8 6"/>
      <text x="29.5" y="38.7" textAnchor="middle" fontSize="13.2" fontWeight="bold" fill="#4b3e13">WARTUNG</text>
    </svg>
  );
}

function Snowfall({count=35}) {
  // Schneeflocken deutlich größer und mehr Variation
  const [flakes, setFlakes] = React.useState(() => {
    const arr=[]; for(let i=0;i<count;++i) arr.push({id:i,x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight*0.93,size:Math.random()*12+8,speed:Math.random()*0.8+0.5,opacity:Math.random()*0.28+0.43});
    return arr;
  });
  React.useEffect(()=>{
    let anim=true;
    function tick() {
      setFlakes(prev=>prev.map(f=>{
        let y = f.y+f.speed;
        let x = f.x + Math.sin((Date.now()/1100)+f.id)*0.37;
        if(y>window.innerHeight*0.98) y = -16-Math.random()*40;
        return {...f, x, y};
      }));
      if(anim) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    return ()=>{ anim=false };
  },[]);
  return (
    <>
      {flakes.map(f=>(
        <div key={f.id} style={{
          position:'fixed', left:f.x, top:f.y, width:f.size, height:f.size,
          pointerEvents:'none', background:'#fff', borderRadius:'50%', opacity:f.opacity,
          boxShadow:'0 0 12px #b6d1f2b7', zIndex:1, filter:'blur(0.33px)'}}/>
      ))}
    </>
  )
}
