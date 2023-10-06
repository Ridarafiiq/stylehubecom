FROM node:16
COPY ./build/ /usr/local/apache2/htdocs/
#RUN npm install -g serve
#CMD ["serve","-s","build"]