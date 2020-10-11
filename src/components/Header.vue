<template>
  <nav class="navbar navbar-expand-sm navbar-light navbar-jw " style="background-color: #BADDC1;">
   <a class="navbar-brand" href="#">
      <img src="../assets/img/JennFrank.png" height="100px" width="200px" alt="Jenn logo" /> 
    </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
<router-link
        to="AboutMe"
        class="nav-item nav-link"
        active-class="active"
        exact>
        About Me
        </router-link>      </li>
     <!-- <li class="nav-item">
<router-link
        to="Projects"
        class="nav-item nav-link"
        active-class="active"
        exact>
        Projects
        </router-link>      </li>-->
      <li class="nav-item">
<router-link
        to="Blog"
        class="nav-item nav-link"
        active-class="active"
        exact>
        Blog
        </router-link>      </li>
        <li class="nav-item">
          <router-link
        to="Resume"
        class="nav-item nav-link"
        active-class="active"
        exact>
        Resume
        </router-link>
        </li>
    </ul>
     <ul class="navbar-nav ml-auto">
      <li class="nav-item">
                      <a class="images" href="https://github.com/jfrank33"> <img class="socialmedia" width="30" height="30" src="../assets/img/git2.png"></a>
            <a class="images" href="https://open.spotify.com/user/1216112026?si=v9tz0S3mRZOXrXSkEh6DXQ"><img class="socialmedia" width="30" height="30" src="../assets/img/spotify2.png"></a>
                      <a class="images" href="https://www.linkedin.com/in/jennifer-frank-069701b3/"><img class="socialmedia" width="30" height="30" src="../assets/img/linkedin2.png"></a>

        </li>
        </ul>
  </div>
  </nav>
</template>

<style scoped>
.images{
        padding: 3px;
    }
</style>
