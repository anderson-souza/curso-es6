const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('ok') }, 2000);
});

//Forma padrão utilizando Promisse
minhaPromise()
    .then(response => {
        console.log("Promisse: " + response);
    })
    .catch(err => {

    });

// async function executaPromisse() {
//     const response = await minhaPromise();
//     // A próxima linha só será executada assim que a linha superior for finalizada
//     console.log("Async: " + response);
// }

const executaPromisse = async () => console.log(await minhaPromise())

executaPromisse();