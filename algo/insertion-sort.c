#include <stdio.h>

void insertionSort(int ary[], int len){
	int i, j, key;
	for(i = 1; i < len; i++){
		key = ary[i];
		j = i - 1;
		while(j >= 0 && ary[j] > key){
			ary[j + 1] = ary[j];
			j = j - 1;
		}
		ary[j + 1] = key;
	}
}

void printAry(int a[], int l){
	int i;
	for(i = 0; i < l; i++)
		printf("%d ", a[i]);
	printf("\n");
}

int main(){
	int array[] = {21, 12, 4, 7, 9, 11, 3, 1};
	int length = sizeof(array) / sizeof(array[0]);
	insertionSort(array, length);
	printAry(array, length);
	return 0;
}