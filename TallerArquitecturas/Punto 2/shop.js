// Class to manage inventory
class Inventory {
    constructor() {
      this.products = {}; // Store products as { id: { name: '', quantity: 0 } }
      this.observers = [];
    }
  
    // Add a new product
    addProduct(id, name, quantity) {
      this.products[id] = { name, quantity };
      this.notifyChange(id);
    }
  
    // Update the quantity of an existing product
    updateQuantity(id, quantity) {
      if (this.products[id]) {
        this.products[id].quantity = quantity;
        this.notifyChange(id);
      } else {
        console.log('Product not found');
      }
    }
  
    // Notify changes in the inventory
    notifyChange(id) {
      console.log(`The inventory of product ${id} has been updated.`);
      this.observers.forEach(observer => observer.update(this.products[id]));
    }
  
    // Register an observer to listen for changes in the inventory
    registerObserver(observer) {
      this.observers.push(observer);
    }
  
    // Get the current state of the inventory
    getInventory() {
      return this.products;
    }
  }
  
  // Observer class to handle actions based on inventory changes
  class InventoryObserver {
    constructor() {}
  
    // Method to update inventory in response to changes
    update(product) {
      console.log(`The observer has been notified about the change in product ${product.name}.`);
      // Here you can add logic to handle inventory update in other systems
    }
  }
  
  // Instance of the Inventory class
  const inventory = new Inventory();
  
  // Instance of the InventoryObserver
  const observer = new InventoryObserver();
  
  // Register the observer with the inventory
  inventory.registerObserver(observer);
  
  // Example events
  inventory.addProduct(1, 'T-shirt', 50);
  inventory.updateQuantity(1, 45);
  
  // View the state of the inventory
  console.log(inventory.getInventory());
  