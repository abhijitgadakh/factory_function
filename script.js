function iPhone1(ASIN, color, display, camera) {
    return {
        ASIN: ASIN,
        color: color,
        display: display,
        camera: camera,
        dial: function() {
            return "tring.. tring...";
        },
        sendMessage: function() {
            return "Sending message...";
        },
        cameraClick: function() {
            return "Camera clicked";
        }
    };
}


function iPhone2(ASIN, color, display, camera, bluetooth) {
    return {
        ASIN: ASIN,
        color: color,
        display: display,
        camera: camera,
        bluetooth: bluetooth,
        dial: function() {
            return "tring.. tring...";
        },
        sendMessage: function() {
            return "Sending message...";
        },
        cameraClick: function() {
            return "Camera clicked";
        },
        connectBluetooth: function() {
            return "Bluetooth connected successfully...";
        }
    };
}


const myiPhone1 = iPhone1("B09G9D7N1P", "Black", "6.1-inch", "12MP");
console.log(myiPhone1.dial()); 
console.log(myiPhone1.sendMessage()); 
console.log(myiPhone1.cameraClick()); 
console.log(myiPhone1.ASIN); 
console.log(myiPhone1.color);
console.log(myiPhone1.display);
console.log(myiPhone1.camera);

const myiPhone2 = iPhone2("B09G9D7N2Q", "White", "6.7-inch", "12MP", "5.0");
console.log(myiPhone2.dial());
console.log(myiPhone2.sendMessage());
console.log(myiPhone2.cameraClick()); 
console.log(myiPhone2.connectBluetooth());
console.log(myiPhone2.ASIN);
console.log(myiPhone2.color);
console.log(myiPhone2.display);
console.log(myiPhone2.camera); 
console.log(myiPhone2.bluetooth);
