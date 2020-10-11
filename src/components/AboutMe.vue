<template>
  <div class="hobby_imgs"> 
    <p id="IntroText">Hello and welcome! My name is Jenn Frank and I am a software developer, gemini, adventurer, and plant-lover, amongst many other things.
    As you may notice, this webpage is currently a work in progress. I am using it as a creativity outlet as well as a fun way to freshen
    up my web development skills and learn the Vue.JS framework. I plan to use the Blog tab to document my developing progress, share recipes,
    document adventures, and anything else I may think of. Other tabs and features may pop up as I explore Vue.js, so be on the lookout!</p>
    <b-container fluid >
      <b-row>
        <b-col>
                <img width="95%" height="90%" class="image" src="../assets/img/Skiing.png" v-on:click="toggleImageText">
               <span v-show="displayImageText">Skiing</span>
        </b-col>
        <b-col>
                <img width="95%" height="90%" src="../assets/img/Biking.png">
                <p>Biking</p>
        </b-col>
            <b-col>
                <img width="95%" height="90%" src="../assets/img/Hiking.png">
                <p>Hiking</p>
        </b-col>
        
      </b-row>
      <b-row>
          <b-col>
                <img width="95%" height="90%" src="../assets/img/Kayaking.png">
                <p>Kayaking</p>
        </b-col>
        <b-col>
                <img width="95%" height="90%" src="../assets/img/Camping.png">
                <p>Camping</p>
        </b-col>
              <b-col>
                <img width="95%" height="90%" src="../assets/img/Millie.png">
                <p>My adventure buddy, Millie</p>
        </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data(){
    return {
      displayImageText: true
    }
  },
  methods: {
    toggleImageText(){
      this.displayImageText = !this.displayImageText
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  border: 0;
  padding-top: 10px;
  position: relative;
}

#idText {
  text-align: center;
  padding-top: 30px;
}

</style>
