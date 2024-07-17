const menu = document.querySelector(".hamburguesa");

document.addEventListener("DOMContentLoaded",()=>{
   iniciarApp();
});

const iniciarApp =()=>{
    sumar2();
}

// arrow funcion o funcion expression
const sumar2 = () => {
  console.log("function arrow", 3 + 3);
};
