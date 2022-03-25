module.exports = ({ env }) => ({
  url: env("https://downtoearth3.herokuapp.com"),
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
});
