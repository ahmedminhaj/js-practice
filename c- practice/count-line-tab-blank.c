#include <stdio.h>

int main(){
	int c, nl, nt, b;
	nl = nt = b = 0;
	while ((c = getchar()) != EOF){
		if (c == '\n'){
			++nl;
		}else if (c == '\t'){
			++nt;
		}else if (c == ' '){
			++b;
		}
	}
	printf("total number of new line:: %d, new tab:: %d, blank:: %d\n", nl, nt, b);
}