---
id: Introduction
hide_table_of_contents: true
---

# Initia

## Links
 ✔️ [Website](https://initia.xyz/) |
 ✔️ [Blockchain Explorer](https://explorer.blackowl.tech/Initia/staking) |
 ✔️ [Discord](https://discord.gg/initia)

---

## **System Requirements**

| Components | Minimum      | **Recommended** |
|------------|--------------|-----------------|
| CPU        | 4            | 8               |
| RAM        | 16 GB        | 16 GB           |
| Storage    | 500 GB SSD   | 1 TB SSD      |

---

## **Network Info**

- **Network Chain ID:** initiation-1
- **Binary:** initia
- **Denom:** uinit
- **Working directory:** .initia

---

## **Public Services**

- **RPC:** https://initia-rpc.blackowl.tech
- **API:** https://initia-api.blackowl.tech
- **Explorer:** https://explorer.blackowl.tech/Initia

---

## **Peer and Addrbook**

### Peer
You can use a peer for quick connections or state synchronization:

```shell
PEERS="78f421aaa079d85fc170b6fe30c3a515815d05b2@38.242.253.96:14656,e3dc84162e19b373fada374e24d6118fa25bb80a@195.26.250.86:39656,43a5f7d0a0980278e15a64867d020e22fe24db2b@135.181.34.237:26656,a7a4a958700fd286e4f6fc317edca1231c51f403@84.46.241.109:14656,f8df8ce438bd81a01156e08acb4c0a17635466a1@37.60.231.165:17956,4ed1d051226c386f9196737e7428da70491ced4d@217.76.56.34:26656,f8308cc52d70bf5056899d7bc4e76dd9689624ad@78.46.40.115:26656,f6e0493e41e0dbb6d22a6e89a7d1beb1050c946b@65.21.226.55:14656,52e7bc1c6d526ff36d4b3520596557a313678fdb@161.97.100.75:14656,870617eea8ac5b740734a0d8f2b9a803dfece3f0@207.180.232.244:14656,d1fe6b65c48b0970e7ee6990587824becb04eb23@84.247.163.112:17956,940f6a0dbcf20869a8a06d858c1dad2f3ba5b21b@84.247.176.229:11656,700e7305dd382212b1fdc99aba2839dd2811761b@95.216.42.140:14656,fa24374f85e71a81d7807a90c0fb756f48f2ffa4@173.249.10.186:14656,ed464172d6a36d4af7713b622f6bd4ecd41641c5@116.203.67.196:14656,2ce32c6aa4d405d2d81bf13b56f80716c9f25e7f@158.220.123.85:14656,f4cc954a973483407329e41577b4276d62f7417c@176.57.150.5:14656,9ed1bc28ec400fd453ddb87f732fe64e3226ff72@161.97.76.223:14656,a54d7657863c9d5cde3f3c2b50cbc1473e26857d@65.21.83.250:14656,b7f6d018e9903ac7daeba2c6c97ed7aab945efaa@156.67.25.2:14656"
sed -i 's|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.initia/config/config.toml

sudo systemctl restart initiad && sudo journalctl -u initiad -f --no-hostname -o cat
```

### Addrbook
Addrbook is updated every one hours; you can use it for a quick startup:

```shell
wget -O $HOME/.initia/config/addrbook.json "https://testnet.blackowl.tech/initia/addrbook.json"

systemctl restart initiad && journalctl -u initiad -f -o cat
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
