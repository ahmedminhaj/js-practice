#include <stdio.h>

#define low 0
#define high 100
#define greet "hello"

int count(){
	static int c = 0;
	c++;
	return c;
}

int main(){
	int frn;
	const int step = 10;
	for(frn = low; frn <= high; frn = frn + step){
		printf("Frn: %d, clc: %.2f\n", frn, ((5.0/9.0)*(frn-32)));
	}
	
	printf("\n%s, %d\n\n", greet, low);
	printf("%d\n", count());
	printf("%d\n", count());
	printf("%d\n", count());
}