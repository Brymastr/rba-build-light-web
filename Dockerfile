FROM node:onbuild

# Add to working dir
WORKDIR /src
ADD . /src

# install dependencies
RUN     npm i
RUN     npm i -g bower
RUN     bower i --allow-root
RUN     npm i -g gulp
RUN     gulp
RUN     apt-get update
RUN     apt-get -y install ruby-full
RUN     gem install sass
RUN     sass styles/main.scss styles/main.css

# Run application
EXPOSE  80
CMD ["node", "index.js"]