---
title: 🆙 Upgrade
sidebar_position: 2
---

# Update 

## Manual Update

| Block Height |
|--------------|
|   1395000    |

```shell
sudo systemctl stop artelad

cd $HOME
rm -rf artela
git clone https://github.com/artela-network/artela
cd artela
git checkout v0.4.7-rc6
make install

sed -E 's/^pool-size[[:space:]]*=[[:space:]]*[0-9]+$/apply-pool-size = 10\nquery-pool-size = 30/' ~/.artelad/config/app.toml > ~/.artelad/config/temp.app.toml && mv ~/.artelad/config/temp.app.toml ~/.artelad/config/app.toml

sudo systemctl start artelad
sudo journalctl -u artelad -f --no-hostname -o cat
```

## Scheduled Update

```shell
# Install tmux dependency, if needed
sudo apt update
sudo apt install -y tmux
```

```shell
coming soon.
```
