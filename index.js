// Task 2: Create Function to Display Posts
function displayPosts(posts) {
    const postList = document.getElementById("post-list");

    // Loop through the posts list
    posts.forEach((post) => {
        // Create an li tag
        const li = document.createElement("li");

        // Create a new h1 tag with title as textContent
        const h1 = document.createElement("h1");
        h1.textContent = post.title;

        // Create a new p tag with body as textContent
        const p = document.createElement("p");
        p.textContent = post.body;

        // Append h1 and p to li
        li.appendChild(h1);
        li.appendChild(p);

        // Append li to the ul (#post-list)
        postList.appendChild(li);
    });
}

// Task 2: Refactor with Async/Await
async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const posts = await response.json();
        
        // Call displayPosts() function after fetch
        displayPosts(posts);
        return posts;
    } catch (error) {
        console.error("Error fetching posts:", error.message);
    }
}

// Call function on script load
getPosts();