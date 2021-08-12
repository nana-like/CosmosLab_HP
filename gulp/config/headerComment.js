module.exports = function(project) {
	var date = function () {
		var date = new Date();
		var format = function(n) {
				return (n < 10 ? "0" : "") + n;
		}
		return (
			date.getFullYear() + "-" +
			format(date.getMonth() + 1) + "-" +
			format(date.getDate()) + " " +
			format(date.getHours()) + ":" +
			format(date.getMinutes()) + ":" +
			format(date.getSeconds())
		);
	}

	var comment = `
	-----------------------------------------------
	Project: ${project.description}
	Author: ${project.author}
	Last Modified: ${date()}
	-----------------------------------------------
	`;
	return comment;
};

