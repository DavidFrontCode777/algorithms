// Time complexity: O(Nlog(log N))
// Space complexity: O(N)

// Sieve of Eratosthenes Algorithm

function countPrimes(n) {
    if (n < 2) {
        return 0;
    }
    
    const isPrime = new Array(n).fill(true);
    isPrime[0] = isPrime[1] = false;
    
    for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
    return isPrime.filter(val => val).length;
}