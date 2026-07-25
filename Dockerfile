FROM node:slim
# add unpriviledged user for --watch
RUN useradd -ms /bin/sh -u 1001 myappuser

WORKDIR /myapp

# copy all the files over as root
COPY package.json package-lock.json ./
COPY src ./src
COPY public ./public
COPY views ./views

# root --> grant access to unpriviledged user <myappuser>
RUN chown -R myappuser:myappusesr /myapp
USER myappuser
RUN npm install

EXPOSE 8822
CMD ["node", "src/index.js"]