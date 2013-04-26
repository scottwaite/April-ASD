function (doc) {
	if (doc._id.substr(0, 9) === "employee:") {
		emit(doc._id);
	}
};