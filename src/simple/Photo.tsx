import {createPortal} from 'react-dom';
import {useEffect,useRef,useState} from 'react';
import {Camera,Expand} from 'lucide-react';
import type {PhotographedItem,PhotoMetadata} from './media';
export function Photo({item,large=false}:{item:PhotographedItem;large?:boolean}){
 const [failedSrc,setFailedSrc]=useState(''),[open,setOpen]=useState(false),p=item.photo;
 return p&&p.src!==failedSrc?<figure className={`catalog-photo ${large?'photo-large':''}`}><button type="button" className="photo-stage photo-preview" aria-label={`Apri fotografia: ${item.name}`} onClick={()=>setOpen(true)}><img key={p.src} loading="lazy" decoding="async" src={large?p.src:p.thumbnail||p.src} width="960" height="640" alt={`${item.name} — ${p.illustrative?'fotografia illustrativa':'fotografia reale'}`} onError={()=>setFailedSrc(p.src)}/></button>{p.illustrative&&<figcaption>Foto illustrativa</figcaption>}{open&&<FullscreenPhoto item={item} onClose={()=>setOpen(false)}/>}</figure>:<div className="photo-placeholder" role="img" aria-label={`Foto non disponibile: ${item.name}`}><Camera size={30} aria-hidden="true"/><span>Foto non disponibile</span></div>
}
function FullscreenPhoto({item,onClose}:{item:PhotographedItem;onClose:()=>void}){
 const close=useRef<HTMLButtonElement>(null),overlay=useRef<HTMLDivElement>(null),[failed,setFailed]=useState(false);
 useEffect(()=>{const previous=document.activeElement as HTMLElement,overflow=document.body.style.overflow;
 const background=Array.from(document.body.children).filter((node):node is HTMLElement=>node instanceof HTMLElement&&node!==overlay.current);
 const inert=background.map(node=>node.inert);background.forEach(node=>node.inert=true);
 document.body.style.overflow='hidden';close.current?.focus();
 const key=(e:KeyboardEvent)=>{if(e.key==='Escape'){e.stopImmediatePropagation();onClose()}if(e.key==='Tab'){e.preventDefault();close.current?.focus()}};
 window.addEventListener('keydown',key,true);return()=>{background.forEach((node,i)=>node.inert=inert[i]);document.body.style.overflow=overflow;window.removeEventListener('keydown',key,true);previous?.focus()}
 },[]);
 return createPortal(<div ref={overlay} className="photo-fullscreen" role="dialog" aria-modal="true" aria-label={`Fotografia: ${item.name}`}>{item.photo&&!failed?<img src={item.photo.src} alt={item.name} decoding="async" onError={()=>setFailed(true)}/>:<span>Foto non disponibile</span>}<button type="button" ref={close} aria-label="Chiudi fotografia" onClick={onClose}>Chiudi</button></div>,document.body)
}
export function PhotoCredits({photo}:{photo:PhotoMetadata}){return <div className="photo-credits"><p>{photo.illustrative?'Fotografia pertinente a un elemento astratto. Non rappresenta un bene realmente posseduto né una dotazione specifica.':'Identificazione del modello: '+photo.identifiedAs}</p><p>Autore: {photo.author}. Licenza: {photo.license}. Verifica: {photo.checkedAt}.</p><p>Attribuzione: {photo.attribution}</p><a href={photo.source} target="_blank" rel="noreferrer">Fonte della fotografia</a> · <a href={photo.licenseUrl} target="_blank" rel="noreferrer">Licenza</a><p>{photo.changes||'Ridimensionamento e conversione WebP, senza alterazione del soggetto.'}</p>{photo.framingNote&&<p>Inquadratura da migliorare: {photo.framingNote}</p>}{photo.endorsement&&<p>{photo.endorsement}</p>}</div>}
export function PhotoDetails({item}:{item:PhotographedItem}){const[open,setOpen]=useState(false);return <><button type="button" className="photo-open" onClick={()=>setOpen(true)}><Expand size={15} aria-hidden="true"/> Apri fotografia</button>{open&&<FullscreenPhoto item={item} onClose={()=>setOpen(false)}/>}</>}
export function IllustratedObject({item}:{item:PhotographedItem}){return <><Photo item={item}/><PhotoDetails item={item}/></>}
