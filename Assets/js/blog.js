// needs a function. make a for loop.
// remember to console log each thing in array to look
// in that for loop can create html elements in javascript, take that element and (append?) it to the page

const posts = JSON.parse(localStorage.getItem('blogEntry'))
console.log(posts);

for (let i = 0; i < posts.length; i++) {
console.log(posts[i]);

const blogSection = document.createElement('section')

blogSection.classList.add('blogBox')

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
