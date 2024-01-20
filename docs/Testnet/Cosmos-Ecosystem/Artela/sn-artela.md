---
title: 📸 Snapshot
sidebar_position: 2
---

# Snapshot (every 3 hours)

| Pruning | Custom / 100 / 0 / 10 |
|---------|------------------|
| Indexer |       Null       |

```
sudo systemctl stop artelad

cp $HOME/.artelad/data/priv_validator_state.json $HOME/.artelad/priv_validator_state.json.backup 

artelad tendermint unsafe-reset-all --home $HOME/.artelad --keep-addr-book 
curl https://snapshots.blackowl.tech/artela/artela_11822-1_latest.tar.lz4 | lz4 -dc - | tar -xf - -C $HOME/.artelad

mv $HOME/.artelad/priv_validator_state.json.backup $HOME/.artelad/data/priv_validator_state.json 

sudo systemctl restart artelad
sudo journalctl -u artelad -f --no-hostname -o cat
```

