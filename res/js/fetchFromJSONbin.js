async function loadPosts() {
  const middle = document.querySelector('.middle');//class that contains posts


  try {
    const res = await fetch('https://api.jsonbin.io/v3/b/690351b843b1c97be98c1712');
    //sadly couldnt get it to work with private bin

  if(!res.ok) {
    throw new Error(`'Request failed with status code: ${res.status}`);
  }

  const data = await res.json();
  const posts1= data.record;
  //console.log(posts1.posts);
  let howMany=posts1.posts.length;
  //console.log("mul on" + howMany);
  
  
  

    middle.innerHTML = ''; // clear previous posts

    for (let i = 0; i < howMany; i++) {//we will iterate through all posts
        //console.log(i);
        const postData = posts1.posts[i];
        //console.log(postData);

        const post = document.createElement('div');
        post.className = "post";

        const postImageHtml = postData.postPicture
             ? `<img src="${postData.postPicture}" alt="${postData.postCaption || 'Post image'}" class="post-image">`
             : '';

        const authorName = postData.authorName ? `<strong>${postData.authorName}</strong>` : '';
        //i live in happy world, where everything else doesnt need checking
        post.innerHTML = `
            <div class="post-card">
                <div class="post-header">
                    <img src="${postData.profilePicture}" alt="Profile picture" class="profile-pic">
                    <span class="date">${postData.date}</span>
                    ${authorName}
                </div>
            ${postImageHtml}
          <div class="post-caption">${postData.postCaption}</div>
          <div class="post-footer">${postData.postFooter}</div>
        </div>
      `;

      middle.appendChild(post);
    }
  } catch (error) {
    middle.innerHTML = "Failed to load data";
  }
}

loadPosts();
