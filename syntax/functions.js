const Muvelet = (a,b,callback) => {
    const result = callback (a,b) 
    return {result : result}
}

const muveletletrehoz =(jel) => {
    if(jel == "+"){
        return (a,b) => {return a + b}
    }
}

export{Muvelet, muveletletrehoz}