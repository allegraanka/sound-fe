module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a1efb4277a3661151932076e34a7bf7e'),
  },
});
