const getFullName=(fname,lname)=>{
    return fname+lname
}
const actualFullName=getFullName('Devi','Sri')
const expectedFullName='Devi Sri'
if(actualFullName!==expectedFullName){
    throw new Error(actualFullName +" is not equal to "+ expectedFullName);
}