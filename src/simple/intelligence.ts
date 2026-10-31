import type{SimpleState}from'./engine';
export interface IntelReport{id:string;country:string;at:number;summary:string;reliability:'bassa'|'media'|'alta';urgent:boolean;read:boolean;archived:boolean}
export function recordIntel(s:SimpleState,id:string,country:string,summary:string,reliability:IntelReport['reliability']='media',urgent=false){s.reports??=[];if(s.reports.some(r=>r.id===id))return;s.reports.unshift({id,country,at:s.now,summary,reliability,urgent,read:false,archived:false});}
export function updateReport(s:SimpleState,id:string,action:'read'|'archive'){const n=structuredClone(s),r=n.reports?.find(r=>r.id===id);if(!r||!['read','archive'].includes(action))throw Error('Rapporto non disponibile.');if(action==='read')r.read=true;else r.archived=true;return n}
