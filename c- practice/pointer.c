#include <stdio.h>

int main(){
	int var = 20;
	int *ip;
	int *ptn = NULL;
	ip = &var;
	var = 31;
	printf("Address of var :: %x\n", &var);
	printf("Address stored in ip variable:: %x\n", ip);
	printf("value of *ptn variable:: %x\n", ptn);
	printf("value of *ip variable:: %d\n", *ip);
	return 0;
}