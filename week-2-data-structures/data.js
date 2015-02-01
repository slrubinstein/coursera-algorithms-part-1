function Stack() {
	this.stack = null;
}

Stack.prototype.push = function(item) {
	this.stack = {data: item, next: this.stack}
};

Stack.prototype.pop = function() {
	if (this.stack === null) {
		return 'cannot pop an empty stack';
	}

	var result = this.stack.data;
	this.stack = this.stack.next;

	return result;
};

function Queue() {
	this.queue = {};
	this.node = this.queue;
}

Queue.prototype.enqueue = function(item) {
	if (this.node.next === null) {
		this.node.next = {};
		this.node = this.node.next;
	}
	this.node.data = item;
	this.node.next = null;
};

Queue.prototype.dequeue = function() {
	if (!this.queue.data) {
		return 'cannot dequeue an empty queue';
	}
	var result = this.queue.data;
	this.queue = this.queue.next;

	return result;
};