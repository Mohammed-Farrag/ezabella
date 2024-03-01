export const isAuth = () => {
    let user = JSON.parse(localStorage.getItem('user'));


    return user ? true :  false;

}