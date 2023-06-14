let postCard = document.querySelector(".postCard");
let txtPage = document.querySelector(".txt");

function getData(url) {
  class ErrorResponse extends Error {
    constructor(status, message) {
      super(message);
      this.status = status;
    }
  }
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          reject(new ErrorResponse(res.status, "Url is error"));
        }
      })
      .then((res) => {
        resolve(res);
      });
  });
}

let userId = JSON.parse(localStorage.getItem("userId"));
let point = JSON.parse(localStorage.getItem("point"));

console.log(point);

txtPage.innerHTML = point;
point = point.toLowerCase();

function getCard({ title, body }) {
  return `
    <div class="card text-bg-success my-4">
    <div class="card-header">Comment</div>
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">
        ${body}
      </p>
    </div>
  </div> 
    `;
}

function getTodos({ title, body }) {
  return `
    <div class="card text-bg-success my-4">
    <div class="card-header">Comment</div>
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">
        ${body}
      </p>
    </div>
  </div> 
    `;
}

function getComments({ title, body }) {
  return `
    <div class="card text-bg-success my-4">
    <div class="card-header">Comment</div>
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">
        ${body}
      </p>
    </div>
  </div> 
    `;
}

if (point === "posts") {
  getData(
    `https://jsonplaceholder.typicode.com/${point}?userId=${userId}`
  ).then((res) => {
    res.map((el) => {
      postCard.innerHTML += getCard(el);
    });
  });
} else if (point === "todos") {
  getData(
    `https://jsonplaceholder.typicode.com/${point}?userId=${userId}`
  ).then((res) => {
    res.map((el) => {
      postCard.innerHTML += getTodos(el);
    });
  });
} else {
  getData(
    `https://jsonplaceholder.typicode.com/${point}?postId=${userId}`
  ).then((res) => {
    res.map((el) => {
      postCard.innerHTML += getComments(el);
    });
  });
}
