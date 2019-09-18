#include <stdio.h>
int main()
{
	int x[5] = {6, 3, 8, 5, 9};
	int* ptr, i, sum = 0;
	ptr = &x[0];
	for(i = 0; i < 5; i++){
		sum += *(ptr+i);
		printf("*ptr = %d \n", *(ptr+i)); 
	}
	printf("sum of array x:: %d\n", sum); 
	  
	printf("*ptr+1 = %d \n", *(ptr+3));  
	return 0;
}