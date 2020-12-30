# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer:

  The name of the foreign key has to refer to the class where the multupile sightings belongs to so an apporpiate name could be "animal_id"
  The foreign key will be part of the model with several instances so in this case will be the Sightings.

  Researched answer:

  The foreign key always goes on the belongs_to side and  by convention  should always be the modelname_id:integer. 



2. Which RESTful routes must always be passed params? Why?

  Your answer:

  I need params for restful routes that are acting on a specific id so: destroy, edit, update and show.
  

  Researched answer:

  The restful routes show, create, destroy, edit and update require an :id params, they are all acting on a specific entry in the database.
  Index and new are not interacting with a specific entry in the database so they don't require a params id in their controller method. 



3. Name three rails generator commands. What is created by each?

  Your answer:

  rails create resource "Classname" : 
  creates model view and controller and set up routes.


  rails create model "Classname": 
  creates schema.rb with the values indicated for the database and a model for the class.

  rails create controller  "Classname", 
  controller is responsible for routing external requests to internal actions, handles URLs. It coordinates the interaction between the user,    the views, and the model.


  Researched answer:

  Using generators will save you a large amount of time by writing boilerplate code.
  a lot of generate commands ara available and more can be installed through gems.

  rails create resource "Classname" : creates model and controller and set up routes and about everything needed to start working with the "Classname".

  rails create model "Classname": creates schema.rb with the values indicated for the database and a model for the class. The generate command for model takes the name of the model we intend to create, the name of each column, and the data type of each column as arguments. The name of the model is uppercase and singular by convention.

  rails create controller  "Classname", controller is responsible for routing external requests to internal actions, handles URLs


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /users     

users#index = display all the users

method="GET"    /users/1 

users#show = display user1

method="GET"    /users/new

users#new = return a form for creating a new user

method="GET"    /users/edit/1  

users#edit = return a form for editing an user

method="POST"   /users/  

users#create = create a new user

method="PUT"    /users/1  

users#update = update user1

method="DELETE" /users/1  

users#destroy   = delete user1



5. As a developer, you want to make an application that will help you manage your to do list. For the MVP, you want to create just the user's view. Create 10 user stories that will help you get your application started.

