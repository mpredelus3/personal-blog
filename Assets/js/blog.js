
//grabs blog entries from the form js page
const posts = JSON.parse(localStorage.getItem('blogEntry'))
console.log(posts);

// creates loop that allows another post to be added without removing the previous one
for (let i = 0; i < posts.length; i++) {
console.log(posts[i]);

//seperates each blog post individually
const blogSection = document.createElement('section')

blogSection.classList.add('blogBox')

//make each element (username, title, content) show up on the blog page 
const blogUser = document.createElement('h1')
blogUser.textContent = posts[i].username

const blogTitle = document.createElement('h2')
blogTitle.textContent = posts[i].title

const blogDesc = document.createElement('p')
blogDesc.textContent = posts[i].content

const blogContent = document.querySelector('.blogContent')

blogSection.appendChild(blogUser)
blogSection.appendChild(blogTitle)
blogSection.appendChild(blogDesc)

blogContent.appendChild(blogSection)


}
