const createSudoku = () => {

    var randomArrays = []
    var count = 0

    const createGrid = () => {
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5)
        if (randomArrays.length === 0) {
            randomArrays.push(arr)
            return
        } else {
            count++
            var valid = true
            for (let i = 0; i < randomArrays.length; i++) {
                for (let j = 0; j < 9; j++) {
                    if (randomArrays[i][j] === arr[j]) {
                        valid = false
                        break
                    }
                }
            }
            if (valid) {
                const subArr1 = randomArrays[randomArrays.length - 1].slice(0, 3)
                const subArr2 = randomArrays[randomArrays.length - 1].slice(3, 6)
                const subArr3 = randomArrays[randomArrays.length - 1].slice(6, 9)
                if (!subArr1.includes(arr[0]) && !subArr1.includes(arr[1]) && !subArr1.includes(arr[2]) && !subArr2.includes(arr[3]) && !subArr2.includes(arr[4]) && !subArr2.includes(arr[5]) && !subArr3.includes(arr[6]) && !subArr3.includes(arr[7]) && !subArr3.includes(arr[8])) {
                    randomArrays.push(arr)
                    return
                }
            } else {
                if (count >= 50000 && randomArrays.length < 8) {
                    randomArrays = []
                    count = 0
                    return
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