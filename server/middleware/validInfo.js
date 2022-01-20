module.exports = function (req, res, next) {
  const { mail, nick, password, avatar_id } = req.body

  function validEmail(userEmail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)
  }

  if (req.path === "/register") {
    if (![mail, nick, password, avatar_id].every(Boolean)) {
      return res.status(401).json("One or more fields are missing")
    } else if (!validEmail(mail)) {
      return res.status(401).json("Email invalid")
    }
  } else if (req.path === "/login") {
    if (![mail, password].every(Boolean)) {
      return res.status(401).json("Missing info")
    } else if (!validEmail(mail)) {
      return res.status(401).json("Email invalid")
    }
  }
  next()
}
