const phones = [
    {Brand: 'Samsung', Camera: 50, Price: 82000, Color: 'Black'},
    {Brand: 'iPhone', Camera: 55, Price: 182000, Color: 'Silver'},
    {Brand: 'Xiaomi', Camera: 40, Price: 69000, Color: 'Blu'},
    {Brand: 'Oppo', Camera: 20, Price: 50000, Color: 'Red'},
    {Brand: 'Htc', Camera: 45, Price: 71000, Color: 'Silver-Black'},
    {Brand: 'Walton', Camera: 22, Price: 45000, Color: 'Grey'}
]

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const index = i;
        const phone = phones[index];
        if(phone.Price < cheapest.Price){
            cheapest = phone;
        }
        // console.log(phone);
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log("Cheapest phone :", mySelection);


// highest camera-phone function
function goodCameraQualityPhone(phones){
    let highestCameraPhone = phones[0];
    for(let i = 0; i < phones.length; i++){
        const cameraPhone = phones[i];
        if(cameraPhone.Camera > highestCameraPhone.Camera){
            highestCameraPhone = cameraPhone;
        }
    }
    return highestCameraPhone;
}

const myCameraSelection = goodCameraQualityPhone(phones);
console.log("Highest Camera Phone :", myCameraSelection);
