const logout = async (req, res) => {
	try {
		req.user.tokens = req.user.tokens.filter((tokenObj) => {
			return tokenObj.token !== req.token;
		});
		await req.user.save();
		res.send();
	} catch (error) {
		res.status(500).send();
	}
};

module.exports = logout;
