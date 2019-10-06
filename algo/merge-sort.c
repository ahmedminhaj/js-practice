#include<stdio.h> 

void merge(int arr[], int l, int m, int r){ 
    int i, j, k; 
    int n1 = m - l + 1; 
    int n2 =  r - m; 
	int left[n1], right[n2]; 

    for (i = 0; i < n1; i++) 
        left[i] = arr[l + i]; 
    for (j = 0; j < n2; j++) 
        right[j] = arr[m + 1+ j]; 

    i = 0; 
    j = 0; 
    k = l; 
    while (i < n1 && j < n2){ 
        if (left[i] <= right[j]){ 
            arr[k] = left[i]; 
            i++; 
        }else{ 
            arr[k] = right[j]; 
            j++; 
        } 
        k++; 
    } 
	while (i < n1){ 
        arr[k] = left[i]; 
        i++; 
        k++; 
    } 
	while (j < n2){ 
        arr[k] = right[j]; 
        j++; 
        k++; 
    } 
} 

void mergeSort(int arr[], int l, int r){ 
    if (l < r){  
        int m = (l+r)/2; 
        mergeSort(arr, l, m); 
        mergeSort(arr, m+1, r); 
        merge(arr, l, m, r); 
    } 
} 

void printAry(int a[], int l){
	int i;
	for(i = 0; i < l; i++)
		printf("%d ", a[i]);
	printf("\n");
} 

int main(){ 
    int arr[] = {12, 11, 13, 5, 6, 7, 1, 10, 9}; 
    int size = sizeof(arr)/sizeof(arr[0]); 
  
    mergeSort(arr, 0, size - 1); 
    printAry(arr, size); 
    return 0; 
}