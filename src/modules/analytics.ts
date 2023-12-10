import prisma from "../db";

// export const apikeyCheck = async (req, res, next) => {
//   // take api key from args of url
//   const apikey: string = req.query.apikey;
//   // if no api key, return error
//   if (!apikey) {
//     res.status(401);
//     res.json({ message: "Invalid API Key" });
//     return;
//   }
//   // check if api key is valid from the db
//   const apikeyCheck = await prisma.apiKey.findUnique({
//     where: {
//       key: apikey,
//     },
//   });
//   // if valid, call next()
//   if (!apikeyCheck) {
//     res.status(401);
//     res.json({ message: "Invalid API Key" });
//     return;
//   }
//   // if invalid, return error
//   next();
// };

export const collectAPIRequests = async (req, res, next) => {
  // take api key from args of url;
  // take the url from the request
  const url: string = req.url;
  // take the method from the request
  const method: string = req.method;
  // take the ip address from the request
  const ip: string = req.ip;

  // create a new request in the db
  const request = await prisma.apiRequests.create({
    data: {
      path: url,
      method,
      status: res.statusCode,
      ip,
      userId: req.user.id,
    },
  });

  // call next()
  next();
};

export const checkBlockedIP = async (req, res, next) => {
  // take the ip address from the request
  const ip: string = req.ip;
  // check if the ip address is blocked
  const blockedIP = await prisma.ip.findFirst({
    where: {
      ip,
    },
  });
  // if blocked, return error
  if (blockedIP) {
    res.status(401);
    res.json({ message: "IP Address Blocked" });
    return;
  }
  // if not blocked, call next()
  next();
};
