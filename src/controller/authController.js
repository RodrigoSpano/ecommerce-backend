export const logIn = async (req, res) => {};

export const signUp = async (req, res) => {
  const { email, password, phone, firstName, lastName } = req.body;
  if (!email || !password || !phone || !firstName || !lastName) {
    return res.status(400).json({
      error: 'complete all the fields',
    });
  }
  try {
    
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};
