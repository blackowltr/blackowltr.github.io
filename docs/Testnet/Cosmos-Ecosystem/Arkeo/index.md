---
id: introduction
hide_table_of_contents: true
---

## Links

✔️ [Website](https://https://arkeo.network/)
✔️ [Explorer](https://explorer.blackowl.tech/arkeo)
✔️ [Docs](https://docs.arkeo.network/)
✔️ [GitHub](https://github.com/arkeonetwork)
✔️ [Discord](https://discord.gg/BfEHpm6uFc) |

---

## **System Requirements**

| Components | Minimum      | **Recommended** |
|------------|--------------|-----------------|
| CPU        | 4            | 4               |
| RAM        | 8 GB         | 16 GB           |
| Storage    | 160 GB SSD   | 320 GB SSD      |


---

## **Network Info**

- **Network Chain ID:** arkeo
- **Binary:** arkeod
- **Denom:** uarkeo
- **Working directory:** .arkeod

---

## **Public Services**

- **RPC:** https://arkeo.rpc.blackowl.tech/
- **API:** https://arkeo.api.blackowl.tech/
- **Explorer:** https://explorer.blackowl.tech/arkeo/

---

## **Peer, Addrbook and Genesis**

### Peer
You can use a peer for quick connections or state synchronization:

```shell
PEERS="989631cec18e32a03f903f509aa1dabb7e6b958f@95.216.245.247:18656,3f9bc5552f02dce211db24d5e42c118c61c4abde@65.108.8.28:60656,25a9af68f987e254e50d6d7e6a1e68a5a40c1b7c@65.109.92.148:60556,e24fd023395afa87bd18e67782e9b0f1e8532600@65.21.203.204:18656,374facfe63ab4c786d484c2d7d614063190590b7@88.99.213.25:38656,b6b4397c840a2bb4e7ab0b88d309cba57874bd52@65.21.197.25:27656,33d0b2792e54b499d6ff45810a23bdec11679932@10.1.13.210:26656,6e87d9e361b83a5f4ccb4bbcece3792977fa1aaf@158.220.90.189:15756,e033753cac027fc6605a95dab3b3fc5550d4b9bf@65.109.84.33:40656,42e4dce8d0864b3581c486cdd24633f2a2966425@173.212.194.143:26656,2d373b02e7c1d0e3c251bc4ae2b1b7708f252fc8@65.109.93.58:40656"
sed -i 's|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.arkeo/config/config.toml
```

### Addrbook
Addrbook is updated every three hours; you can use it for a quick startup:

```shell
coming soon.
```
### Genesis
Genesis is updated every three hours; you can use it for a quick launch:
```shell
coming soon.
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
