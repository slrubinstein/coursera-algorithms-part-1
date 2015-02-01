describe('Stack with linked list', function() {

	var s;

	beforeEach(function() {
		s = new Stack();
	});

	it('should push', function() {
		s.push('a');
		var result = s.stack;
		expect(result).toEqual({data: 'a', next: null});
	});

	it('should push multiple items', function() {
		s.push('a');
		s.push('b');
		s.push('c');

		var result = s.stack;
		var answer = {data: 'c', next: 
								  	{data: 'b', next: {
								  		data: 'a', next: null}
										}
									}
		expect(result).toEqual(answer);
	});

	it('should pop', function() {
		s.push(1);
		var popped = s.pop();
		var result = s.stack;

		expect(popped).toEqual(1);
		expect(result).toEqual(null);
	});

	it('should not pop an empty stack', function() {
		var result = s.pop();

		expect(result).toEqual('cannot pop an empty stack');
	});

	it('should pop multiple items', function() {
		s.push(1);
		s.push(2);
		s.push(3);
		var popped1 = s.pop();
		var popped2 = s.pop();

		var result = s.stack;

		expect(popped1).toEqual(3);
		expect(popped2).toEqual(2);
		expect(result).toEqual({data: 1, next: null});
	});

	it('should push and pop with abandon!', function() {
		s.push('Mary');
		s.push('had');
		var popped1 = s.pop();
		s.push('a');
		var popped2 = s.pop();
		s.push('little');
		s.push('lamb');

		var answer = {data: 'lamb', next: {
										data: 'little', next: {
											data: 'Mary', next: null}
										}
									}

	var result = s.stack;

	expect(popped1).toEqual('had');
	expect(popped2).toEqual('a');
	expect(result).toEqual(answer);
	});
});

describe('Queue with linked list', function() {

	var q;

	beforeEach(function() {
		q = new Queue();
	});

	it('should enqueue', function() {
		q.enqueue('a');
		var result = q.queue;
		expect(result).toEqual({data: 'a', next: null});
	});

	it('should enqueue multiple items', function() {
		q.enqueue('a');
		q.enqueue('b');
		q.enqueue('c');

		var result = q.queue;
		var answer = {data: 'a', next: 
								  	{data: 'b', next: {
								  		data: 'c', next: null}
										}
									}
		expect(result).toEqual(answer);
	});

	it('should dequeue', function() {
		q.enqueue(1);
		var dequeueped = q.dequeue();
		var result = q.queue;

		expect(dequeueped).toEqual(1);
		expect(result).toEqual(null);
	});

	it('should not dequeue an empty queue', function() {
		var result = q.dequeue();

		expect(result).toEqual('cannot dequeue an empty queue');
	});

	it('should dequeue multiple items', function() {
		q.enqueue(1);
		q.enqueue(2);
		q.enqueue(3);
		var dequeued = q.dequeue();
		var dequeueped2 = q.dequeue();

		var result = q.queue;

		expect(dequeued).toEqual(1);
		expect(dequeueped2).toEqual(2);
		expect(result).toEqual({data: 3, next: null});
	});

	it('should enqueue and dequeue with abandon!', function() {
		q.enqueue('Mary');
		q.enqueue('had');
		var dequeued1 = q.dequeue();
		q.enqueue('a');
		var dequeued2 = q.dequeue();
		q.enqueue('little');
		q.enqueue('lamb');

		var answer = {data: 'a', next: {
										data: 'little', next: {
											data: 'lamb', next: null}
										}
									}

	var result = q.queue;

	expect(dequeued1).toEqual('Mary');
	expect(dequeued2).toEqual('had');
	expect(result).toEqual(answer);
	});
});