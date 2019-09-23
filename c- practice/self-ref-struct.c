#include <stdio.h>

struct node{
	int data1;
	int data2;
	struct node* link;
};
struct mNode{
	int data;
	struct mNode* p;
	struct mNode* n;
};

int main(){
	struct mNode m1;
	struct mNode m2;
	struct mNode m3;
	
	struct node o1;
	struct node o2;
	
	o1.data1 = 10;
	o1.data2 = 20;
	o1.link = NULL;
	o2.data1 = 30;
	o2.data2 = 40;
	o2.link = NULL;
	o1.link = &o2;
	
	m1.data = 11;
	m1.p = NULL;
	m1.n = NULL;
	m2.data = 22;
	m2.p = NULL;
	m2.n = NULL;
	m3.data = 33;
	m3.p = NULL;
	m3.n = NULL;
	m3.p = &m2;
	m2.p = &m1;
	m1.n = &m2;
	m2.n = &m3;
	
	printf("access o2 through o1::%d\n", o1.link->data1);
	printf("access o2 through o1::%d\n", o1.link->data2);
	printf("data of o1::%d\n", o1.data1);
	printf("data of o1::%d\n", o1.data2);
	printf("m3 access through m1::%d\n", m1.n->n->data);
	printf("m2 access through m3::%d\n", m3.p->data);
	printf("m1 access through m3::%d\n", m3.p->p->data);
}