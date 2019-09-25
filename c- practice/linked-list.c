#include <stdio.h>
#include <stdlib.h>

struct Node{
	int data;
	struct Node* previous;
	struct Node* next;
};

struct Node insert(struct Node n, int data){
	n.next = data;
	return n;
}

int main(){
	struct Node m1;
	
	m1.data = 11;
	m1.previous = NULL;
	m1.next = NULL;
	
	insert(m1, 23);
	printf("m1::%d\n", m1.data);
	printf("m1.nxt::%d\n", m1.next);
}