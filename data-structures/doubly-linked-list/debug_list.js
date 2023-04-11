export default function print() {
  console.log("list_length => ", this.length);
  let arr = [];
  let current = this.head;
  let i = 0;
  while (current) {
    const obj = {
      // index: i,
      value: current.value,
      next: current.next ? current.next.value : null,
      previous: current.previous ? current.previous.value : null,
    };
    arr.push(obj);

    current = current.next;
    i++;
  }

  console.log(arr);

  // Print the list in reverse order
  arr = [];
  current = this.tail;
  i = this.length - 1;
  while (current) {
    const obj = {
      // index: i,
      value: current.value,
      next: current.next ? current.next.value : null,
      previous: current.previous ? current.previous.value : null,
    };
    arr.push(obj);

    current = current.previous;
    i--;
  }
}
