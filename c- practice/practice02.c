#include <stdio.h>

main(){
    int c;
    long nc;
    nc = 0;
    printf("Enter some Character:\n");
    c = getchar();
    while(c != EOF){
        //putchar(c);
        nc++;
        printf("%ld\n", nc);
        c = getchar();
    }

}
