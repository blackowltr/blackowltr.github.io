---
title: 💾 Installation
sidebar_position: 2
---

### Updating the System
```shell
apt update && apt upgrade -y
```

### Installing the Necessary Libraries
```shell
apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp jq llvm tmux htop screen gcc lz4 -y < "/dev/null"
```

### Installing Go
```shell
ver="1.21.5"
wget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"
rm -rf /usr/local/go
tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"
rm -rf "go$ver.linux-amd64.tar.gz"
echo 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile
echo 'export GOPATH=$HOME/go' >> $HOME/.bash_profile
echo 'export GO111MODULE=on' >> $HOME/.bash_profile
echo 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile
source $HOME/.bash_profile
go version
```

### Setting Variables
The areas you need to change are written below.
* `$PRYZM_NODENAME` your validator name
* `$PRYZM_WALLET` your wallet name
*  If another node is using the port, you can change it below. You must enter a different value where it says `11`, again as two digits.
```shell
echo "export PRYZM_NODENAME=$PRYZM_NODENAME"  >> $HOME/.bash_profile
echo "export PRYZM_WALLET=$PRYZM_WALLET" >> $HOME/.bash_profile
echo "export PRYZM_PORT=11" >> $HOME/.bash_profile
echo "export PRYZM_CHAIN_ID=fPRYZM_9052-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Sample
Let's assume that your Node (`PRYZM_NODENAME`) and Wallet (`PRYZM_WALLET`) name is `Mehmet` and the port you will use (`PRYZM_PORT`) will be `16656`. The code will be arranged as shown below.
```shell
echo "export PRYZM_NODENAME=Mehmet"  >> $HOME/.bash_profile
echo "export PRYZM_WALLET=Mehmet" >> $HOME/.bash_profile
echo "export PRYZM_PORT=16" >> $HOME/.bash_profile
echo "export PRYZM_CHAIN_ID=fPRYZM_9052-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Installing Pryzm
```
cd $HOME
wget https://storage.googleapis.com/pryzm-resources/pryzmd-0.9.0-linux-amd64.tar.gz
tar -xzvf pryzmd-0.9.0-linux-amd64.tar.gz
mv pryzmd /root/go/bin
pryzmd version
```
The version output will be `0.9.0`.

### Configuring and Launching the Node
We copy and paste the codes below without making any changes.

```
pryzmd config keyring-backend test
pryzmd config chain-id $PRYZM_CHAIN_ID
pryzmd init --chain-id $PRYZM_CHAIN_ID $PRYZM_NODENAME

# Copying the Genesis File
wget  -O $HOME/.pryzm/config/genesis.json

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.25aacre"|g' $HOME/.pryzm/config/app.toml

# Closing Indexer-Optional
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.pryzm/config/config.toml

# Set up SEED and PEERS
SEEDS=""
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.babylond/config/config.toml

# Enabling Prometheus
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.pryzm/config/config.toml

# Set up Pruning 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.pryzm/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.pryzm/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.pryzm/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.pryzm/config/app.toml

# Set up Ports
sed -i.bak -e "s%^proxy_app = \"tcp://127.0.0.1:26658\"%proxy_app = \"tcp://127.0.0.1:${PRYZM_PORT}658\"%; s%^laddr = \"tcp://127.0.0.1:26657\"%laddr = \"tcp://127.0.0.1:${PRYZM_PORT}657\"%; s%^pprof_laddr = \"localhost:6060\"%pprof_laddr = \"localhost:${PRYZM_PORT}060\"%; s%^laddr = \"tcp://0.0.0.0:26656\"%laddr = \"tcp://0.0.0.0:${PRYZM_PORT}656\"%; s%^prometheus_listen_addr = \":26660\"%prometheus_listen_addr = \":${PRYZM_PORT}660\"%" $HOME/.pryzm/config/config.toml
sed -i.bak -e "s%^address = \"tcp://0.0.0.0:1317\"%address = \"tcp://0.0.0.0:${PRYZM_PORT}317\"%; s%^address = \":8080\"%address = \":${PRYZM_PORT}080\"%; s%^address = \"0.0.0.0:8545\"%address = \"0.0.0.0:${PRYZM_PORT}545\"%; s%^ws-address = \"0.0.0.0:8546\"%ws-address = \"0.0.0.0:${PRYZM_PORT}546\"%; s%^address = \"0.0.0.0:9090\"%address = \"0.0.0.0:${PRYZM_PORT}090\"%; s%^address = \"0.0.0.0:9091\"%address = \"0.0.0.0:${PRYZM_PORT}091\"%" $HOME/.pryzm/config/app.toml
sed -i.bak -e "s%^node = \"tcp://localhost:26657\"%node = \"tcp://localhost:${PRYZM_PORT}657\"%" $HOME/.pryzm/config/client.toml

# Adding External Address
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${PRYZM_PORT}656\"|g" ~/.pryzm/config/config.toml > ~/.pryzm/config/config.toml.tmp
mv ~/.pryzm/config/config.toml.tmp  ~/.pryzm/config/config.toml

# Creating the Service File
tee /etc/systemd/system.pryzm.service > /dev/null << EOF
[Unit]
Description.pryzm Node
After=network-online.target
[Service]
User=$USER
ExecStart=$(which.pryzm) start
Restart=on-failure
RestartSec=3
LimitNOFILE=65535
[Install]
WantedBy=multi-user.target
EOF
```

