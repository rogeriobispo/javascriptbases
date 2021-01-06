// Advantage of a module
// avoid name collisions(namespaces)
// reusability
// maintainability

const { greeting } = (function() {
  let greet = 'Hello ',
      goodbye = 'So long';
  
  const getGreet = function() { 
    const d = new Date();
    if (d.toLocaleTimeString().includes('AM')) {
      greet = 'Good Morning ';
    } else {
      greet = 'Hello '
    }
    return greet
  } 

  const greeting = function (name) {
    console.log(`${getGreet() + name}! Welcome to the course. `)
  }
  return { greeting }
})()

greeting('rogerio')
