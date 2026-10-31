import type {FeatureCollection} from 'geojson';
export interface ScenarioSource {id:string;publisher:string;title:string;url:string;checkedAt:string;publishedAt?:string}
export interface ScenarioFact {id:string;text:string;certainty:'documentato'|'contestato'|'limite';sources:string[]}
export interface ScenarioActor {id:string;name:string;type:'stato'|'entità-de-facto'|'organizzazione';description:string;playable:boolean;countryId?:string}
export interface ScenarioTerritory {id:string;name:string;controllers:string[];claimants:string[];status:string;disputed:boolean;color:string;pattern?:boolean}
export interface ScenarioDefinition {id:string;version:string;name:string;subtitle:string;referenceDate:string;updatedAt:string;coverage:string;playableCountry:string;actors:ScenarioActor[];facts:ScenarioFact[];sources:ScenarioSource[];territories:ScenarioTerritory[];geometry:FeatureCollection;initial:{treasury:number;industry:number;research:number;infrastructure:number;approval:number;stability:number;military:number;tension:number;trust:number;civilianWellbeing:number;displacement:number;reconstruction:number};rulesVersion:string;objective:string}
export type ScenarioAction='dialogue'|'truce'|'aid'|'rebuild'|'defend'|'withdraw'|'pressure';
export interface ScenarioOrder {id:string;action:ScenarioAction;cost:number;start:number;end:number;duration:number;status:'in-corso'|'completato'|'fallito';chance:number;roll:number;report?:string}
export interface ScenarioSession {definition:ScenarioDefinition;startedAt:number;seed:number;tension:number;trust:number;civilianWellbeing:number;displacement:number;reconstruction:number;readiness:number;truce:boolean;agreement:boolean;orders:ScenarioOrder[];objective:'peace'|'stability'|'rebuild'|'defense'}