### Enabling the Service
```shell
systemctl daemon-reload
systemctl enable.pryzm
```

### Checking the Logs
```shell
journalctl -u.pryzm -f -o cat
```  

🔴 **AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC.**

### Senkronizasyonu Kontrol Etme
`false` çıktısı almadıkça bir sonraki yani validator oluşturma adımına geçmiyoruz.
```shell
pryzmd status 2>&1 | jq .SyncInfo
```

### Wallet

### Creating a New Wallet
We do not change the `$PRYZM_WALLET` section, we named our wallet with variables at the beginning of the installation.
```shell 
pryzmd keys add $PRYZM_WALLET
```  

### Importing an Existing Wallet
```shell
pryzmd keys add $PRYZM_WALLET --recover
```

### Wallet and Valoper Info
Here we add our wallet and valve information to the variable.

```shell
PRYZM_WALLET_ADDRESS=$.pryzm keys show $PRYZM_WALLET -a)
PRYZM_VALOPER_ADDRESS=$.pryzm keys show $PRYZM_WALLET --bech val -a)
```

```shell
echo 'export PRYZM_WALLET_ADDRESS='${PRYZM_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export PRYZM_VALOPER_ADDRESS='${PRYZM_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Checking Wallet Balance
```
pryzmd query bank balances $PRYZM_WALLET_ADDRESS
```

🔴 **Eşleşme tamamlandıysa aşağıdaki adıma geçiyoruz.**


### Creating Validator
You do not need to make any changes to the following command other than the places specified below;
    - `identity` where it says `XXXX1111XXXX1111` you write your identification number given to you as a member of the [keybase](https://keybase.io/) site.
    - `details` You can write information about yourself where it says `Always forward with the Anatolian Team 🚀`.
    - `website` where it says `https://anatolianteam.com`, if you have a website or twitter etc. You can write your address.
    - `security-contact` Your email address.
 ```shell 
pryzmd tx staking create-validator \
--amount=490000000000000000000aacre \
--pubkey=$.pryzm tendermint show-validator) \
--moniker=$PRYZM_NODENAME \
--chain-id=$PRYZM_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25aacre \
--gas-adjustment=1.5 \
--gas=auto \
--from=$PRYZM_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

### USEFUL COMMANDS

### Checking Logs
```
journalctl -fu.pryzm -o cat
```

### Starting Node
```
systemctl start.pryzm
```

### Stopping the Node
```
systemctl stop acquired
```

### Restarting the Node
```
systemctl restart.pryzm
```

### Node Sync Status
```
acquired status 2>&1 | jq .SyncInfo
```
```
curl -s localhost:26657/status | jq .result.sync_info
```

### Validator Information
```
acquired status 2>&1 | jq .ValidatorInfo
```

### Node Information
```
acquired status 2>&1 | jq .NodeInfo
```

### Learning Node ID
```
pryzmd tendermint show-node-id
```

### Learning Node IP Address
```
curl icanhazip.com
```

### Viewing the List of Wallets
```
acquired keys list
```

### Seeing Wallet Address
```
pryzmd keys show $PRYZM_WALLET --bech val -a
```

### Importing Wallet
```
acquired keys add $PRYZM_WALLET --recover
```

### Deleting Your Wallet
```
acquired keys delete $PRYZM_WALLET
```

### Checking Wallet Balance
```
pryzmd query bank balances $PRYZM_WALLET_ADDRESS
```

### Transferring from One Wallet to Another
```
pryzmd tx bank send $PRYZM_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000aacre
```

### Participating in Proposal Voting
```
pryzmd tx gov vote 1 yes --from $PRYZM_WALLET --chain-id=$PRYZM_CHAIN_ID --gas-prices 0.00001aacre --gas-adjustment 1.5 --gas auto -y
```

### Validatore Staking / Delegation
```
pryzmd tx staking delegate $PRYZM_VALOPER_ADDRESS 100000000aacre --from=$PRYZM_WALLET --chain-id=$PRYZM_CHAIN_ID --gas-prices 0.00001aacre --gas-adjustment 1.5 --gas auto -y
```

### Staking / Redelegate from Current Validator to Other Validator
`srcValidatorAddress`: Address of the current staked validator
`destValidatorAddress`: Address of the new validator to be staked
```
pryzmd tx staking redelegate srcValidatorAddress destValidatorAddress 100000000aacre --from=$PRYZM_WALLET --chain-id=$PRYZM_CHAIN_ID --gas-prices 0.00001aacre --gas-adjustment 1.5 --gas auto -y
```

### Withdraw Rewards
```
pryzmd tx distribution withdraw-all-rewards --from=$PRYZM_WALLET --chain-id=$PRYZM_CHAIN_ID --gas-prices 0.00001aacre --gas-adjustment 1.5 --gas auto -y
```

### Withdrawing Commission Rewards

```
pryzmd tx distribution withdraw-rewards $PRYZM_VALOPER_ADDRESS --from=$PRYZM_WALLET --commission --chain-id=$PRYZM_CHAIN_ID --gas-prices 0.00001aacre --gas-adjustment 1.5 --gas auto -y
```

### Changing Validator Name
Write your new validator/moniker name where it says 'NEW-NODE-NAME'. It should not contain TR characters.
```
pryzmd tx staking edit-validator \
--moniker=NEW-NODE-NAME\
--chain-id=$PRYZM_CHAIN_ID\
--from=$PRYZM_WALLET\
--gas-prices 0.00001aacre\
--gas-adjustment 1.5\
--gas auto -y
```

### Changing Validator Commission Rate
We change the value in the section that says 'commission-rate'.
```
pryzmd tx staking edit-validator --commission-rate "0.02" --moniker=$PRYZM_NODENAME --from $PRYZM_WALLET --chain-id $PRYZM_CHAIN_ID --gas-prices 0.00001aacre --gas-adjustment 1.5 --gas auto - y
```

### Editing Your Validator Information
Before changing this information, you must register at https://keybase.io/ and receive your 16-digit code (XXXX0000XXXX0000) as seen in the code below. Also profile picture etc. You can also adjust the settings.
`$PRYZM_NODENAME` and `$PRYZM_WALLET`: Your Validator (Moniker) and wallet name, you do not need to change it. Because we added it to variables.
```
pryzmd tx staking edit-validator \
--moniker=$PRYZM_NODENAME\
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$PRYZM_CHAIN_ID\
--from=$PRYZM_WALLET
```

### Recovering Validator from Jail
```
pryzmd tx slashing unjail --from $PRYZM_WALLET --chain-id $PRYZM_CHAIN_ID --gas-prices 0.00001aacre --gas-adjustment 1.5 --gas auto -y

```

### Completely Deleting the Node

```
systemctl stop acquired && \
systemctl disable acquired && \
rm /etc/systemd/system.pryzm.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .pryzm.pryzm && \
rm -rf $(which acres)
sed -i '/PRYZM_/d' ~/.bash_profile
```
​