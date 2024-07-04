---
title: 🔄 StateSync
sidebar_position: 2
---

systemctl stop initiad

cp $HOME/.initia/data/priv_validator_state.json $HOME/.initia/priv_validator_state.json.backup
initiad tendermint unsafe-reset-all --home $HOME/.initia --keep-addr-book

SNAP_RPC="https://initia-rpc.blackowl.tech:443"

LATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)
BLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))
TRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)

echo $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH

sed -i 's|^enable *=.*|enable = true|' $HOME/.initia/config/config.toml
sed -i 's|^rpc_servers *=.*|rpc_servers = "'$SNAP_RPC,$SNAP_RPC'"|' $HOME/.initia/config/config.toml
sed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.initia/config/config.toml
sed -i 's|^trust_hash *=.*|trust_hash = "'$TRUST_HASH'"|' $HOME/.initia/config/config.toml

mv $HOME/.initia/priv_validator_state.json.backup $HOME/.initia/data/priv_validator_state.json

systemctl restart initiad && journalctl -u initiad -f -o cat
