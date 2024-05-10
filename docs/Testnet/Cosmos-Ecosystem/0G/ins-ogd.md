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
     export OG_CHAIN_ID="zgtendermint_16600-1"
     export OG_PORT="21"    
     ```

   - Load these variables into your shell profile:

     ```bash
     source ~/.0gchain.env
     ```

5. **Download and Build 0gchain Binary:**

   - Clone the 0gchain repository from GitHub:

     ```bash
   cd $HOME
   git clone -b v0.1.0 https://github.com/0glabs/0g-chain.git
   ./0g-chain/networks/testnet/install.sh
   source .profile
   0gchaind version
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
     soon
     ```

   - Set seeds and peers for connecting to the network:

     ```bash
     PEERS="fbc3b6d41cd39a62ef5e3fc596435adfaf428a34@37.120.189.81:16656,645531eb02b275a59cc3b1af99e541852849f695@84.247.139.25:16656,d00273ac6a2470cd4e48008d9af4d2521b134394@62.169.29.136:26656,f5a7d34355f6d89b7ece583131c6b1f79ac5485e@218.102.97.67:25856,a3e6c6214805c1c068882f1981855c7a9f5926ea@213.168.249.202:26656,da1f4985ce3df05fd085460485adefa93592a54c@172.232.33.25:26656,91f079ccd2e0edf42e0fa57183ac92c22c525658@14.245.25.144:14256,9d09d391b2cf706a597d03fe8bb6700fe5cac53d@65.108.198.183:18456,5a202fb905f20f96d8ff0726f0c0756d17cf23d8@43.248.98.100:26656,74775d65b6ab427c685efcaa8190912d3a60e562@123.19.45.21:12656,f2693dd86766b5bf8fd6ab87e2e970d564d20aff@54.193.250.204:26656,9d7564df34efa146a94c073e5bf3f5e11f947b75@155.133.22.230:26656,e179d05dc792d9b902be3baa7a31a07a92afbcf0@118.142.83.5:26656,c4b9c3a7f3651af729d73b150e714ee91e7585c1@14.176.200.133:26656,f64f0fb500c62bffa33d60450d30792ee4b5fbd0@167.86.119.168:26656,d4085fd93ab77576f2acdb25d2d817061db5afe6@62.169.19.156:26656,2b8ee12f4f94ebc337af94dbec07de6f029a24e6@94.16.31.161:26656,0f5022e4265184052a5468379687625a81fd255e@154.12.253.116:26656,3859828e1099214de14dae91d1f7decf2374eeb4@47.236.170.254:26656,23b0a0624699f85062ddebf910583f70a5b9e86b@14.167.152.116:14256,b8f8ed478f2794629fdb5cf0c01edaed80f00f84@168.119.64.172:26656,5d81d59e81356a33e6ccccaa3d419ff73244697e@107.173.18.103:26656,c4d619f6088cb0b24b4ab43a0510bf9251ab5d7f@54.241.167.190:26656,a83f5d07a8a64827851c9f1d0c21c900b9309608@188.166.181.110:26656,19943cbe46cdb9eb37cb06c0067ce63154eee6ea@213.199.52.155:26656,a6ff8a651dd0a0e66dbfb2174ccadcbbcf567b29@66.94.122.224:26656,f3c912cf5653e51ee94aaad0589a3d176d31a19d@157.90.0.102:31656,141dbd90d5c3411c9ba72ba03704ccdb70875b01@65.109.147.58:36656,cd529839591e13f5ed69e9a029c5d7d96de170fe@46.4.55.46:34656,a8d7c5a051c4649ba7e267c94e48a7c64a00f0eb@65.108.127.146:26656" && \
  SEEDS="c4d619f6088cb0b24b4ab43a0510bf9251ab5d7f@54.241.167.190:26656,44d11d4ba92a01b520923f51632d2450984d5886@54.176.175.48:26656,f2693dd86766b5bf8fd6ab87e2e970d564d20aff@54.193.250.204:26656,f878d40c538c8c23653a5b70f615f8dccec6fb9f@54.215.187.94:26656" && \
  sed -i -e "s/^seeds *=.*/seeds = \"$SEEDS\"/; s/^persistent_peers *=.*/persistent_peers = \"$PEERS\"/" $HOME/.0gchain/config/config.toml
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
