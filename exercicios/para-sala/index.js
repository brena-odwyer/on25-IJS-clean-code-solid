// arquivo para testes do exercicio exercicio-em-aula.md

// 1.
class Product {

    constructor(name, price, unit){
        this.name = name;
        this.price = price;
        this.unit = unit;
    }

    showDetails() {
        console.log(`Detalhes: Produto: ${this.name} preço: ${this.price}  unidades: ${this.unit}`);
    }

}

class Cart  {
    addToCart() {
        const total = this.price * this.unit
        console.log(`Adiciono ${this.quantity} ${this.unit} ao carrinho. O valor total é ${total}`);
    }

}

// Outra solução em aula:
// class Product {

//     constructor(nome,preco, unidadeDeMedida){
//         this.nome = nome;
//         this.unidadeDeMedida = unidadeDeMedida;
// 		this.preco = preco;
//     }
//    showDetails() {
//         console.log(`Detalhes do produto: Nome ${this.nome} - Preço: ${this.preco}`);
// 		console.log(` Quantidade do produto ${this.unidadeDeMedida}`);
//     }
// }

// class Carrinho {
// 	constructor(Product, quantidade){
// 	this.Product = Product;
// 	this.quantidade = quantidade;
// }

//  addToCart(quantidade) {
// 		const total = this.Product.preco * quantidade ;
//         console.log(` Adiciono ${quantidade} ${this.Product.unidadeDeMedida} ao carrinho. O valor total é de ${total}` );
//     }
// }

// Solução Elvira:
// class Product {
//     constructor(name, price, unit) {
//         this.name = name;
//         this.unit = unit;
//         this.price = price;
//     }

//     showDetails() {
//         console.log(`Nome: ${this.name}`);
//         console.log(`Preço: ${this.price}`);
//         console.log(`Unidade: ${this.unit}`);
//     }

//     addToCart(quantity) {
//         const total = this.price * quantity;
//         console.log(`Adiciono ${quantity} ${this.unit}(s) ao carrinho. O valor total a pagar será de ${total}`);
//     }
// }

console.log("------------------------------------------------")
// 2.


console.log("------------------------------------------------")
// 3.


console.log("------------------------------------------------")
// 4.



console.log("------------------------------------------------")
// 5.