function getNodeByIndex(head, index) {
  let current = head;
  let counter = 0;

  while (current !== null && counter < index) {
    current = current.next;
    counter++;
  }

  if (counter === index) {
    return current;
  } else {
    return null;
  }
}
