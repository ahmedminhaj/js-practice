#include <stdio.h>

void getMatrix(int m[3][3]);
void multiplyMatrix(int m[3][3], int n[3][3]);
void showMatrix(int m[3][3]);

void main(){
	int matrix1[3][3], matrix2[3][3];
	getMatrix(matrix1);
	showMatrix(matrix1);
	
	getMatrix(matrix2);
	showMatrix(matrix2);
	
	multiplyMatrix(matrix1, matrix2);
}

void getMatrix(int m[3][3]){
	for(int i = 0; i < 3; i++){
		for(int j = 0; j < 3; j++){
			printf("Enter input [%d][%d]:", i, j);
			scanf("%d", &m[i][j]);
		}
	}
}

void multiplyMatrix(int m[3][3], int n[3][3]){
	
	int new[3][3], sum = 0;
	for(int i = 0; i < 3; i++){
		for(int k = 0; k < 3; k++){
			for(int j = 0; j < 3; j++){	
				sum = sum + m[i][j] * n[j][k];	
				new[i][k] = sum;
			}	
			sum = 0;
		}
		sum = 0;
	}
	printf("Matrix after Multiply: \n");
	showMatrix(new);
}

void showMatrix(int m[3][3]){
	
	for(int i = 0; i < 3; i++){
		for(int j = 0; j < 3; j++){
			printf(" %d ", m[i][j]);
		}
		printf("\n");
	}
}