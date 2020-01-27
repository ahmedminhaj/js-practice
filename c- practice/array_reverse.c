#include <stdio.h>
#include <stdlib.h>

int main()
{
    int num, i, d;
    scanf("%d", &num);
	int arr[num];
    //arr = (int*) malloc(num * sizeof(int));
    for(i = 0; i < num; i++) {
        scanf("%d", &arr[i]);
    }
	
	int arr2[num];
	for(i = num-1, d = 0; i >= 0; i--, d++){
		arr2[d] = arr[i];
	}
	
	for(i = 0; i < num; i++){
		arr[i] = arr2[i];
	}

    for(i = 0; i < num; i++)
        printf("%d ", *(arr + i));
    return 0;
}

