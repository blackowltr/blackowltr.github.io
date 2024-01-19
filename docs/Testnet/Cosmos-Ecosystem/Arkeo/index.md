---
id: introduction
hide_table_of_contents: true
---

## Links

 ✔️ [Website](https://https://arkeo.network/) | ✔️ [Explorer](https://explorer.blackowl.tech/arkeo) | ✔️ [Docs](https://docs.arkeo.network/) | ✔️ [GitHub](https://github.com/arkeonetwork) | ✔️ [Discord](https://discord.gg/BfEHpm6uFc) |


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
- **Working directory:** .arkeo

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
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.arkeo/config/config.toml
```

The address book gets updated every hour; you can use it for a quick launch:

```shell
wget -O $HOME/.arkeo/config/addrbook.json ""
```
