let address = addAddress (street ,city ,zipCode );
let address1 = addAddress (street ,city ,zipCode );

console.log(equal(address1, address))
console.log(same(address1, address))


function Address (street ,city ,zipCode ){
    this.street = street;
    this,city = city;
    this.zipCode = zipCode;

}

function equal(address, address1) {
    return address.street === address1.street &&
             address.city === address1.city &&
             address.zipCode === address1.zipCode 
}

function same(address, address1) {
    return address === address1;

}