import { clet } from 'clet-js/index';

async function resolveName(nameToResolve: string) {
  console.log(await clet.resolve(nameToResolve));
}

async function reverseResolve(addressToResolve: string) {
  console.log(await clet.reverse(addressToResolve));
}

resolveName('bob.btc');

reverseResolve('0xcb488089fA2168247BB6022f04E310d997608597');
