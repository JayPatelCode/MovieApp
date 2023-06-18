'use strict';
// import { api_key, fetchDataFromServer} from "./api.js";
  
import { api_key, fetchDataFromServer } from "./api.js";
// This is a JavaScript module that exports a sidebar function. The function fetches genre data from a movie API using fetchDataFromServer function from a local module named api.js, and then dynamically generates HTML content for a sidebar with links to different movie genres and languages.

export function sidebar() {
  
// fetch all genres eg: [{"id":"123", "name": "Action"}] then change genre format eg:{123:"Action"}


    const genreList = {};
    fetchDataFromServer(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`, function({ genres }){
    

// The for loop in the given code iterates over each element in the genres array, which is obtained as a response from a movie database API using the fetchDataFromServer() function.

// The loop uses destructuring to extract id and name properties from each element of genres. Then, it creates a new property on the genreList object with the key as id and the value as name. This effectively creates a mapping between each genre ID and its corresponding name.
for(const { id, name } of genres){
    genreList[id] = name;

}
genreLink();
    });
  
    const sidebarInner=document.createElement("div");
    sidebarInner.classList.add("sidebar-inner");

    sidebarInner.innerHTML = `
    <div class="sidebar-list">

    <p class="title">Genre</p>

  </div>

  <div class="sidebar-list">

    <p class="title">Language</p>

    <a href="./movie-list.html" menu-close 
    class="sidebar-link" onclick='getMovieList("with_original_language=en", "English" )'>English</a>

     
    <a href="./movie-list.html" menu-close class="sidebar-link" onclick="getMovieList('with_original_language=hi', 'Hindi')">Hindi</a>

    <a href="./movie-list.html" menu-close 
    class="sidebar-link"  onclick='getMovieList("with_original_language=bn", "Bengali")'>Bengali</a>
  </div>

  <div class="sidebar-footer">
    <p class="copyright">
      Copyright 2023 
      <a href="https://youtube.com/@codewithsadee">codeJayPro</a>
    </p>


    <img src="./assets/images/tmdb-logo.svg" width="130" height="17"   
      alt="the movie database logo">          
  </div>
    `;



    // function genreLink() {
      const genreLink = function() {
// The Object.entries method is used to convert the genreList object into an array of arrays, where each subarray contains two elements: the key (genreId) and the value (genreName) for each genre in the object. The of keyword is then used to iterate over each subarray in the resulting array.
      for(const [genreId, genreName] of Object.entries
        (genreList)){
          const link = document.createElement("a");
          link.classList.add("sidebar-link");
          link.setAttribute("href", "./movie-list.html");
          link.setAttribute("menu-close","");
          link.setAttribute("onclick",`getMovieList("with_genres=${genreId}", "${genreName}")`);
          link.textContent=genreName;
 // This loop executes once for each key-value pair in the genreList object, creating a new a element for each genre and appending it to the sidebar.
          sidebarInner.querySelectorAll(".sidebar-list")[0].
          appendChild(link);

        }
    
    const sidebar = document.querySelector("[sidebar]");
    sidebar.appendChild(sidebarInner);
    toggleSidebar(sidebar);

      }
    
      const toggleSidebar = function(sidebar){

        // Toggle slidebar in mobile screen

        const sidebarBtn = document.querySelector("[menu-btn]")  
      
      const sidebarTogglers= document.querySelectorAll("[menu-toggler]");
      const sidebarClose = document.querySelectorAll("[menu-close]");
      const overlay=document.querySelector("[overlay]");
      addEventOnElements(sidebarTogglers, "click", function(){
           sidebar.classList.toggle("active");
           sidebarBtn.classList.toggle("active");
           overlay.classList.toggle("active");

      });

      addEventOnElements(sidebarClose, "click", function(){
        sidebar.classList.remove("active");
        sidebarBtn.classList.remove("active");
        overlay.classList.remove("active");

   });

      }
}     










