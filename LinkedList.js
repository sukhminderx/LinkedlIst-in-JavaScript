//define the Node class
function Node(name) {
	this.name = name;
	this.next = null;
}

//define the Linked List class
function LinkedList() {
	this.head = new Node("head");
	this.findNodePosition = findNodePosition;
	this.insertNodeIntoLinkedList = insertNodeIntoLinkedList;
	this.removeNodeFromLinkedList = removeNodeFromLinkedList;
	this.displayLinkedList = displayLinkedList;
	this.findPreviousNode = findPreviousNode;
}

function findNodePosition(nodeName) {
	var currentNode = this.head;
	while (currentNode.next) {
		currentNode = currentNode.next;
		if(currentNode.name == nodeName){
			return currentNode;
		}
	}
	return currentNode;
}

function insertNodeIntoLinkedList(newNode, insertAfterNodeName) {
	var currentNode = this.findNodePosition(insertAfterNodeName);
	newNode.next = currentNode.next;
	currentNode.next = newNode;
}

function displayLinkedList() {
	var currentNode = this.head;
	console.log(this.head);
	while (currentNode.next !== null) {
		console.log(currentNode.next);
		currentNode = currentNode.next;
	}
}

function findPreviousNode(nodeNameToBeRemoved) {
	var currentNode = this.head;
	while (currentNode.next) {
		if(currentNode.next.name === nodeNameToBeRemoved){
			return currentNode;
		}
		currentNode = currentNode.next;		
	}
}

function removeNodeFromLinkedList(nodeNameToBeRemoved) {
	var previousNode = this.findPreviousNode(nodeNameToBeRemoved);
	if (previousNode.next !== null) {
		previousNode.next = previousNode.next.next;
	}
}