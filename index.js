function findMatching(array, string) {
    return array.filter(
        almostExact => almostExact.toLowerCase() === string.toLowerCase()
    )

}

function fuzzyMatch(array, string){
    return array.filter(
        (mehMatch) => mehMatch.toLowerCase().indexOf(string.toLowerCase()) === 0
    )

}

function matchName(array, string){
    const driverNames = array.filter((driver) => driver.name === string)
    return driverNames;
}