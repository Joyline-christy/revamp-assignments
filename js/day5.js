//console.log(fetch("https://dummyjson.com/users"));

/*
fetch("https://dummyjson.com/users")
.then((response)=>{
    return response.json();
    
})
.then((data)=>{
    //dot notation or bracket notation
    console.log(data.users[0].address.state);
    
    
})
.catch((error)=>{
    console.log(`error is... ${error}`);
});
*/

/*
async function getapi(){
 let response=await fetch("https://dummyjson.com/users");
 console.log(response);
 
}
getapi();
*/


/*
async function getapi(){
    try{
        let response=await fetch("https://dummyjson.com/users");
        let data=await response.json();
        console.log(data);
    }catch(error){
        console.log(`error is ${error}`)
    }
       }
   getapi();

   */
   //exercise

   

async function getapi(){
    try{
        let response=await fetch("https://dummyjson.com/recipes");
        let data=await response.json();
        let limit=data["limit"];
        for (let i= 0; i < limit; i++) {
            console.log(`${data.recipes[i].name} and cook time is ${data.recipes[i].cookTimeMinutes}`);

        }

        
    }
    catch(error){
        console.log(`error is ${error}`);
    }
       }
   getapi();