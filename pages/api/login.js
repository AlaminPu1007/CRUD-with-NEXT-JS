import { withIronSessionApiRoute } from "iron-session/next";
import api from "../../api-configs/instance";
import { sessionOptions } from "../../lib/session";
import Router from "next/router";

export default withIronSessionApiRoute(loginRoute, sessionOptions);

async function loginRoute(req, res) {
  const { name = null, email, password } = await req.body;
  const body = { name, email, password };
  try {
    const response = await api.post("api/auth/register", body);
    if (response.data !== "This email is already exist") {
      const user = {
        name: response.data?.name,
        email: response.data?.email,
        token: response.data?.token,
        isLoggedIn: true,
      };
      req.session.user = user;
      await req.session.save();

      await res.json(user);
    } else {
      res.status(500).json({ message: response.data });

      // req.session.destroy();
      // res.json(user);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

/**
 * 
 * async function loginRoute(req, res) {
  const { name, email, password } = await req.body;
  const body = {
    name,
    email,
    password,
  };
  try {
    const res = await api.post("api/auth/register", body);
    if (res.data !== "This email is already exist") {
      const user = {
        name: res.data?.name,
        email: res.data?.email,
        token: res.data?.token,
        isLoggedIn: true,
      };

      req.session.user = user;
      await req.session.save();

      await res.json(user);
    } else {
      await res.json({ message: res.data });
    }
  } catch (error) {
    await res.json({ message: error.message, status: 500 });
  }
}
 */
