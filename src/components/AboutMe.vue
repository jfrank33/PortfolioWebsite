<template>
	<div class="hobby_imgs">
		<b-container fluid="md">
      <b-row>
        <b-col sm="md" >
          <h1 id="HelloTextMobile">
            Hello and Welcome!
          </h1>
          <img 
            width="100%"
						height="100%" 
            id = "Headshot"
            src="../assets/img/Jenn.png" 
          />
        </b-col>
        <b-col sm="sm">
          <h1 id="HelloTextDesktop">
            Hello and Welcome!
          </h1>
          <h5 id="IntroText">
            My name is Jenn Frank and I am a software developer, ENFP, adventurer
            and creative thinker. I am using this website to freshen up my web 
            development skills and learn the Vue.JS framework, but also as a creative
            outlet. I plan to use the Blog tab to share recipes, provide music
            recommendations, and talk about my puppy, amongst other things. Other
            tabs and features may pop up as I explore Vue.js, so be on the lookout!
          </h5>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
        <hr />
        <h1 id="hobbies">
          A few hobbies
        </h1>
        <hr />
        </b-col>
      </b-row>
			<b-row>
				<b-col sm="sm">
					<img
						width="95%"
						height="90%"
						class="text-center"
						src="../assets/img/Skiing.png"
					/>
          <p>Skiing</p>
				</b-col>
				<b-col sm="sm">
					<img width="95%" height="90%" src="../assets/img/Biking.png" />
					<p>Biking</p>
				</b-col>
				<b-col sm="sm">
					<img width="95%" height="90%" src="../assets/img/Hiking.png" />
					<p>Hiking</p>
				</b-col>
			</b-row>
			<b-row>
				<b-col sm="sm">
					<img width="95%" height="90%" src="../assets/img/Kayaking.png" />
					<p>Kayaking</p>
				</b-col>
				<b-col sm="sm">
					<img width="95%" height="90%" src="../assets/img/Camping.png" />
					<p>Camping</p>
				</b-col>
				<b-col sm="sm">
					<img width="95%" height="90%" src="../assets/img/Millie.png" />
					<p>My adventure buddy, Millie</p>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
export default {
	data() {
		return {
			displayImageText: true
		};
	},
	methods: {
		toggleImageText() {
			this.displayImageText = !this.displayImageText;
		}
	}
};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	border: 0;
	padding-top: 5px;
	position: static;
	text-align: center;
}

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid #000000;
}

#hobbies{
  color: #64847c;
}

@media screen and (min-width: 992px) {
  #HelloTextMobile{
    visibility:hidden;
  }
  #HelloTextDesktop{
    padding-top: 100px;
    color: #BADDC1;
    visibility: visible;
    padding-bottom: 50px;
  }
  #IntroText{
    padding-left: 30px;
  }
  #Headshot{
    padding-bottom: 100px;
  }
}
@media screen and (max-width: 991px){
  #HelloTextMobile{
    color: #BADDC1;
    visibility: visible;
  }
  #HelloTextDesktop{
    visibility: hidden;
  }
}
</style>
