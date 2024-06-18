---
title: 🧾 Proof
sidebar_position: 6
keywords: [alignedlayer, proof]
---

# Sending and Verifying SP1 Proofs with Aligned

![image](https://github.com/blackowltr/blackowltr.github.io/assets/107190154/e8c0f6fc-866e-4934-9173-5a0770b533ea)

## Download and Install Aligned

To send proofs in the testnet, download and install Aligned by running the following command:

```bash
curl -L https://raw.githubusercontent.com/yetanotherco/aligned_layer/main/batcher/aligned/install_aligned.sh | bash
```
```
source /root/.bashrc
```

> If you experience any issues, upgrade by running the same command.

## Download Example SP1 Proof Files

Download an example SP1 proof file along with its ELF file using the command below:

```bash
curl -L https://raw.githubusercontent.com/yetanotherco/aligned_layer/main/batcher/aligned/get_proof_test_files.sh | bash
```

## Send the Proof

Send the proof with the following command:

```bash
aligned submit \
  --proving_system SP1 \
  --proof ~/.aligned/test_files/sp1_fibonacci.proof \
  --vm_program ~/.aligned/test_files/sp1_fibonacci-elf \
  --aligned_verification_data_path ~/aligned_verification_data \
  --conn wss://batcher.alignedlayer.com
```

Wait a few seconds for your proof to be verified in Aligned.

## Verify the Proof On-Chain

Check that your proof has been verified with the following command:

```bash
aligned verify-proof-onchain \
  --aligned-verification-data ~/aligned_verification_data/*.json \
  --rpc https://ethereum-holesky-rpc.publicnode.com \
  --chain holesky
```

That's it! You've successfully sent and verified your SP1 proofs using Aligned.

## Finally, publish a post on X

[Here is an example](https://x.com/brsbtc/status/1802985853112750467)

[Don't forget to follow me on X.](https://x.com/brsbtc)
