---
title: 💾 Installation
sidebar_position: 2
keywords: [artela, installation, snapshot, statesync, update, useful commands]
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

### Clone Artela Project Repository
```shell
cd $HOME
rm -rf artela
git clone https://github.com/artela-network/artela
cd artela
git checkout v0.4.7-rc6
```
### Build Artela Binary
```shell
make install
```
### Set Node CLI Configuration
```shell
artelad config chain-id artela_11822-1
artelad config keyring-backend test
```
### Initialize the Node
>Configure the necessary settings to start Artelad. Replace "YourNodeName" with your own node name.
```shell
artelad init "YourNodeName" --chain-id artela_11822-1
```
### Download Genesis and Addrbook Files
```shell
curl -s https://snapshots.blackowl.tech/artela/addrbook.json > $HOME/.artelad/config/addrbook.json
curl -s https://snapshots.blackowl.tech/artela/genesis.json > $HOME/.artelad/config/genesis.json
```
### Set Seeds and Peers
```shell
sed -i \
  -e 's|^seeds *=.*|seeds = "bec6934fcddbac139bdecce19f81510cb5e02949@47.254.24.106:26656,32d0e4aec8d8a8e33273337e1821f2fe2309539a@47.88.58.36:26656,1bf5b73f1771ea84f9974b9f0015186f1daa4266@47.251.14.47:26656"|' \
  -e 's|^peers *=.*|peers = ""|' \
  $HOME/.artelad/config/config.toml
  ```
### Set Minimum Gas Price
```shell
sed -i -e 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.02uart"|' $HOME/.artelad/config/app.toml
```
### Set Pruning
```shell
sed -i \
  -e 's|^pruning *=.*|pruning = "custom"|' \
  -e 's|^pruning-keep-recent *=.*|pruning-keep-recent = "100"|' \
  -e 's|^pruning-interval *=.*|pruning-interval = "10"|' \
  $HOME/.artelad/config/app.toml
  ```
### Create systemd Service
```shell
sudo tee /etc/systemd/system/artelad.service > /dev/null << EOF
[Unit]
Description=Artela node service
After=network-online.target
[Service]
User=$USER
ExecStart=$(which artelad) start
Restart=on-failure
RestartSec=10
LimitNOFILE=65535
[Install]
WantedBy=multi-user.target
EOF
sudo systemctl daemon-reload
sudo systemctl enable artelad.service
```
### Start the Service and Check Logs
```shell
sudo systemctl start artelad.service
sudo journalctl -u artelad.service -f --no-hostname -o cat
```
### Check Sync Status
>Check the synchronization status of Artelad.
```shell
artelad status 2>&1 | jq .SyncInfo
```
