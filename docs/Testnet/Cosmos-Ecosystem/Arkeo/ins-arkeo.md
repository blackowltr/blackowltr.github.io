---
title: 💾 Installation
sidebar_position: 2
keywords: [arkeo, installation, snapshot, statesync, update, useful commands]
---

### Update and Install Dependencies
```shell
sudo apt update
sudo apt install -y curl git jq lz4 build-essential unzip
```
### Install Go
```shell
ver="1.20.3"
wget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"
sudo rm -rf /usr/local/go
sudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"
rm "go$ver.linux-amd64.tar.gz"
echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile
source $HOME/.bash_profile
go version
```

### Download Arkeo Binary
```shell
cd $HOME
rm -rf arkeod
wget https://snapshots.blackowl.tech/arkeo/arkeod
chmod +x $HOME/arkeod
mv $HOME/arkeod $HOME/go/bin/arkeod
```
### Set Node CLI Configuration
```shell
arkeod config chain-id arkeo
arkeod config keyring-backend test
```
### Initialize the Node
>Configure the necessary settings to start Artelad. Replace "YourNodeName" with your own node name.
```shell
arkeod init "YourNodeName" --chain-id arkeo
```
### Download Genesis and Addrbook Files
```shell
coming soon.
```
### Set Peers
```shell
PEERS="5c3ca78b11bbd746f950c198cac51d4e5d4c0750@arkeo-testnet-peer.itrocket.net:18656,0c91eaae3728837975796ac9d4a8ba0e7f11e14d@[2a01:4f8:140:1155::2]:18656,905e1e5490af6732bf4cfa0deb23b995c6c4df43@[2a01:4f9:4a:1d85::2]:11432,4a12b7bf2878debf6f7e00d6d6f6468e6123da88@[2a01:4f9:6a:4798::2]:26656,efd40fa78d967c0cc85aa05f88f224c93f75b0f8@[2a01:4f9:4a:2864::2]:11656,4e38491ff17d08d1313303699e1f31001a1f2fa5@[2a01:4f9:4a:16c7::2]:18656,1563158a496ea4947b1df3f900787dbbd6b14419@[2a01:4f9:6a:1282::2]:18656,d06547bed8a089ebeed6aa79cf1d3b7d0841f397@[2a01:4f9:c012:5d55::1]:26656,54409e1fe1d96899a770c3418e696b642c8a4d95@[2a01:4f9:c010:bcd3::1]:26656,4eafa53fd294a6cf948b6a27f16fde4dd2d5a11f@[2a01:4f9:5a:15c4::2]:27656,291aa6329d71ccd92804eb7d38e5221d094c62ac@[2a01:4f9:1a:a243::2]:29656,0b003238fa0f3ba261277123e7c53624628440ba@[2a01:4f9:4a:2590::2]:18656,5efb2ea906cc3e691ed1c44a5b50091bb5030a7a@[2a01:4f8:140:92b3::2]:26676,592605ee3a91f7f30bc7d41468a067bf26c958cb@[2a01:4f8:161:6253::2]:18656,39ce0157825c5000ab0e100f3ea18770c28b7d7b@[2a02:c207:2143:6008::1]:26656"
sed -i -e "s/^seeds *=.*/seeds = \"$SEEDS\"/; s/^persistent_peers *=.*/persistent_peers = \"$PEERS\"/" $HOME/.arkeo/config/config.toml
```
### Set Minimum Gas Price, prometheus, indexer
```shell
sed -i 's|minimum-gas-prices =.*|minimum-gas-prices = "0.001uarkeo"|g' $HOME/.arkeo/config/app.toml
sed -i -e "s/prometheus = false/prometheus = true/" $HOME/.arkeo/config/config.toml
sed -i -e "s/^indexer *=.*/indexer = \"null\"/" $HOME/.arkeo/config/config.toml
```
### Set Pruning
```shell
sed -i -e "s/^pruning *=.*/pruning = \"custom\"/" $HOME/.arkeo/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"100\"/" $HOME/.arkeo/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"50\"/" $HOME/.arkeo/config/app.toml
```
### Create systemd Service
```shell
sudo tee /etc/systemd/system/arkeod.service > /dev/null <<EOF
[Unit]
Description=Arkeo node
After=network-online.target
[Service]
User=$USER
WorkingDirectory=$HOME/.arkeo
ExecStart=$(which arkeod) start --home $HOME/.arkeo
Restart=on-failure
RestartSec=5
LimitNOFILE=65535
[Install]
WantedBy=multi-user.target
EOF
```
### Start the Service and Check Logs
```shell
sudo systemctl daemon-reload
sudo systemctl enable arkeod
sudo systemctl restart arkeod && sudo journalctl -u arkeod -f
```
### Check Sync Status
>Check the synchronization status of Artelad.
```shell
arkeod status 2>&1 | jq .SyncInfo
```
