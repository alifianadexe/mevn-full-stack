<template>
    <div class="posts">
        This will be list

        <div v-for="post in posts" :key="post._id">
            <p>
                <span><b>{{ post.title }}</b></span><br>
                <span>{{ post.description }}</span>
            </p>
        </div>
    </div>
</template>

<script>
import PostsService from '@/services/PostsService';
export default {
    name:'posts',
    data(){
        return {
            posts: []
        }
    },
    mounted(){
        this.getPosts()
    },
    methods: {
        async getPosts(){
            const response = await PostsService.fetchPost()
            this.posts = response.data
        }
    }
}
</script>