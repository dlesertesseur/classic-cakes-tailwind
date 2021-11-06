const productList = [
    {
      id: "1",
      title: "Cheescake Nueva York",
      description: "Torta de queso Philadelphia con frutos rojos",
      price: "2500.00",
      pictureUrl: "/cards/cheescake.png",
      category:"postre"
    },
    {
      id: "2",
      title: "Brownie",
      description: "Torta de chocolate semiamargo con dulce de leche y merengue italiano",
      price: "1900.00",
      pictureUrl: "/cards/brownie.png",
      category:"postre"
    },
    {
      id: "3",
      title: "Charlotte",
      description: "Postre de frutilla y frutos rojos",
      price: "2000.00",
      pictureUrl: "/cards/charlotte.png",
      category:"postre"
    },
    {
      id: "4",
      title: "Lemon Pie",
      description: "Tarta con base de masa frolla, rellena con crema de limón y merengue italiano",
      price: "1700.00",
      pictureUrl: "/cards/lemon_pie.png",
      category:"tarta"
    },
    {
      id: "5",
      title: "Tiramisu",
      description: "Torta de queso mascarpone con café",
      price: "2100.00",
      pictureUrl: "/cards/tiramisu.png",
      category:"postre"
    },
    {
      id: "9",
      title: "Masas secas",
      description: "Masitas de manteca y vainilla",
      price: "900.00/kg",
      pictureUrl: "/cards/masas_secas.png",
      category:"masaSeca"
    },
    {
      id: "10",
      title: "Donas",
      description: "Bollo de masa horneado/frito, con o sin relleno",
      price: "110.00/uni.",
      pictureUrl: "/cards/donas.png",
      category:"festivo"
    },
  ];

  const categoryList = [
    {
        id:"c1",
        text: "TARTAS",
        path:"/category/tarta"
    },
    {
        id:"c2",
        text: "POSTRES",
        path:"/category/postre"
    },
    {
        id:"c3",
        text: "GALLETITAS",
        path:"/category/galletita"
    },
    {
        id:"c4",
        text: "MASAS SECAS",
        path:"/category/masaSeca"
    },
    {
        id:"c5",
        text: "FESTIVOS",
        path:"/category/festivo"
    },
    {
      id:"c6",
      text: "TODOS",
      path:"/"
  },
];

  export function getProductList(){
    return(productList);
  };

  export function getCategoryList(){
    return(categoryList);
  };