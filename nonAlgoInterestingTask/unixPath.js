// Input:  "/foo/../test/../test/../foo//bar/./baz"
// Output: "/foo/bar/baz"

function simplifyPath(path) {
    const parts = path.split('/');
    const stack = [];
  
    for (const part of parts) {
        if (part === '' || part === '.') {
            continue
        } else if (part === '..') {
            if (stack.length>0) stack.pop()
        } else {
            stack.push(part)
        }
    }  
      
    return '/' + stack.join('/')
  }
  
  console.log(simplifyPath("/foo/../test/../test/../foo//bar/./baz")); 