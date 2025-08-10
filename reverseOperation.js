function solve(eq){
    
    const subs = eq.match(/[a-zA-Z0-9]+|[+\-*/]/g);
    
    return subs.reverse().join('');
}
