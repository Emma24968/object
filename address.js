let address = {
    street :'Brady',
    city :'Porthsmouth',
    zipCode : 123456

};

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address);