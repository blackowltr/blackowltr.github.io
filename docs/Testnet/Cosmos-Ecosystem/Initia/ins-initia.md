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
echo "export INITIA_WALLET=BlackOwl-Testnet" >> $HOME/.bash_profile
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

### Configuring and Launching the Node

#### Configure the Node Settings
```shell
initiad config set client chain-id initiation-1
initiad config set client keyring-backend test
initiad init --chain-id initiation-1 $INITIA_NODENAME
```

#### Copy Genesis and Addrbook Files
```shell
wget https://testnet.blackowl.tech/initia/genesis.json -O $HOME/.initia/config/genesis.json
wget https://testnet.blackowl.tech/initia/addrbook.json -O $HOME/.initia/config/addrbook.json
```

#### Set Minimum Gas Price
```shell
sed -i 's|minimum-gas-prices =.*|minimum-gas-prices = "0.15uinit,0.01uusdc"|g' $HOME/.initia/config/app.toml
```

#### Disable Indexer (Optional)
```shell
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.initia/config/config.toml
```

#### Set SEED and PEERS
```shell
SEEDS="3f472746f46493309650e5a033076689996c8881@initia-testnet.rpc.kjnodes.com:17959,c28827cb96c14c905b127b92065a3fb4cd77d7f6@testnet-seeds.whispernode.com:25756"
PEERS="8c1309669bbc16c1b14e0cf6b532887980287760@51.91.80.136:11356,ab6da2cf3c972d5f19b1b0bd1517e89d664d4340@138.201.85.253:26757,c86acc6936b8cb85d75c68880092f99da8d7f380@5.9.85.89:22656,126a49237e1d14237210925eb556428b61a520ad@185.235.240.17:26656,429fa83ed65d0b05bc9f905216704bc59fb7fe79@103.229.81.58:26656,5af6c4d04da9f779772b483c34ec00b906257d80@95.111.225.196:14656,4b46df8b64fcacc2ad5253bc0831369d6bb8d4d5@185.234.65.45:26656,6e8084813784e20608ced00fabea9b076a2e51c6@62.171.171.166:26656,139190a3f948e26747518e48331f7c1ea9c0c899@149.50.103.103:26656,80e589c75a97009d0262a6e7b5c737e9bc984270@88.99.137.138:26656,86ef54e9beb4fd5bdd94d8f26a57b1cf3a3aa269@65.108.129.239:26656,2052c1d959ad68af40ea979dfce406fc8b7a6210@159.69.94.40:26656,a0e73b396fcbc22d5540379475fc919294958f97@194.233.92.45:11656,5042b5b842d9fb4c48d66722caa07a39fd7f37da@149.50.99.67:26656,5f934bd7a9d60919ee67968d72405573b7b14ed0@65.21.202.124:29656,d9b8e50ac286b2e647e4b627935cd225b4c6ceaf@109.199.97.152:656,f01913ad804b63cad146d51ae9f1a483626cfc36@65.21.131.187:22656,3c5e76217271f37fb53c1500248c3148f47dacea@31.222.238.31:26656,2cf0f5e1d5880e5865ce66b26f8b2493203fe637@185.103.102.1:26656,908aa7043abc1599bb869b7209f260228c47ba37@162.55.80.21:26656,7af7011b160421008ce7709f2fbba43ed854b62e@77.221.152.52:26656,c172a4a13d772a48bb075182802d961435f41dec@5.189.131.163:26656,5747f9fa91a76080f6d6f459eb59eb6f0f3e98f0@194.163.168.41:15656,fd64255c42b641483f44661c4d33e5b0d0112693@62.169.18.81:26656,62d97be6102b7c5e6fe221672722348bd7553073@34.126.129.53:26656,8cf83fb644b7caab0a908c061ac9d0236b4442de@88.99.249.107:26656,ede6ae80b65b2a6788ad85b527f0970d837c5b74@88.99.254.62:28656,adcc66fe67427a0ea1d0a0855983a9d89d84ecd3@38.242.159.147:15656,3f5e90ea6ad817bd3650a9b1574f0f554ddb6725@149.50.111.63:14656,b7f2c68d8f38b7c1fec511a0b106bf5e9f05d9cd@46.4.52.158:49656"
sed -i -e "s|^persistent_peers *=.*|persistent_peers = \"$PEERS\"|" $HOME/.initia/config/config.toml
sed -i 's/max_num_inbound_peers =.*/max_num_inbound_peers = 150/g' $HOME/.initia/config/config.toml
sed -i 's/max_num_outbound_peers =.*/max_num_outbound_peers = 150/g' $HOME/.initia/config/config.toml
```

#### Enable Prometheus
```shell
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.initia/config/config.toml
```

#### Set Pruning Options
```shell
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="19"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.initia/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.initia/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.initia/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.initia/config/app.toml
```

#### Creating the Service File
```shell
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
systemctl enable initiad.service
systemctl start initiad.service
```

## Checking the Logs
Monitor the logs to ensure the node is running correctly.
```shell
journalctl -u initiad.service -f -o cat
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
