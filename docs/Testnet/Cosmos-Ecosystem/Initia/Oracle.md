---
title: ⚡ Oracle
sidebar_position: 6
---

# Initia Oracle Setup Guide

## Step 1: Download and Install Slinky

First, we need to download and install the Slinky software, which is used for the Oracle.

```bash
cd "$HOME" 
git clone https://github.com/skip-mev/slinky.git 
cd slinky
git checkout v0.4.3 
make build 
ln -s "$HOME/slinky/build/slinky" "/usr/bin/"
```

## Step 2: Update `app.toml`

Next, we need to update the `app.toml` configuration file for Initia.

```bash
sed -i '0,/^enabled *=/{//!b};:a;n;/^enabled *=/!ba;s|^enabled *=.*|enabled = "true"|' $HOME/.initia/config/app.toml
sed -i -e 's|^oracle_address *=.*|oracle_address = "127.0.0.1:8080"|' $HOME/.initia/config/app.toml
sed -i -e 's|^client_timeout *=.*|client_timeout = "500ms"|' $HOME/.initia/config/app.toml
```

## Step 3: Create Oracle Service

We will create a systemd service to manage the Oracle.

> find out your grpc port with the following command.
```
echo "$(curl -s ifconfig.me)$(grep -A 6 "\[grpc\]" ~/.initia/config/app.toml | egrep -o ":[0-9]+")"
```
> Type your GRPC port.
```
PORT=GRPC_PORT
```

```bash
sudo tee /etc/systemd/system/oracle.service > /dev/null <<EOF
[Unit]
Description=oracle

[Service]
Type=simple
User=$USER
ExecStart=/usr/bin/slinky --oracle-config-path "$HOME/slinky/config/core/oracle.json" --market-map-endpoint 0.0.0.0:$PORT
Restart=on-abort
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=oracle
LimitNOFILE=65535

[Install]
WantedBy=multi-user.target
EOF
```

## Step 4: Launch Oracle and Restart Node

Finally, we need to start the Oracle service and restart the Initia node.

```bash
sudo systemctl daemon-reload
sudo systemctl enable oracle
sudo systemctl start oracle
sudo systemctl restart initiad
sudo journalctl -u oracle -f -o cat
```

### Delete Oracle
```
sudo systemctl stop initia-oracle
sudo systemctl disable initia-oracle
sudo rm /etc/systemd/system/initia-oracle.service
rm -rf $HOME/slinky
sudo rm /usr/local/bin/slinky
```
