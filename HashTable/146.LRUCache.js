var LRUCache = function(capacity) {
    this.cap = capacity;
    this.cache = new Map(); // map key to node
    
    // left=LRU, right=most recent
    this.left = new Node(0, 0);
    this.right = new Node(0, 0);
    this.left.next = this.right;
    this.right.prev = this.left;
};

// Helper Node class
function Node(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
}

// remove node from list
LRUCache.prototype.remove = function(node) {
    const prev = node.prev;
    const nxt = node.next;
    prev.next = nxt;
    nxt.prev = prev;
};

// insert node at right (most recent)
LRUCache.prototype.insert = function(node) {
    const prev = this.right.prev;
    const nxt = this.right;
    prev.next = node;
    nxt.prev = node;
    node.next = nxt;
    node.prev = prev;
};

LRUCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
        const node = this.cache.get(key);
        this.remove(node);
        this.insert(node);
        return node.val;
    }
    return -1;
};

LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        this.remove(this.cache.get(key));
    }
    const newNode = new Node(key, value);
    this.cache.set(key, newNode);
    this.insert(newNode);
    
    if (this.cache.size > this.cap) {
        // remove from the list and delete the LRU from the hashmap
        const lru = this.left.next;
        this.remove(lru);
        this.cache.delete(lru.key);
    }
};