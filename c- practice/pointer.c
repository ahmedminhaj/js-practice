#include <stdio.h>

void swap(int a, int b);
void swapByAddress(int *m, int *n);
void circleArea(int r, float *a);
void circlePerimeter(int r, float *p);

int main(){
	int var = 20, x = 13;
	int *ip;
	int *ptn = NULL;
	ip = &x;
	//var = 31;
	//ip = &x;
	*ip = 31;
	
	printf("Address of x :: %x\n", &x);
	printf("Address stored in ip variable:: %x\n", ip);
	printf("value of *ptn variable:: %x\n", ptn);
	printf("value of x variable:: %d\n", x);
	printf("address of ip variable:: %x\n", *(&ip));
	
	int a = 100, b = 200;
	printf("before swap a: %d b: %d \n", a, b);
	swap(a, b);
	printf("before swap by address a: %d b: %d \n", a, b);
	swapByAddress(&a, &b);
	printf("after swap by address a: %d b: %d \n", a, b);
	
	int radius;
	float area, perimeter;
	
	printf("input radius: ");
	scanf("%d", &radius);
	circleArea(radius, &area);
	circlePerimeter(radius, &perimeter);
	printf("area of circle: %lf \n", area);
	printf("perimeter of circle: %lf \n", perimeter);
	return 0;
}

void swap(int a, int b){
	int t;
	t = a;
	a = b;
	b = t;
	printf("after swap a: %d b: %d \n", a, b);
}

void swapByAddress(int *m, int *n){
	int t = *m;
	*m = *n;
	*n = t;
}

void circleArea(int r, float *a){
	*a = 2 * 3.14 * r * r;	
}

void circlePerimeter(int r, float *p){
	*p = 2 * 3.14 * r;
}