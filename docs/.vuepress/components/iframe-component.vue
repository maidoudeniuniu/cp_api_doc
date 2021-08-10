<!--
 * @Descripttion: 
 * @version: 
 * @Author: 曾利锋[阿牛]
 * @Date: 2021-08-10 11:33:10
 * @LastEditors: 曾利锋[阿牛]
 * @LastEditTime: 2021-08-10 11:45:07
-->
<template>
    <div class="demo-model">
        <iframe :src="allIfranmeUrl" scrolling="auto" frameborder="0" id="demo-modal" class="iframe"></iframe>
    </div>
</template>
<script>
export default {
    props:{
        urlPath:{
            type:String,
            default:"/"
        }
    },
    computed:{
       allIfranmeUrl () {
           return this.iframeUrl + "#" +this.urlPath
       }
    },
    data (){
        return {
            iframeUrl:"https://h5.uviewui.com/"  
        }
    }
}
</script>

