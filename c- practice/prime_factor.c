#include <stdio.h>

void primeFactor(int n );

void main(){
	int number;
	printf("input a number: ");
	scanf(" %d", &number);
	
	primeFactor(number);
}

void primeFactor(int n){
	int p , r;
	
	for(p = 2; p <= n; p++){
		
		if( n%p == 0){
			
			n = n/p;
			printf("%d ", p);
			primeFactor(n);
			break;
			
		}
	}	
}