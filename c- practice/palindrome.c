#include <stdio.h>
#include <stdbool.h>

int isPalindrome(int num);
void checkPalindrome(int h, int l);
int hightestNum(int n);
int lowestNum(int n);

void main(){
	int n;
	printf("enter number of digit:");
	scanf("%d", &n);
	int h = hightestNum(n);
	int l = lowestNum(n);
	printf("hightest %d digit number is %d \n", n, h);
	printf("lowest %d digit number is %d \n", n,  l);
	checkPalindrome(h, l);
}

int hightestNum(int n){
	int num = 0;
	for(int i = 0; i < n; i++){
		num = num * 10 + 9;
	}
	return num;
}

int lowestNum(int n){
	int num = 0;
	for(int i = 0; i < n-1; i++){
		num = num * 10 + 9;
	}
	return num+1;
}

void checkPalindrome(int h, int l){
	bool find;
	int max = 0, maxP = 0; 
	for(int i = h; i > l; i--){
		for(int j = i; j > l; j--){
			int r;
			r = i * j;
			maxP = isPalindrome(r);
			if(maxP > max){
				max = maxP;
				printf("\n%d is max palindrome of %d*%d", maxP, j, i);
			}
		}
	}
}

int isPalindrome(int num){
	int numR = 0, r = num;
	while(r != 0){
		int remainder = r % 10;
		numR = numR * 10 + remainder;
		r = r / 10;
	}
	if(num == numR){
		return num;
	}else{
		return 0;
	}
}