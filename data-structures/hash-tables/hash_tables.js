/*
    -- A hash table is implemented using an array to store key-value pairs. The keys are hashed using a hashing function to compute the index where the corresponding value should be stored. The hash table provides efficient insertion, retrieval, and removal of key-value pairs.

    -- The hashing function computes the index for a given key by summing the character codes of the key's characters and taking the modulus of the array size. This ensures that the index falls within the bounds of the array.

    -- The insert operation allows inserting a new key-value pair into the hash table. It computes the index for the key using the hashing function and stores the pair in an array at that index. If the index is empty, it creates an empty array at that index to store multiple key-value pairs.

    -- The retrieve operation retrieves the value associated with a given key from the hash table. It computes the index for the key using the hashing function and searches for the key in the array at that index. If found, it returns the associated value; otherwise, it returns undefined.

    -- The remove operation removes a key-value pair from the hash table. It computes the index for the key using the hashing function and searches for the key in the array at that index. If found, it removes the key-value pair from the array using the splice method.
*/
class HashTable {
  constructor(size) {
    this.size = size; // Size of the hash table array
    this.table = new Array(size); // Initialize an empty array to store the key-value pairs, use prime numbers as array length
  }

  // Hashing function to compute the index for a given key
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size; // Use modulus operator to ensure the index falls within the array bounds
  }

  // Insert a key-value pair into the hash table
  insert(key, value) {
    const index = this.hash(key); // Compute the index for the given key
    if (!this.table[index]) {
      this.table[index] = []; // If the index is empty, create an empty array to store key-value pairs
    }
    this.table[index].push({ key, value }); // Push the key-value pair into the array at the computed index
  }

  // Retrieve the value associated with a given key from the hash table
  retrieve(key) {
    const index = this.hash(key); // Compute the index for the given key
    if (!this.table[index]) {
      return undefined; // If the index is empty, the key-value pair doesn't exist in the hash table
    }
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i].key === key) {
        return this.table[index][i].value; // If the key is found, return the associated value
      }
    }
    return undefined; // Key not found in the hash table
  }

  // Remove a key-value pair from the hash table
  remove(key) {
    const index = this.hash(key); // Compute the index for the given key
    if (!this.table[index]) {
      return; // If the index is empty, the key-value pair doesn't exist in the hash table
    }
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i].key === key) {
        this.table[index].splice(i, 1); // Remove the key-value pair from the array at the computed index
        return;
      }
    }
  }
}

// Create a new hash table with a size of a prime number (31 in this example: prime number)
const hashTable = new HashTable(31);

// Insert a key-value pair
hashTable.insert("name", "John Doe");

// Retrieve a value
const name = hashTable.retrieve("name");
console.log(name); // Output: 'John Doe'

// Remove a key-value pair
hashTable.remove("name");
