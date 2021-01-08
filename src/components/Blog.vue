<template>
<section>
	<div class="blog">
    <h3>
    <router-link
						to="moodboard"
						class="nav-item nav-link"
						active-class="active"
						exact
					>
						Interior Design
					</router-link>
          </h3>
		<p>The inspiration for a new indie boho living room</p>
	<h3>
     <router-link
						to="Millie"
						class="nav-item nav-link"
						active-class="active"
						exact
					>
						Millie
					</router-link>
					</h3>
    <p>Some photos and stories of the most regal, sassy, and spoiled cheagle</p> 
    <h3>Music</h3>
    <p>Ramblings on my favorite artists, songs, and lyrics</p>
	<h3>Recipes</h3>
	<p>Some original creations and a collection of other's masterpieces</p>
	</div>
</section>
</template>

<style scoped>
* {
	margin: 0;
	padding: 0;
	border: 0;
}

a {
  color: #484848
}
a:hover {
   color:  #64847c
}

section {
  display: flex;
  flex-flow: column;
  height: 70vh;
}

div {
  flex: 1; 
  overflow: auto;
}

.blog {
	text-align: left;
}

h3 {
  padding-top: 20px;
}

</style>
