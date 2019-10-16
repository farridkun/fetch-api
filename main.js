// fetch('coba.json')
//  .then(res => {
//      console.log(res);
//      return res.json();
//  })
//  .then(json => console.log(json));

// fetch('https://unsplash.it/600/400')
//  .then(res => res.blob())
//  .then(blob => {
//      let img = document.createElement('img');
//      img.src = URL.createObjectURL(blob);
//      document.querySelector('body').appendChild(img);
//  });

// function createNode(element) {
//     return document.createElement(element);
// }

// function append(parent, el) {
//   return parent.appendChild(el);
// }

// // const ul = document.getElementById('authors');
// // const url = 'http://www.omdbapi.com/?apikey=60409d33&s=Preman%20Pensiun';
// // fetch(url)
// // .then((resp) => resp.json())
// // .then(function(data) {
// //   let authors = data.Search;
// //   return authors.map(function(author) {
// //     let li = createNode('li'),
// //         span = createNode('span');
// //     span.innerHTML = `${author.Title} ${author.Type}`;
// //     append(li, span);
// //     append(ul, li);
// //   })
// // })
// // .catch(function(error) {
// //   console.log(error);
// // });


 const postSection = document.querySelector('#posts');
 const postTemplate = document.querySelector ('#post-template');

 getData()
    .catch(err => console.error(err));

 async function getData() {
    const postStream = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postStream.json();
    let i = 0;
    
    // throw 'Get Data Error';
    // console.log(posts);

    posts.forEach(post => {
        i++;
        if(i < 10) {
            const title = post.title;
            const body = post.body;

            fetch('https://unsplash.it/300/200')
             .then(res => res.blob())
             .then(blob => {
                const newPost = document.importNode(postTemplate.content, true);
                const postTitle = newPost.querySelector('.post__title');
                const postBody = newPost.querySelector('.post__body');
                const postImg = newPost.querySelector('.post__img');
                
                // throw 'Image Fetch Error';

                postImg.src = URL.createObjectURL(blob);
                postTitle.innerText = title;
                postBody.innerText = body;
                postSection.appendChild(newPost);    
             })
             .catch(err => console.error(err));
        }
    })
 }