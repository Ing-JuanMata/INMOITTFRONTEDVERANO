FROM node:16-buster

RUN git clone https://github.com/Ing-JuanMata/INMOITTFRONTEDVERANO.git

WORKDIR /INMOITTFRONTEDVERANO

RUN npm i

CMD npm start

EXPOSE 3000