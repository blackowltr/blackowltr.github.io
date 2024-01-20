---
title: 📸 Snapshot
sidebar_position: 2
---

# Snapshot (every 3 hours)

| Pruning | Custom / 100 / 0 / 10 |
|---------|------------------|
| Indexer |       Null       |

```
sudo systemctl stop arkeod

cp $HOME/.arkeo/data/priv_validator_state.json $HOME/.arkeo/priv_validator_state.json.backup 

arkeod tendermint unsafe-reset-all --home $HOME/.arkeo --keep-addr-book 
curl https://snapshots.blackowl.tech/arkeo/arkeo_latest.tar.lz4 | lz4 -dc - | tar -xf - -C $HOME/.arkeo

mv $HOME/.arkeo/priv_validator_state.json.backup $HOME/.arkeo/data/priv_validator_state.json 

sudo systemctl restart arkeod
sudo journalctl -u arkeod -f --no-hostname -o cat
```
