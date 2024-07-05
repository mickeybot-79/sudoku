import { useState, useEffect } from "react"

const Sudoku = () => {

    const [sudoku, setSudoku] = useState()

    useEffect(() => {
        setSudoku(() => {
            var randomArrays = []
            for (let i = 0; i < 10000000; i++) {
                var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5)
                var valid = true
                //check for unique column values
                for (let j = 0; j < randomArrays.length; j++) {
                    for (let k = 0; k < 9; k++) {
                        if (randomArrays[j][k] === arr[k] && randomArrays.length < 9) {
                            valid = false
                            break
                        }
                    }
                }
                if (valid) {
                    //check for unique square values
                }
            }
            return randomArrays  
        })
    }, [setSudoku])

    return (
        <>
            <tr>
                <td id="0">{sudoku[0]}</td>
                <td id="1">{sudoku[0]}</td>
                <td id="2">{sudoku[0]}</td>
                <td id="3">{sudoku[0]}</td>
                <td id="4">{sudoku[0]}</td>
                <td id="5">{sudoku[0]}</td>
                <td id="6">{sudoku[0]}</td>
                <td id="7">{sudoku[0]}</td>
                <td id="8">{sudoku[0]}</td>
            </tr>
            <tr>
                <td id="9">{sudoku[0]}</td>
                <td id="10">{sudoku[0]}</td>
                <td id="11">{sudoku[0]}</td>
                <td id="12">{sudoku[0]}</td>
                <td id="13">{sudoku[0]}</td>
                <td id="14">{sudoku[0]}</td>
                <td id="15">{sudoku[0]}</td>
                <td id="16">{sudoku[0]}</td>
                <td id="17">{sudoku[0]}</td>
            </tr>
            <tr>
                <td id="18">{sudoku[0]}</td>
                <td id="19">{sudoku[0]}</td>
                <td id="20">{sudoku[0]}</td>
                <td id="21">{sudoku[0]}</td>
                <td id="22">{sudoku[0]}</td>
                <td id="23">{sudoku[0]}</td>
                <td id="24">{sudoku[0]}</td>
                <td id="25">{sudoku[0]}</td>
                <td id="26">{sudoku[0]}</td>
            </tr>
            <tr>
                <td id="27">{sudoku[0]}</td>
                <td id="28">{sudoku[0]}</td>
                <td id="29">{sudoku[0]}</td>
                <td id="30">{sudoku[0]}</td>
                <td id="31">{sudoku[0]}</td>
                <td id="32">{sudoku[0]}</td>
                <td id="33">{sudoku[0]}</td>
                <td id="34">{sudoku[0]}</td>
                <td id="35">{sudoku[0]}</td>
            </tr>
            <tr>
                <td id="36">{sudoku[0]}</td>
                <td id="37">{sudoku[0]}</td>
                <td id="38">{sudoku[0]}</td>
                <td id="39">{sudoku[0]}</td>
                <td id="40">{sudoku[0]}</td>
                <td id="41">{sudoku[0]}</td>
                <td id="42">{sudoku[0]}</td>
                <td id="43">{sudoku[0]}</td>
                <td id="44">{sudoku[0]}</td>
            </tr>
            <tr>
                <td id="45">{sudoku[0]}</td>
                <td id="46">{sudoku[0]}</td>
                <td id="47">{sudoku[0]}</td>
                <td id="48">{sudoku[0]}</td>
                <td id="49">{sudoku[0]}</td>
                <td id="50">{sudoku[0]}</td>
                <td id="51">{sudoku[0]}</td>
                <td id="52">{sudoku[0]}</td>
                <td id="53">{sudoku[0]}</td>
            </tr>
            <tr>
                <td id="54">{sudoku[0]}</td>
                <td id="55">{sudoku[0]}</td>
                <td id="56">{sudoku[0]}</td>
                <td id="57">{sudoku[0]}</td>
                <td id="58">{sudoku[0]}</td>
                <td id="59">{sudoku[0]}</td>
                <td id="60">{sudoku[0]}</td>
                <td id="61">{sudoku[0]}</td>
                <td id="62">{sudoku[0]}</td>
            </tr>
            <tr>
                <td id="63">{sudoku[0]}</td>
                <td id="64">{sudoku[0]}</td>
                <td id="65">{sudoku[0]}</td>
                <td id="66">{sudoku[0]}</td>
                <td id="67">{sudoku[0]}</td>
                <td id="68">{sudoku[0]}</td>
                <td id="69">{sudoku[0]}</td>
                <td id="70">{sudoku[0]}</td>
                <td id="71">{sudoku[0]}</td>
            </tr>
            <tr>
                <td id="72">{sudoku[0]}</td>
                <td id="73">{sudoku[0]}</td>
                <td id="74">{sudoku[0]}</td>
                <td id="75">{sudoku[0]}</td>
                <td id="76">{sudoku[0]}</td>
                <td id="77">{sudoku[0]}</td>
                <td id="78">{sudoku[0]}</td>
                <td id="79">{sudoku[0]}</td>
                <td id="80">{sudoku[0]}</td>
            </tr>
        </>
    )

}

export default Sudoku