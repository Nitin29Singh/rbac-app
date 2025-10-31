export const userProfile = (req, res) => {
  res.json({ message: `Welcome, ${req.user.role}!`, user: req.user });
};

export const adminDashboard = (req, res) => {
  res.json({ message: "Admin Dashboard Access Granted" });
};

export const moderatorPanel = (req, res) => {
  res.json({ message: "Moderator Panel Access Granted" });
};
