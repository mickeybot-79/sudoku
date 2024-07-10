import { useState, useEffect } from "react"
import createSudoku from "./createSudoku"

const Sudoku = () => {

    const [sudoku, setSudoku] = useState()

    useEffect(() => {
        setSudoku(() => {
            var newSudoku = createSudoku({ start: Date.now() })
            return newSudoku
        })
    }, [setSudoku])

    return (
        <table>
            <tbody>
                <tr>
                    <td id="0">{sudoku[0]}</td>
                    <td id="1">{sudoku[1]}</td>
                    <td id="2">{sudoku[2]}</td>
                    <td id="3">{sudoku[3]}</td>
                    <td id="4">{sudoku[4]}</td>
                    <td id="5">{sudoku[5]}</td>
                    <td id="6">{sudoku[6]}</td>
                    <td id="7">{sudoku[7]}</td>
                    <td id="8">{sudoku[8]}</td>
                </tr>
                <tr>
                    <td id="9">{sudoku[9]}</td>
                    <td id="10">{sudoku[10]}</td>
                    <td id="11">{sudoku[11]}</td>
                    <td id="12">{sudoku[12]}</td>
                    <td id="13">{sudoku[13]}</td>
                    <td id="14">{sudoku[14]}</td>
                    <td id="15">{sudoku[15]}</td>
                    <td id="16">{sudoku[16]}</td>
                    <td id="17">{sudoku[17]}</td>
                </tr>
                <tr>
                    <td id="18">{sudoku[18]}</td>
                    <td id="19">{sudoku[19]}</td>
                    <td id="20">{sudoku[20]}</td>
                    <td id="21">{sudoku[21]}</td>
                    <td id="22">{sudoku[22]}</td>
                    <td id="23">{sudoku[23]}</td>
                    <td id="24">{sudoku[24]}</td>
                    <td id="25">{sudoku[25]}</td>
                    <td id="26">{sudoku[26]}</td>
                </tr>
                <tr>
                    <td id="27">{sudoku[27]}</td>
                    <td id="28">{sudoku[28]}</td>
                    <td id="29">{sudoku[29]}</td>
                    <td id="30">{sudoku[30]}</td>
                    <td id="31">{sudoku[31]}</td>
                    <td id="32">{sudoku[32]}</td>
                    <td id="33">{sudoku[33]}</td>
                    <td id="34">{sudoku[34]}</td>
                    <td id="35">{sudoku[35]}</td>
                </tr>
                <tr>
                    <td id="36">{sudoku[36]}</td>
                    <td id="37">{sudoku[37]}</td>
                    <td id="38">{sudoku[38]}</td>
                    <td id="39">{sudoku[39]}</td>
                    <td id="40">{sudoku[40]}</td>
                    <td id="41">{sudoku[41]}</td>
                    <td id="42">{sudoku[42]}</td>
                    <td id="43">{sudoku[43]}</td>
                    <td id="44">{sudoku[44]}</td>
                </tr>
                <tr>
                    <td id="45">{sudoku[45]}</td>
                    <td id="46">{sudoku[46]}</td>
                    <td id="47">{sudoku[47]}</td>
                    <td id="48">{sudoku[48]}</td>
                    <td id="49">{sudoku[49]}</td>
                    <td id="50">{sudoku[50]}</td>
                    <td id="51">{sudoku[51]}</td>
                    <td id="52">{sudoku[52]}</td>
                    <td id="53">{sudoku[53]}</td>
                </tr>
                <tr>
                    <td id="54">{sudoku[54]}</td>
                    <td id="55">{sudoku[55]}</td>
                    <td id="56">{sudoku[56]}</td>
                    <td id="57">{sudoku[57]}</td>
                    <td id="58">{sudoku[58]}</td>
                    <td id="59">{sudoku[59]}</td>
                    <td id="60">{sudoku[60]}</td>
                    <td id="61">{sudoku[61]}</td>
                    <td id="62">{sudoku[62]}</td>
                </tr>
                <tr>
                    <td id="63">{sudoku[63]}</td>
                    <td id="64">{sudoku[64]}</td>
                    <td id="65">{sudoku[65]}</td>
                    <td id="66">{sudoku[66]}</td>
                    <td id="67">{sudoku[67]}</td>
                    <td id="68">{sudoku[68]}</td>
                    <td id="69">{sudoku[69]}</td>
                    <td id="70">{sudoku[70]}</td>
                    <td id="71">{sudoku[71]}</td>
                </tr>
                <tr>
                    <td id="72">{sudoku[72]}</td>
                    <td id="73">{sudoku[73]}</td>
                    <td id="74">{sudoku[74]}</td>
                    <td id="75">{sudoku[75]}</td>
                    <td id="76">{sudoku[76]}</td>
                    <td id="77">{sudoku[77]}</td>
                    <td id="78">{sudoku[78]}</td>
                    <td id="79">{sudoku[79]}</td>
                    <td id="80">{sudoku[80]}</td>
                </tr>
            </tbody>
        </table>
    )

}

export default Sudoku