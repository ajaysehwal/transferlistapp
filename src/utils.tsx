export const intersection=(a,b)=>{
    return a.filter((item)=>b.indexOf(item)!==-1);
}
export const not=(a,b)=>{
    return a.filter((item)=>b.indexOf(item)===-1);
}