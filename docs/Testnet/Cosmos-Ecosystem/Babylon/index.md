---
id: introduction
hide_table_of_contents: true
---

# Babylon

## Links

 ✔️ [Website](https://babylonchain.io/) | ✔️ [Explorer](XXXXXXX) | ✔️ [Docs](https://docs.babylonchain.io/) | ✔️ [GitHub](https://github.com/pryzm-finance) | ✔️ [Discord](https://discord.gg/babylonglobal)

---

## **System Requirements**

| Components | Minimum      | **Recommended** |
|------------|--------------|-----------------|
| CPU        | 4            | 4               |
| RAM        | 8 GB         | 16 GB           |
| Storage    | 160 GB SSD   | 320 GB SSD      |

---

## **Network Info**

- **Network Chain ID:** bbn-test-2
- **Binary:** babylond
- **Denom:** ubbn
- **Working directory:** .babylond

---

## **Public Services**

- **RPC:** 
- **API:** 
- **Explorer:** 

---

## **Peering**

You can use a peer for quick connections or state synchronization:

```shell
peers=""
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.babylond/config/config.toml
```

The address book gets updated every hour; you can use it for a quick launch:

```shell
wget -O $HOME/.babylond/config/addrbook.json ""
```