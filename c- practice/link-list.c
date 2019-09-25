#include <stdio.h>
#include <stdlib.h>

struct Node{
	int data;
	struct Node* previous;
	struct Node* next;
};

struct Node *createNode(int value){
	struct Node *temp = (struct Node *)malloc(sizeof(struct Node));
	temp->data = value;
	temp->previous = temp->next = NULL;
	return temp;
}

void orderList(struct Node *node){
	if(node != NULL){
		orderList(node->previous);
		printf("%d ", node->data);
		orderList(node->next);
	}	
}

struct Node* insert(struct Node* node, int data){
	if(node == NULL)
		return createNode(data);
	if(data < node->data)
		node->previous = insert(node->previous, data);
	else if(data > node->data)
		node->next = insert(node->next, data);
	return node;
}

int main(){
	struct Node *head = NULL;
	head = insert(head, 9);
	insert(head, 7);
	insert(head, 11);
	orderList(head);
	printf("\n");
	
	insert(head, 15);
	insert(head, 5);
	insert(head, 2);
	insert(head, 8);
	orderList(head);
	printf("\n");
	return 0;
}