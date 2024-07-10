---
title: 🆙 Upgrade
sidebar_position: 2
---
### v0.2.23
> Upgrade height: 2470000
```shell
cd $HOME
rm -rf initia
git clone https://github.com/initia-labs/initia.git
cd initia
git checkout v0.2.23-stage-2
make build
sudo mv $HOME/initia/build/initiad $(which initiad)
sudo systemctl restart initiad && sudo journalctl -u initiad -f
```

### v0.2.21 
```shell
cd $HOME
rm -rf initia
git clone https://github.com/initia-labs/initia.git
cd initia
git checkout v0.2.21
make build
sudo mv build/initiad $(which initiad)
```

### v0.2.19 
```shell
cd $HOME
rm -rf initia
git clone https://github.com/initia-labs/initia.git
cd initia
git checkout v0.2.19
make build
sudo mv build/initiad $(which initiad)
```

### v0.2.15 
```shell
cd $HOME
rm -rf initia
git clone https://github.com/initia-labs/initia.git
cd initia
git checkout v0.2.15
make build
sudo mv build/initiad $(which initiad)
```

