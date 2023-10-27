<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div class="sb-sidenav-menu">
                <div class="nav">
                    <div class="sb-sidenav-menu-heading">Menu</div>
                    <RouterLink class="nav-link" to="/">
                        <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                        Dashboard
                    </RouterLink>
                    <a class="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample" href="#collapseExample">
                        <div class="sb-nav-link-icon"><i class="fas fa-user"></i></div>
                        Pendataan
                    </a>
                    <div class="collapse" id="collapseExample">
                        <div class="nav-link row">
                            <RouterLink class="nav-link" to="/light">
                                Pencahayaan
                            </RouterLink>
                            <RouterLink class="nav-link" to="/pressure">   
                                Pressure
                            </RouterLink>
                            <RouterLink class="nav-link" to="/humidity">                            
                                Persentase Kelembapan Tanah
                            </RouterLink>
                            <RouterLink class="nav-link" to="/airQ">                            
                                Kualitas Udara
                            </RouterLink>
                            <RouterLink class="nav-link" to="/altitude">                            
                                Approx Altitude
                            </RouterLink>
                            <RouterLink class="nav-link" to="/rain">                            
                                Curah Hujan
                            </RouterLink>
                            <RouterLink class="nav-link" to="/airH">                            
                                Kelembapan Udara
                            </RouterLink>
                            <RouterLink class="nav-link" to="/temp1">                            
                                Temperature 1
                            </RouterLink>
                            <RouterLink class="nav-link" to="/temp2">                            
                                Temperature 2
                            </RouterLink>
            
                        </div>
                    </div>
                </div>
            </div>
        
        </nav>
    </div>
</template>