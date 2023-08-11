const inputFile = document.getElementById("file");

const avatar = document.getElementById("avatar");
inputFile.addEventListener("change", (e) => {
  const file = e.currentTarget.files[0];

  let reader = new FileReader();
  reader.onloadend = function () {
    avatar.setAttribute("src", reader.result);
    localStorage.setItem("avatar", reader.result);
  };
  reader.readAsDataURL(file);
});

window.onload = () => {
  avatar.setAttribute("src", localStorage.getItem("avatar"));
};

const carts = [
  {
    name: "A",
    price: 10,
  },
  {
    name: "B",
    price: 30,
  },
];

// let sum = 0;
// carts.forEach((cart) => (sum = sum + cart.price));

// console.log(sum);
