import store from 'store'
const USER_KEY='user_key'

export default {

    /**
     * 保存admin
     */
    saveAdmin(user){
        // localStorage.setItem(USER_KEY,JSON.stringify(admin))
        store.set(USER_KEY,user)
    },

    /**
     * 取出admin
     */
    getAdmin() {
        // return
        // JSON.parse(localStorage.getItem(USER_KEY)||'{}')
        return  store.get(USER_KEY)||{}
    },

    /**
     * 删除admin
     */
    removeAdmin(){
        // /localStorage.removeItem(USER_KEY)
        store.remove(USER_KEY)
    },

}