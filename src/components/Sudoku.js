import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Sudoku = ({ checkCells }) => {

    const grid = useSelector((state) => state.sudoku.sudoku)

    const cellsToDisplay = useSelector((state) => state.sudoku.slicedCells)

    const [allCells, setAllCells] = useState([])

    const [allRows, setAllRows] = useState([])

    useEffect(() => {
        setAllCells(() => {
            const allCellElements = []

            for (let i = 0; i < 81; i++) {
                let cellClass
                if ((i < 3) || (i > 8 && i < 12) || (i > 17 && i < 21)) cellClass = 'square1'
                if ((i > 2 && i < 6) || (i > 11 && i < 15) || (i > 20 && i < 24)) cellClass = 'square2'
                if ((i > 5 && i < 9) || (i > 14 && i < 18) || (i > 23 && i < 27)) cellClass = 'square3'
                if ((i > 26 && i < 30) || (i > 35 && i < 39) || (i > 44 && i < 48)) cellClass = 'square4'
                if ((i > 29 && i < 33) || (i > 38 && i < 42) || (i > 47 && i < 51)) cellClass = 'square5'
                if ((i > 32 && i < 36) || (i > 41 && i < 45) || (i > 50 && i < 54)) cellClass = 'square6'
                if ((i > 53 && i < 57) || (i > 62 && i < 66) || (i > 71 && i < 75)) cellClass = 'square7'
                if ((i > 56 && i < 60) || (i > 65 && i < 69) || (i > 74 && i < 78)) cellClass = 'square8'
                if ((i > 59 && i < 63) || (i > 68 && i < 72) || (i > 77 && i < 81)) cellClass = 'square9'

                allCellElements.push(<td id={i} key={i} className={cellClass} contentEditable={cellsToDisplay.includes(i) ? false : true}>{cellsToDisplay.includes(i) ? grid[i] : ''}</td>)
            }

            return allCellElements
        })
    }, [grid, cellsToDisplay, checkCells])

    useEffect(() => {
        setAllRows(() => {

            const allRowElements = []

            for (let j = 0; j < 9; j++) {
                const currentRow = allCells.slice((j * 9), (j * 9) + 9)
                allRowElements.push(<tr key={j}>{currentRow}</tr>)
            }

            return allRowElements
        })
    }, [allCells])

    useEffect(() => {
        if (allCells.length > 0 && checkCells) {
            const allCellElements = [...document.querySelectorAll('td')]
            for (let i = 0; i < 81; i++) {
                //console.log(allCells[i])
                if (parseInt(allCellElements[i].innerHTML) !== grid[i]) {
                    console.log(allCellElements[i].innerHTML, grid[i])
                    if (allCells[i].props.contentEditable === true) {
                        const currentCell = {
                            id: allCells[i].props.id,
                            className: `${allCells[i].props.className} incorrect`,
                            contentEditable: true,
                            text: allCellElements[i].innerHTML
                        }
                        const updatedCell = (
                            <td id={currentCell.id} key={currentCell.id} className={currentCell.className} contentEditable={currentCell.contentEditable}>{currentCell.text}</td>
                        )
                        setAllCells((prevCells) => {
                            const updatedCells = prevCells
                            updatedCells.splice(i, 1, updatedCell)
                            return updatedCells
                        })
                    }
                } else {
                    if (allCells[i].props.contentEditable === true) {
                        const currentCell = {
                            id: allCells[i].props.id,
                            className: `${allCells[i].props.className} correct`,
                            contentEditable: true,
                            text: allCellElements[i].innerHTML
                        }
                        const updatedCell = (
                            <td id={currentCell.id} key={currentCell.id} className={currentCell.className} contentEditable={currentCell.contentEditable}>{currentCell.text}</td>
                        )
                        setAllCells((prevCells) => {
                            const updatedCells = prevCells
                            updatedCells.splice(i, 1, updatedCell)
                            return updatedCells
                        })
                    }
                }
            }
        } else if (allCells.length > 0 && !checkCells) {
            // const allCellElements = [...document.querySelectorAll('td')]
            // for (let i = 0; i < 81; i++) {
            //     if (allCellElements[i]?.innerHTML !== '') {
            //         const currentCell = {
            //             id: allCells[i].props.id,
            //             className: allCells[i].props.className,
            //             contentEditable: true,
            //             text: allCellElements[i]?.innerHTML
            //         }
            //         const updatedCell = (
            //             <td id={currentCell.id} key={currentCell.id} className={currentCell.className} contentEditable={currentCell.contentEditable}>{currentCell.text}</td>
            //         )
            //         setAllCells((prevCells) => {
            //             const updatedCells = prevCells
            //             updatedCells.splice(i, 1, updatedCell)
            //             return updatedCells
            //         })
            //     }
            // }
        }

    }, [checkCells, allCells, grid])

    return (
        <table>
            <tbody>
                {allRows}
            </tbody>
        </table>
    )
}

export default Sudoku