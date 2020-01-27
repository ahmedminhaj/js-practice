#include <stdio.h>

void main(){
	for(int i = 11; i <10000; i++){
		int j = 1;
		if(i%j == 0){
			j++;
		}while(j <= 10);
		printf("%d divisiable by 1 to 10", i);
	}
}