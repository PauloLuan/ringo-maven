# ringo-maven

These instructions describe how to build ringo-maven application.

## Getting a copy of the application

To get a copy of the application source code, use [Git](http://git-scm.com/):

#. Clone the repository:: 

     git clone https://github.com/PauloLuan/ringo-maven.git
     cd ringo-maven

#. Initialize submodule dependencies::

     git submodule update --init --recursive

## Dependencies

The ringo-maven source directory contains what you need to run the application as a servlet.

To build the application, you need [Maven 2](http://maven.apache.org/) installed.  To run the application in development mode, you need [Ant](http://ant.apache.org/).

Before running in development mode or preparing the application for deployment, you need to install dependencies.  Do this by running `mvn install` in the ringo-maven directory:

    mvn clean install

If you want to add RingoJS module, just run command:

	git submodule add <URL_OF_GITHUB_REPO> externals/<NAME>

for example:

	git submodule add https://github.com/hns/stick externals/stick

## Running in development mode

To run the application in development mode, run `ant debug`:

    ant debug

If the build succeeds, you'll be able to browse to the application at http://localhost:9000/.

By default, the application runs on port 9000.  To change this, you can set the `app.port` property as follows (setting the port to 8000):

    ant -Dapp.port=8000 debug

## Preparing the application for deployment

Before moving your application to a production environment, run `mvn clean install` and find the resulting `ringo-maven.war` in the `target` directory.  Move the `target/ringo-maven.war` file to your production environment (e.g. a  servlet container).


## License

The scripts available on this project are based in [Geoexplorer app](https://github.com/opengeo/suite/tree/3.0.1-RC1/geoexplorer)