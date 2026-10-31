import json
from pathlib import Path
root=Path(__file__).resolve().parents[1]
evidence=json.loads((root/'src/simple/ordnance-evidence.json').read_text())
base={'bomb':(45,50,55,25,1,35),'airAir':(90,60,75,60,2,45),'airSurface':(140,70,80,65,3,55),'antiShip':(220,80,80,70,3,65),'cruise':(420,90,85,80,4,90),'defense':(1000,65,65,20,3,120)}
rows=[]
for index,item in enumerate(evidence):
 price,power,precision,evasion,research,seconds=base[item['group']]
 delta=index%3
 game={'price':price+delta*int(price*.15),'seconds':seconds+delta*10,'power':min(95,power+delta*3),'precision':min(95,precision+delta*3),'evasion':min(95,evasion+delta*3),'research':research,'maintenance':round(.8+delta*.2,2) if item['group']=='defense' else 0,'fictional':True}
 if item['id']=='w-mk82':game.update(price=25,precision=30,evasion=15,research=0)
 rows.append({**item,'consumable':item['group']!='defense','game':game})
assert len(rows)==18 and len({w['id'] for w in rows})==18
(root/'src/simple/ordnance-catalog.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
print('18 armaments; public identity/compatibility sources separate from fictional balance')
