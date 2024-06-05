const bodyValidator =(schema) =>{
    return async (req, res, next) =>{
        try{

            const data = req.body;
        
            if(req.file){
        //single upload
        
                data[req.file.field] = req.file.filename
            }
         await schema.ValidateAsync(data, {abortEarly: false});
         console.log(response)
         
        
        }catch(exception){
            console.log(exception)
        
            // next()
        
        }
        
    }


}
const ValidateBody = async(schema)=>{
try{

    const data = req.body;

    if(req.file){


        data[req.file.field] = req.file.filename
    }
 const response = await schema.ValidateAsync(data, {abortEarly: false});

 return response

}catch(exception){

    // next()

  }

}


module.exports = {
 bodyValidator,ValidateBody 
}