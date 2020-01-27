#include <stdio.h>

int sumOfSqure(int num);
int squreOfSum(int num);

void main(){
	int num;
	printf("input the total number:");
	scanf("%d", &num);
	int sum1 = sumOfSqure(num);
	int sum2 = squreOfSum(num);
	int diff = sum2 -sum1;
	printf("difference: %d", diff);
}

int sumOfSqure(int num){
	int sum = 0;
	for(int i = 1; i <= num; i++){
		sum = sum + (i*i);
	}
	return sum;
}

int squreOfSum(int num){
	int sum = 0;
	for(int i = 1; i <= num; i++){
		sum = sum + i;
	}
	return sum*sum;
}