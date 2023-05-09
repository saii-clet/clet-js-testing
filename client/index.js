"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("clet-js/index");
function resolveName(nameToResolve) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(yield index_1.clet.resolve(nameToResolve));
    });
}
function reverseResolve(addressToResolve) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(yield index_1.clet.reverse(addressToResolve));
    });
}
resolveName('bob.btc');
reverseResolve('0xcb488089fA2168247BB6022f04E310d997608597');
