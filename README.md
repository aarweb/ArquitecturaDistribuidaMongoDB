# Ejercicio 1.1
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
