import{SECURITY_RULES}from './security';
import{ARMAMENTS}from './ordnance';
import{MODELS,HOMES,PLANES,INVESTMENTS_V4}from './rules';
import{POLICE_LEVELS}from './socialRules';
import{photograph,type PhotographedItem,type PhotoMetadata}from './media';
export interface GameObject extends PhotographedItem{id:string;group:string;abstract:boolean;photo:PhotoMetadata|null}
export const GAME_OBJECTS:GameObject[]=[
 ...Object.entries(SECURITY_RULES.investments).map(([key,c])=>({id:`security-${key}`,name:c.label,photo:photograph(`security-${key}`),group:'Prevenzione',abstract:true})),
 {id:'security-team',name:'Squadra di sicurezza astratta',photo:photograph('security-team'),group:'Forze speciali',abstract:true},
 ...ARMAMENTS.map(w=>({id:w.id,name:w.name,photo:w.photo,group:({bomb:'Bombe',airAir:'Missili aria-aria',airSurface:'Missili aria-superficie',antiShip:'Missili antinave',cruise:'Missili da crociera',defense:'Difese'}as Record<string,string>)[w.group],abstract:false})),
 ...MODELS.map(m=>({id:m.id,name:m.name,photo:m.photo,group:m.category,abstract:false})),
 ...HOMES.map(m=>({id:m.id,name:m.name,photo:photograph(m.id),group:'Residenze',abstract:true})),
 ...PLANES.map(m=>({id:m.id,name:m.name,photo:photograph(m.id),group:'Aerei presidenziali',abstract:false})),
 ...POLICE_LEVELS.map(p=>({id:`police-${p.level}`,name:`Polizia ${p.name}`,photo:photograph(`police-${p.level}`),group:'Livelli della polizia',abstract:true})),
 ...Object.entries(INVESTMENTS_V4).map(([key,p])=>({id:`investment-${key}`,name:p.label,photo:photograph(`investment-${key}`),group:'Investimenti',abstract:true}))
];
export function objectPhoto(id:string){return GAME_OBJECTS.find(o=>o.id===id)||{id,name:id,photo:null,group:'Oggetto',abstract:false}}
