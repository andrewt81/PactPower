import{numberLocale}from '../i18n/Locale';
// Italian compact game currency: group thousands consistently, keep decimal comma.
export const credits=(value:number,decimals=2)=>new Intl.NumberFormat(numberLocale(),{maximumFractionDigits:decimals}).format(value);
export const duration=(seconds:number)=>seconds>=60&&seconds%60===0?`${seconds/60} min`:`${seconds}s`;
