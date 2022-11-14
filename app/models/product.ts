export class productadd{
    constructor(public product_name: string,public product_Image: string,
        public price: number,public vendor_Name:string,public vendor_Contact:string){}
}


export interface userData{
    _id:string,
    username:string,
    email:string,
    password:string,
    [current_cart:string]:Object
}

export interface customerData{
    userId:string,
    username:string,
    phonenumber:number,
    Address:string,
    [current_cart:string]:Object,
    total_bill:number,
    dateOfOrder:Date

}

export class productDataByAdmin{
    constructor(public product_name:string,
        public _id:string,
        public product_Image:string,
        public price:number,
        public vendor_Name:string,
        public vendor_Contact:string,
        ){}
}

//foradmin to view the orders
export interface custOrderdata{
    _id:string,
    userId:string,
    username:string,
    phonenumber:number,
    Address:string,
    [current_cart:string]:Object,
    total_bill:number,
    dateOfOrder:Date
}

export interface cartdetails{
    _id:string,
    product_name:string,
    product_Image:string,
    price:number,
    vendor_Name:string,
    vendor_Contact:string,
    Quantity:number

}

//user data of currentcart

export interface userCurrentCart{
    _id: string,
     username: string,
      email: string,
       password: string,
       [current_cart:string]:Object
}

export interface forProduct{
    _id:string,
    product_name:string,
    product_Image:string,
    price:number,
    vendor_Name:string,
    vendor_Contact:string,

}