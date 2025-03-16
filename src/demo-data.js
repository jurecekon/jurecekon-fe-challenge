const listOfCompanies = [
  {
    id: 12401,
    name: 'ACME Corporation',
    email: 'tom.hudges@apple.com'
  },
  {
    id: 12402,
    name: 'intera d.o.o.',
    email: 'the.boss@intera.si'
  },
  {
    id: 12403,
    name: `Littel PLC`,
    email: 'rosanna.greenholt@smitham.com'
  },
  {
    id: 12404,
    name: `Mills LLC`,
    email: 'nichole.bergnaum@halvorson.net'
  },
  {
    id: 12405,
    name: `Okuneva, Greenfelder and Oberbrunner`,
    email: 'okuneva.olen@veum.com'
  },
  {
    id: 12406,
    name: `Cassin PLC`,
    email: 'marc.rolfson@schroeder.info'
  },
  {
    id: 12407,
    name: `Crona Inc`,
    email: 'maggio.dusty@sauer.com'
  },
  {
    id: 12408,
    name: `Wilderman-Rowe`,
    email: 'elueilwitz@breitenberg.net'
  },
  {
    id: 12409,
    name: `Hintz, Lueilwitz and Stracke`,
    email: 'bwyman@kuvalis.com'
  },
  {
    id: 12410,
    name: `McGlynn-Jacobson`,
    email: 'hdietrich@wisozk.com'
  },
  {
    id: 12411,
    name: `Walsh, Grimes and Hickle`,
    email: 'bednar.octavia@ziemann.com'
  },
  {
    id: 12412,
    name: `Klocko, Wyman and Mertz`,
    email: 'julie.kilback@schuppe.com'
  },
  {
    id: 12413,
    name: `Prohaska, Hettinger and Schroeder`,
    email: 'murray.sandrine@kertzmann.com'
  },
  {
    id: 12414,
    name: `Watsica-O'Connell`,
    email: 'halvorson.isabell@lynch.com'
  },
  {
    id: 12415,
    name: `Bernier-Ortiz`,
    email: 'eldred73@krajcik.org'
  },
  {
    id: 12416,
    name: `Mraz-Johnston`,
    email: 'vkohler@hilpert.biz'
  },
  {
    id: 12417,
    name: `Bechtelar, Nolan and Torphy`,
    email: 'v.donning@fay.net'
  },
];

const getFilteredDemoData = (search) => {
  if (!search) {
    return listOfCompanies;
  } 
  
  return listOfCompanies.filter(({ id, name, email }) => {
    const searchLower = search.toLowerCase();
    return id.toString().toLowerCase().includes(searchLower)
      || name.toLowerCase().includes(searchLower)
      || email.toLowerCase().includes(searchLower);
  });
};
