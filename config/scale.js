{
  // Cloud and health configuration

  // check: 'http://127.0.0.1/', // if we can get this page it means that another copy is running

  cloud: 'PrivateCloud', // cloud name

  instance: 'controller', // cloud instance type: standalone, controller, server
  //instance: 'server',
  //instance: 'standalone',

  host: '127.0.0.1', // cloud controller ip or host name
  port: 250,         // cloud controller tcp port
  key: '19nm58993eJ747845fk78A2z7854W90D', // Cloud access key

  cluster:  'S1',     // Cluster name to identify it in loadbalancing infrastructure
  cookie:   'node',   // Cookie name for loadbalancing (cookie value will be 'S1'+'N1')

  waf: { // Web Application Firewall config
    enabled: false,
    limits: { // limit concurent connection count
      ip:   20,  // per client ip
      sid:  10,  // per user session
      host: 100, // per host name
      url:  50,  // per url
      app:  200, // per application
      srv:  500  // per server port
    }
  },

  health:        '5m',   // health monitoring interval '5s'
  nagle:         false,  // Nagle algorithm
  gcInterval:    0,      // garbage collector interval '1h' - 1 hour, '10m' - 10 minutes
  watchInterval: '2s'    // combine wached file system events if interval less then specified

}