<script>
  import { db } from "$lib/scripts/firebase";
  import { onValue, ref } from "firebase/database";
  import { onMount } from "svelte";
  import Post from "../conponents/Post.svelte";
  import PageTitle from "../conponents/PageTitle.svelte";
  let posts=new Array();

   onMount(()=>{
      onValue(ref(db,"/posts"),(s)=>{
         if (s.exists()) {posts = Object.values(s.val());}
      });

   });
</script>   
   <PageTitle title="Главная страница"/>
<div class="row row-cols-1 row-cols-md-3 g-4">
   {#each posts as post}
   <div class="col">
   <Post {post}/>
</div>
   {/each}
</div>
