document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    let blogs = localStorage.getItem("blogEntry") || '[]';
    blogs = JSON.parse(blogs)
    // Perform your desired actions here, like getting form data and sending it to a server

    const username = document.getElementById("userName").value;
    console.log("Submitted username: ", username);
    const title = document.getElementById("title").value;
    console.log('submitted title: ', title);
    const content = document.getElementById("content").value;
    console.log('submitted content: ', content);
   
    if (!username,!title,!content) {
    alert('Please complete the form');
    } else {

const blog = {
    username: username,
    title: title,
    content: content
}
console.log(blog);
    // we need to get the username to save on the page even after creating a new blog post
    blogs.push(blog)
    console.log(blogs);
    localStorage.setItem("blogEntry", JSON.stringify(blogs));
    window.location.href = './blog.html'
}
    //if i dont enter anything in the blog, then an alert will pop up asking to 'complete the form'

});