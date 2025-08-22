function likes(names) {
  const count = names.length
  
      return (count === 0)? `no one likes this`: (count === 1)? `${names[0]} likes this` : (count === 2)?
      
    `${names[0]} and ${names[1]} like this`: (count === 3)? `${names[0]}, ${names[1]} and ${names[2]} like this`:
   `${names[0]}, ${names[1]} and ${count - 2} others like this`
  
}