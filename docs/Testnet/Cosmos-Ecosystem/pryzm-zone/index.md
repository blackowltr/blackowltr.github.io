---
id: introduction
hide_table_of_contents: true
---

# Pryzm Zone

## Links

 ✔️ [Website](https://pryzm.zone/) | ✔️ [Explorer](XXXXXXX) | ✔️ [Doc](https://docs.pryzm.zone/) | ✔️ [GitHub](https://github.com/pryzm-finance) | ✔️ [Discord](https://discord.gg/eZGaXFEeEZ) | ✔️ [Zealy](https://zealy.io/c/pryzm/invite/cfNmFH3eoXrvl2Rr9qk7o)

## **System Requirements**

| Components | Minimum      | **Recommended** |
|------------|--------------|-----------------|
| CPU        | 4            | 4               |
| RAM        | 8 GB         | 16 GB           |
| Storage    | 160 GB SSD   | 320 GB SSD      |

## Network Info 

* **Network Chain ID:** indigo-1
* **Binary:** pryzmd
* **Denom:** upryzm
* **Working directory:** .pryzm

## Public Services
* **RPC:** pryzm.rpc.blackowl.tech
* **API:** pryzm.api.blackowl.tech
* **Explorer:** 

## Peering
You can use peer for fast connection or state sync
```shell
peers=""
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.pryzm/config/config.toml
```
The address book is updated once an hour. You can use it for quick launch.
```shell
wget -O $HOME/.pryzm/config/addrbook.json ""
```