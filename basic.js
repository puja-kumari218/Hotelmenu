const menu = [
    {
      id: 1,
      title: "pancakes",
      category: "breakfast",
      price: 22.2,
      img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuY2FrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati,
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam facilis`,
    },
    {
      id: 2,
      title: "dinner",
      category: "lunch",
      price: 10.99,
      img: "https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRpbm5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati,
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam facilis`,
    },
    {
      id: 3,

      title: "milkshake",
      category: "shakes",
      price: 66.99,
      img: "https://media.istockphoto.com/id/1311373994/photo/milk-shakes-in-plastic-cups-and-straws-on-a-dark-wooden-table.jpg?b=1&s=170667a&w=0&k=20&c=IxXcx8bnMtFSjuWDRtyzBXJq1UFD2NLc6AMxfdwd4xs=",
      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati,
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam facilis`,

    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 22.99,
      img: "https://images.unsplash.com/photo-1580364545826-325be1ceb04c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3xuREkxZzR5OFNXRXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",

      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati,
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam facilis`,

    },
    {

      id: 5,
      title: "egg ",
      category: "lunch",
      price: 22.99,
      img: "https://images.unsplash.com/photo-1599082295807-6e4a92c0790d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8bkRJMWc0eThTV0V8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",

      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati,
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam facilis`,

    },

    {
      id: 6,
      title: "oreo",
      category: "shakes",
      price: 18.99,
      img: "https://images.unsplash.com/photo-1507750549272-e58742b1df80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG9yZW8lMjBzaGFrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",

      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati,
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam facilis`,

    },
    {

      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "https://images.unsplash.com/photo-1637926704492-d4e33859b0ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8bkRJMWc0eThTV0V8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati,
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam facilis`,

    },
    {
      id: 8,
      title: "classic",
      category: "lunch",
      price: 20.00,
      img: "https://images.unsplash.com/photo-1657047404623-275008b8bc5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati,
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam facilis`,

    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 19.99,
      img: "https://images.unsplash.com/photo-1622818425825-1dcdb3a39c30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati,
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam facilis`,

    },
  ];
  
  const sectionCenter = document.querySelector(".section-center");
  
  window.addEventListener("DOMContentLoaded", function () {
    let displayMenu = menu.map(function (item) {
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  });