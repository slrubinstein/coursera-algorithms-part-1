describe('Quick find', function() {

	var qf;

	beforeEach(function() {
		qf = new QuickFind(10);
	});

	it('should instantiate an array of n elements', function() {
		expect(qf.array).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
	});


	it('should have a union function', function() {
		qf.union(1, 2);
		qf.union(4, 5)
		expect(qf.array).toEqual([0, 2, 2, 3, 5, 5, 6, 7, 8, 9]);
	});

	it('should have a find function that fails', function() {
		var result = qf.find(3, 7);
		expect(result).toBe(false);
	});

	it('should have a find function that passes', function() {
		qf.union(4, 9);
		var result = qf.find(4, 9);
		expect(result).toBe(true);
	});

	it('should accept complex unions and finds', function() {
		qf.union(1, 3);
		qf.union(4, 8);
		qf.union(8, 0);
		qf.union(3, 0);
		qf.union(5, 6);

		var result1 = qf.find(4, 0);
		expect(result1).toBe(true);

		var result2 = qf.find(6, 8);
		expect(result2).toBe(false);

		qf.union(6, 0);

		var result3 = qf.find(6, 6);
		expect(result3).toBe(true);
	});
});