export default {
  jwt: {
    secret: process.env.TOKEN_KEY || 'default',
    expiredIn: '1d',
  },
};
