function QuickFind(n) {
	this.array = [];
	for (var i = 0; i < n; i++) {
		this.array.push(i);
	}
}

QuickFind.prototype.union = function(p, q) {
	for (var i = 0; i < this.array.length; i++) {
		if (this.array[i] === this.array[p]) {
			this.array[i] = this.array[q];
		}
	}
};

QuickFind.prototype.find = function(p, q) {
	return this.array[p] === this.array[q];
};