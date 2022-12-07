
export const alreadyExists = async (req, res, next) => {
  if(!req.isAuthenticated()) return res.redirect('/auth/login')
  return next()
}