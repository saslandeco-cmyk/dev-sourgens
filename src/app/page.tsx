"use client";

import { useMemo, useState } from "react";

const products = [
  {id:"terrasse",name:"Lames de terrasse",cat:"Extérieur",price:"À partir de 18,90 € / m²",desc:"Créez un espace extérieur chaleureux et durable.",symbol:"▤"},
  {id:"bardage",name:"Bardage bois",cat:"Extérieur",price:"Sur devis",desc:"Du caractère et une protection pour votre façade.",symbol:"▥"},
  {id:"planches",name:"Planches & plateaux",cat:"Aménagement",price:"À partir de 12 € / pièce",desc:"Pour vos étagères, meubles et projets créatifs.",symbol:"▰"},
  {id:"construction",name:"Bois de construction",cat:"Construction",price:"Sur devis",desc:"Des sections adaptées à vos travaux.",symbol:"⌂"},
  {id:"chauffage",name:"Bois de chauffage",cat:"Chauffage",price:"Selon volume",desc:"Préparez la saison avec le bon combustible.",symbol:"♨"},
  {id:"decoupe",name:"Découpe à la demande",cat:"Services",price:"Selon projet",desc:"Expliquez-nous votre idée, nous vous conseillons.",symbol:"✂"}
];
const categories = ["Tout","Extérieur","Aménagement","Construction","Chauffage","Services"];

