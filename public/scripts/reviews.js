const steampunkReviews = [
    {
      image: "",
      name: "Captain Phineas Gearsworth",
      title: "Inventor Extraordinaire",
      review: "In the bustling airships above the brass-covered city, I discovered an unparalleled marvel. The craftsmanship of this contraption is second to none, a mechanical wonder that blends elegance with functionality.",
    },
    {
      image: "",
      name: "Lady Aurelia Cogsworth",
      title: "Navigator of the Ether",
      review: "A true gem in the clockwork of modern engineering! Its precision and detail are remarkable, transporting me to a world of steam and gears. I cannot recommend this enough for fellow adventurers seeking refinement.",
    },
    {
      image: "",
      name: "Professor Ignatius Steelbeard",
      title: "Master of Steam Engineering",
      review: "Upon examining the gears and steam valves, I was astonished by its impeccable design. Every cog spins with purpose, every bolt fastened with care. This device truly captures the spirit of Victorian ingenuity.",
    },
    {
      image: "",
      name: "Miss Victoria Gearling",
      title: "Airship Captain",
      review: "From the brass fittings to the intricate clockwork, this creation exudes the essence of adventure. Perfect for any skybound explorer who values both form and function in their apparatuses. A must-have!",
    },
    {
      image: "",
      name: "Dr. Archibald Steamfist",
      title: "Alchemist & Engineer",
      review: "A marvel of steam-fueled precision! Every valve and piston works in perfect harmony. I have yet to see a contraption as finely tuned. The craftsmanship is a testament to the golden age of innovation.",
    },
    {
      image: "",
      name: "Madame Eliza Tock",
      title: "Steampunk Artisan",
      review: "An absolute masterpiece of brass and cog. This device captures the spirit of the Victorian age with meticulous attention to detail. It stands as both a functional machine and a work of art in its own right.",
    },
    {
      image: "",
      name: "Baron Ezekiel Brasswell",
      title: "Airship Commander",
      review: "I have traversed the skies in many contraptions, but this one stands above the rest. Its blend of power and elegance is unmatched. The quality of its steam-powered engines is truly something to behold.",
    },
    {
      image: "",
      name: "Seraphina Gearlight",
      title: "Clockwork Specialist",
      review: "Delicately crafted with impeccable precision. This mechanism combines beauty and function like nothing I’ve encountered before. An essential piece for any clockwork enthusiast seeking perfection.",
    }
  ];
  

let img;
let name;
let title;
let review;
let index = 0;

const setData = () => {
    const reviewName = document.getElementById("name")
    const reviewTitle = document.getElementById("title")
    const reviewReview = document.getElementById("review")
    const reviewImg = document.getElementById("image")

    let review = steampunkReviews[index]

    img = review.img
    name = review.name
    title = review.title
    review = review.review

    reviewName.textContent = name;
    reviewTitle.textContent = title;
    reviewReview.textContent = review;
    //reviewImg.src = img;
}

window.onload = () => {
    setData()
}

const previousBtn = document.getElementById("previous-btn")

previousBtn.addEventListener("click", () => {
    index--

    if (index < 0) {
        index = 7
    }

    setData()
})

const nextBtn = document.getElementById("next-btn")

nextBtn.addEventListener("click", () => {
    index++

    if (index > 7) {
        index = 0
    }

    setData()
})

const randomBtn = document.getElementById("random-btn")

randomBtn.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 7)
    index = randomNumber

    setData()
})

const nextReview = document.getElementById("next-btn")