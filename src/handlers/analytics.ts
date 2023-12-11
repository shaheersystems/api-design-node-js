import prisma from "../db";

export const getAnalytics = async (req, res) => {
  console.log("getAnalytics request for user:", req.user.id);
  try {
    const analytics = await prisma.apiRequests.findMany({
      where: {
        userId: req.user.id,
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

export const createBlockIP = async (req, res) => {
  console.log("createBlockIP request for user:", req.user.id);
  const { ip } = req.body;
  try {
    const blockedIP = await prisma.ip.create({
      data: {
        ip,
        blocked: true,
        reason: req.body.reason,
      },
    });
    res.json({ data: blockedIP });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while blocking IP" });
  }
};
