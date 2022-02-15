module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fcccf05ff5716dd464f4271cb941d2bb'),
  },
});
