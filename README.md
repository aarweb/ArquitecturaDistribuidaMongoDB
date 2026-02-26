# Ejercicio 1.1
Para crear el replica set, he creado el script `replica-set.mongodb.js`
Para ejecutarlo dentro de mongo1

```shell
docker exec -i mongo1 mongosh --quiet --file /dev/stdin < replica-set.mongodb.js
```


**Observa la salida de rs.status() e identifica:**
```js
rsLab [direct: primary] test> rs.status()
{
  set: 'rsLab',
  date: ISODate('2026-02-23T16:44:03.357Z'),
  myState: 1,
  term: Long('1'),
  syncSourceHost: '',
  syncSourceId: -1,
  heartbeatIntervalMillis: Long('2000'),
  majorityVoteCount: 2,
  writeMajorityCount: 2,
  votingMembersCount: 3,
  writableVotingMembersCount: 3,
  optimes: {
    lastCommittedOpTime: { ts: Timestamp({ t: 1771865036, i: 1 }), t: Long('1') },
    lastCommittedWallTime: ISODate('2026-02-23T16:43:56.314Z'),
    readConcernMajorityOpTime: { ts: Timestamp({ t: 1771865036, i: 1 }), t: Long('1') },
    appliedOpTime: { ts: Timestamp({ t: 1771865036, i: 1 }), t: Long('1') },
    durableOpTime: { ts: Timestamp({ t: 1771865036, i: 1 }), t: Long('1') },
    lastAppliedWallTime: ISODate('2026-02-23T16:43:56.314Z'),
    lastDurableWallTime: ISODate('2026-02-23T16:43:56.314Z')
  },
  lastStableRecoveryTimestamp: Timestamp({ t: 1771865026, i: 1 }),
  electionCandidateMetrics: {
    lastElectionReason: 'electionTimeout',
    lastElectionDate: ISODate('2026-02-23T16:42:06.237Z'),
    electionTerm: Long('1'),
    lastCommittedOpTimeAtElection: { ts: Timestamp({ t: 1771864915, i: 1 }), t: Long('-1') },
    lastSeenOpTimeAtElection: { ts: Timestamp({ t: 1771864915, i: 1 }), t: Long('-1') },
    numVotesNeeded: 2,
    priorityAtElection: 2,
    electionTimeoutMillis: Long('10000'),
    numCatchUpOps: Long('0'),
    newTermStartDate: ISODate('2026-02-23T16:42:06.302Z'),
    wMajorityWriteAvailabilityDate: ISODate('2026-02-23T16:42:06.809Z')
  },
  electionParticipantMetrics: {
    votedForCandidate: false,
    electionTerm: Long('1'),
    lastVoteDate: ISODate('2026-02-23T16:42:06.282Z'),
    electionCandidateMemberId: 1,
    voteReason: 'already voted for another candidate (mongo1:27017) this term (1)',
    lastAppliedOpTimeAtElection: { ts: Timestamp({ t: 1771864915, i: 1 }), t: Long('-1') },
    maxAppliedOpTimeInSet: { ts: Timestamp({ t: 1771864915, i: 1 }), t: Long('-1') },
    priorityAtElection: 2
  },
  members: [
    {
      _id: 0,
      name: 'mongo1:27017',
      health: 1,
      state: 1,
      stateStr: 'PRIMARY',
      uptime: 435,
      optime: { ts: Timestamp({ t: 1771865036, i: 1 }), t: Long('1') },
      optimeDate: ISODate('2026-02-23T16:43:56.000Z'),
      lastAppliedWallTime: ISODate('2026-02-23T16:43:56.314Z'),
      lastDurableWallTime: ISODate('2026-02-23T16:43:56.314Z'),
      syncSourceHost: '',
      syncSourceId: -1,
      infoMessage: 'Could not find member to sync from',
      electionTime: Timestamp({ t: 1771864926, i: 1 }),
      electionDate: ISODate('2026-02-23T16:42:06.000Z'),
      configVersion: 1,
      configTerm: 1,
      self: true,
      lastHeartbeatMessage: ''
    },
    {
      _id: 1,
      name: 'mongo2:27017',
      health: 1,
      state: 2,
      stateStr: 'SECONDARY',
      uptime: 128,
      optime: { ts: Timestamp({ t: 1771865036, i: 1 }), t: Long('1') },
      optimeDurable: { ts: Timestamp({ t: 1771865036, i: 1 }), t: Long('1') },
      optimeDate: ISODate('2026-02-23T16:43:56.000Z'),
      optimeDurableDate: ISODate('2026-02-23T16:43:56.000Z'),
      lastAppliedWallTime: ISODate('2026-02-23T16:43:56.314Z'),
      lastDurableWallTime: ISODate('2026-02-23T16:43:56.314Z'),
      lastHeartbeat: ISODate('2026-02-23T16:44:02.312Z'),
      lastHeartbeatRecv: ISODate('2026-02-23T16:44:03.306Z'),
      pingMs: Long('0'),
      lastHeartbeatMessage: '',
      syncSourceHost: 'mongo1:27017',
      syncSourceId: 0,
      infoMessage: '',
      configVersion: 1,
      configTerm: 1
    },
    {
      _id: 2,
      name: 'mongo3:27017',
      health: 1,
      state: 2,
      stateStr: 'SECONDARY',
      uptime: 128,
      optime: { ts: Timestamp({ t: 1771865036, i: 1 }), t: Long('1') },
      optimeDurable: { ts: Timestamp({ t: 1771865036, i: 1 }), t: Long('1') },
      optimeDate: ISODate('2026-02-23T16:43:56.000Z'),
      optimeDurableDate: ISODate('2026-02-23T16:43:56.000Z'),
      lastAppliedWallTime: ISODate('2026-02-23T16:43:56.314Z'),
      lastDurableWallTime: ISODate('2026-02-23T16:43:56.314Z'),
      lastHeartbeat: ISODate('2026-02-23T16:44:02.311Z'),
      lastHeartbeatRecv: ISODate('2026-02-23T16:44:03.306Z'),
      pingMs: Long('0'),
      lastHeartbeatMessage: '',
      syncSourceHost: 'mongo1:27017',
      syncSourceId: 0,
      infoMessage: '',
      configVersion: 1,
      configTerm: 1
    }
  ],
  ok: 1,
  '$clusterTime': {
    clusterTime: Timestamp({ t: 1771865036, i: 1 }),
    signature: {
      hash: Binary.createFromBase64('AAAAAAAAAAAAAAAAAAAAAAAAAAA=', 0),
      keyId: Long('0')
    }
  },
  operationTime: Timestamp({ t: 1771865036, i: 1 })
}
```

