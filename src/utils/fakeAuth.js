export const fakeAuth = {
    authenticate() {
        const token = sessionStorage.getItem("loginToken");
        return !!token ? true : false;
    },
    getToken(){
        let token = sessionStorage.getItem("loginToken");
        return token;
    },
    setToken(token) {
        sessionStorage.setItem("loginToken","Bearer "+token);
    },
    signout() {
        sessionStorage.removeItem('loginToken');
    },
    setlogin(login){
        sessionStorage.setItem("login",login)
    },
    setAdmin(adminName){
        sessionStorage.setItem('admin',adminName)
    },
    getAdmin(){
       return  sessionStorage.getItem('admin')
    },

};