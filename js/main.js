// Call
const cards = document.querySelector(".card-row");
// let mains = document.querySelector("main");
/*--------------------------------------------------------------------------------*/
// Import JS
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

/*--------------------------------------------------------------------------------*/
// Home page Mapping
function getCard({ name, username, phone, website, email, id }) {
  return `
  <div class="col-md-6 col-lg-4 mb-3 ">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${username}</h6>
     <div class="d-flex flex-column py-2 mb-2 ">
     <div class="d-flex"> <p class="m-0 me-1">Email:</p> <a href="#" class="ms-0 card-link">
      ${email}
      </a></div>
      <div class="d-flex"> <p class="m-0 me-1">Website:</p> <a href="#" class="ms-0 card-link">
      ${website}
      </a> </div>
      <div class="d-flex"> <p class="m-0 me-1">Phone:</p> <a href="#" class="ms-0 card-link">
      ${phone}
      </a></div>
       </div>
      <div class="d-flex justify-content-between">
       <a onclick="saveId(${id},'Posts')" style="color:white" class="btn btn-info" href="posts.html">Posts 🗂</a>
       <a onclick="saveId(${id},'Todos')" style="color:white" class="btn btn-info" href="posts.html">Todos ✅</a>
       <a onclick="saveId(${id})" style="color:white" class="btn btn-info" href="#">Photos 🖼</a>
      </div>
      <a onclick="saveId(${id},'Comments')" class="mt-2 w-100 btn btn-primary" href="posts.html">Comments 💬</a>
    </div>
  </div>
</div>  
    `;
}
/*--------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------*/
async function getState() {
  cards.innerHTML = `
  <div id="loading">
  <div class="loading">
    <div class="socket">
      <div class="gel center-gel">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c1 r1">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c2 r1">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c3 r1">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c4 r1">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c5 r1">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c6 r1">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>

      <div class="gel c7 r2">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>

      <div class="gel c8 r2">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c9 r2">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c10 r2">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c11 r2">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c12 r2">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c13 r2">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c14 r2">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c15 r2">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c16 r2">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c17 r2">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c18 r2">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c19 r3">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c20 r3">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c21 r3">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c22 r3">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c23 r3">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c24 r3">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c25 r3">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c26 r3">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c28 r3">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c29 r3">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c30 r3">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c31 r3">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c32 r3">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c33 r3">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c34 r3">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c35 r3">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c36 r3">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
      <div class="gel c37 r3">
        <div class="hex-brick h1"></div>
        <div class="hex-brick h2"></div>
        <div class="hex-brick h3"></div>
      </div>
    </div>
  </div>
</div>`;
  let a = await getData("https://jsonplaceholder.typicode.com/users");
  a.map((el) => {
    cards.innerHTML += getCard(el);
  });
}

getState();
/*--------------------------------------------------------------------------------*/

function saveId(id, point = "") {
  localStorage.setItem("point", JSON.stringify(point));
  localStorage.setItem("userId", JSON.stringify(id));
}

const loading = document.getElementById("loading");
window.addEventListener("load", () => {
  loading.classList.add("loading-none");
});
