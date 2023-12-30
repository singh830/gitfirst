console.log('person1 : shows tickets');

console.log('person2 : shows ticket');



const preMovie = async() => {

 const promiseWifeBringingTicks = new Promise((resolve,reject) => {

setTimeout(() => {

resolve('ticket'), 3000);

});

let ticket = await promiseWifeBringingTicks;

return ticket;

}

const getPopcorn = promiseWifeBringingTicks. then((t) => {

console.log('wife: i have the tics');

console.log('husband: we should go in');

console.log('wife: no i am hungry');

return new Promise((resolve,reject) => resolve(`${t} popcorn`));

}]; 



const getButter = getPopcorn.then((t) =>{

console.log('husband: i got some popcorn');

console.log('husband: we should go in');

console.log('wife: I need butter on my popcorn');

return new Promise((resolve,reject) => resolve(`${t} butter`));

 

console.log('person4 : shows tickets');

console.log('person5 : shows ticket');







getButter.then((t) => console.log(t));

// Simulating a database with user data and posts

const user = {

 lastActivityTime: null,

};



const posts = [

 { id: 1, content: 'Post 1' },

 { id: 2, content: 'Post 2' },

 { id: 3, content: 'Post 3' },

];



// Function to simulate updating the user's last activity time

function updateLastUserActivityTime() {

 return new Promise((resolve) => {

  setTimeout(() => {

   user.lastActivityTime = new Date();

   console.log('User activity time updated:', user.lastActivityTime);

   resolve(user.lastActivityTime);

  }, 1000);

 });

}



// Function to simulate creating a post using async/await

async function createPost(content) {

 return new Promise((resolve) => {

  setTimeout(() => {

   const newPost = { id: posts.length + 1, content };

   posts.push(newPost);

   console.log('New post created:', newPost);

   resolve(newPost);

  }, 1000);

 });

}



// Function to simulate deleting a post using async/await

async function deletePost(postId) {

 return new Promise((resolve, reject) => {

  setTimeout(() => {

   const index = posts.findIndex((post) => post.id === postId);

   if (index !== -1) {

    const deletedPost = posts.splice(index, 1)[0];

    console.log('Post deleted:', deletedPost);

    resolve(deletedPost);

   } else {

    reject(new Error('Post not found'));

   }

  }, 1000);

 });

}



// New promise to simulate getting cold drinks after getting butter

function getColdDrinks() {

 return new Promise((resolve) => {

  setTimeout(() => {

   console.log('Husband got butter, now getting cold drinks.');

   resolve('Cold drinks obtained');

  }, 1000);

 });

}



// Async function to perform the tasks using async/await

async function performTasks() {

 try {

  await createPost('New Post Content');

  const updatedLastActivityTime = await updateLastUserActivityTime();

  console.log('Last Activity Time after post creation:', updatedLastActivityTime);



  const deletedPost = await deletePost(1); // Assuming you want to delete the first post

  console.log('Deleted Post:', deletedPost);



  await getColdDrinks();

   

  console.log('Remaining Posts:', posts);

 } catch (error) {

  console.error('Error:', error.message);

 }

}



// Call the async function

performTasks();