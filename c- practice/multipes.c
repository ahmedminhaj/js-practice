#include <stdio.h>
int multiples(int n, int m);

void main(){
	int num = 1000, sum = 0;
	int m1 = 3, m2 = 5;
	sum = sum + multiples(num, m1);
	sum = sum + multiples(num, m2);
	printf("Sum: %d", sum);
	
}

int multiples(int n, int m){
	int s = 0;
	for(int i = n-1; i > 0; i--){
		if( i%m == 0){
			printf("Multiples of %d: %d \n", m, i);
			s = s + i;
		}
	}
	return s;
}