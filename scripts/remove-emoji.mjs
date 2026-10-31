import fs from 'node:fs';import path from 'node:path';
const root=path.resolve('src');
for(const file of walk(root)){if(!/\.(tsx?|json)$/.test(file))continue;const text=fs.readFileSync(file,'utf8');const clean=text.replace(/[\p{Extended_Pictographic}\p{Regional_Indicator}\p{Emoji_Modifier}\uFE0F\u200D\u20E3]/gu,'');if(clean!==text)fs.writeFileSync(file,clean)}
function* walk(p){for(const e of fs.readdirSync(p,{withFileTypes:true})){const f=path.join(p,e.name);if(e.isDirectory())yield* walk(f);else yield f}}
