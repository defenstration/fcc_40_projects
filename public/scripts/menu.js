const meals = [
    {
      name: "Truffle Burger",
      price: 15.99,
      description: "A juicy beef patty topped with truffle aioli, arugula, and gouda cheese on a brioche bun.",
      class: "lunch",
      img: ""
    },
    {
      name: "Beer-Battered Fish & Chips",
      price: 13.99,
      description: "Crispy beer-battered cod served with hand-cut fries and a side of malt vinegar.",
      class: "dinner",
      img: ""
    },
    {
      name: "Maple Bacon Pancakes",
      price: 10.49,
      description: "Fluffy pancakes layered with crispy bacon and drizzled with maple syrup.",
      class: "breakfast",
      img: ""
    },
    {
      name: "Steak & Eggs",
      price: 16.99,
      description: "Tender grilled steak served with two eggs any style and roasted potatoes.",
      class: "breakfast",
      img: ""
    },
    {
      name: "Crispy Chicken Sandwich",
      price: 12.99,
      description: "Buttermilk-fried chicken topped with spicy slaw and pickles on a toasted bun.",
      class: "lunch",
      img: ""
    },
    {
      name: "Gourmet Grilled Cheese",
      price: 9.49,
      description: "A blend of sharp cheddar, gruyere, and fontina cheeses melted on sourdough bread.",
      class: "snack",
      img: ""
    },
    {
      name: "BBQ Pulled Pork Sliders",
      price: 11.99,
      description: "Slow-cooked pulled pork with tangy BBQ sauce on mini brioche buns, served with coleslaw.",
      class: "dinner",
      img: ""
    },
    {
      name: "Garlic Parmesan Fries",
      price: 6.99,
      description: "Hand-cut fries tossed in garlic butter and topped with freshly grated parmesan.",
      class: "snack",
      img: ""
    },
    {
      name: "Avocado Toast",
      price: 8.99,
      description: "Smashed avocado on multigrain toast, topped with radishes, chili flakes, and a poached egg.",
      class: "breakfast",
      img: ""
    },
    {
      name: "Buffalo Cauliflower Bites",
      price: 7.99,
      description: "Crispy cauliflower florets tossed in spicy buffalo sauce, served with blue cheese dip.",
      class: "snack",
      img: ""
    }
];

const menuContainer = document.getElementById("menu-container")
  
menuContainer.innerHTML += meals.map((meal) => {
  `<div class = "meal-card ${meal.class} grid" id = "${meal.name}">
    <img src = ${meal.img} class = >
    <h4 class = "meal-name">${meal.name}</h4>
  
  
  </div>`
})