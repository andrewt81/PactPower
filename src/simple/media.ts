import security from './photos-security.json';
import original from './photos.json';
import ground from './photos-ground.json';
import airsea from './photos-airsea.json';
import civil from './photos-civil.json';
import extra from './photos-extra.json';
import bombers from './photos-bombers.json';
import ordnance from './photos-ordnance.json';
export type PhotoMetadata={src:string;thumbnail?:string;source:string;original?:string;author:string;license:string;licenseUrl:string;attribution:string;identifiedAs:string;checkedAt:string;description?:string;changes?:string;illustrative?:boolean;endorsement?:string;framingNote?:string};
export type PhotographedItem={id?:string;name:string;photo?:PhotoMetadata|null};
export const PHOTOGRAPHS:Record<string,PhotoMetadata>={...original,...ground,...airsea,...civil,...extra,...bombers,...ordnance,...security} as Record<string,PhotoMetadata>;
export function photograph(id:string):PhotoMetadata|null{return PHOTOGRAPHS[id]||null}
