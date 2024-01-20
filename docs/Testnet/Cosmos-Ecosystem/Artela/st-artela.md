---
title: 🔄 StateSync
sidebar_position: 2
---

# StateSync

```
sudo systemctl stop artelad

cp $HOME/.artelad/data/priv_validator_state.json $HOME/.artelad/priv_validator_state.json.backup
artelad tendermint unsafe-reset-all --home $HOME/.artelad

peers="dfe7dd4c24a697a88159141c02b73d67b4f156eb@159.69.208.111:36656,3ce1f8245557e108592a8f4ed82bc6aa98c90eee@95.216.203.134:45656,74863693e97dc0f767d1188f2432fb843e0332ff@[2a01:4f9:c011:b99b::1]:26656,37b0d5483aa3eaeb644c5325af41df806780ae67@31.220.82.198:26656,daf85cc04ee8cb70959adcf89096168808db1e26@178.128.112.152:26656,9a54a7007314168a8f96c69b4a4abc3fda6c2662@37.27.38.176:31756,e60ccf5954cf2f324bbe0da7eada0a98437eab29@[2a03:4000:4c:e90:781d:c8ff:fe57:726a]:9656,5a681697eaf8fdf835b49abfa0cbf4b1b7282efd@85.90.246.25:26656,6da44a7b8ff3f74ec5a666a5c18beac28f94c278@144.91.92.140:26656,14d01eabbaef39914565223bb0114694e096f693@84.247.129.151:31756,dd5d8176adf979b0af0a934cf2bbbddab2ec01f3@173.249.13.183:45656"  
SNAP_RPC="https://artela.rpc.blackowl.tech:443"

sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.artelad/config/config.toml 

LATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height);
BLOCK_HEIGHT=$((LATEST_HEIGHT - 1000));
TRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash) 

echo $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH && sleep 2

sed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\1true| ;
s|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\1\"$SNAP_RPC,$SNAP_RPC\"| ;
s|^(trust_height[[:space:]]+=[[:space:]]+).*$|\1$BLOCK_HEIGHT| ;
s|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\1\"$TRUST_HASH\"| ;
s|^(seeds[[:space:]]+=[[:space:]]+).*$|\1\"\"|" $HOME/.artelad/config/config.toml

mv $HOME/.artelad/priv_validator_state.json.backup $HOME/.artelad/data/priv_validator_state.json

sudo systemctl restart artelad && sudo journalctl -u artelad -f
```
