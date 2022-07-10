// remember indexedDb is async
// we will open db connection, create object store, run the 'transaction'
export function idbPromise (storeName, method, object) {
    return new Promise ((resolve, reject) => {
  
      // open connection to db with version 1
      const request = window.indexedDB.open('shop-shop', 1);
  
      // create variables to refer to db, transaction and object store
      // db = database, tx = transaction, store = object store
      let db, tx, store;
  
  
      // if version changes, or its first time using database, run function
      // it will create object store to cache data in 
      request.onupgradeneeded = function(e) {
        
        const db = request.result;
  
        // will create an object store for each set of data
        // we'll set primary key to be _id
        db.createObjectStore('products', { keyPath: '_id' });
        db.createObjectStore('categories', { keyPath: '_id' });
        db.createObjectStore('cart', { keyPath: '_id' });
      };
  
  
      // implement error handling
      request.onerror = function(e) {
        console.log('There was an error');
      };
  
  
  
      // now, when database is open, we will create functionality
      request.onsuccess = function(e) {
        
        // save reference of db to db variable
        db = request.result;
  
        // open transaction when we pass something to store
        // do NOT camelCase readwrite, I always do this
        tx = db.transaction (storeName, 'readwrite');
  
        // save reference to object store
        store = tx.objectStore(storeName);
  
        // error handling
        db.onerror = function(e) {
          console.log('error', e);
        };
  
  
        // we must write CRUD operations for idbPromise
        switch (method) {
  
          // PUT REQUEST 
          // runs put method on object store
          case 'put':
            store.put(object);
            resolve(object);
            break;
  
          
          // GET REQUEST
          // get all the data from the store
          case 'get':
            const all = store.getAll();
            all.onsuccess = function() {
              resolve(all.result);
            };
            break;
  
          // DELETE REQUEST
          // runs delete method on object with matching _id
          case 'delete':
            store.delete(object._id);
            break;
  
  
          // error handling
          default:
            console.log('No valid method');
            break;
        }
  
        // once transaction is complete, close db connection
        tx.oncomplete = function() {
          db.close();
        };
      };
  
  
    });
  }