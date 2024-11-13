# Assignment 1 - ReactJS app.

Name: Wu Songyu

## Overview.

In this project, I focused on enhancing the user experience for movie enthusiasts by adding several new pages, including popular actors, current trending movies, and a wishlist feature.  These additions provide users with more options to explore content, filter by actor attributes, and add movies to a personalized "wishlist" for future viewing.  Additionally, I improved navigation with links between movies and actors, refined the user interface for a smoother, more visually appealing experience, and added pagination functionality for easier browsing across pages.

### Features.

1、Added a wishlist feature where users can add movies they want to watch; after watching, they can remove them from this page.
2、Added a popular movies page, which provides access to the latest popular movies.
3、Added an actors page where users can view currently trending actors.
4、Added a detailed actor information page; by clicking “more information,” users can access additional information about the actor.
5、On the detailed information page, a new UI allows automatic image transitions every five seconds if no action is taken, or 
   users can switch images manually using left and right icons.
6、Added linked navigation between actor and movie details, allowing users to switch between them with a dedicated UI.
7、Introduced a new filter on the actor page, enabling users to search by name or filter by gender.
8、Added a pagination feature allowing users to choose specific pages from a total of 32 pages.

## Setup requirements.

creat .env and add:
REACT_APP_TMDB_KEY=your_tmdb_key
FAST_REFRESH=false

## API endpoints.

discover\popularmovie\popularperson\upcoming these  endpoint add the page, so they can get different page, just give the discover full api
discover Movies - discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}
popular Persons - person/popular
popular Movies - movie/popular
cast Credits - movie/${movie_id}/credits
Person Images - person/${id}/images
person Details - person/${id}
Movies Credits - person/${person_id}/movie_credits

## Routing.

1、/movies/wishlist - link to WishListPage 
2、/movies/popular - link to PopularMoviesPage
3、/cast - link to PersonPage where can find popular
4、/person/:id - link to person detail page where can get peroson detail

## Independent learning (If relevant).

1、pagination from https://v5-0-6.mui.com/zh/components/pagination/ and some question ask for GPT
2、mui dynamic picture display from https://blog.csdn.net/2301_76156233/article/details/136388379 and some question ask for GPT