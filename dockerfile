FROM node:16-buster

RUN git clone https://github.com/Ing-JuanMata/INMOITTAPI.git

WORKDIR /INMOITTAPI

RUN npm i

CMD npm start

EXPOSE 3000