describe('Union find', function() {

	var uf;

	beforeEach(function() {
		uf = new UnionFind(10);
	});

	it('should instantiate an array of n elements', function() {
		expect(uf.array).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
	});


	it('should have a union function', function() {
		uf.union(2, 9);
		uf.union(3, 4);
		expect(uf.array).toEqual([0, 1, 9, 4, 4, 5, 6, 7, 8, 9]);
	});

	it('should have a find function that fails', function() {
		var result = uf.find(3, 7);
		expect(result).toBe(false);
	});

	it('should have a find function that passes', function() {
		uf.union(4, 9);
		var result = uf.find(4, 9);
		expect(result).toBe(true);
	});

	it('should accept complex unions and finds', function() {
		uf.union(1, 3);
		uf.union(4, 8);
		uf.union(8, 0);
		uf.union(3, 0);
		uf.union(5, 6);

		var result1 = uf.find(4, 0);
		expect(result1).toBe(true);

		var result2 = uf.find(6, 8);
		expect(result2).toBe(false);

		uf.union(6, 0);

		var result3 = uf.find(6, 6);
		expect(result3).toBe(true);
	});

	it('should avoid tall trees using weighting', function() {
		uf.union(1, 2);
		uf.union(2, 3);
		uf.union(3, 4);
		uf.union(5, 4);

		expect(uf.array).toEqual([0, 2, 2, 2, 2, 2, 6, 7, 8, 9]);
	});

	it('should use path compression to keep trees even', function() {
		
	});
});