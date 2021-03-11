export const Header = () => {
    let user = JSON.parse(localStorage.getItem('currentUser'));
    // try{console.log(user)}catch(error){
    //    console.log(user)
    // }
    if(user){
        return {"x-auth-token": user};
    }
    else{
        return {};
    }
}