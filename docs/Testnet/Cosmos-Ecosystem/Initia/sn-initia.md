---
title: 📸 Snapshot
sidebar_position: 2
---
```
systemctl stop initiad

cp $HOME/.initia/data/priv_validator_state.json $HOME/.initia/priv_validator_state.json.backup 

initiad tendermint unsafe-reset-all --home $HOME/.initia --keep-addr-book
SNAP_NAME=$(curl -s https://testnet.blackowl.tech/initia/ | egrep -o ">initiation-1.*\.tar.lz4" | tr -d ">")
curl -L https://testnet.blackowl.tech/initia/${SNAP_NAME} | tar -I lz4 -xf - -C $HOME/.initia

mv $HOME/.initia/priv_validator_state.json.backup $HOME/.initia/data/priv_validator_state.json 

systemctl restart initiad && journalctl -u initiad -f -o cat
```
