import { Invoice, Payment } from "./classImplementsInterface";
import { hasPrint } from "./interfaceForClass";

const docOne: hasPrint = new Invoice("Vinamilk", "drint milk", 5000000);
const docTwo: hasPrint = new Payment("KFC", "eat", 1000000);

const allDoc: hasPrint[] = []
allDoc.push(docOne)
allDoc.push(docTwo)

console.log(allDoc)