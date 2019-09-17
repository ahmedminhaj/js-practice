//problem02
#include <stdio.h>

int main(){
    int i, m, n, space, num;
    printf("Enter number : ");
    scanf("%d",&num);
    for(i=1; i<=num; ++i){
        for(space=1; space <= num-i; ++space){
            printf("  ");
        }
		for(m = 1; m <= i; m++){
			printf("%d ", m);
		}
		for(n = i-1; n >= 1; n--){
			printf("%d ", n);	
		}
        printf("\n");
    }
    return 0;
}