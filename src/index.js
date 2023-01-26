
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix===undefined||matrix.join("")===""){
        return []
    } else{
        let matrixNew = matrix.map((element,index)=>{
            if (index===0||index%2===0){
                return element.join(",")
            } else {
                return  element.reverse().join(",")
            }
        })
        return matrixNew.join(",").split(",").map(item=>+item)

    }

}
