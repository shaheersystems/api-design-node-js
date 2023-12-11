import prisma from "../db";

export const collectAPIRequests = async (req, res, next) => {
  // take api key from args of url;
  // take the url from the request
  console.log("collectAPIRequests request for user:", req.user.id);
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
  console.log("checkBlockedIP request for user:", req.user.id);
  // take the ip address from the request
  const ip: string = req.ip;
  // check if the ip address is blocked
  const blockedIP = await prisma.ip.findFirst({
    where: {
      ip,
      blocked: true,
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
