const Header = (title, date, temp) => {
  const div = document.createElement("div");
  const dateSpan = document.createElement("span");
  const tempSpan = document.createElement("span");
  const h1 = document.createElement("h1");

  div.appendChild(dateSpan);
  div.appendChild(tempSpan);
  div.appendChild(h1);

  div.classList.add("header");
  dateSpan.classList.add("date");
  tempSpan.classList.add("temp");

  dateSpan.textContent = date;
  tempSpan.textContent = temp;
  h1.textContent = title;

  return div;
}
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

const headerAppender = (selector) => {
  const header = document.querySelector(selector);
  header.appendChild(Header("This is a header", "6/13/2021", "-20"))
 
 
 
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
