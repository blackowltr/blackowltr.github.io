---
title: 💾 Installation
sidebar_position: 2
keywords: [Initia, Installation, snapshot, statesync, update, useful commands]
---

# Installation

Follow this guide to install and configure an Initia node on your system.

## Updating the System
First, update your system packages to ensure you have the latest security patches and updates.
```shell
sudo apt update && sudo apt upgrade -y
```

## Installing the Necessary Libraries
Install the required libraries and tools for building and running the node.
```shell
sudo apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp jq llvm tmux htop screen gcc lz4 -y < "/dev/null"
```

## Installing Go
Install Go, which is necessary for building the Initia node software. Replace `amd64` with `arm64` if you are on an ARM system.
```shell
ver="1.22.2"
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

:::warning
For ARM servers, use the following code:
```shell
ver="1.22.2"
wget "https://golang.org/dl/go$ver.linux-arm64.tar.gz"
rm -rf /usr/local/go
tar -C /usr/local -xzf "go$ver.linux-arm64.tar.gz"
rm -rf "go$ver.linux-arm64.tar.gz"
echo 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile
echo 'export GOPATH=$HOME/go' >> $HOME/.bash_profile
echo 'export GO111MODULE=on' >> $HOME/.bash_profile
echo 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile
source $HOME/.bash_profile
go version
```
:::

## Setting Variables
Set your environment variables for the node name, wallet name, and port. Adjust the values as needed.
```shell
echo "export INITIA_NODENAME=YourNodeName"  >> $HOME/.bash_profile
echo "export INITIA_WALLET=YourWalletName" >> $HOME/.bash_profile
echo "export INITIA_CHAIN_ID=initiation-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Example
For a node named `BlackOwl-Testnet` and wallet named `BlackOwl-Testnet`, using port `26656`, the commands would be:
```shell
echo "export INITIA_NODENAME=BlackOwl-Testnet"  >> $HOME/.bash_profile
echo "export INITIA_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export INITIA_CHAIN_ID=initiation-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Installing Initia
Clone the Initia repository and install the node software.
```shell
cd $HOME
git clone https://github.com/initia-labs/initia.git
cd initia
git checkout v0.2.15
make install
```

## Configuring and Launching the Node
Configure the node with the following settings.
```shell
initiad config set client chain-id initiation-1
initiad config set client keyring-backend test
initiad init --chain-id initiation-1 $INITIA_NODENAME

# Copy Genesis and addrbook Files
wget https://testnet.blackowl.tech/initia/genesis.json -O $HOME/.initia/config/genesis.json
wget https://testnet.blackowl.tech/initia/addrbook.json -O $HOME/.initia/config/addrbook.json

# Set Minimum Gas Price
sed -i 's|minimum-gas-prices =.*|minimum-gas-prices = "0.15uinit,0.01uusdc"|g' $HOME/.initia/config/app.toml

# Disable Indexer (Optional)
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.initia/config/config.toml

# Set SEED and PEERS
SEEDS="2eaa272622d1ba6796100ab39f58c75d458b9dbc@34.142.181.82:26656,c28827cb96c14c905b127b92065a3fb4cd77d7f6@testnet-seeds.whispernode.com:25756"
PEERS="480ecb724a038abc6cbba1da0094fadb348ea20c@129.226.144.252:26656,46e75102878a26aac6c8ea70269605030cd689ec@51.195.62.112:56116,454be72f212062922913df7d406531794abc6828@43.157.28.44:26656,292cb203a4eb763ff3c6831584168602ad0f88eb@89.117.62.43:26656,3ffc950d7cb2004c39ea5723dd90ed005bc300c1@43.131.45.201:26656,be785c01a6069e4318773125fbf1022ddceecea3@65.109.52.162:26699,c6edf09a70cb97593a2780d319878fae942a7817@43.131.57.124:26656,7cb4a173f4df8720149cebb31853a853d4613d4c@43.130.234.14:26656,5a96e49cf4d3642b9b65ef916ac5f5e4cab32b1f@167.99.62.81:26656,70e4ebf09abac1fba668bd4009e84bcba1be8a81@43.134.241.186:26656,de778930fdbb2ad3608e3345a8f033e1110833f2@185.185.83.51:26656,777d04dde7692bd6ed0166bfbc8f47c44be4dd15@80.92.206.17:33756,72573b8b5af3b1b4006e5e8d136bf8d38edc4fc5@43.153.133.80:26656,82620f605fa8777c16a7b78d7be15ea43ecefefd@161.35.74.142:26656,8db320e665dbe123af20c4a5c667a17dc146f4d0@51.75.144.149:24556,365649da2ac0cbaf2772a9160fca3ac764ff880b@52.172.218.19:53456,bed55ace8bd4dfc3de2e50e4f96636cc24ce1728@38.242.148.54:26656,3ed532fa688a49823655e87169a47f12922dc843@43.130.228.15:26656,3b944bcae9db0b88d8419adde8e26188a6a5ef5d@65.109.59.22:25756,cf7ecafede4a07d9e2f4b62ae9065365b6ebe7bd@178.128.103.210:26656"
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.initia/config/config.toml
sed -i 's/max_num_inbound_peers =.*/max_num_inbound_peers = 150/g' $HOME/.initia/config/config.toml
sed -i 's/max_num_outbound_peers =.*/max_num_outbound_peers = 150/g' $HOME/.initia/config/config.toml

# Enable Prometheus
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.initia/config/config.toml

# Set Pruning Options
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.initia/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.initia/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.initia/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.initia/config/app.toml

# Creating the Service File
tee /etc/systemd/system/initiad.service > /dev/null << EOF
[Unit]
Description=Initia Node
After=network-online.target

[Service]
User=$USER
ExecStart=$(which initiad) start
Restart=on-failure
RestartSec=3
LimitNOFILE=65535

[Install]
WantedBy=multi-user.target
EOF
```

## Enabling and Starting the Service
Reload the systemd configuration and start the Initia service.
```shell
systemctl daemon-reload
systemctl enable initiad
systemctl start initiad
```

## Checking the Logs
Monitor the logs to ensure the node is running correctly.
```shell
journalctl -u initiad -f -o cat
```  

:::warning
Wait for your node to sync before proceeding to the next steps.
:::

## Checking Synchronization
Check the synchronization status. Do not proceed until the output shows `false` for catching up.
```shell
initiad status 2>&1 | jq .sync_info
```

```shell
initiad status 2>&1 | jq -r .sync_info.catching_up
```

## Wallet Management

### Creating a New Wallet
Create a new wallet. Do not change the `$INITIA_WALLET` variable.
```shell 
initiad keys add WALLET
```  

### Importing an Existing Wallet
If you have an existing wallet, import it.
```shell
initiad keys add WALLET --recover
```

## Completely Deleting the Node
To remove the Initia node and related files from your system, run:
```shell 
systemctl stop initiad && \
systemctl disable initiad && \
rm /etc/systemd/system/initiad.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .initia initia && \
rm -rf $(which initiad)
sed -i '/INITIA_/d' ~/.bash_profile
```
