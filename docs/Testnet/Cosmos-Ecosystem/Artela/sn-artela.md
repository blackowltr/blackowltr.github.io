---
title: 📸 Snapshot
sidebar_position: 2
---

# Snapshot (every 3 hours)
```
systemctl stop artelad

cp $HOME/.artelad/data/priv_validator_state.json $HOME/.artelad/priv_validator_state.json.backup 

artelad tendermint unsafe-reset-all --home $HOME/.artelad --keep-addr-book
SNAP_NAME=$(curl -s https://snapshots.blackowl.tech/artela/ | egrep -o ">artela_11822-1_.*\.tar.lz4" | tr -d ">")
curl https://snapshots.blackowl.tech/artela/${SNAP_NAME} | lz4 -dc - | tar -xf - -C $HOME/.artelad

mv $HOME/.artelad/priv_validator_state.json.backup $HOME/.artelad/data/priv_validator_state.json 

systemctl restart artelad && journalctl -u artelad -f -o cat
```

