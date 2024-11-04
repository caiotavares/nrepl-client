import bencode from 'bencode';
import net, { Socket } from 'net';

class nREPLClient {
    socket: Socket;

    constructor(port: number) {
        this.socket = net.connect({ port: port })
    }

    clone(): void { }

    eval(code: string): void { }

    describe(): void { }
}

export { nREPLClient }
