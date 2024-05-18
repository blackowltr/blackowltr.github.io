---
title: 📌 Useful Commands
sidebar_position: 2
---

## Service Operations

### Checking Logs
```
journalctl -fu 0gchaind -o cat
```

### Starting Node
```
systemctl start 0gchaind
```

### Stopping the Node
```
systemctl stop 0gchaind
```

### Restarting the Node
```
systemctl restart 0gchaind
```

### Node Sync Status
```
0gchaind status 2>&1 | jq .SyncInfo
```

### Node Information
```
0gchaind status 2>&1 | jq .NodeInfo
```

### Learning Node ID
```
0gchaind tendermint show-node-id
```

### Learning Node IP Address
```
curl icanhazip.com
```

### Your node peer
```
echo $(0gchaind tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.0gchain/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Wallet Management

### Viewing the List of Wallets
```
0gchaind keys list
```

### Seeing Wallet Address
```
0gchaind keys show $OG_WALLET --bech val -a
```

### Importing Wallet
```
0gchaind keys add $OG_WALLET --recover
```

### Deleting Your Wallet
```
0gchaind keys delete $OG_WALLET
```

### Checking Wallet Balance
```
0gchaind query bank balances $OG_WALLET_ADDRESS
```

## Tokens

### Transferring from One Wallet to Another
```
0gchaind tx bank send $OG_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000aevmos
```

### Participating in Proposal Voting
```
0gchaind tx gov vote 1 yes --from $OG_WALLET --chain-id=$OG_CHAIN_ID --gas-prices 0.00001aevmos --gas-adjustment 1.5 --gas auto -y
```

### Validatore Staking / Delegation
```
0gchaind tx staking delegate $OG_VALOPER_ADDRESS 100000000aevmos --from=$OG_WALLET --chain-id=$OG_CHAIN_ID --gas-prices 0.00001aevmos --gas-adjustment 1.5 --gas auto -y
```
### Unbonding
```
0gchaind tx staking unbond $(0gchaind keys show $OG_WALLET --bech val -a) 1000000aevmos --from $OG_WALLET --chain-id indigo-1 --fees 3000aevmos -y
```

### Staking / Redelegate from Current Validator to Other Validator
`srcValidatorAddress`: Address of the current staked validator
`destValidatorAddress`: Address of the new validator to be staked
```
0gchaind tx staking redelegate srcValidatorAddress destValidatorAddress 100000000aevmos --from=$OG_WALLET --chain-id=$OG_CHAIN_ID --gas-prices 0.00001aevmos --gas-adjustment 1.5 --gas auto -y
```

### Withdraw Rewards
```
0gchaind tx distribution withdraw-all-rewards --from=$OG_WALLET --chain-id=$OG_CHAIN_ID --gas-prices 0.00001aevmos --gas-adjustment 1.5 --gas auto -y
```

### Withdrawing Commission Rewards

```
0gchaind tx distribution withdraw-rewards $OG_VALOPER_ADDRESS --from=$OG_WALLET --commission --chain-id=$OG_CHAIN_ID --gas-prices 0.00001aevmos --gas-adjustment 1.5 --gas auto -y
```

## Validator operations

### Validator Information
```
0gchaind status 2>&1 | jq .ValidatorInfo
```

### Changing Validator Name
Write your new validator/moniker name where it says 'NEW-NODE-NAME'. It should not contain TR characters.
```
0gchaind tx staking edit-validator \
--new-moniker=NEW-NODE-NAME \
--chain-id=$OG_CHAIN_ID \
--from=$OG_WALLET \
--gas-prices 0.00001aevmos \
--gas-adjustment 1.5 \
--gas auto -y
```

### Changing Validator Commission Rate
We change the value in the section that says 'commission-rate'.
```
0gchaind tx staking edit-validator --commission-rate "0.02" --moniker=$OG_NODENAME --from $OG_WALLET --chain-id $OG_CHAIN_ID --gas-prices 0.00001aevmos --gas-adjustment 1.5 --gas auto - y
```

### Editing Your Validator Information
Before changing this information, you must register at https://keybase.io/ and receive your 16-digit code (XXXX0000XXXX0000) as seen in the code below. Also profile picture etc. You can also adjust the settings.
`$OG_NODENAME` and `$OG_WALLET`: Your Validator (Moniker) and wallet name, you do not need to change it. Because we added it to variables.
```
0gchaind tx staking edit-validator \
--moniker=$OG_NODENAME \
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$OG_CHAIN_ID \
--from=$OG_WALLET
```

### Validator Details
```
0gchaind q staking validator $(0gchaind keys show $OG_WALLET --bech val -a)
```

### Jailing info
```
0gchaind q slashing signing-info $(0gchaind tendermint show-validator)
```

### Slashing parameters
```
0gchaind q slashing params
```

### Recovering Validator from Jail
```
0gchaind tx slashing unjail --from $OG_WALLET --chain-id $OG_CHAIN_ID --gas-prices 0.00001aevmos --gas-adjustment 1.5 --gas auto -y
```

### Active Validators List
```
0gchaind q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Checking Validator key
```
[[ $(0gchaind q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(0gchaind status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### Signing info
```
0gchaind q slashing signing-info $(0gchaind tendermint show-validator)
```
