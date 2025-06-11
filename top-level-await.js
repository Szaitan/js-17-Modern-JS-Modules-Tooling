// Top level await is a new feature which allows to await for completition of code without async funtion
// However we need to remeber that this is affecting the rest of the code as its not async anymore

console.log('Test: Start');
const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(
  resolve => resolve.json()
); // 2 sec delay

console.log(posts);
console.log('Test: Finish');
