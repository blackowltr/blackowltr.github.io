---
id: introduction
hide_table_of_contents: true
---

# Nibiru Chain

![Nibiru](https://github.com/blackowltr/blackowltr.github.io/assets/107190154/3f830163-30d0-442b-be77-afdbdfb4954a)

## Links
 ✔️ [Nibiru](https://app.nibiru.fi/) |
 ✔️ [Blockchain Explorer](https://explorer.blackowl.tech/nibiruchain/staking) |
 ✔️ [Docs](https://nibiru.fi/docs) |
 ✔️ [GitHub](https://github.com/NibiruChain) |
 ✔️ [X/Twitter](https://twitter.com/NibiruChain)

---

## **System Requirements**

| Components | **Recommended** |
|------------|-----------------|
| CPU        | 8               |
| RAM        | 16 GB           | 
| Storage    | 1 TB SSD        |

---

## **Network Info**

- **Network Chain ID:** cataclysm-1
- **Binary:** nibid
- **Denom:** unibi
- **Working directory:** .nibid

---

## **Public Services**

- **RPC:** https://nibiru.rpc.blackowl.tech/
- **API:** https://nibiru.api.blackowl.tech/
- **Explorer:** https://explorer.blackowl.tech/nibiruchain

---

## **Peer, Addrbook and Genesis**

### Peer
You can use a peer for quick connections or state synchronization:

```shell
peers="70c9639808b1e5d0c3f256e67d31da6dfc93fd61@141.94.193.28:55356,2cb76d06899e6f35dc525fccb42fb707b47ac772@37.59.23.17:55356,d9bfa29e0cf9c4ce0cc9c26d98e5d97228f93b0b@65.108.233.103:13956,200d3c6eec510a3bb5a4224d9be188df37032946@148.251.13.186:19856,c357b020f7ebb432172bdd328eb236799d940eb8@37.60.249.230:26656,6d83a02cb6c37b6f4f3d3b6cd09c34a10f890a5c@51.210.223.84:19856,89757803f40da51678451735445ad40d5b15e059@164.152.161.5:26656,07faf6678cbcee9909348b6d705260f9ba6ca1ff@65.108.232.104:19856,a77f764c73963f4169c2e6eb7607c0671f16e005@37.252.186.106:2000,4e1c2471efb89239fb04a4b75f9f87177fd91d00@134.65.194.216:26656,ab2ae706ea5b5df1b306608b258c2232516bdc02@51.195.104.64:5656,094b06bc22de245d40fe8af3b7c8c8eb9c9474bc@221.148.45.106:26656,c1d0577933093415de00a9232f3d8f150f80fd0e@188.214.129.129:26656,f273e38a6b77830a0f96dbb2777c28e28905abe1@136.243.13.186:2000,d64a2d45a0aa98564154246296394c06e383805a@37.252.186.107:2000,75b25125ee0bcad79ffd394e436f21828aa754b3@144.76.76.176:2000,05106550b6e738d8ce50cb857520124bbcce318f@34.79.198.33:26656,b032150972f3a9add47a0df33c6a69bbca4df59e@173.212.231.88:26656,ce0a79f86024aa9a37dc06770e426f77310edb43@51.77.57.29:26656,cc8ff21a53f996fd729a10bcfbd85cf009505367@65.108.75.107:34656,d3c7f343d7ed815b73eef34d7d37948f10a1deab@146.148.124.30:26656,e7af24b15365bff9537e2776c2a5fdf01b933dc5@34.22.210.39:26656,9c65c5b0e340cff69a09b3c631a1ed942d4e8675@213.199.50.129:26656,ccde8810577cd3c141067256eddf2025f4c38559@193.34.213.178:36656,eeaf1f3237f5022c9390b468813942c7ea778118@144.76.236.49:60556,c2af064e5c0d9fafde4a978d564a3cea447367ba@54.39.131.55:26656,798e61b8e0208edf9743394add9f6781ccdf784c@65.108.128.201:19856,6604179787139eab744b8a1159fee9b03fcc3714@51.81.49.176:19856,ce764863e665862e4faca59bb8037c81643d9926@141.94.195.151:19856,9fd05518ea350e46f26779b3443d97770e29ab23@8.217.29.114:26656"
sed -i -e "s|^persistent_peers *=.*|persistent_peers = \"$peers\"|" $HOME/.nibid/config/config.toml
```

### Addrbook
Addrbook is updated every three hours; you can use it for a quick startup:

```shell
curl -L https://snapshots.blackowl.tech/nibiru/addrbook.json > $HOME/.nibid/config/addrbook.json
```
### Genesis
Genesis is updated every three hours; you can use it for a quick launch:
```shell
curl -L https://snapshots.blackowl.tech/nibiru/genesis.json > $HOME/.nibid/config/genesis.json
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