1. ¿Cuál es el nodo PRIMARY?
    
    El nodo primary es el mongo1

2. ¿Cuál es el electionTime del primario?

    Timestamp({ t: 1771864926, i: 1 })

    Esto es el timestamp de cuando el nodo mongo1 se ha elegido como primario

3. ¿Cuál es el syncSourceHost de cada secundario?
   1. mongo2: mongo1
   2. mongo3: mongo1

El syncSourceHost indica el nodo del conjunto de replicas desde el cual el nodo actual esta sincronizando, en esta caso el nodo secundario (ya sea mongo2 o mongo3) esta sincronizandose con el contenido del nodo primario (mongo1)

Podemos observar que el nodo primario no tiene syncSourceHost, ya que es el nodo primario y emisor original del oplog(registro de operaciones), y seran los secundarios los que copien (sincronizen) de este.

# Ejercicio 1.2
Primero voy a lanzar el seeder, donde le archivo creado le he llamado `insertar.mongodb.js`


```shell
docker exec -i mongo1 mongosh --quiet --file /dev/stdin < insertar.mongodb.js
```

Ahora vamos a comprobar que ha insertado los 10k de datos en mongo1

```shell
docker exec mongo1 mongosh --quiet --eval "db.getSiblingDB('laboratorio').experimentos.countDocuments()"
```
Ahora comprobamos en un nodo secundario
```shell
docker exec mongo2 mongosh --quiet --eval "db.getSiblingDB('laboratorio').experimentos.countDocuments()"
```

*Salida:*
```
base ❯ docker exec mongo2 mongosh --quiet --eval "db.getSiblingDB('laboratorio').experimentos.countDocuments()"
10000
```

Nos vamos a conectar a mongo2
```shell
docker exec -it mongo2 mongosh
```

Habilitamos la lectura en el secundario
Esto es importante, esto usa los datos sincronizados en el secundario, ya que si no se indica, el sincronizara, y retardara esta lectura,
Por ejemplo podria llegar el caso que tenga 1000k de datos nuevos, y al usarlo sin indicar la referencia del secondary, nos retrase esa consulta.
```js
db.getMongo().setReadPref("secondary")
```

Mostramos el numero de documentos
```js
use laboratorio
db.experimentos.countDocuments()
```

Podemos observar que nos muestra 10000


Vamos a simular un failover del primary. Con esto, observaremos como uno de los dos nodos sera el primario.
```shell
docker stop mongo1
```
Ahora comprobamos cual es el nuevo nodo primario

```shell
docker exec -it mongo2 mongosh
```

```shell
rs.status()
```

En mi caso, me ha seleccionado mongo2 como primary, tardando muy poco tiempo

El electionTime: Timestamp({ t: 1771883548, i: 1 }),


```shell
rsLab [direct: primary] laboratorio> db.experimentos.insertOne({
|  experimento_id: 10001,
|  tipo: "test_failover",
|  timestamp: new Date()
| })
{
  acknowledged: true,
  insertedId: ObjectId('699ccd36cf88f2bc928563b1')
}
rsLab [direct: primary] laboratorio> 
```

Reincorporamos mongo1
```shell
docker start mongo1
```

Podemos observar como mongo1, se ha reincorporado como nodo PRIMARY.
  syncSourceHost: '',

  Me muestra que contiene los datos del mongo1

## Ejercicio 1.5
Ejecutamos el script
```shell
docker exec -i mongo1 mongosh --quiet --file /dev/stdin < write_load.mongodb.js
```

Y en la otra terminal
```shell
docker exec -i mongo1 mongosh --quiet --file /dev/stdin < write_load.mongodb.js
```


En un momento dado me ha dado 10s, pero el 70% de las veces me da 10s

Paramos el contenedor docker pause mongo2
```shell
docker pause mongo2
```
El mongo2 me ha desaparecido a los 30s

Al levantarlo 
```shell
docker unpause mongo2
```

Se vuelve a levantar el nodo primario
Tarda casi nada, uno o dos segundos