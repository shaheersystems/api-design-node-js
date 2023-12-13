import prisma from "../db";

export const getAnalytics = async (req, res) => {
  console.log("getAnalytics request for user:", req.user.id);
  try {
    const analytics = await prisma.apiRequests.findMany({
      where: {
        userId: req.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    res.json({ data: analytics });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching analytics" });
  }
};

export const allIPs = async (req, res) => {
  console.log("allIPs request for user:", req.user.id);
  try {
    const ips = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
      select: {
        BlockedIP: true,
      },
    });
    res.json({ data: ips });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching IPs" });
  }
};

export const blockIPForUser = async (req, res) => {
  console.log("blockIPForUser request for user:", req.user.id);
  const { ip, reason } = req.body;
  const userId = req.user.id;

  try {
    const blockedIP = await prisma.ip.create({
      data: {
        ip,
        blocked: true,
        reason,
        userId,
      },
    });
    res.json({ data: blockedIP });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while blocking IP" });
  }
};
