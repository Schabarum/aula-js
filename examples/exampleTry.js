/*
try{
    try{
        throw new Error('opps');
    }finally{
        console.log('finally');
    }
}
catch(ex){
    console.error('outer', ex.message);
}
*/
/*
try{
    try{
        throw new Error('oops');
    }catch (ex){
        console.error('inner', ex.message);
    }finally{
        console.log('finally');
    }
}
catch (ex){
    console.error('outer', ex.message);
}
*/
try{
    try{
        throw new Error('oops');
    }catch (ex){
        console.error('inner', ex.message);
        throw ex;
    }finally{
        console.log('finally');
    }
}catch (ex){
    console.error('outer', ex.message);
}