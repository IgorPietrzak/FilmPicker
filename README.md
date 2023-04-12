# File Structure:
FilmPicker is the frontend FilmPickerBackend is the express.js backend which connects frontend to a mongodb database.

`.env` does not have the mongodb connection uri, ask me for it and paste it in to the `.env` file.


# How the app works

## Home Screen
<img src="https://user-images.githubusercontent.com/96392306/231400698-0f94dc3f-a9bb-4e82-8755-841d05023471.jpeg"  width="400" height="800">


From here you can view your list of films by tapping on the `Film List` button.

## Film List
<img src="https://user-images.githubusercontent.com/96392306/231401235-e2bc18ea-394a-43e8-9cfa-43088a28b4e6.jpeg" width="400" height="800">

To add to the list, tap the `Add Film` button and you will be taken to a text field where you type in your movie title.

<img src="https://user-images.githubusercontent.com/96392306/231402310-f23b8f94-6f56-4d98-9e01-9457fa2ae97c.jpeg" width="400" height="800">

Since this app utilises stack navigation, you are able to tap the back arrow in the top left of your screen or simply swipe right to get back to a previous screen.

## Film Picker
If on the home screen you press the `Start Film Picker` button, you will be taken here:

<img src="https://user-images.githubusercontent.com/96392306/231407574-759a90dd-1d70-44d2-bb65-28a835b4f62d.PNG" width="400" height="800">     <img src="https://user-images.githubusercontent.com/96392306/231408160-4dd9c5c6-31e3-4c15-91d7-33f64f0ca888.PNG" width="400" height="800">

Person one gets shown a selection of 4 random movies from which they can ban the movies they do want to watch. Then, after they submit, they pass the phone onto person two, who is presented with a random selection which will not include the movies banned by people before them. Repeat this process until there are less than 4 movies which have not been banned left. At that point the app will choose a film to watch at random.



# Installation
## Requirements:
* Node.js
* npm
* npx
* git
* expo go app https://apps.apple.com/gb/app/expo-go/id982107779
* Databse connection uri (ask me for it)

## Method

* Clone this repository
* Go into the backend folder with
 ```console  
cd FilmPicker/FilmPickerBackend
```
* Install all dependencies with
```console
npm install
```
* Run 
```console
node server.js
```
if you have the mongodb connection uri. At this stage in your terminal you should see
```
server up on port 80

Connected to MongoDB
```

* Use this command to go to the frontend folder and install dependencies
```console
cd ../FilmPicker && npm install
```
* Run 
```console 
npx expo start
```
and follow the instructions.


