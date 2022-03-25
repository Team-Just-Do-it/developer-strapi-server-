module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3fbfe449715ddac2801c20a87d2eca1c'),
  },
});
