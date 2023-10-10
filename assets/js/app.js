const cl = console.log;

const backDrop = document.getElementById("backDrop");
const ourModal = document.getElementById("ourModal");
const addMovie = document.getElementById("addMovie");
const cancelCard = [...document.querySelectorAll(".cancelCard")];
const movieForm = document.getElementById("movieForm");
const movieTitleControl = document.getElementById("movieTitle");
const imageUrlControl = document.getElementById("imageUrl");
const movieRatingControl = document.getElementById("movieRating");
const movieContainer = document.getElementById("movieContainer");

let movieArr = [
    {
        title : `Maari`,
        imageUrl : `data:image/jpeg;base64,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`,
        rating : 5
    }
];


const templating = (arr) => {
    let result = ``;

    arr.forEach(ele => {
        result +=`<div class="col-md-4 mt-4">
                   <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                           <h2>${ele.title}</h2>
                           <small>Rating : ${ele.rating}</small>
                    </div>
                    <div class="card-body">
                        <img src="${ele.imageUrl}" alt="" class="movieImg">
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                     <button class="btn btn-primary">Edit</button>
                     <button class="btn btn-danger">Delete</button>
                    </div>
                   </div>
                  </div> `
    })

    movieContainer.innerHTML = result;
    
}


const onAddBtn = () => {
    backDrop.classList.toggle("active")
    ourModal.classList.toggle("active")

    cancelCard.forEach(ele => {
        // cl(ele)
        ele.addEventListener("click", onAddBtn)
    })
}

addMovie.addEventListener("click", onAddBtn);


const onSubmitForm = (eve) => {
     cl(`form submitted`)
     eve.preventDefault()
     let movieObj = {
        title : movieTitleControl.value,
        imageUrl : imageUrlControl.value,
        rating : movieRatingControl.value
     }
     movieArr.unshift(movieObj);
     cl(movieArr);
     movieForm.reset();
     onAddBtn();
     templating(movieArr);
}

movieForm.addEventListener("submit", onSubmitForm);





