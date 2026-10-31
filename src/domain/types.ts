import type {ScenarioSession} from './scenario';
export interface Country {id:string;iso2:string;name:string;center:[number,number];region:string;treasury:number;industry:number;research:number;infrastructure:number;approval:number;stability:number;military:number;relation:number}
export type InvestmentKind='industry'|'research'|'infrastructure'|'welfare';
export interface Order {id:string;kind:InvestmentKind;status:'in-preparazione'|'in-corso'|'completato'|'annullato';cost:number;start:number;duration:number;end:number;report?:string}
export interface GameEvent {id:string;at:number;title:string;detail:string;type:'info'|'success'|'warning';origin?:'scenario-fact'|'simulation'|'player-action'}
export interface GameState {version:1;player:string|null;country:Country|null;now:number;speed:number;paused:boolean;tax:number;orders:Order[];events:GameEvent[];requests:string[];tutorial:boolean;scenario?:ScenarioSession}
