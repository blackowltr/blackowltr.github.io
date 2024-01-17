---
id: introduction
hide_table_of_contents: true
---
# Elys

## [Website](https://elys.network/)

---

## **System Requirements**

| Components | Minimum      | **Recommended** |
|------------|--------------|-----------------|
| CPU        | 4            | 4               |
| RAM        | 8 GB         | 16 GB           |
| Storage    | 160 GB SSD   | 320 GB SSD      |

---

## **Network Info**

- **Network Chain ID:** elystestnet-1
- **Binary:** elysd
- **Denom:** uelys
- **Working directory:** .elys

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
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.elys/config/config.toml
```

The address book gets updated every hour; you can use it for a quick launch:

```shell
wget -O $HOME/.elys/config/addrbook.json ""
```