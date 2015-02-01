function UnionFind(n) {
	this.array = [];
	this.sizes = [];
	for (var i = 0; i < n; i++) {
		this.array.push(i);
		this.sizes.push(1);
	}
}

UnionFind.prototype.union = function(p, q) {
	var small, big;

	if (this.sizes[p] <= this.sizes[q]) {
		small = p,
		big = q;
	} else {
		small = q,
		big = p;
	}

	while (this.array[small] !== small) {
		small = this.array[small];
	}
	while (this.array[big] !== big) {
		big = this.array[big];
	}
	this.array[small] = big;
	this.sizes[big]++;
	this.sizes[small]++;
};

UnionFind.prototype.find = function(p, q) {
	while (this.array[p] !== p) {
		p = this.array[p];
	}
	while (this.array[q] !== q) {
		q = this.array[q];
	}
	return p === q;
};

// [0, 2, 3, 4, 4, 4, 6, 7, 8, 9]