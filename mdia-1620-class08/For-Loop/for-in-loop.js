var computer = {brand: "Microsoft" , laptops: "Surface Laptop 4 " , screen: "13.5\""};
var sentence = "I have the: ";

for (var item in copmuter) {
    if (item == "brand") {
        sentence += computer.brand;
    } else if (item == "Laptop") {
        sentence += copmuter.laptop + ".";
        break;
    }

    if (item == "brand" || item == "laptop") {
        sentence += " ";

    }
}