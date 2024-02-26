---
id: introduction
hide_table_of_contents: true
---

# Nibiru Chain

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
peers=""
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
