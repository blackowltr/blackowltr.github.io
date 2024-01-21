---
title: 📸 Snapshot
sidebar_position: 2
---

# Snapshot (every 3 hours)

| Pruning | Custom / 100 / 0 / 10 |
|---------|------------------|
| Indexer |       Null       |


```
sudo systemctl stop pryzmd

cp $HOME/.pryzm/data/priv_validator_state.json $HOME/.pryzm/priv_validator_state.json.backup 

pryzmd tendermint unsafe-reset-all --home $HOME/.pryzm --keep-addr-book 
curl https://snapshots.blackowl.tech/pryzm/indigo-1_latest.tar.lz4 | lz4 -dc - | tar -xf - -C $HOME/.pryzm

mv $HOME/.pryzm/priv_validator_state.json.backup $HOME/.pryzm/data/priv_validator_state.json 

sudo systemctl restart pryzmd
sudo journalctl -u pryzmd -f --no-hostname -o cat
```
