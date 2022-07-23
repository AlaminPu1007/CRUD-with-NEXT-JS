// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions

export const sessionOptions = {
  // password, required: Private key used to encrypt the cookie. It has to be at least 32 characters long
  // https://1password.com/password-generator/ to generate strong passwords.
  password: process.env.IRON_SESSION_PASSWORD,
  cookieName: "iron-session/examples/next.js",
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};
