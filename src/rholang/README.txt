## Rholang Contracts README

### Overview

This README provides details about several Rholang contracts: 
`initializeMapStore`, `login`, `load`, and `save`. These contracts 
are designed to manage and interact with a map associated with a 
deployer’s REV address, allowing for initialization, login, data 
retrieval, and data storage.

### Contracts

#### 1. `initializeMapStore`

**Purpose:**
The `initializeMapStore` contract is used to set up the initial data 
structure for a deployer’s map and deploy the `isInitialized` contract. 
It initializes a map store, adds the `isInitialized` contract to the 
registry, and returns both the `mapStore` channel and the URI of the 
`isInitialized` contract.

**Usage:**
- Call `initializeMapStore` when you want to create a map store for 
  managing deployer-specific data and deploy the `isInitialized` 
  contract.
- The contract returns two values:
  1. The `mapStore` channel, where the root map is stored.
  2. The URI for the `isInitialized` contract, which can be used to 
     check if a deployer’s data has been initialized.

#### 2. `login`

**Purpose:**
The `login` contract checks if a deployer’s data has been initialized 
by using the `isInitialized` contract. If the data is not initialized, 
the contract creates a map under the deployer’s ID with a key named 
`"codeDict"` and an empty map as its value.

**Usage:**
- Pass the URI of the `isInitialized` contract to `login` to verify if 
  the deployer’s data is initialized.
- If the deployer’s data is not initialized, the contract will 
  automatically initialize it with a `"codeDict"` key and an empty map 
  as the value.
- The contract returns `false` if initialization was performed, and 
  `true` if the data was already initialized.

#### 3. `load`

**Purpose:**
The `load` contract allows you to retrieve a specific value associated 
with a key stored in the `"codeDict"` map under the deployer’s ID. It 
checks the deployer’s data and returns the value if the key exists, or 
`Nil` if the key is not found.

**Usage:**
- Use `load` when you need to access data stored under a specific key 
  in the `"codeDict"` map of a deployer’s data.
- If the key exists, `load` returns the associated value.
- If the key does not exist, `load` returns `Nil`.

#### 4. `save`

**Purpose:**
The `save` contract is used to store or update a key-value pair in the 
`"codeDict"` map under the deployer’s ID. The contract reads the 
existing map, updates it with the new key-value pair, and writes the 
updated map back to the deployer’s data.

**Usage:**
- Call `save` to add or update a key-value pair in the `"codeDict"` map 
  associated with a deployer.
- The contract reads the current map, sets the new key-value pair, and 
  writes the updated map back to the deployer’s ID channel.
- The contract returns `true` to indicate that the save operation was 
  successful.

### Conclusion

These Rholang contracts provide a structured way to manage and interact 
with deployer-specific data on the RChain platform. By using 
`initializeMapStore`, `login`, `load`, and `save`, you can effectively 
set up, verify, retrieve, and update data associated with a deployer’s 
REV address. These contracts are designed to work together, ensuring 
that each deployer’s data is properly initialized and accessible in a 
secure and organized manner.
