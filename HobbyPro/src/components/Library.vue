<script>

</script>

<template>
    <div class="library_formatting">
        <h1>Library</h1>
        <div class="dropdown">
            <button class="dropbtn">Library<i class="fa-duotone fa-caret-down"></i> </button>
            <div class="dropdown-content">
                <a href="#">Action One</a>
                <a href="#">Action One</a>
            </div>
        </div>
        <hr>            
            

        <p>example card files</p>
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="" alt="image" />
            <div class="card-body">
                <h4 class="card-title">Sample file name</h4>

                <p class="card-text">Text</p>
            </div>
        </div>

    </div>
</template>

<style>
@media (min-width: 576px) {
  .library_formatting {
    align-items: center;
  }
}

.dropbtn {
  background-color: white;
  color: black;
  padding: 16px;
  font-size: 30px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: white;}


</style>