#include <stdio.h>
#include <stdlib.h>

int main(){
	int *i, n, *arr, limit, j, sum = 0;
	char *c, *text;
	float *f;
	printf("enter limit of text::");
	scanf("%d", &n);
	printf("enter total number of element::");
	scanf("%d", &limit);
	i = (int*)malloc(1*sizeof(int));
	c = (char*)malloc(1*sizeof(char));
	f = (float*)malloc(1*sizeof(float));
	text = (char*)malloc(n*sizeof(char));
	arr = (int*)malloc(limit*sizeof(int));
	
	if(arr == NULL){
		printf("Insufficient memory..");
		return 0;
	}
	printf("enter %d element \n", limit);
	for(j = 0; j < limit; j++){
		printf("Enter element[%d]: ", j+1);
		scanf("%d", (arr+j));
		sum = sum + *(arr+j);
	}
	printf("Array element::\t");
	for(j=0; j<limit; j++){
		printf("%d \t", *(arr+j));
	}
	printf("\n sum::%d\n", sum);
	
	printf("\n enter int value::");
	scanf("%d", i);
	printf("\n enter char value::");
	scanf("%s", c);
	printf("\n enter float value::");
	scanf("%f", f);
	printf("\n enter text value::");
	scanf(" ");
	gets(text);
	
	printf("\n int value:%d, char value:%c, float value:%.2f\n", *i, *c, *f);
	puts(text);
	free(i);
	free(c);
	free(f);
	free(text);
	free(arr);
	return 0;
}