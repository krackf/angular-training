export class Product {
    constructor(
        public sku: string,
        public name: string,
        public image: string,
        public department: string[],
        public price: number,
        public description?: string
    ) {

    }
}
    
    // idem à :
    //------------
    // export class Article {
    //    productName: string;
    //    productSKU: string;
    //    productDepartment: Array<string>;
    //    productImage: string;
    //    public productPrice: number;
    //  
    // définition du constructeur
    //    constructor(
    //        productName: string,
    //        productSKU: string,
    //        productDepartment: Array<string>,
    //        productImage: string,
    //        productPrice: number
    //    ) {
    // proprétés du contructeur
    //        this.productName = productName;
    //        this.productSKU = productSKU;
    //        this.productDepartment = productDepartment;
    //        this.productImage = productImage;
    //        this.productPrice = productPrice;
    //    }
    // }