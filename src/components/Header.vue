<template>
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" 
              data-toggle="collapse" 
              data-target="#navbartoggler" 
              aria-controls="#navbartoggler" 
              aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="/">Jennifer Frank</a>
            <div class="collapse navbar-collapse" id="navbartoggler">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="/AboutMe">About Me</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Blog">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Projects">Projects</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Resume">Resume</a>
                </li>
                <li class="nav-item">
                    <a href="https://github.com/jfrank33"> <img width="4%" src="../assets/img/git.png"></a>
                    <a href="https://open.spotify.com/user/1216112026?si=v9tz0S3mRZOXrXSkEh6DXQ"><img width="4%" src="../assets/img/spotify.png"></a>
                    <a  href="https://www.linkedin.com/in/jennifer-frank-069701b3/"><img width="4%" src="../assets/img/linkedin.png"></a>
                </li>
                </ul>
                <router-view></router-view>
            </div>
        </nav>
    </div>
</template>