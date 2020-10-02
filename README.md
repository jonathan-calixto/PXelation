# PXelation

[Live Site](https://pxelation.herokuapp.com/)

***

## Introduction

PXelation is a photographic platform where photographers are able to upload and share there work with the community. We welcome photographers, new and old, novice and professional, casual and hardcore, to take their audience and show them the world through their lense in ways that will surely amaze many. PXelation is built on a Ruby on Rails backend utilizing PostgreSQL for the database and React and Redux on the frontend to bring our world and the world of our users to life.

***

## Features

* Users are able to create accounts to upload, edit and delete photographs.
* Our backend is secured through the use of BCrypt for user authentication.
* Users can add a title to their photographs and optionally a description and location.
* All user photos are accessible through the discover link for the rest of the community to enjoy.

*** 

![User Upload](https://i.imgur.com/75u4gIa.png)
![User Showpage](https://i.imgur.com/HxmuVst.png)

***

File handling is done by the following code snippet, allowing users to upload and assign a URL to their photographic post at creation.

```
    handleFile(event){
        const file = event.target.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }
```
*** 

## Discovery

![Discover Other Users](https://i.imgur.com/DDEm04A.png)

Through the use of Masonry we're able to present a clean and sleek way to viewing other user's works of art and welcome all to explore and see the world through the eyes of like-minded beings.

```
                <div>
                    <Masonry 
                        className='photo-index-masonry' 
                        breakpointCols={{default: 5, 1000: 4, 800: 2}} 
                        columnClassName='masonry-grid-column'
                    >
                        {photos.map(photo => {
                            return <PhotoIndexItem 
                                    photo={photo}
                                    deletePhoto={deletePhoto}
                                    key={photo.id}
                            />
                        })}
                    </Masonry>
                </div>
```

* We dynamically alter the amount of columns depending on the user's window size to give them the best way to view their masterpieces.

***

## Future Updates

* The ability for users to like and comment on other's photographs.
* A user's profile page to better manage all of their own photos.
* A notification dropdown updating them in real time when one of their photos has been liked/commented.
    
