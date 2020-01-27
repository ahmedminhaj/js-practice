#include <stdio.h>

float factorial(int n);
void fibonacciTo(int n);
void fibonacciSeries(int n);

void main(){
	int num;
	float result;
	
	printf("input a number: ");
	scanf("%d", &num);
	result = factorial(num);
	
	printf("factorial of %d is %f \n", num, result);
	printf("fibonacci sequance to %d :", num);
	fibonacciTo(num);
	printf("\nfibonacci series of %d :", num);
	fibonacciSeries(num);
}

float factorial(int n){
	
	if(n == 1){
		return 1;
	}
	else{
		return (n * factorial(n-1));
	}
	
}

void fibonacciTo(int n){
	int num1 = 1, num2 = 0, sum = 0;
	
	do{
		printf(" %d ", num2);
		sum = num1 + num2;
		num1 = num2;
		num2 = sum;
	}while(sum <= n);
	
}

void fibonacciSeries(int n){
	int i, num1 = 1, num2 = 2, sum;
	
	for(i = 0; i < n; ++i){
		printf(" %d ", num1);
		sum = num1 + num2;
		num1 = num2;
		num2 = sum;
	}
}


