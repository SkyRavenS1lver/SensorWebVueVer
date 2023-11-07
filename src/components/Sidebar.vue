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
                        Graph
                    </a>
                    <div class="collapse" id="collapseExample">
                        <div class="nav-link row">
                            <RouterLink class="nav-link" to="/light">
                                Light
                            </RouterLink>
                            <RouterLink class="nav-link" to="/pressure">   
                                Pressure
                            </RouterLink>
                            <RouterLink class="nav-link" to="/humidity">                            
                                Percent Soil Moisture                            </RouterLink>
                            <RouterLink class="nav-link" to="/airQ">                            
                                Air Quality
                            </RouterLink>
                            <RouterLink class="nav-link" to="/altitude">                            
                                Approx Altitude
                            </RouterLink>
                            <RouterLink class="nav-link" to="/rain">                            
                                Rain Drop
                            </RouterLink>
                            <RouterLink class="nav-link" to="/airH">                            
                                Humidity
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