let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

if(produtoA.internacional == true){
    let imposto = produtoC.valor * 1.2
    console.log("O produto é internacional")
    console.log(imposto)
  
  }else{
      let imposto = produtoA.valor * 1.12
      console.log("O produto é nacional")
      console.log(imposto)
  }

  if(produtoB.internacional == true){
    let imposto = produtoB.valor * 1.2
    console.log("O produto é internacional")
    console.log(imposto)
  
  }else{
      let imposto = produtoB.valor * 1.12
      console.log("O produto é nacional")
      console.log(imposto)
  }

if(produtoC.internacional == true){
  let imposto = produtoC.valor * 1.2
  console.log("O produto é internacional")
  console.log(imposto)

}else{
    let imposto = produtoC.valor * 1.12
    console.log("O produto é nacional")
    console.log(imposto)
}