class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  pop() {
    const top = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown();
    }
    return top;
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  bubbleUp() {
    let i = this.heap.length - 1;
    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);
      if (this.heap[parent] <= this.heap[i]) break;
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }

  bubbleDown() {
    let i = 0;
    const n = this.heap.length;

    while (true) {
      let smallest = i;
      let left = 2 * i + 1;
      let right = 2 * i + 2;

      if (left < n && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < n && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === i) break;

      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
  }
}

function findKthLargest(nums, k) {
  const heap = new MinHeap();

  for (let num of nums) {
    heap.push(num);

    if (heap.size() > k) {
      heap.pop(); // remove smallest in heap
    }
  }

  return heap.peek();
}

// Example
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 5