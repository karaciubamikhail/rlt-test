module.exports = {
<<<<<<< HEAD
    publicPath: '/rlt-test/'
=======
    publicPath: process.env.NODE_ENV === 'production'
      ? '/rlt-test/'
      : '/'
>>>>>>> 03a8637748224975293e7c759bf30bb6d46e5eba
  }