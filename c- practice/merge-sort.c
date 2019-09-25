#include <stdio.h>
#include <stdlib.h>

struct Node{
	int data;
	struct Node* next;
};

void printList(struct Node* head){
	struct Node* ptr = head;
	while(ptr){
		printf(" %d->", ptr->data);
		ptr = ptr->next;
	}
	printf("Null\n");
}

void push(struct Node** head, int data){
	struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
	newNode->data = data;
	newNode->next = *head;
	*head = newNode;
}

struct Node* SortMerge(struct Node* a, struct Node* b){
	if(a == NULL)
		return b;
	else if(b == NULL)
		return a;
	struct Node* result = NULL;
	if(a->data <= b->data){
		result = a;
		result->next = SortMerge(a->next, b);
	}else{
		result = b;
		result->next = SortMerge(a, b->next);
	}
	return result;
}

void split(struct Node* source, struct Node** first, struct Node** last){
	if(source == NULL || source-> next == NULL){
		*first = source;
		*last = NULL;
		return;
	}
	struct Node* slow = source;
	struct Node* fast = source->next;
	while(fast != NULL){
		fast = fast->next;
		if(fast != NULL){
			slow = slow->next;
			fast = fast->next;
		}
	}
	*first = source;
	*last = slow->next;
	slow->next = NULL;
}

void MergeSort(struct Node** head){
	if(*head == NULL || (*head)->next == NULL)
		return;
	struct Node* a;
	struct Node* b;
	split(*head, &a, &b);
	MergeSort(&a);
	MergeSort(&b);
	*head = SortMerge(a, b);
}

int main(){
	int keys[] = {6,3,5,8,1,9,4};
	int n = sizeof(keys)/sizeof(keys[0]);
	struct Node *head = NULL;
	for(int i = 0; i < n; i++){
		push(&head, keys[i]);
	}
	MergeSort(&head);
	printList(head);
	return 0;
}