import { withIronSessionApiRoute } from "iron-session/next";

import { sessionOptions } from "../../lib/session";

export default withIronSessionApiRoute(loginRoute, sessionOptions);

async function loginRoute(req, res) {
  const { username } = await req.body;
  console.log(req.body, "from req body");
  return;
  try {
    const user = {};
    req.session.user = user;
    await req.session.save();

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
