function pascal() {
    const input = 5 ;
    const array_pascal = [] ;

    for (let i = 0 ; i < input ; i++) {
        let temporary_pascal = []
        for (let j = 0 ; j <= i ; j++ ) {
            if (j === 0 || j === i) {
                temporary_pascal.push(1)
            }
            else {
                let next_pascal = array_pascal[i-1][j] + array_pascal[i-1][j-1]
                temporary_pascal.push(next_pascal)
            }
        }
        array_pascal.push(temporary_pascal)
    }
    return array_pascal
}

export default pascal