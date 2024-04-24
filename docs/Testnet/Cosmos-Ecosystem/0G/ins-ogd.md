---
title: 💾 Installation
sidebar_position: 2
keywords: [0gd, installation, snapshot, statesync, update, useful commands]
---

**Instructions:**

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

   - Create a file (e.g., `.evmosd.env`) to store environment variables for your Evmos node:

     ```bash
     export WALLET="wallet"  # Replace with your wallet name
     export MONIKER="test"    # Node name
     export OG_CHAIN_ID="zgtendermint_9000-1"
     export OG_PORT="11"      # Custom port for Evmos node
     ```

   - Load these variables into your shell profile:

     ```bash
     source ~/.evmosd.env
     ```

5. **Download and Build Evmos Binary:**

   - Clone the Evmos repository from GitHub:

     ```bash
     cd $HOME
     rm -rf 0g-evmos
     git clone https://github.com/0glabs/0g-evmos.git
     ```

   - Switch to the desired version (here, `v1.0.0-testnet`):

     ```bash
     cd 0g-evmos
     git checkout v1.0.0-testnet
     ```

   - Build the Evmos binary:

     ```bash
     make build
     ```

   - Move the binary to a location accessible from your PATH (e.g., `~/go/bin`):

     ```bash
     mv $HOME/0g-evmos/build/evmosd $HOME/go/bin/
     ```

6. **Configure Evmos Node:**

   - Initialize the node with the specified chain ID and moniker:

     ```bash
     evmosd config node tcp://localhost:${OG_PORT}657  # Adjust port if needed
     evmosd config keyring-backend os
     evmosd config chain-id $OG_CHAIN_ID
     evmosd init "$MONIKER" --chain-id $OG_CHAIN_ID
     ```

   - Download the genesis file and address book for the Evmos testnet:

     ```bash
     soon
     ```

   - Set seeds and peers for connecting to the network:

     ```bash
     sed -i -e 's|^seeds *=.*|seeds = "8c01665f88896bca44e8902a30e4278bed08033f@54.241.167.190:26656,b288e8b37f4b0dbd9a03e8ce926cd9c801aacf27@54.176.175.48:26656,8e20e8e88d504e67c7a3a58c2ea31d965aa2a890@54.193.250.204:26656"|' $HOME/.evmosd/config/config.toml
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
     s%:6065%:${OG_PORT}065%g" $HOME/.evmosd/config/app.toml
     ```

   - Enable Prometheus metrics and disable indexing in `config.toml`:

     ```bash
     sed -i -e "s/prometheus = false/prometheus = true/" $HOME/.evmosd/config/config.toml
     sed -i -e "s/^indexer *=.*/indexer = \"null\"/" $HOME/.evmosd/config/config.toml
     ```

**8. Configure Pruning:**

   - Set pruning parameters in `app.toml` to manage disk usage:

     ```bash
     sed -i -e "s/^pruning *=.*/pruning = \"custom\"/" $HOME/.evmosd/config/app.toml
     sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"100\"/" $HOME/.evmosd/config/app.toml
     sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"50\"/" $HOME/.evmosd/config/app.toml
     ```

**9. Set Minimum Gas Price:**

   - Adjust the minimum gas price in `app.toml` to prevent transaction failures:

     ```bash
     sed -i 's|minimum-gas-prices =.*|minimum-gas-prices = "0agnet"|g' $HOME/.evmosd/config/app.toml
     ```

**10. Create Systemd Service File:**

   - Create a systemd service file (`evmosd.service`) to manage the Evmos node process:

     ```bash
     sudo tee /etc/systemd/system/evmosd.service > /dev/null <<EOF
     [Unit]
     Description=Og node
     After=network-online.target
     [Service]
     User=$USER
     WorkingDirectory=$HOME/.evmosd
     ExecStart=$(which evmosd) start --home $HOME/.evmosd
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
     evmosd tendermint unsafe-reset-all --home $HOME/.evmosd
     ```

   - Check if a snapshot is available for faster node initialization:

     ```bash
     soon
     ```

   - Enable and start the Evmos node service:

     ```bash
     sudo systemctl daemon-reload
     sudo systemctl enable evmosd
     sudo systemctl restart evmosd
     ```

   - Monitor the node logs for any errors or warnings:

     ```bash
     sudo journalctl -u evmosd -f
     ```

Your Evmos node should now be running and connected to the testnet.
