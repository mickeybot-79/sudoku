import solutionArray from "../config/solutionArrays"

const createSudoku = ({ start }) => {

    var randomArrays = []
    var count = 0
    var end

    const createGrid = () => {
        if (randomArrays.length < 9) {
            //if taking longer than 5 seconds, return a solution array
            end = Date.now()
            if ((end - start) >= 5000) {
                const randomIndex = Math.floor((Math.random() * 20) + 1)
                let randomSolutionArray = solutionArray[randomIndex]
                randomArrays = randomSolutionArray
                console.log(`returned solution array ${randomIndex}`)
                return
            } else {
                //create a random array
                var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5)
                if (randomArrays.length === 0) {
                    //if first random array, push into result
                    randomArrays.push(arr)
                    return
                } else {
                    count++
                    var valid = true
                    //check that the random array contains unique column numbers
                    for (let i = 0; i < randomArrays.length; i++) {
                        for (let j = 0; j < 9; j++) {
                            if (randomArrays[i][j] === arr[j]) {
                                valid = false
                                break
                            }
                        }
                    }
                    if (valid) {
                        //if first line of the square, push into result
                        if (randomArrays.length === 3 || randomArrays.length === 6) {
                            randomArrays.push(arr)
                            return
                        } else if (randomArrays.length % 3 === 1) {
                            //if second line of square, check that the random array contains unique square numbers
                            const subArr1 = randomArrays[randomArrays.length - 1].slice(0, 3)
                            const subArr2 = randomArrays[randomArrays.length - 1].slice(3, 6)
                            const subArr3 = randomArrays[randomArrays.length - 1].slice(6, 9)
                            if (!subArr1.includes(arr[0]) && !subArr1.includes(arr[1]) && !subArr1.includes(arr[2]) && !subArr2.includes(arr[3]) && !subArr2.includes(arr[4]) && !subArr2.includes(arr[5]) && !subArr3.includes(arr[6]) && !subArr3.includes(arr[7]) && !subArr3.includes(arr[8])) {
                                randomArrays.push(arr)
                                return
                            }
                        } else if (randomArrays.length % 3 === 2) {
                            //if third line of square, check that the random array contains unique square numbers
                            const subArr4 = [...randomArrays[randomArrays.length - 1].slice(0, 3), ...randomArrays[randomArrays.length - 2].slice(0, 3)]
                            const subArr5 = [...randomArrays[randomArrays.length - 1].slice(3, 6), ...randomArrays[randomArrays.length - 2].slice(3, 6)]
                            const subArr6 = [...randomArrays[randomArrays.length - 1].slice(6, 9), ...randomArrays[randomArrays.length - 2].slice(6, 9)]
                            if (!subArr4.includes(arr[0]) && !subArr4.includes(arr[1]) && !subArr4.includes(arr[2]) && !subArr5.includes(arr[3]) && !subArr5.includes(arr[4]) && !subArr5.includes(arr[5]) && !subArr6.includes(arr[6]) && !subArr6.includes(arr[7]) && !subArr6.includes(arr[8])) {
                                randomArrays.push(arr)
                                return
                            }
                        }
                    } else {
                        //if too many failed attempts, discard all current arrays and start over
                        if (count >= 40000 && randomArrays.length < 7) {
                            randomArrays = []
                            count = 0
                            return
                        }
                    }
                }
            }
        }
    }

    do {
        createGrid()
    } while (randomArrays.length < 9)

    return randomArrays.flat()
}

export default createSudoku