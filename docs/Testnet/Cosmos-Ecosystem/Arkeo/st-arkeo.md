---
title: 🔄 StateSync
sidebar_position: 2
---

# StateSync

sudo systemctl stop arkeod

cp $HOME/.arkeo/data/priv_validator_state.json $HOME/.arkeo/priv_validator_state.json.backup
arkeod tendermint unsafe-reset-all --home $HOME/.arkeo

PEERS="d0ea4996ef579a8ce6d7df171277391a66529700@159.69.208.111:11656,989631cec18e32a03f903f509aa1dabb7e6b958f@95.216.245.247:18656,3f9bc5552f02dce211db24d5e42c118c61c4abde@65.108.8.28:60656,25a9af68f987e254e50d6d7e6a1e68a5a40c1b7c@65.109.92.148:60556,e24fd023395afa87bd18e67782e9b0f1e8532600@65.21.203.204:18656,374facfe63ab4c786d484c2d7d614063190590b7@88.99.213.25:38656,b6b4397c840a2bb4e7ab0b88d309cba57874bd52@65.21.197.25:27656,33d0b2792e54b499d6ff45810a23bdec11679932@10.1.13.210:26656,6e87d9e361b83a5f4ccb4bbcece3792977fa1aaf@158.220.90.189:15756,e033753cac027fc6605a95dab3b3fc5550d4b9bf@65.109.84.33:40656,42e4dce8d0864b3581c486cdd24633f2a2966425@173.212.194.143:26656,2d373b02e7c1d0e3c251bc4ae2b1b7708f252fc8@65.109.93.58:40656"
SNAP_RPC="https://arkeo.rpc.blackowl.tech:443"

sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.arkeo/config/config.toml 

LATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height);
BLOCK_HEIGHT=$((LATEST_HEIGHT - 1000));
TRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash) 

echo $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH && sleep 2

sed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\1true| ;
s|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\1\"$SNAP_RPC,$SNAP_RPC\"| ;
s|^(trust_height[[:space:]]+=[[:space:]]+).*$|\1$BLOCK_HEIGHT| ;
s|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\1\"$TRUST_HASH\"| ;
s|^(seeds[[:space:]]+=[[:space:]]+).*$|\1\"\"|" $HOME/.arkeo/config/config.toml

mv $HOME/.arkeo/priv_validator_state.json.backup $HOME/.arkeo/data/priv_validator_state.json

sudo systemctl restart arkeod && sudo journalctl -u arkeod -f
