//funções os valores são tipados e o retorno também é tipo numero

function addNumber(x: number,y: number) :number {
    return x + y;
}

function addToHello(name: string): string{
    return `Hello ${name}`;
}

function callToPhone(phone: number | string): number | string{
    return phone;
}

async function getDatabase(id:number): Promise<string> {
    return "Pathy";
}

let soma: number = addNumber(5,8);

console.log();