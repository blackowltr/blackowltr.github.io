---
id: Warden Protocol
hide_table_of_contents: true
---

## Links

---

## **System Requirements**

| Components | Minimum      | **Recommended** |
|------------|--------------|-----------------|
| CPU        | 4            | 4               |
| RAM        | 8 GB         | 16 GB           |
| Storage    | 160 GB SSD   | 320 GB SSD      |


---

## **Network Info**

- **Network Chain ID:** buenavista-1
- **Binary:** wardend
- **Denom:** uward
- **Working directory:** .warden

---

## **Public Services**

- **RPC:** https://warden-rpc.blackowl.tech
- **API:** https://warden-api.blackowl.tech
- **Explorer:** https://explorer.blackowl.tech/warden

---

## **Peer, Addrbook and Genesis**

### Peer
You can use a peer for quick connections or state synchronization:

```shell
PEERS="7e9adbd0a34fcab219c3a818a022248c575f622b@65.108.227.207:16656,bda08962882048fea4331fcf96ad02789671700e@65.21.202.124:35656,dc0122e37c203dec43306430a1f1879650653479@37.27.97.16:26656,eee54c85c14748f7793738fadbc747ed1511efac@176.9.58.5:46656,059abed41c4d2b5a6f6ae5d07c637538fac39372@158.220.108.120:11656,23e071cf5684faf380a7d92585e9f4c85f1d1ca2@185.250.38.217:26656,08cf258d8bb8c324e5518b532a71c8a343579cdd@62.169.16.23:18656,2f769486f886faafadcfee2d96a889728cf45a94@38.242.237.130:11256,08f7f549ac8d9d502693ccd4b7eac05c950c51e4@62.169.29.174:18656"
sed -i 's|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.warden/config/config.toml
```

### Addrbook
Addrbook is updated every three hours; you can use it for a quick startup:

```shell
soon
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
