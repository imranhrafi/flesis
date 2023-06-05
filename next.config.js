module.exports = {
    webpack: (config, { dev }) => {
      if (dev) {
        config.watchOptions = {
          poll: 1000, // Check for changes every second
          aggregateTimeout: 300, // Delay the rebuild process by 300 milliseconds
        };
      }
      return config;
    },
  };
  