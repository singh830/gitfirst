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
   
   
   
   // Function to simulate creating a post
   
   function createPost(content) {
   
    return new Promise((resolve) => {
   
     setTimeout(() => {
   
      const newPost = { id: posts.length + 1, content };
   
      posts.push(newPost);
   
      console.log('New post created:', newPost);
   
      resolve(newPost);
   
     }, 1000);
   
    });
   
   }
   
   
   
   // Function to simulate deleting a post
   
   function deletePost(postId) {
   
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
   
   
   
   // Example usage
   
   createPost('New Post Content')
   
    .then(() => updateLastUserActivityTime())
   
    .then((updatedLastActivityTime) => {
   
     console.log('Last Activity Time after post creation:', updatedLastActivityTime);
   
     return deletePost(1); // Assuming you want to delete the first post
   
    })
   
    .then(() => {
   
     console.log('Remaining Posts:', posts);
   
    })
   
    .catch((error) => {
   
     console.error('Error:', error.message);
   
    });
   
   