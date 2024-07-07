---
title: 💾 Installation
sidebar_position: 2
keywords: [0g, installation, snapshot, statesync, update, useful commands]
---

1. **Update and Upgrade System Packages:**

   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

   This ensures your system has the latest security patches and bug fixes.

2. **Install Essential Packages:**

   ```bash
   sudo apt install curl git wget htop tmux build-essential jq make lz4 gcc unzip -y
   ```

   These packages provide necessary tools for downloading, building, managing processes, and compressing files.

3. **Install Go (if not already installed):**

   - Download the Go binary for your system architecture (here, assuming 64-bit):

     ```bash
     cd $HOME
     VER="1.21.3"
     wget https://golang.org/dl/go$VER.linux-amd64.tar.gz
     ```

   - Extract the archive, set environment variables, and update your shell profile:

     ```bash
     sudo rm -rf /usr/local/go
     sudo tar -C /usr/local -xzf go$VER.linux-amd64.tar.gz
     rm go$VER.linux-amd64.tar.gz
     [ ! -f ~/.bash_profile ] && touch ~/.bash_profile
     echo "export PATH=$PATH:/usr/local/go/bin:~/go/bin" >> ~/.bash_profile
     source ~/.bash_profile
     ```

   - Create a directory for custom Go binaries:

     ```bash
     [ ! -d ~/go/bin ] && mkdir -p ~/go/bin
     ```

4. **Set Environment Variables:**

   - Create a file (e.g., `.0gchain.env`) to store environment variables for your 0gchain node:

     ```bash
     export WALLET="WALLETNAME"  
     export MONIKER="NODENAME" 
     export OG_CHAIN_ID="zgtendermint_16600-2"
     export OG_PORT="27"    
     ```

   - Load these variables into your shell profile:

     ```bash
     source ~/.0gchain.env
     ```

5. **Download and Build 0gchain Binary:**

   - Clone the 0gchain repository from GitHub:

     ```bash
       git clone -b v0.2.3 https://github.com/0glabs/0g-chain.git
       cd 0g-chain
       make install
       echo 'export PATH=$PATH:$(go env GOPATH)/bin' >> ~/.profile
       source ~/.profile
     ```

6. **Configure 0gchain Node:**

   - Initialize the node with the specified chain ID and moniker:

     ```bash
     0gchaind config node tcp://localhost:${OG_PORT}657  # Adjust port if needed
     0gchaind config keyring-backend os
     0gchaind config chain-id $OG_CHAIN_ID
     0gchaind init "$MONIKER" --chain-id $OG_CHAIN_ID
     ```

   - Download the genesis file and address book for the Ogchain testnet:

     ```bash
      rm ~/.0gchain/config/genesis.json && wget -P ~/.0gchain/config https://github.com/0glabs/0g-chain/releases/download/v0.2.3/genesis.json
     ```

   - Set seeds and peers for connecting to the network:
     
```bash
SEEDS="81987895a11f6689ada254c6b57932ab7ed909b6@54.241.167.190:26656,010fb4de28667725a4fef26cdc7f9452cc34b16d@54.176.175.48:26656,e9b4bc203197b62cc7e6a80a64742e752f4210d5@54.193.250.204:26656,68b9145889e7576b652ca68d985826abd46ad660@18.166.164.232:26656"
sed -i -e "s/^seeds *=.*/seeds = \"$SEEDS\"/" $HOME/.0gchain/config/config.toml
 ```

**7. Set Custom Ports and Enable Prometheus:**

   - Modify the `app.toml` file to use custom ports for various services:

     ```bash
     sed -i.bak -e "s%:1317%:${OG_PORT}317%g;
     s%:8080%:${OG_PORT}080%g;
     s%:9090%:${OG_PORT}090%g;
     s%:9091%:${OG_PORT}091%g;
     s%:8545%:${OG_PORT}545%g;
     s%:8546%:${OG_PORT}546%g;
     s%:6065%:${OG_PORT}065%g" $HOME/.0gchain/config/app.toml
     ```

   - Enable Prometheus metrics and disable indexing in `config.toml`:

     ```bash
     sed -i -e "s/prometheus = false/prometheus = true/" $HOME/.0gchain/config/config.toml
     sed -i -e "s/^indexer *=.*/indexer = \"null\"/" $HOME/.0gchain/config/config.toml
     ```

**8. Configure Pruning:**

   - Set pruning parameters in `app.toml` to manage disk usage:

     ```bash
     sed -i -e "s/^pruning *=.*/pruning = \"custom\"/" $HOME/.0gchain/config/app.toml
     sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"100\"/" $HOME/.0gchain/config/app.toml
     sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"50\"/" $HOME/.0gchain/config/app.toml
     ```

**9. Set Minimum Gas Price:**

   - Adjust the minimum gas price in `app.toml` to prevent transaction failures:

     ```bash
     sed -i "s/^minimum-gas-prices *=.*/minimum-gas-prices = \"0ua0gi\"/" $HOME/.0gchain/config/app.toml
     ```

**10. Create Systemd Service File:**

   - Create a systemd service file (`0gchaind.service`) to manage the 0gchain node process:

     ```bash
     sudo tee /etc/systemd/system/0gchaind.service > /dev/null <<EOF
     [Unit]
     Description=Og 
     After=network-online.target
     [Service]
     User=$USER
     WorkingDirectory=$HOME/.0gchain
     ExecStart=$(which 0gchaind) start --home $HOME/.0gchain
     Restart=on-failure
     RestartSec=5
     LimitNOFILE=65535
     [Install]
     WantedBy=multi-user.target
     EOF
     ```

**11. Reset, Download Snapshot, and Start Node:**

   - Reset the node data:

     ```bash
     0gchaind tendermint unsafe-reset-all --home $HOME/.0gchain
     ```

   - Check if a snapshot is available for faster node initialization:

     ```bash
     soon
     ```

   - Enable and start the 0gchain node service:

     ```bash
     sudo systemctl daemon-reload
     sudo systemctl enable 0gchaind
     sudo systemctl restart 0gchaind
     ```

   - Monitor the node logs for any errors or warnings:

     ```bash
     sudo journalctl -u 0gchaind -f
     ```

Your 0G node should now be running and connected to the testnet.
