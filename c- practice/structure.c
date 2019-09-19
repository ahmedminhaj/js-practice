#include <stdio.h>

struct Point{
	int x, y, z;
};

int main(){
	struct Point ary[10];
	struct Point p1 = {0, 1};
	struct Point *ptr = &p1;
	struct Point p2 = {.z = 9, .y = 8, .x = 7};
	
	p1.z = 10;
	ary[1].x = 5;
	ary[1].z = 555;
	ary[0].y = 44;
	ary[5].z = 999;
	
	printf("x = %d, y = %d, z = %d\n", p1.x, p1.y, p1.z);
	printf("x = %d, y = %d, z = %d\n", ptr->x, ptr->y, ptr->z);
	printf("x = %d, y = %d, z = %d\n", p2.x, p2.y, p2.z);
	printf("x = %d, y = %d, z = %d\n", ary[1].x, ary[1].y, ary[1].z);
	printf("x = %d, y = %d, z = %d\n", ary[5].x, ary[5].y, ary[5].z);
	printf("x = %d, y = %d, z = %d\n", ary[0].x, ary[0].y, ary[0].z);
	
	return 0;
}