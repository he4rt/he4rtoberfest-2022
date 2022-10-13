let experiments = process.argv.slice(2)

let experimentsTypes = {
    "C": "bunnies",
    "R": "rats",
    "S": "frogs"
}

let experimentCounter = {
    totalExperiments: 0,
    bunnies: 0,
    rats: 0,
    frogs: 0
}

let totalCases = experiments[0]
experiments = experiments.slice(1)

if ((experiments.length % 2) !== 0 || experiments.length !== (totalCases * 2)) {
    process.exit(1)
}

experiments.forEach((firstLatterOfAnimalName, index) => {
    if (((index + 1) % 2) === 0) {
        let totalExperimentsWithAnimal = parseInt(experiments[index - 1])
        let animalType = experimentsTypes[firstLatterOfAnimalName]

        if (animalType) {
            experimentCounter.totalExperiments += totalExperimentsWithAnimal
            experimentCounter[animalType] += totalExperimentsWithAnimal
        }
    }
})

let totalExperiments = experimentCounter.totalExperiments
let totalBunnies = experimentCounter.bunnies
let totalRats = experimentCounter.rats
let totalFrogs = experimentCounter.frogs

console.log(`
    Total: ${totalExperiments} cobaias
    Total de coelhos: ${totalBunnies}
    Total de ratos: ${totalRats}
    Total de sapos: ${totalFrogs}
    Percentual de coelhos: ${((totalBunnies / totalExperiments) * 100).toFixed(2)} %
    Percentual de ratos: ${((totalRats / totalExperiments) * 100).toFixed(2)} %
    Percentual de sapos: ${((totalFrogs / totalExperiments) * 100).toFixed(2)} %
`)