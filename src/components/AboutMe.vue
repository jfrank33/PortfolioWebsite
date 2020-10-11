<template>
  <div class="hobby_imgs">  
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

</style>
