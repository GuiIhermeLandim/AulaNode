import chalk from "chalk";
import fs from "fs";

function trataErro(erro){
    throw new Error(chalk.red(erro.code, "Caminho Errado"))
}

function pegarArquivo(caminhoDoArquivo){
    const encoding = "utf-8";
    fs.promises
    .readFile(caminhoDoArquivo, encoding)
    .then((texto) => console.log(texto))
    .catch((erro) => trataErro(erro));
    
}

/*
function pegarArquivo(caminhoDoArquivo){
    const encoding = "utf-8";
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) =>{
        if (erro){
            trataErro(erro);
        }

        console.log(chalk.green(texto));    
    })
}
*/

pegarArquivo('./arquivos/texto.md');
//pegarArquivo('./arquivos/texto.md');

