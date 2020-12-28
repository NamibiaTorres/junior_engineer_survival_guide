## Docker

### What is Docker:
* A linux technology that allows you to run an entire virtual operating system in the form of a virtual box, which your computer reads as an application.

### Why use Docker?
* It provides application reliability
* Environment consistency
  * You can use your programs in the versions you're used to in order to make sure that your work is functioning properly
* Interactive development
* Operating system cross compatibility
  * Docker works on most operating systems
* Testing/Continuous Integration
* Isolation at network and filesystem levels.
  * Docker helps you control the network resources

#### Side note:
* You can run Docker on your raspberry-py, make sure to run alpine-linux

### Installing Python in Docker image
* apt-get update
* apt-get install python3


### Docker container:
* A continer is a live clone of an image.
* Docker duplicates an image and gives it some CPU control.
* You can clone your container into another image by writing:
  ` docker commit`
* Create a container:
  ` docker run -it ubuntu bash`
  * this clones your image and puts in a container
* Run an image:
  `docker run -t [name of image]`
* To list all of your docker containers:
`docker ps -a`
