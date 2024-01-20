---
title: 📌 Useful Commands
sidebar_position: 2
---

---
title: 📌 Useful Commands
sidebar_position: 2
--- 

## Key Management
### Add New Key
```
arkeod keys add wallet
```
### Recover Existing Key
```
arkeod keys add wallet --recover
```
### List All Keys
```
arkeod keys list
```
### Delete Key
```
arkeod keys delete wallet
```
### Export Key (save to wallet.backup)
```
arkeod keys export wallet
```
### Import Key
```
arkeod keys import wallet wallet.backup
```
### Query Wallet Balance
```
arkeod q bank balances $(arkeod keys show wallet -a)
```
## Validator Operations
### Create New Validator
```
arkeod tx staking create-validator \
--amount=1000000uarkeo \
--pubkey=$(arkeod tendermint show-validator) \
--moniker="YourMonikerName" \
--identity=YOUR_IDENTITY \ #Optional
--details="YOUR_DETAILS" \ #Optional
--chain-id=arkeo \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.01 \
--min-self-delegation=1 \
--from=YOURWALLETNAME \
--gas-prices=0.1uarkeo \
--gas-adjustment=1.5 \
--gas=auto \
-y
```
### Edit Existing Validator
```
arkeod tx staking edit-validator \
--new-moniker="YourMonikerName" \
--chain-id=arkeo \
--commission-rate=0.1 \
--from=YOURWALLETNAME \
--gas-prices=0.1uarkeo \
--gas-adjustment=1.5 \
--gas=auto \
-y
```
### Unjail Validator
```
arkeod tx slashing unjail --from wallet --chain-id arkeo --gas-prices 0.1uarkeo --gas-adjustment 1.5 --gas auto -y
```
### Signing Info
```
arkeod query slashing signing-info $(artelad tendermint show-validator)
```
### List All Active Validators
```
arkeod q staking validators -oj --limit=3000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " \t " + .description.moniker' | sort -gr | nl
```
### List All Inactive Validators
```
arkeod q staking validators -oj --limit=3000 | jq '.validators[] | select(.status=="BOND_STATUS_UNBONDED") or .status=="BOND_STATUS_UNBONDING")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " \t " + .description.moniker' | sort -gr | nl
```
### View Validator Details
```
arkeod q staking validator $(artelad keys show wallet --bech val -a)
```
## Staking and Delegation
### Withdraw Rewards From All Validators
```
arkeod tx distribution withdraw-all-rewards --from wallet --chain-id arkeo --gas-prices 0.1uarkeo --gas-adjustment 1.5 --gas auto -y
```
## Withdraw Commission And Rewards From Your Validator
```
arkeod tx distribution withdraw-rewards $(arkeod keys show wallet --bech val -a) --commission --from wallet --chain-id arkeo --gas-prices 0.1uarkeo --gas-adjustment 1.5 --gas auto -y
```
### Delegate to yourself
```
arkeod tx staking delegate $(arkeod keys show wallet --bech val -a) 1000000uarkeo --from wallet --chain-id arkeo --gas-prices 0.1uart --gas-adjustment 1.5 --gas auto -y
```
### Delegate
```
arkeod tx staking delegate YOUR_TO_VALOPER_ADDRESS 1000000uart --from wallet --chain-id artela_11822-1 --gas-prices 0.1uart --gas-adjustment 1.5 --gas auto -y
```
### Redelegate
```
arkeod tx staking redelegate $(arkeod keys show wallet --bech val -a) YOUR_TO_VALOPER_ADDRESS 1000000uart --from wallet --chain-id artela_11822-1 --gas-prices 0.1uart --gas-adjustment 1.5 --gas auto -y
```
### Unbond
```
arkeod tx staking unbond $(artelad keys show wallet --bech val -a) 1000000uart --from wallet --chain-id artela_11822-1 --gas-prices 0.1uart --gas-adjustment 1.5 --gas auto -y
```
## Transactions and Bank Operations
### Send
```
arkeod tx bank send wallet YOUR_TO_WALLET_ADDRESS 1000000uart --from wallet --chain-id artela_11822-1 --gas-prices 0.1uart --gas-adjustment 1.5 --gas auto -y
```
## Governance Operations
### Create New Text Proposal
```
arkeod tx gov submit-proposal \
--title="Title" \
--description="Description" \
--deposit=1000000uarkeo \
--type="Text" \
--from=wallet \
--gas-prices=0.1uarkeo \
--gas-adjustment=1.5 \
--gas=auto \
-y
```
### List All Proposals
```
arkeod query gov proposals
```
### View Proposal By ID
```
arkeod query gov proposal 1
```
### Vote YES
```
arkeod tx gov vote 1 yes --from wallet --chain-id artela_11822-1 --gas-prices 0.1uart --gas-adjustment 1.5 --gas auto -y
```
### Vote NO
```
arkeod tx gov vote 1 no --from wallet --chain-id artela_11822-1 --gas-prices 0.1uart --gas-adjustment 1.5 --gas auto -y
```
### Vote NO_WITH_VETO
```
arkeod tx gov vote 1 no_with_veto --from wallet --chain-id artela_11822-1 --gas-prices 0.1uart --gas-adjustment 1.5 --gas auto -y
```
### Vote ABSTAIN
```
arkeod tx gov vote 1 abstain --from wallet --chain-id artela_11822-1 --gas-prices 0.1uart --gas-adjustment 1.5 --gas auto -y
```
### Query Transaction
```
arkeod query tx YOUR_TX_ID
```
## Query and Utility Commands
### Change Default Ports
### Update gRPC and Web gRPC ports
```
sed -i.bak -e "s%^address = \"0.0.0.0:9090\"%address = \"0.0.0.0:9090\"%; s%^address = \"0.0.0.0:9091\"%address = \"0.0.0.0:9091\"%" $HOME/.arkeo/config/app.toml
```
### Update proxy_app, laddr, and pprof_laddr ports
```
sed -i.bak -e "s%^proxy_app = \"tcp://127.0.0.1:26658\"%proxy_app = \"tcp://127.0.0.1:26658\"%; s%^laddr = \"tcp://127.0.0.1:26657\"%laddr = \"tcp://127.0.0.1:26657\"%; s%^pprof_laddr = \"localhost:6060\"%pprof_laddr = \"localhost:6060\"%" $HOME/.arkeo/config/config.toml
```
### Update laddr and prometheus_listen_addr ports
```
sed -i.bak -e "s%^laddr = \"tcp://0.0.0.0:26656\"%laddr = \"tcp://0.0.0.0:26656\"%; s%^prometheus_listen_addr = \":26660\"%prometheus_listen_addr = \":26660\"%" $HOME/.arkeo/config/app.toml
```
### Update gRPC, Web gRPC, and API ports
```
sed -i.bak -e "s%^address = \"tcp://0.0.0.0:1317\"%address = \"tcp://0.0.0.0:1317\"%" $HOME/.arkeo/config/config.toml
```
### Update Indexer
```
sed -i 's|^indexer *=.*|indexer = "kv"|' $HOME/.arkeo/config/config.toml
```
### Update Pruning
```
sed -i.bak -e 's|^pruning *=.*|pruning = "custom"|; s|^pruning-keep-recent *=.*|pruning-keep-recent = "100"|; s|^pruning-keep-every *=.*|pruning-keep-every = "0"|; s|^pruning-interval *=.*|pruning-interval = "17"|' $HOME/.arkeo/config/app.toml
```
### Get Validator Info
```
arkeod status 2>&1 | jq .ValidatorInfo
```
### Get Denom Info
```
arkeod q bank denom-metadata -oj | jq
```
### Get Sync Status
```
arkeod status 2>&1 | jq .SyncInfo.catching_up
```
### Get Latest Height
```
arkeod status 2>&1 | jq .SyncInfo.latest_block_height
```
### Get Peer
```
echo $(arkeod tendermint show-node-id)'@'$(curl -s ifconfig.me)':'$(cat $HOME/.arkeo/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```
### Reset Node
```
arkeod tendermint unsafe-reset-all --home $HOME/.arkeo --keep-addr-book
```
### Remove Node
```
sudo systemctl stop arkeod && sudo systemctl disable arkeod && sudo rm /etc/systemd/system/arkeod.service && sudo systemctl daemon-reload && rm -rf $HOME/.arkeo && rm -rf arkeo && sudo rm -rf $(which arkeod)
```
### Get IP Address
```
wget -qO- eth0.me
```
### Servername
```
arkeo-testnet-node
```
### Update Servername
```
sudo hostnamectl set-hostname arkeo-testnet-node
```
## Service Management
### Reload Services
```
sudo systemctl daemon-reload
```
### Enable Service
```
sudo systemctl enable arkeod
```
### Disable Service
```
sudo systemctl disable arkeod
```
### Run Service
```
sudo systemctl start arkeod
```
### Stop Service
```
sudo systemctl stop arkeod
```
### Restart Service
```
sudo systemctl restart arkeod
```
### Check Service Status
```
sudo systemctl status arkeod
```
### Check Service Logs
```
sudo journalctl -u arkeod -f --no-hostname -o cat
```
