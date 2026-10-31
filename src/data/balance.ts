import type {InvestmentKind} from '../domain/types';
export const BALANCE={start:Date.UTC(2026,0,1,8),hour:3600000,day:86400000,realMsPerHour:1000,taxMin:10,taxMax:40,maxActiveOrders:4,maxSimulationStep:86400000*366};
export const INVESTMENTS:Record<InvestmentKind,{name:string;cost:number;hours:number;maintenance:number;effect:string;icon:string}>={
 industry:{name:'Polo industriale',cost:120,hours:48,maintenance:1.8,effect:'+12 industria · maggiori entrate fiscali',icon:'factory'},
 research:{name:'Centro di ricerca',cost:85,hours:36,maintenance:1.2,effect:'+10 ricerca · +2 influenza strategica',icon:'flask'},
 infrastructure:{name:'Rete infrastrutturale',cost:100,hours:40,maintenance:1.5,effect:'+12 infrastrutture · +4 stabilità',icon:'network'},
 welfare:{name:'Programma sociale',cost:55,hours:24,maintenance:0,effect:'+8 consenso · +5 stabilità',icon:'heart'}
};
