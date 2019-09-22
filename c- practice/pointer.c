#include <stdio.h>

int main(){
	int var = 20, x = 13;
	int *ip;
	int *ptn = NULL;
	ip = &var;
	//var = 31;
	ip = &x;
	*ip = 31;
	printf("Address of x :: %x\n", &x);
	printf("Address stored in ip variable:: %x\n", ip);
	printf("value of *ptn variable:: %x\n", ptn);
	printf("value of x variable:: %d\n", x);
	return 0;
}