<script>
  import { Post } from "$lib/models/post";
  import { db } from "$lib/scripts/firebase";
import { push, ref, } from "firebase/database";
  import PageTitle from "../../conponents/PageTitle.svelte";

   let post=new Post();
</script>
<PageTitle title="Создать запись">
   <button class="btn btn-light text-dark" 
   on:click={()=>{push(ref(db,'/posts'), post)
   post = new Post();
}}>Сохранить</button>
</PageTitle>
<div>
   <input class="form-control mb-2" bind:value={post.title} placeholder="Заголовок"/>
   <textarea class="form-control mb-2" bind:value={post.description} placeholder="Описание"></textarea>
   <input class="form-control mb-2" bind:value={post.cover} placeholder="УРЛ обложки"/>
   {#if post.cover}
   <img class="w-12 mb-2 rounded" src={post.cover} alt=""/>
   {/if}
   <input type="data" class="form-control mb-2" bind:value={post.created} />
   <div><input 
      type="checkbox" 
      class="form-control mb-2" 
      bind:checked={post.published}/>
   <div>Опубликовано</div>
</div>
   <textarea class="form-control mb-2" style="min-height: 12em;" bind:value={post.content} placeholder="Содержимое записи"></textarea>
   
   
</div>
