<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
    <div class="container">
        <router-link class="navbar-brand" to="/"><img src="@/assets/img/Avatar.svg" class="rounded-circle" width="52" height="52" alt="Profile Picture"></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav mx-auto">
            <router-link  class="nav-link" aria-current="page" to="/">Home</router-link>
            <div class="dropdown">
                <a class="nav-link d-flex" href="#" dropdown-toggle type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Projects<span class="material-symbols-rounded">expand_more</span>
                </a>
                <ul class="dropdown-menu">
                    <li><router-link class="dropdown-item" to="/projects/mobile">Mobile App</router-link></li>
                    <li><router-link class="dropdown-item" to="/projects/web">Web</router-link></li>
                </ul>
            </div>
            <a class="nav-link" href="mailto:leoyuntao@gmail.com">Contact</a>
        </div>
        <div class="d-inline-flex">
            <a href="https://docs.google.com/document/d/1yiiTevzrBBMJihcTKcciCfTdzn8eRj-5YBI-KDP4gzM/export?format=pdf" class="me-3" target="_blank" 
            data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Download Resume" >
                <img src="@/assets/img/resume.png" height="32" alt="download icon">
            </a>
            <a href="https://www.linkedin.com/in/leoyuntao/" target="_blank"><img src="@/assets/img/LI-In-Bug 1.svg" alt="linkedin"></a>
        </div>
        </div>
    </div>
  </nav>
</template>