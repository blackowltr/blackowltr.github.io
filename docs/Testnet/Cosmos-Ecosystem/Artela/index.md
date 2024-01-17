---
id: introduction
hide_table_of_contents: true
---

# Artela

## [Website](https://artela.network/)

---

## **System Requirements**

| Components | Minimum      | **Recommended** |
|------------|--------------|-----------------|
| CPU        | 4            | 4               |
| RAM        | 8 GB         | 16 GB           |
| Storage    | 160 GB SSD   | 320 GB SSD      |

---

## **Network Info**

- **Network Chain ID:** artela_11822-1
- **Binary:** artelad
- **Denom:** uart
- **Working directory:** .artelad

---

## **Public Services**

- **RPC:** https://artela.rpc.blackowl.tech/
- **API:** https://artela.api.blackowl.tech/
- **Explorer:** https://explorer.blackowl.tech/artela

---

## **Peering**

You can use a peer for quick connections or state synchronization:

```shell
peers="5c9b1bc492aad27a0197a6d3ea3ec9296504e6fd@artela-testnet-peer.itrocket.net:30656,af6238d181101c79519c031a5505da8e21639eb4@198.244.253.85:36656,ca7c488938f0894de84e85062ba0cd362cadcf35@185.182.186.12:26656,64443d99b1ef819bbc27a291e8e82975d8297655@173.249.37.119:31756,2264c863bead1e2822c52d1b553becf9d8089855@[2400:8905::f03c:94ff:fecf:710]:26656,a612b2cff549d2cef974f5bf1de63bfb1f5396d9@31.220.85.89:26656,7e583fda2efbc30c7a1ce13727320fc99c17a26d@185.246.85.48:42656,daf1bfabfd3e0514188659942d854d8d09712986@[2a01:4f8:171:d6e::2]:23456,a27fec04636e9c67444e3d2dc57bfd389cfe69ca@5.78.113.161:45656,9e2fbfc4b32a1b013e53f3fc9b45638f4cddee36@47.254.66.177:26656,ab92c7390de5ced2989e19c207e265e9a34c29a2@128.199.107.27:45656"
sed -i 's|^persistent_peers *=.*|persistent_peers = "'$peers'"|' $HOME/.artelad/config/config.toml
```

The address book gets updated every hour; you can use it for a quick launch:

```shell
coming soon..
```
