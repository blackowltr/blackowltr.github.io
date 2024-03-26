---
title: 💾 Installation
sidebar_position: 2
keywords: [aligned, installation, snapshot, statesync, update, useful commands]
---

## AlignedLayer Node Installation

In this guide, you will learn how to set up a node on the AlignedLayer network step by step. Follow these steps to start your own node and join the network.

### Step 1: Installing Required Dependencies
> # Updating system packages and installing necessary tools
```bash
sudo apt update -q
sudo apt -y install curl git jq lz4 build-essential fail2ban ufw
sudo apt -y upgrade
```

### Step 2: Configuring Moniker
> # Replace <your-moniker-name> with your own validator name
```bash
MONIKER="YOUR_MONIKER_NAME"
```

### Step 3: Installing Go version 1.21.1
> # Installing Go version 1.21.1
```bash
sudo rm -rf /usr/local/go
curl -Ls https://go.dev/dl/go1.21.1.linux-amd64.tar.gz | sudo tar -C /usr/local -xz
echo 'export PATH=$PATH:/usr/local/go/bin' | sudo tee /etc/profile.d/golang.sh
echo 'export PATH=$PATH:$HOME/go/bin' | tee -a $HOME/.profile
```

### Step 4: Building Binaries
> Cloning the project repository and compiling binaries
```bash
cd $HOME
rm -rf $HOME/aligned_layer_tendermint
git clone --depth 1 --branch v0.0.2 https://github.com/yetanotherco/aligned_layer_tendermint
cd $HOME/aligned_layer_tendermint/cmd/alignedlayerd
go build
```

### Step 5: Preparing Binaries for Cosmovisor
> # Moving compiled binaries to Cosmovisor directory
```bash
mkdir -p $HOME/.alignedlayer/cosmovisor/genesis/bin
mv alignedlayerd $HOME/.alignedlayer/cosmovisor/genesis/bin/
```

### Step 6: Creating Symbolic Links
> # Creating symbolic links for Cosmovisor
```bash
sudo ln -s $HOME/.alignedlayer/cosmovisor/genesis $HOME/.alignedlayer/cosmovisor/current -f
sudo ln -s $HOME/.alignedlayer/cosmovisor/current/bin/alignedlayerd /usr/local/bin/alignedlayerd -f
```

### Step 7: Setting Up Cosmovisor
> # Installing Cosmovisor
```bash
go install cosmossdk.io/tools/cosmovisor/cmd/cosmovisor@v1.5.0
```

### Step 8: Creating Systemd Service
> # Creating a systemd service for AlignedLayer node
```bash
sudo tee /etc/systemd/system/alignedlayer.service > /dev/null << EOF
[Unit]
Description=alignedlayer node service
After=network-online.target
 
[Service]
User=$USER
ExecStart=$(which cosmovisor) run start
Restart=on-failure
RestartSec=10
LimitNOFILE=65535
Environment="DAEMON_HOME=$HOME/.alignedlayer"
Environment="DAEMON_NAME=alignedlayerd"
Environment="UNSAFE_SKIP_BACKUP=true"
 
[Install]
WantedBy=multi-user.target
EOF
```

### Step 9: Enabling the Service
> Enabling the AlignedLayer systemd service
```bash
sudo systemctl daemon-reload
sudo systemctl enable alignedlayer
```

### Step 10: Initializing the Node
> Initializing the AlignedLayer node
```bash
alignedlayerd init $MONIKER --chain-id alignedlayer
```

### Step 11: Configuring Node Settings
> Setting node configuration
```bash
sed -i \
  -e 's|^chain-id *=.*|chain-id = "alignedlayer"|' \
  -e 's|^keyring-backend *=.*|keyring-backend = "test"|' \
  -e 's|^node *=.*|node = "tcp://localhost:24257"|' \
  $HOME/.alignedlayer/config/client.toml
```

### Step 12: Downloading Genesis & Addrbook
> # Downloading genesis & addrbook files
```bash
curl -Ls https://snap.nodex.one/alignedlayer-testnet/genesis.json > $HOME/.alignedlayer/config/genesis.json
curl -Ls https://snap.nodex.one/alignedlayer-testnet/addrbook.json > $HOME/.alignedlayer/config/addrbook.json
```

### Step 13: Configuring Seeds
> # Configuring seed peers
```bash
sed -i -e "s|^seeds *=.*|seeds = \"d1d43cc7c7aef715957289fd96a114ecaa7ba756@testnet-seeds.nodex.one:24210\"|" $HOME/.alignedlayer/config/config.toml
```

### Step 14: Configuring Persistent Peers
> # Configuring persistent peers
```bash
sed -i -e 's|^persistent_peers *=.*|persistent_peers = "a1a98d9caf27c3363fab07a8e57ee0927d8c7eec@128.140.3.188:26656,1beca410dba8907a61552554b242b4200788201c@91.107.239.79:26656,f9000461b5f535f0c13a543898cc7ac1cd10f945@88.99.174.203:26656,ca2f644f3f47521ff8245f7a5183e9bbb762c09d@116.203.81.174:26656,dc2011a64fc5f888a3e575f84ecb680194307b56@148.251.235.130:20656"|' $HOME/.alignedlayer/config/config.toml
```

### Step 15: Configuring Gas Prices
> Configuring gas prices
```bash
sed -i -e "s|^minimum-gas-prices *=.*|minimum-gas-prices = \"0.0001stake\"|" $HOME/.alignedlayer/config/app.toml
```

### Step 16: Setting Pruning Options
> # Configuring pruning options
```bash
sed -i \
  -e 's|^pruning *=.*|pruning = "custom"|' \
  -e 's|^pruning-keep-recent *=.*|pruning-keep-recent = "100"|' \
  -e 's|^pruning-keep-every *=.*|pruning-keep-every = "0"|' \
  -e 's|^pruning-interval *=.*|pruning-interval = "19"|' \
  $HOME/.alignedlayer/config/app
```

### Download Snapshots
```bash
curl -L https://snap.nodex.one/alignedlayer-testnet/alignedlayer-latest.tar.lz4 | tar -Ilz4 -xf - -C $HOME/.alignedlayer
[[ -f $HOME/.alignedlayer/data/upgrade-info.json ]] && cp $HOME/.alignedlayer/data/upgrade-info.json $HOME/.alignedlayer/cosmovisor/genesis/upgrade-info.json
```

Start Service
```bash
sudo systemctl start alignedlayer
```

