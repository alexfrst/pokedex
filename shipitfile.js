// shipitfile.js
const path = require("path");
module.exports = (shipit) => {
  // Load shipit-deploy tasks
  require("shipit-deploy")(shipit);

  const appName = "pokedex";

  shipit.initConfig({
    default: {
      deployTo: "/home/ec2-user/apps/pokedex",
      repositoryUrl: "https://github.com/alexfrst/pokedex.git",
      branch: "main",
      keepReleases: 0,
      shared: {
        overwrite: true,
        dirs: ["node_modules"],
      },
    },
    staging: {
      servers: "ec2-user@ec2-3-250-124-224.eu-west-1.compute.amazonaws.com",
    },
  });

  const path = require("path");
  const ecosystemFilePath = path.join(
    shipit.config.deployTo,
    "shared",
    "ecosystem.config.js"
  );
  // Our listeners and tasks will go here
  shipit.on("updated", async () => {
    shipit.start("npm-install");
  });

  shipit.blTask("npm-install", async () => {
    shipit.remote(`cd ${shipit.releasePath} && yarn`);
  });

  shipit.on("published", async () => {
    shipit.start("pm2-server");
  });

  shipit.blTask("pm2-server", async () => {
    await shipit.remote(`pm2 delete -s ${appName} || :`);
    await shipit.remote(
      `cd /home/ec2-user/apps/pokedex/current && yarn && yarn start`
    );
  });
};
