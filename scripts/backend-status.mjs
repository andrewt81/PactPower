import{spawnSync}from'node:child_process';
const docker=spawnSync('docker',['compose','version'],{encoding:'utf8'});
if(docker.error||docker.status!==0){console.error('Docker Compose non disponibile su questo host. I servizi non sono avviati.');process.exit(1)}
const result=spawnSync('docker',['compose','ps'],{stdio:'inherit'});process.exit(result.status||0);
