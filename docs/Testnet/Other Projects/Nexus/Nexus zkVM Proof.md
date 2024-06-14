# Nexus zkVM Proof Guide

#### 1. Install CMAKE

First, you need to install CMAKE, a tool used for managing the build process of software. Open your terminal and enter the following command:

```sh
sudo apt install cmake
```

#### 2. Install Build Essential Package

Build Essential is a package that contains essential compilation tools and libraries. Many software cannot be compiled without this package. Run the following commands in sequence:

```sh
sudo apt update
sudo apt install build-essential
```

#### 3. Install Nexus zkVM

##### 3.1. Install Rust

Nexus zkVM is written in the Rust programming language, so you need to install Rust. To install Rust, run the following command in your terminal:

```sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

During the installation, input `1` to proceed, and then load the environment variables with the following command:

```sh
. "$HOME/.cargo/env"
```

##### 3.2. Add the RISC-V Target

Nexus zkVM targets the RISC-V architecture. Therefore, you need to add the RISC-V target to Rust:

```sh
rustup target add riscv32i-unknown-none-elf
```

##### 3.3. Install Nexus zkVM

Install Nexus zkVM with the following command:

```sh
cargo install --git https://github.com/nexus-xyz/nexus-zkvm nexus-tools --tag 'v1.0.0'
```

Verify the installation:

```sh
cargo nexus --help
```

This command should print the available CLI commands.

#### 4. Create a New Nexus Project

Create a new Nexus project with the following command:

```sh
cargo nexus new nexus-project
```

This command will create a new Rust project directory with the following structure:

```sh
./nexus-project
├── Cargo.lock
├── Cargo.toml
└── src
    └── main.rs
```

#### 5. Navigate to the Project Directory and Edit Files

Navigate to the created project directory and edit the main file:

```sh
cd nexus-project
cd src
nano main.rs
```

Change the content of `main.rs` to the following:

```rust
#![no_std]
#![no_main]

fn fib(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fib(n - 1) + fib(n - 2),
    }
}

#[nexus_rt::main]
fn main() {
    let n = 7;
    let result = fib(n);
    assert_eq!(result, 13);
}
```

#### 6. Run Your Program

Run your program with the following command:

```sh
cargo nexus run
```

This command should run successfully. To print the full step-by-step execution trace:

```sh
cargo nexus run -v
```

#### 7. Prove Your Program

Generate a proof for your Rust program using the Nexus zkVM:

```sh
cargo nexus prove
```

This command will save the proof to `./nexus-proof`.

#### 8. Verify Your Proof

Finally, load and verify the proof:

```sh
cargo nexus verify
```

Save the `NEXUS-PROOF` somewhere in your directory for future reference.
