#include <stdio.h>

int add(int n1, int n2){
	return n1 + n2;
}

int main(){	
	int (*ad) (int, int) = &add;
	int op1 = ad(8, 9);
	int op2 = add(7, 7);
	int x[5] = {6, 3, 8, 5, 9};
	int* ptr, i, sum = 0;
	ptr = &x[0];
	for(i = 0; i < 5; i++){
		sum += *(ptr+i);
		printf("*ptr = %d \n", *(ptr+i)); 
	}
	printf("sum of array x:: %d\n", sum); 
	  
	printf("*ptr+1 = %d \n", *(ptr+3)); 
	
	printf("function call with pointer::%d\n", op1);
	printf("function call without pointer::%d\n", op2);
	return 0;
}