import Api from '@/services/Api'

export default {
    fetchPost(){
        return Api().get('posts');
    }
}