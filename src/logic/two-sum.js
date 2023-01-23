function two_sum() {
    const input_data = [2,7,11,15]
    const target = 22
    const value = []
    
    let result = 0;
    for (let i = 0; i < input_data.length; i++) {
        for(let j = i+1 ; j < input_data.length ; j++ ){
            let temporary = 0
            temporary = input_data[i] + input_data[j]
            if (temporary === target) {
                result = temporary
                value.push("ketemu")
                value.push((input_data[i]))
                value.push((input_data[j]))
            }
        }
    }
    if(result === 0) {
        console.log("tidak ada nilai")
    }

    return value 
}

export default two_sum
