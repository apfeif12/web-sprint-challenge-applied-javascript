import axios from 'axios';


const Card = (article) => {
  const div = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgcont = document.createElement("div");
  const img = document.createElement("img");
  const span = document.createElement("span");

  div.appendChild(headline);
  div.appendChild(author);
  author.appendChild(imgcont);
  author.appendChild(span);
  imgcont.appendChild(img);

  div.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgcont.classList.add("img-container");

  headline.textContent = article.headline;
  
  return div;
  
  
  
  
  
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  
  axios.get('https://lambda-times-api.herokuapp.com/articles')
  .then(res => {
    document.querySelector(selector).appendChild(Card(res.articles.topics));
  })
  .catch(drama => {
    console.log(drama.res)
  })
}
  
  
  
  
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //


export { Card, cardAppender }
