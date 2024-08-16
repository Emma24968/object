let address = addAddress (street ,city ,zipCode );

console.log(address);

    // factory function
    function addAddress(street, city, zipCode) {
        return {
            street,
            city,
            zipCode
        };
    }

    // constructor function
    function Address (street ,city ,zipCode ){
        this.street = street;
        this,city = city;
        this.zipCode = zipCode;

    }