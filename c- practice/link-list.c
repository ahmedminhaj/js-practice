#include <stdio.h>
#include <stdlib.h>

struct Node{
	int data;
	struct Node* previous;
	struct Node* next;
};

struct Node* createNode(int value){
	struct Node* temp = (struct Node*)malloc(sizeof(struct Node));
	temp->data = value;
	temp->previous = temp->next = NULL;
	return temp;
}

void printList(struct Node* node){
	if(node != NULL){
		printList(node->previous);
		printf("%d ", node->data);
		printList(node->next);
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

struct Node* minValueNode(struct Node* node){ 
    struct Node* current = node; 
    while (current && current->previous != NULL) 
        current = current->previous; 
    return current; 
}

struct Node* delete(struct Node* node, int data){ 
    if (node == NULL) return node;  
    if (data < node->data) 
        node->previous = delete(node->previous, data); 
    else if (data > node->data) 
        node->next = delete(node->next, data); 
    else{ 
        if (node->previous == NULL) { 
            struct Node *temp = node->next; 
            free(node); 
            return temp; 
        }else if (node->next == NULL) { 
            struct Node *temp = node->previous; 
            free(node); 
            return temp; 
        } 
        struct Node* temp = minValueNode(node->next); 
        node->data = temp->data; 
        node->next = delete(node->next, temp->data); 
    } 
    return node; 
}

struct Node* update(struct Node* node, int data, int newdata) { 
    node = delete(node, data); 
    node = insert(node, newdata); 
    return node; 
}  

int main(){
	struct Node *head = NULL;
	head = insert(head, 9);
	insert(head, 7);
	insert(head, 11);
	printList(head);
	printf("\n");	
	insert(head, 15);
	insert(head, 5);
	insert(head, 2);
	insert(head, 8);
	printList(head);
	printf("\n");
	head = delete(head, 7);
	printList(head);
	printf("\n");
	head = update(head, 8, 6);
	head = update(head, 11, 16);
	printList(head);
	printf("\n");
	return 0;
}