export default function Home() {
  const [category,setCategory] = useState("Tout");
  const [product,setProduct] = useState("terrasse");
  const [qty,setQty] = useState("25");
  const [unit,setUnit] = useState("m²");
  const [postcode,setPostcode] = useState("");
  const [details,setDetails] = useState("");
  const [sent,setSent] = useState(false);
  const visible = useMemo(()=>category==="Tout"?products:products.filter(p=>p.cat===category),[category]);

  function submit(e:React.FormEvent<HTMLFormElement>){e.preventDefault();setSent(true);}

  return <main>
    <div className="topbar"><div className="wrap topbar-inner"><span>🌲 Du bois, du bon sens, du local.</span><span>Conseils personnalisés · Vente aux particuliers</span></div></div>
    <header className="wrap header">
      <a className="brand" href="#"><span className="logo">B<span>✳</span></span><span><b>BOIS & FORÊT</b><small>SCIERIE · BOIS · CONSEIL</small></span></a>
      <nav><a href="#produits">Nos bois</a><a href="#savoir">Notre savoir-faire</a><a href="#devis">Votre projet</a></nav>
      <a className="btn dark header-btn" href="#devis">Demander un devis <span>↗</span></a>
    </header>

    <section className="hero">
      <div className="wrap hero-inner">
        <div className="eyebrow light"><i/> LA SCIERIE QUI VOUS ACCOMPAGNE</div>
        <h1>Le bon bois.<br/><em>Pour vos projets.</em></h1>
        <p>Terrasse, jardin, rénovation ou création : trouvez le bois qu’il vous faut, avec les conseils de ceux qui le travaillent.</p>
        <div className="hero-actions"><a className="btn lime" href="#produits">Découvrir nos produits <span>↓</span></a><a className="plain-link" href="#savoir">Découvrez notre scierie ↗</a></div>
        <div className="hero-facts"><div><b>01</b><span>Un interlocuteur<br/>à votre écoute</span></div><div><b>02</b><span>Des conseils pour<br/>bien choisir</span></div><div><b>03</b><span>Du bois pour faire<br/>durer vos idées</span></div></div>
      </div>
      <span className="hero-note">LE BOIS, MATIÈRE VIVANTE</span>
    </section>

    <section className="trust"><div className="wrap trust-grid">
      <div><b>✳</b><span><strong>Conseil humain</strong><small>Du choix à la réalisation</small></span></div>
      <div><b>⌂</b><span><strong>Bois sélectionné</strong><small>Selon l’usage souhaité</small></span></div>
      <div><b>↗</b><span><strong>Projet personnalisé</strong><small>Quantités adaptées</small></span></div>
      <div><b>♡</b><span><strong>Proximité</strong><small>Une scierie à taille humaine</small></span></div>
    </div></section>

    <section id="produits" className="wrap section">
      <div className="section-head"><div><div className="eyebrow"><i/> NOS ESSENTIELS</div><h2>Du bois pour <em>tout imaginer.</em></h2></div><p>Du premier coup de crayon à la dernière planche, trouvez la matière qui donnera vie à vos envies.</p></div>
      <div className="filters">{categories.map(c=><button key={c} className={category===c?"filter active":"filter"} onClick={()=>setCategory(c)}>{c}</button>)}</div>
      <div className="products">{visible.map((p,i)=><article className="product" key={p.id}>
        <div className={"product-art art-"+p.id}><span className="tag">{i===0?"Très demandé":p.cat}</span><span className="wood">{p.symbol}</span><small>0{i+1}</small></div>
        <div className="product-content"><small className="category">{p.cat}</small><h3>{p.name}</h3><p>{p.desc}</p><div className="product-foot"><b>{p.price}</b><button aria-label={"Demander un devis "+p.name} onClick={()=>{setProduct(p.id);document.getElementById("devis")?.scrollIntoView({behavior:"smooth"});}}>↗</button></div></div>
      </article>)}</div>
      <p className="more">Un besoin particulier ? <a href="#devis">Parlons de votre projet ↗</a></p>
    </section>

    <section id="savoir" className="story"><div className="wrap story-grid">
      <div className="story-photo"><div className="stamp">LE BOIS<br/><small>AU NATUREL</small><b>✳</b></div><div className="photo-caption"><small>MATIÈRE BRUTE</small><strong>Le plaisir du bois bien choisi.</strong></div></div>
      <div className="story-copy"><div className="eyebrow"><i/> NOTRE SAVOIR-FAIRE</div><h2>Le bois a une histoire.<br/><em>Votre projet aussi.</em></h2><h3>Un bon projet commence par le bon conseil.</h3><p>Choix de l’essence, dimensions, finition, quantité : nous vous aidons à comprendre les possibilités et à choisir le bois adapté à votre usage, à votre budget et à vos envies.</p><ul><li>✓ Des conseils accessibles, même si vous débutez</li><li>✓ Des produits pensés pour vos usages réels</li><li>✓ Une réponse claire à chaque demande</li></ul><a className="btn dark" href="#devis">Parlons de votre idée <span>↗</span></a></div>
    </div></section>

    <section className="wrap process"><div className="eyebrow center"><i/> SIMPLE COMME UN COUP DE SCIE</div><h2>Votre projet, <em>en 3 étapes.</em></h2><div className="steps">
      <article><small>01</small><b>⌕</b><h3>Vous nous expliquez</h3><p>Décrivez votre idée, vos dimensions et l’usage prévu.</p></article>
      <article><small>02</small><b>✳</b><h3>Nous vous conseillons</h3><p>Nous vous orientons vers le bon produit et les bonnes quantités.</p></article>
      <article><small>03</small><b>↗</b><h3>Vous passez à l’action</h3><p>Vous recevez une proposition claire avant de vous décider.</p></article>
    </div></section>

    <section id="devis" className="quote"><div className="wrap quote-grid">
      <div className="quote-copy"><div className="eyebrow light"><i/> À VOUS DE JOUER</div><h2>On donne vie<br/>à votre <em>projet ?</em></h2><p>Quelques informations suffisent pour préparer un premier échange. Pas besoin de tout savoir : on vous accompagne.</p><div className="contact-note"><b>✳</b><span><strong>Un projet un peu spécial ?</strong><small>Expliquez-nous votre besoin, même s’il ne rentre dans aucune case.</small></span></div></div>
      <form className="form" onSubmit={submit}>{sent?<div className="success"><b>✓</b><h3>Votre demande est prête !</h3><p>Cette démonstration n’envoie pas réellement de message. Le site final pourra transmettre votre demande à la scierie.</p><button className="btn dark" type="button" onClick={()=>setSent(false)}>Modifier la demande</button></div>:<>
        <div className="form-top"><b>VOTRE DEMANDE</b><span>01 — 02</span></div>
        <label>Quel produit vous intéresse ?<select value={product} onChange={e=>setProduct(e.target.value)}>{products.map(p=><option value={p.id} key={p.id}>{p.name}</option>)}</select></label>
        <div className="form-row"><label>Quantité estimée<input value={qty} onChange={e=>setQty(e.target.value)} placeholder="Ex. 25"/></label><label>Unité<select value={unit} onChange={e=>setUnit(e.target.value)}><option>m²</option><option>m³</option><option>ml</option><option>pièces</option><option>À définir</option></select></label></div>
        <label>Code postal du projet<input value={postcode} onChange={e=>setPostcode(e.target.value)} maxLength={5} inputMode="numeric" placeholder="Ex. 40000"/></label>
        <label>Quelques détails (facultatif)<textarea value={details} onChange={e=>setDetails(e.target.value)} rows={3} placeholder="Dimensions, essence souhaitée, usage, délai…"/></label>
        <button className="btn lime submit" type="submit">Préparer ma demande <span>↗</span></button><small className="disclaimer">Prototype : aucune donnée n’est envoyée ni enregistrée.</small>
      </>}</form>
    </div></section>

    <section className="wrap final"><span className="logo">B<span>✳</span></span><div><div className="eyebrow"><i/> VOTRE PROJET COMMENCE ICI</div><h2>Le bois vous inspire ? <em>Nous aussi.</em></h2></div><a className="btn dark" href="#devis">Échanger avec la scierie <span>↗</span></a></section>
    <footer><div className="wrap footer-main"><a className="brand" href="#"><span className="logo">B<span>✳</span></span><span><b>BOIS & FORÊT</b><small>SCIERIE · BOIS · CONSEIL</small></span></a><p>Le bois pour vos projets.<br/>Le conseil pour bien choisir.</p><div><a href="#produits">Nos produits</a><a href="#savoir">La scierie</a><a href="#devis">Contact & devis</a></div></div><div className="wrap footer-bottom"><span>© 2026 Bois & Forêt — Prototype fictif</span><span>Mentions légales · Confidentialité</span><span>Conçu autour du bois, simplement.</span></div></footer>
  </main>;
}
