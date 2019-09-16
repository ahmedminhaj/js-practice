#include <stdio.h>

double getAverage(int ary[], int size);

int main(){
	int n[10];
	int x,y,v,w;
	for(x = 0; x < 10; x++){
		n[x] = x + 210;
	}
	for(y = 0; y < 10; y++){
		printf("array element[%d] = %d\n", y, n[y]);
	}
	
	int a[5][3] = {3,2,1,6,5,4,9,8,7,12,11,10,15,14,13};
	for(v = 0; v < 5; v++){
		for(w = 0; w < 3; w++){
			printf("a[%d][%d]:: %d\n", v, w, a[v][w]);
		}
	}
	
	int arr[] = {21, 32, 43, 54};
	for(int i = 0; i < 4; i++){
		printf("array value arr[%d] is %d \n", i, arr[i]);
	}
	
	double avg;
	avg = getAverage(arr, 4);
	printf("Average of array:: %4.2f ", avg);
	
	return 0;
}

double getAverage(int arr[], int size){
	int t;
	double avg;
	double sum = 0;
	for(t = 0; t < size; t++){
		sum += arr[t];
	}
	avg = sum/size;
	return avg;
}